import { event } from "./event";
import { TICKETS_ON_SALE, WAITLIST_OPEN } from "./flags";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Homepage sections, shown in the top bar. */
export const primaryNav: NavLink[] = [
  { label: "Speakers", href: "/#speakers" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Venue", href: "/#venue" },
  { label: "Sponsors", href: "/#sponsors" },
];

/** The single call to action, driven by where the edition is in its lifecycle. */
export const cta: NavLink | undefined = TICKETS_ON_SALE
  ? { label: "Buy your ticket", href: event.ticketsUrl, external: true }
  : WAITLIST_OPEN
    ? { label: "Join the waitlist", href: event.ticketsUrl, external: true }
    : undefined;

export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Conference",
    links: [
      { label: "Speakers", href: "/#speakers" },
      { label: "Agenda", href: "/#agenda" },
      { label: "Venue", href: "/#venue" },
      { label: "Sponsors", href: "/#sponsors" },
      { label: "Become a sponsor", href: "/sponsor" },
      { label: "Why attend", href: "/why-attend" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Meetups", href: "/meetups" },
      { label: "Blog", href: "/blog" },
      { label: "Hall of fame", href: "/hall-of-fame" },
    ],
  },
  {
    title: "Good to know",
    links: [
      { label: "Code of conduct", href: "/coc" },
      { label: "Transparency report", href: "/transparency" },
      { label: "Meet Ecma", href: "/meet-ecma" },
    ],
  },
  {
    title: "Follow",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/jsheroes-community/",
        external: true,
      },
      {
        label: "Bluesky",
        href: "https://bsky.app/profile/jsheroes.io",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/jsheroes",
        external: true,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/jsheroes",
        external: true,
      },
      {
        label: "Meetup",
        href: "https://www.meetup.com/jsheroes/",
        external: true,
      },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms and conditions", href: "/terms-and-conditions" },
  { label: "Media kit", href: "/media" },
  { label: "Contact", href: "mailto:welcome@jsheroes.io" },
];
