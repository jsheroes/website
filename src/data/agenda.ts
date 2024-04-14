import type { AgendaItem } from "./types";

// export const day1: AgendaItem[] = [];
// export const day2: AgendaItem[] = [];

export const day1: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Registration",
    timeSlot: "08:00 - 09:00",
    imgName: "event/registration.jpg",
  },
  {
    type: "placeholder",
    content: "Welcome to JSHeroes!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/intro.jpg",
  },
  { type: "talk", speakers: ["tejas-kumar"], timeSlot: "09:30 - 10:00" },
  {
    type: "talk",
    speakers: ["eva-ferreira"],
    timeSlot: "10:00 - 10:30",
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["rodrigo-pombo"], timeSlot: "11:00 - 11:30" },
  { type: "talk", speakers: ["rose-akoth"], timeSlot: "11:30 - 12:00" },
  { type: "talk", speakers: ["bramus-van-damme"], timeSlot: "12:00 - 12:30" },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["josh-goldberg"], timeSlot: "14:00 - 14:30" },
  { type: "talk", speakers: ["filip-hric"], timeSlot: "14:30 - 15:00" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:00 - 15:30",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "15:30 - 16:00", speakers: ["emmy-cao", "jenny-truong"] },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["theodore-vorillaz"] },
];

export const day2: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome back!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", timeSlot: "09:30 - 10:00", speakers: ["atila-fassina"] },
  {
    type: "talk",
    timeSlot: "10:00 - 10:30",
    speakers: ["benjamin-swerdlow"],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "11:00 - 11:30", speakers: ["aleksandra-sikora"] },
  { type: "talk", timeSlot: "11:30 - 12:00", speakers: ["nicolo-ribaudo"] },
  {
    type: "talk",
    timeSlot: "12:00 - 12:30",
    speakers: ["ramon-huidobro"],
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "14:00 - 14:30", speakers: ["matan-kushner"] },
  { type: "talk", timeSlot: "14:30 - 15:00", speakers: ["artem-zakharchenko"] },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:00 - 15:30",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "15:30 - 16:00", speakers: ["charlie-gerard"] },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["tero-parviainen"] },
];
