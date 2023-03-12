import type { AgendaItem } from "./types";

export const day1: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome to JSHeroes!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", speakers: ["zach-leatherman"], timeSlot: "09:30 - 10:00" },
  { type: "talk", speakers: ["trine-falbe"], timeSlot: "10:00 - 10:30" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["debbie-obrien"], timeSlot: "11:00 - 11:30" },
  { type: "talk", speakers: ["tierney-cyren"], timeSlot: "11:30 - 12:00" },
  { type: "talk", speakers: ["matan-kushner"], timeSlot: "12:00 - 12:30" },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["alena-nikolaeva"], timeSlot: "14:00 - 14:30" },
  { type: "talk", speakers: ["gil-tayar"], timeSlot: "14:30 - 15:00" },
  { type: "talk", speakers: ["charlie-gerard"], timeSlot: "15:00 - 15:30" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:30 - 16:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["carmen-popoviciu"] },
  { type: "talk", timeSlot: "16:30 - 17:00", speakers: ["jani-evakallio"] },
];

export const day2: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome back!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", timeSlot: "09:30 - 10:00", speakers: ["simona-cotin"] },
  { type: "talk", timeSlot: "10:00 - 10:30", speakers: ["david-khourshid"] },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "11:00 - 11:30", speakers: ["emmy-cao"] },
  { type: "talk", timeSlot: "11:30 - 12:00", speakers: ["jeff-lembeck"] },
  {
    type: "talk",
    timeSlot: "12:00 - 12:30",
    speakers: ["kateryna-porshnieva"],
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "14:00 - 14:30", speakers: ["liran-tal"] },
  { type: "talk", timeSlot: "14:30 - 15:00", speakers: ["maarten-vanhoof"] },
  { type: "talk", timeSlot: "15:00 - 15:30", speakers: ["matthias-lebrun"] },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:30 - 16:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["nicolo-ribaudo"] },
  { type: "talk", timeSlot: "16:30 - 17:00", speakers: [] },
];
