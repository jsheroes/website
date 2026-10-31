import type { AgendaItem } from "./types";

export const day1: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Registration",
    timeSlot: "08:00 - 09:15",
  },
  {
    type: "placeholder",
    content: "Welcome to JSHeroes!",
    timeSlot: "09:15 - 09:30",
  },
  { type: "talk", speakers: [], timeSlot: "09:30 - 10:00" },
  {
    type: "talk",
    speakers: [],
    timeSlot: "10:00 - 10:30",
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:15",
  },
  {
    type: "placeholder",
    content: "Agentic workflows",
    stage: "alternative",
    description: "Alternative stage panel",
    timeSlot: "10:45 - 11:15",
  },
  { type: "talk", speakers: [], timeSlot: "11:15 - 11:45" },
  {
    type: "talk",
    speakers: [],
    timeSlot: "11:45 - 12:15",
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:15 - 13:45",
  },
  {
    type: "talk",
    speakers: [],
    timeSlot: "13:45 - 14:15",
  },
  { type: "talk", speakers: [], timeSlot: "14:15 - 14:45" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "14:45 - 15:30",
  },
  {
    type: "placeholder",
    content: "Building resilience",
    stage: "alternative",
    description: "Alternative stage panel",
    timeSlot: "15:00 - 15:30",
  },
  {
    type: "talk",
    timeSlot: "15:30 - 16:00",
    speakers: [],
  },
  {
    type: "talk",
    timeSlot: "16:00 - 16:30",
    speakers: [],
  },
];

export const day2: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome back!",
    timeSlot: "09:00 - 09:30",
  },
  { type: "talk", timeSlot: "09:30 - 10:00", speakers: [] },
  {
    type: "talk",
    timeSlot: "10:00 - 10:30",
    speakers: [],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:15",
  },
  {
    type: "placeholder",
    content: "Transforming communities",
    stage: "alternative",
    description: "Alternative stage panel",
    timeSlot: "11:15 - 11:45",
  },
  { type: "talk", timeSlot: "11:15 - 11:45", speakers: [] },
  { type: "talk", timeSlot: "11:45 - 12:15", speakers: [] },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:15 - 13:45",
  },
  { type: "talk", timeSlot: "13:45 - 14:15", speakers: [] },
  {
    type: "talk",
    timeSlot: "14:15 - 14:45",
    speakers: [],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "14:45 - 15:30",
  },
  {
    type: "placeholder",
    content: "Rethinking the job market",
    stage: "alternative",
    description: "Alternative stage panel",
    timeSlot: "15:00 - 15:30",
  },
  {
    type: "talk",
    timeSlot: "15:30 - 16:00",
    speakers: [],
  },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: [] },
  {
    type: "placeholder",
    timeSlot: "16:30 - 17:00",
    content: "Closing remarks",
    description: "JSQuiz, group photo and many more surprises",
  },
];
