"use client";

import { Toaster as SonnerToaster } from "sonner";

/** Brand-styled toast container (Sonner). */
export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      theme="dark"
      closeButton
      offset={{ top: "5.5rem" }}
      mobileOffset={{ top: "5rem" }}
      toastOptions={{
        classNames: {
          toast: "!bg-espresso !border !border-gold/30 !text-white !shadow-card !font-sans",
          title: "!text-white !font-semibold",
          description: "!text-muted",
          closeButton: "!bg-espresso !border-gold/30 !text-gold",
        },
      }}
    />
  );
}
