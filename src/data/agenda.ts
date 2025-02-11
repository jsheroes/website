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
  { type: "talk", speakers: ["andrei-pfeiffer"], timeSlot: "09:30 - 10:00" },
  {
    type: "talk",
    speakers: ["chelsea-troy"],
    timeSlot: "10:00 - 10:30",
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["emilia-muresan"], timeSlot: "11:00 - 11:30" },
  { type: "talk", speakers: ["sophie-koonin"], timeSlot: "11:30 - 12:00" },
  { type: "talk", speakers: ["nicolas-carlo"], timeSlot: "12:00 - 12:30" },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["atila-fassina"], timeSlot: "14:00 - 14:30" },
  { type: "talk", speakers: ["ivan-akulov"], timeSlot: "14:30 - 15:00" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:00 - 15:45",
    imgName: "event/coffee.jpg",
  },
  {
    type: "talk",
    timeSlot: "15:45 - 16:15",
    speakers: ["emmy-cao", "sandrina-pereira"],
  },
  { type: "talk", timeSlot: "16:15 - 16:45", speakers: ["filip-sodic"] },
];

export const day2: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome back!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", timeSlot: "09:30 - 10:00", speakers: ["dan-shappir"] },
  {
    type: "talk",
    timeSlot: "10:00 - 10:30",
    speakers: ["jean-burellier"],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "11:00 - 11:30", speakers: ["hidde-de-vries"] },
  { type: "talk", timeSlot: "11:30 - 12:00", speakers: ["miriam-suzanne"] },
  {
    type: "talk",
    timeSlot: "12:00 - 12:30",
    speakers: ["bramus-van-damme"],
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:30 - 14:00",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "14:00 - 14:30", speakers: ["josh-goldberg"] },
  { type: "talk", timeSlot: "14:30 - 15:00", speakers: ["jessica-janiuk"] },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:00 - 15:30",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "15:30 - 16:00", speakers: ["shai-reznik"] },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["TBA"] },
];
