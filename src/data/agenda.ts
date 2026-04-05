import type { AgendaItem } from "./types";

export const day1: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Registration",
    timeSlot: "08:00 - 09:15",
    imgName: "event/registration.jpg",
  },
  {
    type: "placeholder",
    content: "Welcome to JSHeroes!",
    timeSlot: "09:15 - 09:30",
    imgName: "event/intro.jpg",
  },
  { type: "talk", speakers: ["phil-hawksworth"], timeSlot: "09:30 - 10:00" },
  {
    type: "talk",
    speakers: ["misha-korolev"],
    timeSlot: "10:00 - 10:30",
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:15",
    imgName: "event/coffee.jpg",
  },
  {
    type: "placeholder",
    content: "Agentic workflows",
    description: "Alternative stage panel",
    timeSlot: "10:45 - 11:15",
    imgName: "event/intro.jpg",
  },
  { type: "talk", speakers: ["daniel-roe"], timeSlot: "11:15 - 11:45" },
  {
    type: "talk",
    speakers: ["dominik-dorfmeister"],
    timeSlot: "11:45 - 12:15",
  },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:15 - 13:45",
    imgName: "event/coffee.jpg",
  },
  {
    type: "talk",
    speakers: ["craig-abbott"],
    timeSlot: "13:45 - 14:15",
  },
  { type: "talk", speakers: ["cassondra-roberts"], timeSlot: "14:15 - 14:45" },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "14:45 - 15:30",
    imgName: "event/coffee.jpg",
  },
  {
    type: "placeholder",
    content: "Building resilience",
    description: "Alternative stage panel",
    timeSlot: "15:00 - 15:30",
    imgName: "event/intro.jpg",
  },
  {
    type: "talk",
    timeSlot: "15:30 - 16:00",
    speakers: ["cyd-stumpel"],
  },
  {
    type: "talk",
    timeSlot: "16:00 - 16:30",
    speakers: ["andrei-pfeiffer"],
  },
];

export const day2: AgendaItem[] = [
  {
    type: "placeholder",
    content: "Welcome back!",
    timeSlot: "09:00 - 09:30",
    imgName: "event/registration.jpg",
  },
  { type: "talk", timeSlot: "09:30 - 10:00", speakers: ["faris-aziz"] },
  {
    type: "talk",
    timeSlot: "10:00 - 10:30",
    speakers: ["ryan-townsend"],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "10:30 - 11:15",
    imgName: "event/coffee.jpg",
  },
  {
    type: "placeholder",
    content: "Transforming communities",
    description: "Alternative stage panel",
    timeSlot: "11:15 - 11:45",
    imgName: "event/intro.jpg",
  },
  { type: "talk", timeSlot: "11:15 - 11:45", speakers: ["richard-gross"] },
  { type: "talk", timeSlot: "11:45 - 12:15", speakers: ["bogdan-zaharia"] },
  {
    type: "placeholder",
    content: "Lunch Break",
    timeSlot: "12:15 - 13:45",
    imgName: "event/coffee.jpg",
  },
  { type: "talk", timeSlot: "13:45 - 14:15", speakers: ["anjana-vakil"] },
  {
    type: "talk",
    timeSlot: "14:15 - 14:45",
    speakers: ["siddharth-dayalwal"],
  },
  {
    type: "placeholder",
    content: "Coffee Break",
    timeSlot: "14:45 - 15:30",
    imgName: "event/coffee.jpg",
  },
  {
    type: "placeholder",
    content: "Rethinking the job market",
    description: "Alternative stage panel",
    timeSlot: "15:00 - 15:30",
    imgName: "event/intro.jpg",
  },
  { type: "talk", timeSlot: "15:30 - 16:00", speakers: ["zbyszek-tenerowicz"] },
  { type: "talk", timeSlot: "16:00 - 16:30", speakers: ["suz-hinton"] },
];
