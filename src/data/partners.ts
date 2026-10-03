import type { ImageMetadata } from "astro";
import img_daisler from "../images/partners/daisler.png";
import img_logo_camigo from "../images/partners/logo-camigo.jpg";
import img_DE_logo from "../images/partners/DE-logo.svg";
import img_jetbrains from "../images/partners/jetbrains.png";

export interface Partner {
  name: string;
  url: string;
  logo: ImageMetadata;
  /** Logos that need a dark or coloured backdrop. */
  overrideBgColor?: string;
}

export const partners: Partner[] = [
  {
    name: "Daisler",
    url: "https://www.daisler.ro/",
    logo: img_daisler,
  },
  {
    name: "Camigo",
    url: "https://camigo.ro/",
    logo: img_logo_camigo,
  },
  {
    name: "DigitalEvents",
    url: "https://digital-expert.online/en/best-digital-events",
    logo: img_DE_logo,
  },
  {
    name: "JetBrains",
    url: "https://www.jetbrains.com/",
    logo: img_jetbrains,
  },
];
