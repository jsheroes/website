import type { Speaker } from "./types";

export const speakers: Record<string, Speaker> = {
  carolyn: {
    name: "Carolyn Stransky",
    title: "Software Developer",
    company: "BRYTER",
    imgName: "speakers/carolyn-stransky.jpeg",
    talk: {
      title: "Humanizing Your Documentation",
    },
  },
  anjana: {
    name: "Anjana Vakil",
    title: "Software Engineer & Educator",
    company: "",
    imgName: "speakers/anjana-vakil.jpg",
    talk: {
      title: "The Art of Functional Programming",
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
  sara: {
    name: "Sara Vieira",
    title: "Developer",
    company: "Remote",
    imgName: "speakers/sara-vieira.png",
    talk: {
      title: "Opening your appetite for 3D in the web",
    },
  },
};
