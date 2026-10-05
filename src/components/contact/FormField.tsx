import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  isOptional?: boolean;
  children: ReactNode;
}

export function fieldErrorId(id: string): string {
  return `${id}-error`;
}

/** Label + control + accessible error message wiring. */
export function FormField({ id, label, error, isOptional = false, children }: FormFieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-semibold text-ink">
        {label}
        {isOptional ? <span className="text-xs font-normal text-ink-3">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p id={fieldErrorId(id)} className="mt-2 flex items-center gap-1.5 text-sm text-orange-ink">
          <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
