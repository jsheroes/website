type Benefit =
  | "logo"
  | "spotlight"
  | "rollup"
  | "giveaways"
  | "video"
  | "ticket_discount"
  | "10tickets"
  | "5tickets"
  | "3tickets"
  | "booth"
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
  "10tickets": { display: "10 event tickets" },
  "5tickets": { display: "5 event tickets" },
  "3tickets": { display: "3 event tickets" },
  booth: {
    display: "Booth corner in the foyer",
    explanation:
      "You will have a dedicated corner in the foyer where you can interact with the attendees during the breaks.",
  },
  experience: {
    display: "Your brand attached to an event experience",
    explanation: "Choose one: the coffee spot or the community drinks.",
  },
};

export const BRONZE_PACKAGE: Package = {
  name: "Bronze",
  price: 2000,
  color: "accent-pink",
  description: "Ideal for startups and small companies",
  benefits: ["logo", "giveaways", "rollup", "spotlight"],
  highlightedBenefits: [],
  availability: 6,
};

export const SUPPORTER_PACKAGE: Package = {
  name: "Supporter",
  price: 2000,
  color: "rule",
  description:
    "Alternative for the bronze package for companies interested in getting tickets for employees",
  benefits: ["5tickets", "spotlight"],
  highlightedBenefits: [],
  availability: 6,
};

export const SILVER_PACKAGE: Package = {
  name: "Silver",
  price: 4000,
  color: "accent-green",
  description: "Increase brand awareness at the event",
  benefits: [
    "experience",
    "3tickets",
    "video",
    "logo",
    "giveaways",
    "rollup",
    "spotlight",
  ],
  highlightedBenefits: ["experience", "3tickets"],
  availability: 2,
};

export const GOLD_PACKAGE: Package = {
  name: "Gold",
  price: 7500,
  color: "accent-orange",
  description: "Get involved at the event",
  benefits: [
    "booth",
    "10tickets",
    "ticket_discount",
    "video",
    "logo",
    "giveaways",
    "rollup",
    "spotlight",
  ],
  highlightedBenefits: ["ticket_discount", "10tickets", "booth"],
  availability: 1,
};
