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
    timeSlot: "09:10 - 09:30",
    imgName: "event/intro.jpg",
  },
  { type: "talk", speakers: ["andrei-pfeiffer"], timeSlot: "09:30 - 10:00" },
  {
    type: "talk",
    speakers: ["sandrina-pereira"],
    timeSlot: "10:00 - 10:30",
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:15",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", speakers: ["filip-sodic"], timeSlot: "11:15 - 11:45" },
  { type: "talk", speakers: ["ivan-akulov"], timeSlot: "11:45 - 12:15" },
  {
    type: "talk",
    speakers: ["atila-fassina"],
    timeSlot: "12:15 - 12:45",
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:45 - 14:00",
    imgName: "event/coffee.jpg",
  },
  {
    type: "talk",
    speakers: ["emilia-muresan"],
    timeSlot: "14:00 - 14:30",
  },
  { type: "talk", speakers: ["sophie-koonin"], timeSlot: "14:30 - 15:00" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "15:00 - 15:45",
    imgName: "event/coffee.jpg",
  },
  {
    type: "talk",
    timeSlot: "15:45 - 16:15",
    speakers: ["nicolas-carlo"],
  },
  {
    type: "talk",
    timeSlot: "16:15 - 16:45",
    speakers: ["chelsea-troy"],
  },
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
    timeSlot: "10:30 - 11:15",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "11:15 - 11:45", speakers: ["hidde-de-vries"] },
  { type: "talk", timeSlot: "11:45 - 12:15", speakers: ["miriam-suzanne"] },
  {
    type: "talk",
    timeSlot: "12:15 - 12:45",
    speakers: ["bramus-van-damme"],
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:45 - 14:00",
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
  { type: "talk", timeSlot: "15:30 - 16:30", speakers: ["shai-reznik"] },
];
