type Benefit =
  | "logo"
  | "spotlight"
  | "rollup"
  | "giveaways"
  | "video"
  | "ticket_discount"
  | "tickets"
  | "experience";

type Package = {
  name: "Bronze" | "Silver" | "Gold" | "Supporter";
  price: number;
  color: string;
  description: string;
  benefits: Benefit[];
  highlightedBenefits: Benefit[];
  availability: number;
};

export const BENEFITS_INFO: Record<
  Benefit,
  { display: string; explanation?: string; link?: string }
> = {
  logo: {
    display: "Your logo on printed and digital materials",
    explanation: "Includes: website, post-event videos and attendee badges",
  },
  spotlight: {
    display: "Social media spotlights",
    explanation:
      "One post on all our channels about your company, with your preferred message and tone of voice. <br/> Another post with all the sponsors right before the event.",
  },
  rollup: {
    display: "Your roll-up in the main room",
  },
  giveaways: {
    display: "Bring branded giveaways for attendees",
    explanation:
      "You can bring promotional materials at the event. All giveaways will be displayed in a dedicated area in the hallway.",
  },
  video: { display: "Your company video running during the breaks" },
  ticket_discount: { display: "15% discount on all tickets" },
  tickets: { display: "5 event tickets" },
  experience: {
    display: "Company corner during one of the days",
    explanation:
      "You will have a dedicated area in the hallway where you can interact with the attendees during the breaks.",
  },
};

export const BRONZE_PACKAGE: Package = {
  name: "Bronze",
  price: 1500,
  color: "accent-pink",
  description: "Ideal for startups and small companies",
  benefits: ["rollup", "spotlight", "logo"],
  highlightedBenefits: [],
  availability: 5,
};

export const SUPPORTER_PACKAGE: Package = {
  name: "Supporter",
  price: 1500,
  color: "neutral-separator",
  description:
    "Alternative for the bronze package for companies interested in getting tickets for employees",
  benefits: ["tickets", "spotlight"],
  highlightedBenefits: [],
  availability: 4,
};

export const SILVER_PACKAGE: Package = {
  name: "Silver",
  price: 3000,
  color: "accent-green",
  description: "Increase brand awareness at the event",
  benefits: ["video", "giveaways", "rollup", "spotlight", "logo"],
  highlightedBenefits: ["giveaways", "video"],
  availability: 3,
};

export const GOLD_PACKAGE: Package = {
  name: "Gold",
  price: 5000,
  color: "accent-orange",
  description: "Get involved at the event",
  benefits: [
    "experience",
    "ticket_discount",
    "video",
    "logo",
    "giveaways",
    "rollup",
    "spotlight",
  ],
  highlightedBenefits: ["ticket_discount", "experience"],
  availability: 0,
};
