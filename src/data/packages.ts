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
    link: "https://www.facebook.com/photo.php?fbid=467414628992502&set=pb.100071719063211.-2207520000&type=3",
  },
  giveaways: {
    display: "Bring branded giveaways for attendees",
    explanation:
      "You can bring promotional materials at the event. All giveaways will be displayed in a dedicated area in the hallway.",
    link: "https://www.facebook.com/jsheroes/photos/pb.100071719063211.-2207520000/3163827757188452/?type=3",
  },
  video: { display: "Your company video running during the breaks" },
  tickets: { display: "15% discount on all tickets" },
  pitch: {
    display: "Pitch your company in the networking area",
    explanation:
      "A company representative will talk about your company and interact with the audience in a dedicated area in the hallway during a break.",
  },
};

export const BRONZE_PACKAGE: Package = {
  name: "Bronze",
  price: 1500,
  color: "accent-pink",
  description: "Ideal for startups and small companies",
  benefits: ["logo", "spotlight", "rollup"],
  highlightedBenefits: [],
  availability: 4,
};

export const SILVER_PACKAGE: Package = {
  name: "Silver",
  price: 3000,
  color: "accent-green",
  description:
    "Ideal for companies that want to increase brand awareness at the event",
  benefits: ["logo", "spotlight", "rollup", "giveaways", "video"],
  highlightedBenefits: ["giveaways", "video"],
  availability: 1,
};

export const GOLD_PACKAGE: Package = {
  name: "Gold",
  price: 5000,
  color: "accent-orange",
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
  availability: 1,
};
