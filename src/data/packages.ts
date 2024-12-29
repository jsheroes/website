type Benefit =
  | "logo"
  | "spotlight"
  | "rollup"
  | "giveaways"
  | "video"
  | "tickets"
  | "pitch";

type Package = {
  name: "Bronze" | "Silver" | "Gold";
  price: number;
  color: string;
  description: string;
  benefits: Benefit[];
  highlightedBenefits: Benefit[];
};

export const BENEFITS_INFO: Record<
  Benefit,
  { display: string; explanation?: string }
> = {
  logo: { display: "Logo on printed and digital materials", explanation: "Includes: website, post-event videos and attendee badges" },
  spotlight: { display: "Social media spotlights" },
  rollup: { display: "Roll-up in the main room" },
  giveaways: { display: "Branded giveaways for attendees", explanation: "We have a dedicated table in the main hallway where we showcase your branded giveaways." },
  video: { display: "Company video running during the breaks" },
  tickets: { display: "15% discount on all tickets" },
  pitch: { display: "Company pitch in the networking area", explanation: "A company representative will talk about your company and interact with the audience in a dedicated area in the hallway during a break." },
};

export const BRONZE_PACKAGE: Package = {
  name: "Bronze",
  price: 1500,
  color: "border-accent-pink",
  description: "Ideal for startups and small companies",
  benefits: ["logo", "spotlight", "rollup"],
  highlightedBenefits: ["logo", "spotlight", "rollup"],
};

export const SILVER_PACKAGE: Package = {
  name: "Silver",
  price: 3000,
  color: "border-accent-green",
  description:
    "Ideal for companies that want to increase brand awareness at the event",
  benefits: ["logo", "spotlight", "rollup", "giveaways", "video"],
  highlightedBenefits: ["giveaways", "video"],
};

export const GOLD_PACKAGE: Package = {
  name: "Gold",
  price: 5000,
  color: "border-accent-orange",
  description:
    "Ideal for large companies that want to maximize their exposure in our community",
  benefits: [
    "logo",
    "spotlight",
    "rollup",
    "giveaways",
    "video",
    "tickets",
    "pitch",
  ],
  highlightedBenefits: ["tickets", "pitch"],
};
