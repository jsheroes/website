import type { ImageMetadata } from "astro";
import logo_globalLogic from "../images/sponsors/logo_globalLogic.png";
// import logo_yardi from "../images/sponsors/logo_yardi.png";
// import logo_bmw from "../images/sponsors/logo_bmw.svg";
// import logo_wolfpack from "../images/sponsors/logo_wolfpack.svg";
// import logo_cloud_wizard from "../images/sponsors/logo_cloud-wizard.svg";
// import logo_meteocontrol from "../images/sponsors/logo_meteocontrol.svg";
// import logo_flowx_ai from "../images/sponsors/logo_flowx.ai.png";
// import logo_siemens from "../images/sponsors/logo_siemens.png";

export interface Sponsor {
  name: string;
  url: string;
  logo: ImageMetadata;
}

// Commented-out sponsors are from 2026 and may return in 2027.
export const goldSponsors: Sponsor[] = [
  {
    name: "GlobalLogic",
    url: "https://www.globallogic.com/ro/",
    logo: logo_globalLogic,
  },
  // {
  //   name: "Yardi",
  //   url: "https://careers.yardiromania.ro/",
  //   logo: logo_yardi,
  // },
];

export const silverSponsors: Sponsor[] = [
  // {
  //   name: "BMW Group Techworks Romania",
  //   url: "https://www.bmwtechworks.ro/en",
  //   logo: logo_bmw,
  // },
];

export const bronzeSponsors: Sponsor[] = [
  // {
  //   name: "Wolfpack Digital",
  //   url: "https://www.wolfpack-digital.com/",
  //   logo: logo_wolfpack,
  // },
  // {
  //   name: "Cloud Wizard",
  //   url: "https://cloudwizard.tech/",
  //   logo: logo_cloud_wizard,
  // },
  // {
  //   name: "meteocontrol",
  //   url: "https://www.meteocontrol.com/",
  //   logo: logo_meteocontrol,
  // },
  // {
  //   name: "Flowx.ai",
  //   url: "https://flowx.ai/",
  //   logo: logo_flowx_ai,
  // },
  // {
  //   name: "Siemens",
  //   url: "https://www.siemens.com/en-us/",
  //   logo: logo_siemens,
  // },
];
