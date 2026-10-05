import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { buildMailtoHref, enquirySchema, submitEnquiry, type EnquiryInput } from "@/lib/enquiry";
import { siteConfig } from "@/lib/site";

const validInput: EnquiryInput = {
  name: "Asha Kumar",
  email: "asha@example.com",
  phone: "+91 98450 00000",
  service: "ssd-upgrade",
  message: "My laptop takes several minutes to boot and I'd like an SSD upgrade.",
  botField: "",
};

function firstErrorFor(input: Partial<EnquiryInput>, field: keyof EnquiryInput): string | undefined {
  const result = enquirySchema.safeParse({ ...validInput, ...input });
  if (result.success) return undefined;
  return result.error.issues.find((issue) => issue.path[0] === field)?.message;
}

describe("enquirySchema", () => {
  it("accepts a complete, valid enquiry", () => {
    expect(enquirySchema.safeParse(validInput).success).toBe(true);
  });

  it("trims surrounding whitespace", () => {
    const result = enquirySchema.safeParse({ ...validInput, name: "  Asha  ", email: " asha@example.com " });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Asha");
      expect(result.data.email).toBe("asha@example.com");
    }
  });

  it("requires a name of at least two characters", () => {
    expect(firstErrorFor({ name: " A " }, "name")).toBe("Please enter your name.");
  });

  it("rejects an invalid email address", () => {
    expect(firstErrorFor({ email: "asha@" }, "email")).toBe("Please enter a valid email address.");
  });

  it("treats phone as optional but validates it when present", () => {
    expect(firstErrorFor({ phone: "" }, "phone")).toBeUndefined();
    expect(firstErrorFor({ phone: "call me" }, "phone")).toBe("Please enter a valid phone number.");
  });

  it("requires a service to be chosen", () => {
    expect(firstErrorFor({ service: "" }, "service")).toBe("Please choose the service you need.");
  });

  it("requires a message with enough detail", () => {
    expect(firstErrorFor({ message: "Too short" }, "message")).toBe(
      "Please add a little more detail (at least 20 characters).",
    );
  });

  it("does not surface a validation error for the hidden honeypot field", () => {
    // A visible error would be meaningless to people; bots are dropped in submitEnquiry instead.
    expect(enquirySchema.safeParse({ ...validInput, botField: "https://spam.example" }).success).toBe(true);
  });
});

describe("buildMailtoHref", () => {
  it("addresses the company inbox with a subject and full body", () => {
    const href = buildMailtoHref(validInput, "SSD Upgrade");
    const url = new URL(href);
    expect(url.protocol).toBe("mailto:");
    expect(url.pathname).toBe(siteConfig.contact.email);
    expect(url.searchParams.get("subject")).toBe("Enquiry: SSD Upgrade");
    const body = url.searchParams.get("body") ?? "";
    expect(body).toContain("Name: Asha Kumar");
    expect(body).toContain("Phone: +91 98450 00000");
    expect(body).toContain(validInput.message);
  });

  it("omits the phone line when no phone was given", () => {
    const body = new URL(buildMailtoHref({ ...validInput, phone: "" }, "SSD Upgrade")).searchParams.get(
      "body",
    );
    expect(body).not.toContain("Phone:");
  });
});

describe("submitEnquiry", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it("silently drops a submission when the honeypot is filled", async () => {
    const result = await submitEnquiry({ ...validInput, botField: "https://spam.example" }, "SSD Upgrade");
    expect(result).toEqual({ status: "sent" });
  });

  it("falls back to a mailto link when no form endpoint is configured", async () => {
    const result = await submitEnquiry(validInput, "SSD Upgrade");
    expect(result.status).toBe("not-configured");
    if (result.status === "not-configured") {
      expect(result.mailtoHref.startsWith(`mailto:${siteConfig.contact.email}`)).toBe(true);
    }
  });

  describe("with a form endpoint", () => {
    const endpoint = "https://forms.example.com/submit";

    beforeEach(() => {
      vi.stubEnv("NEXT_PUBLIC_FORM_ENDPOINT", endpoint);
      vi.stubEnv("NEXT_PUBLIC_FORM_ACCESS_KEY", "test-key");
      vi.resetModules();
    });

    async function loadSubmit() {
      const enquiry = await import("@/lib/enquiry");
      return enquiry.submitEnquiry;
    }

    it("posts the enquiry as JSON and reports success", async () => {
      const fetchMock = vi.fn().mockResolvedValue({ ok: true });
      vi.stubGlobal("fetch", fetchMock);
      const submit = await loadSubmit();

      const result = await submit(validInput, "SSD Upgrade");

      expect(result).toEqual({ status: "sent" });
      expect(fetchMock).toHaveBeenCalledOnce();
      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toBe(endpoint);
      const payload = JSON.parse(init.body);
      expect(payload).toMatchObject({
        name: validInput.name,
        email: validInput.email,
        service: "SSD Upgrade",
        access_key: "test-key",
      });
      expect(payload).not.toHaveProperty("botField");
      expect(init.signal).toBeInstanceOf(AbortSignal);
    });

    it("never contacts the provider when the honeypot is filled", async () => {
      const fetchMock = vi.fn();
      vi.stubGlobal("fetch", fetchMock);
      const submit = await loadSubmit();

      const result = await submit({ ...validInput, botField: "bot" }, "SSD Upgrade");

      expect(result).toEqual({ status: "sent" });
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it("explains a timeout differently from a network failure", async () => {
      vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new DOMException("Timed out", "TimeoutError")));
      const submit = await loadSubmit();
      const result = await submit(validInput, "SSD Upgrade");
      expect(result.status).toBe("error");
      if (result.status === "error") expect(result.message).toMatch(/taking too long/);
    });

    it("reports an error when the provider rejects the request", async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
      const submit = await loadSubmit();
      expect((await submit(validInput, "SSD Upgrade")).status).toBe("error");
    });

    it("reports an error when the network request fails", async () => {
      vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("offline")));
      const submit = await loadSubmit();
      expect((await submit(validInput, "SSD Upgrade")).status).toBe("error");
    });
  });
});
