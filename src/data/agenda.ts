import type { AgendaItem } from "./types";

export const day1: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome to JSHeroes!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", speakers: ["simona-cotin"], timeSlot: "09:30 - 10:00" },
  {
    type: "talk",
    speakers: ["siddharth-kshetrapal"],
    timeSlot: "10:00 - 10:30",
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["nicolo-ribaudo"], timeSlot: "11:00 - 11:30" },
  { type: "talk", speakers: ["zach-leatherman"], timeSlot: "11:30 - 12:00" },
  { type: "talk", speakers: ["maarten-vanhoof"], timeSlot: "12:00 - 12:30" },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["jeff-lembeck"], timeSlot: "14:00 - 14:30" },
  { type: "talk", speakers: ["andrei-pfeiffer"], timeSlot: "14:30 - 15:00" },
  { type: "talk", speakers: ["alena-nikolaeva"], timeSlot: "15:00 - 15:30" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:30 - 16:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["emmy-cao"] },
  { type: "talk", timeSlot: "16:30 - 17:00", speakers: ["jani-evakallio"] },
];

export const day2: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome back!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", timeSlot: "09:30 - 10:00", speakers: ["debbie-obrien"] },
  {
    type: "talk",
    timeSlot: "10:00 - 10:30",
    speakers: ["kateryna-porshnieva"],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "11:00 - 11:30", speakers: ["david-khourshid"] },
  { type: "talk", timeSlot: "11:30 - 12:00", speakers: ["matthias-lebrun"] },
  {
    type: "talk",
    timeSlot: "12:00 - 12:30",
    speakers: ["matan-kushner"],
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "14:00 - 14:30", speakers: ["liran-tal"] },
  { type: "talk", timeSlot: "14:30 - 15:00", speakers: ["tierney-cyren"] },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:00 - 15:30",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "15:30 - 16:00", speakers: ["charlie-gerard"] },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["gil-tayar"] },
];
