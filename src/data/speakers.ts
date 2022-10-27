import type { Speaker } from "./types";

export const speakers: Record<string, Speaker> = {
  carolyn: {
    name: "Carolyn Stransky",
    title: "Software Developer",
    company: "BRYTER",
    imgName: "speakers/carolyn-stransky.jpeg",
    bio: [
      "Carolyn (she/her) is a software engineer and former technical writer based in Berlin, Germany. She’s currently working as a frontend engineer at BRYTER, a no-code decision automation platform.",
      "Out of office, Carolyn is a freelance journalist and writes about the intersections of technology and intimacy for outlets like Future of Sex, Autostraddle, Silicon Allee and elsewhere. You can find her most places on the Internet @carolstran.",
    ],
    talk: {
      title: "Humanizing Your Documentation",
    },
  },
  stefan: {
    name: "Stefan Judis",
    title: "Devrel",
    company: "Checkly",
    imgName: "speakers/stefan-judis.jpg",
    talk: {
      title: "Back to boring",
    },
  },
};
