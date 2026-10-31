import type { ImageMetadata } from "astro";
import img_daisler from "../images/partners/daisler.png";
// import img_logo_camigo from "../images/partners/logo-camigo.jpg";
// import img_jetbrains from "../images/partners/jetbrains.png";

export interface Partner {
  name: string;
  url: string;
  logo: ImageMetadata;
  /** Logos that need a dark or coloured backdrop. */
  overrideBgColor?: string;
}

// Commented-out partners are from 2026 and may return in 2027.
export const partners: Partner[] = [
  {
    name: "Daisler",
    url: "https://www.daisler.ro/",
    logo: img_daisler,
  },
  // {
  //   name: "Camigo",
  //   url: "https://camigo.ro/",
  //   logo: img_logo_camigo,
  // },
  // {
  //   name: "JetBrains",
  //   url: "https://www.jetbrains.com/",
  //   logo: img_jetbrains,
  // },
];
