"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { reservationLink } from "@/data/restaurant";

const SHOW_AFTER = 480;

/** Sticky reservation CTA for small screens, shown once the visitor scrolls past the hero. */
export function MobileReservationBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (pathname === reservationLink.href) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-ink/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-card sm:px-6 lg:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            href={reservationLink.href}
            size="lg"
            icon={<CalendarDays />}
            trailingIcon={<ArrowRight />}
            className="w-full"
          >
            {reservationLink.label}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
