import type { AgendaItem } from "./types";

export const agenda: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome to JSHeroes!",
    timeSlot: "09:00 - 09:30",
  },
  { type: "talk", speakers: ["carolyn"], timeSlot: "09:30 - 10:00" },
  { type: "talk", speakers: ["anjana"], timeSlot: "10:00 - 10:30" },
  { type: "placeholder", content: "Coffee Break", timeSlot: "10:30 - 11:00" },
  { type: "talk", speakers: ["stefan"], timeSlot: "11:00 - 11:30" },
  { type: "talk", speakers: ["sara"], timeSlot: "11:30 - 12:00" },
  { type: "talk", speakers: ["carolyn"], timeSlot: "12:00 - 12:30" },
  { type: "placeholder", content: "Lunch Break", timeSlot: "12:30 - 14:00" },
];
