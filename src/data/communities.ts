import type { Organization } from "./types";

export const communities: Organization[] = [
  {
    name: "Women in Tech Cluj",
    url: "https://www.womenintechcluj.com/",
    imgName: "communities/logo_women_in_tech.png",
  },
  // {
  //   name: "Ng Bucharest",
  //   url: "https://www.meetup.com/AngularJS-Bucharest/",
  //   imgName: "communities/logo_ngbucharest.png",
  // },
  {
    name: "JSNation",
    url: "https://jsnation.com/",
    imgName: "communities/logo_jsnation.png",
    discount: {
      percentage: 10,
      code: "FRIENDS",
    },
  },
  {
    name: "React Paris",
    url: "https://react.paris/",
    imgName: "communities/logo_reactparis.png",
    discount: {
      percentage: 10,
      code: "rp26_jsheroes",
    },
  },
  {
    name: "Zurich JS",
    url: "https://conf.zurichjs.com?utm_source=jsheroes&utm_medium=partner&utm_campaign=zurichjs-conf-2026",
    imgName: "communities/logo_zurichjs.png",
    discount: {
      percentage: 15,
      code: "JSHEROES15",
    },
  },
  {
    name: "tim.js",
    url: "https://timjs.ro/",
    imgName: "communities/logo_timjs.svg",
    overrideBgColor: "#000000",
  },
  {
    name: "SquiggleConf",
    url: "https://squiggleconf.com/",
    imgName: "communities/logo_squiggleconf.svg",
    overrideBgColor: "#063052",
  },
  // {
  //   name: "Code for Romania",
  //   url: "https://code4.ro/",
  //   imgName: "communities/logo_code4ro.png",
  // },
];
