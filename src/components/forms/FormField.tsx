import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared input styling for light (white/cream) form surfaces. */
export const inputClasses =
  "block w-full min-h-12 rounded-xl border border-sand bg-white px-4 py-3 text-base text-ink placeholder:text-cocoa/60 " +
  "transition-[border-color,box-shadow] duration-200 outline-none " +
  "hover:border-bronze/50 focus:border-bronze focus:ring-3 focus:ring-gold/30 " +
  "aria-invalid:border-red-700 aria-invalid:focus:ring-red-700/20 disabled:opacity-60";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  /** Error message; when set, the input should get aria-invalid and aria-describedby={`${id}-error`}. */
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

/** Label + control + hint/error, wired for screen readers. */
export function FormField({ id, label, required, error, hint, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-0.5 text-bronze">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-cocoa">(facultatif)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-cocoa">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="flex items-start gap-1.5 text-sm text-red-800">
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

/** aria props for a control rendered inside <FormField>. */
export function fieldAria(id: string, error?: string, hint?: string) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : hint ? `${id}-hint` : undefined,
  } as const;
}
