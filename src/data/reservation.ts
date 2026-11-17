/*
 * Reservation settings.
 *
 * Service times are PLACEHOLDERS (the restaurant's real opening hours are not
 * known yet). Adjust `services` and the limits below once they are confirmed.
 */

export type Service = {
  id: "dejeuner" | "diner";
  label: string;
  /** Bookable arrival times, "HH:MM", in chronological order. */
  slots: string[];
};

export const reservationSettings = {
  /** True while the service times below are not confirmed by the restaurant. */
  placeholderHours: true,
  minGuests: 1,
  /** Above this, guests are invited to contact the restaurant (group booking). */
  maxGuests: 12,
  /** How far ahead a table can be requested. */
  maxDaysAhead: 365,
  maxRequestLength: 500,
};

export const services: Service[] = [
  { id: "dejeuner", label: "Déjeuner", slots: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"] },
  {
    id: "diner",
    label: "Dîner",
    slots: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
  },
];

export const allSlots = services.flatMap((service) => service.slots);
