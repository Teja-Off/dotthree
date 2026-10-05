"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, ChevronDown, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { FormField, fieldErrorId } from "@/components/contact/FormField";
import { Button } from "@/components/ui/button";
import { Input, fieldClassName } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  GENERAL_ENQUIRY,
  enquirySchema,
  submitEnquiry,
  type EnquiryInput,
  type EnquiryResult,
} from "@/lib/enquiry";
import { cn } from "@/lib/utils";

export interface ServiceOption {
  value: string;
  label: string;
}

interface ContactFormProps {
  serviceOptions: ServiceOption[];
  defaultService?: string;
}

const EMPTY_FORM: EnquiryInput = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  botField: "",
};

const statusPanelClassName =
  "flex flex-col items-start gap-5 border border-line bg-mist p-8 outline-none focus-visible:outline-2";

function StatusPanel({ result, onReset }: { result: EnquiryResult; onReset: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  // The form (and its focused submit button) is replaced by this panel, so move
  // focus here; screen readers then read the outcome.
  useEffect(() => {
    panelRef.current?.focus();
  }, [result.status]);

  if (result.status === "sent") {
    return (
      <div ref={panelRef} tabIndex={-1} role="status" className={statusPanelClassName}>
        <CircleCheck className="size-8 text-orange-ink" aria-hidden="true" />
        <h3 className="text-h3 font-bold text-ink">Thanks, your enquiry is on its way.</h3>
        <p className="text-ink-3">
          We usually reply within one working day. For anything urgent, please call us.
        </p>
        <Button variant="outline" size="sm" onClick={onReset}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  if (result.status === "not-configured") {
    return (
      <div ref={panelRef} tabIndex={-1} role="status" className={statusPanelClassName}>
        <Mail className="size-8 text-orange-ink" aria-hidden="true" />
        <h3 className="text-h3 font-bold text-ink">One more step.</h3>
        <p className="text-ink-3">
          Your enquiry is ready. Open it in your email app to send it to us, with all the details already
          filled in.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={result.mailtoHref}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-orange px-6 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Open email app
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <Button variant="outline" onClick={onReset}>
            Edit enquiry
          </Button>
        </div>
      </div>
    );
  }

  return null;
}

export function ContactForm({ serviceOptions, defaultService = "" }: ContactFormProps) {
  const [result, setResult] = useState<EnquiryResult | null>(null);
  const initialService = serviceOptions.some((option) => option.value === defaultService)
    ? defaultService
    : "";

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { ...EMPTY_FORM, service: initialService },
    mode: "onTouched",
  });

  const labelFor = (value: string) =>
    serviceOptions.find((option) => option.value === value)?.label ?? "General enquiry";

  const onSubmit = async (data: EnquiryInput) => {
    setResult(await submitEnquiry(data, labelFor(data.service)));
  };

  const handleReset = () => {
    const keepValues = result?.status === "not-configured";
    setResult(null);
    reset(keepValues ? getValues() : { ...EMPTY_FORM, service: initialService });
  };

  if (result && result.status !== "error") {
    return <StatusPanel result={result} onReset={handleReset} />;
  }

  const describedBy = (field: keyof EnquiryInput) => (errors[field] ? fieldErrorId(field) : undefined);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Enquiry form" className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <FormField id="name" label="Name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            {...register("name")}
          />
        </FormField>
        <FormField id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            {...register("email")}
          />
        </FormField>
        <FormField id="phone" label="Phone" isOptional error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            {...register("phone")}
          />
        </FormField>
        <FormField id="service" label="Service required" error={errors.service?.message}>
          <div className="relative">
            <select
              id="service"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={describedBy("service")}
              className={cn(fieldClassName, "h-12 cursor-pointer appearance-none pr-8")}
              {...register("service")}
            >
              <option value="" disabled>
                Choose a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value={GENERAL_ENQUIRY}>Not sure / general enquiry</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-ink-3"
              aria-hidden="true"
            />
          </div>
        </FormField>
      </div>

      <FormField id="message" label="Message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us what's happening, which device or system it involves, and when you need it sorted."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          {...register("message")}
        />
      </FormField>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="botField">Leave this field empty</label>
        <input id="botField" type="text" tabIndex={-1} autoComplete="off" {...register("botField")} />
      </div>

      {result?.status === "error" ? (
        <p role="alert" className="border-l-2 border-orange-ink bg-orange-soft px-4 py-3 text-sm text-ink">
          {result.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-sm text-ink-3">
          We&apos;ll only use your details to respond to this enquiry.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : null}
          {isSubmitting ? "Sending…" : "Send Enquiry"}
          {isSubmitting ? null : (
            <ArrowUpRight
              className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
              aria-hidden="true"
            />
          )}
        </Button>
      </div>
    </form>
  );
}
