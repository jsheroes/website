import type { ImageMetadata } from "astro";
import img_logo_women_in_tech from "../images/communities/logo_women_in_tech.png";
import img_logo_jsnation from "../images/communities/logo_jsnation.png";
import img_logo_reactparis from "../images/communities/logo_reactparis.png";
import img_logo_zurichjs from "../images/communities/logo_zurichjs.png";
import img_logo_timjs from "../images/communities/logo_timjs.svg";
import img_logo_squiggleconf from "../images/communities/logo_squiggleconf.svg";
import img_logo_meetjs from "../images/communities/logo_meetjs.svg";
import img_logo_cmsconf from "../images/communities/logo_cmsconf.svg";
import img_sisc from "../images/partners/sisc.png";
import img_logo_reactbarcelona from "../images/communities/logo_reactbarcelona.svg";

export interface Community {
  name: string;
  url: string;
  logo: ImageMetadata;
  /** Logos that need a dark or coloured backdrop. */
  overrideBgColor?: string;
  discount?: { percentage: number; code: string };
}

export const communities: Community[] = [
  {
    name: "Women in Tech Cluj",
    url: "https://www.womenintechcluj.com/",
    logo: img_logo_women_in_tech,
  },
  // {
  //   name: "Ng Bucharest",
  //   url: "https://www.meetup.com/AngularJS-Bucharest/",
  //   logo: img_logo_ngbucharest,
  // },
  {
    name: "JSNation",
    url: "https://jsnation.com/",
    logo: img_logo_jsnation,
    discount: {
      percentage: 10,
      code: "FRIENDS",
    },
  },
  {
    name: "React Paris",
    url: "https://react.paris/",
    logo: img_logo_reactparis,
    discount: {
      percentage: 10,
      code: "rp26_jsheroes",
    },
  },
  {
    name: "Zurich JS",
    url: "https://conf.zurichjs.com?utm_source=jsheroes&utm_medium=partner&utm_campaign=zurichjs-conf-2026",
    logo: img_logo_zurichjs,
    discount: {
      percentage: 15,
      code: "JSHEROES15",
    },
  },
  {
    name: "tim.js",
    url: "https://timjs.ro/",
    logo: img_logo_timjs,
    overrideBgColor: "#000000",
  },
  {
    name: "SquiggleConf",
    url: "https://squiggleconf.com/",
    logo: img_logo_squiggleconf,
    overrideBgColor: "#063052",
  },
  {
    name: "meet.js Summit",
    url: "https://summit.meetjs.pl/",
    logo: img_logo_meetjs,
    discount: {
      percentage: 10,
      code: "ILOVEMEETJS",
    },
  },
  {
    name: "CMS Conf",
    url: "https://cmsconf.com/",
    logo: img_logo_cmsconf,
  },
  {
    name: "Sindicatul Studentilor din Cibernetica",
    url: "https://sisc.ro/",
    logo: img_sisc,
  },
  {
    name: "React Barcelona",
    url: "https://www.meetup.com/reactjs-barcelona/",
    logo: img_logo_reactbarcelona,
  },
  // {
  //   name: "Code for Romania",
  //   url: "https://code4.ro/",
  //   logo: img_logo_code4ro,
  // },
];
