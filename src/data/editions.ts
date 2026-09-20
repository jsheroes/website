/** Past editions, oldest first. Years and venues are provisional until the team confirms them. */

export interface Edition {
  n: number;
  year: number;
  venue: string;
  /** Motif in design/v1/assets/motifs used for the flip-wall tile. */
  motif: string;
  /** Group photo in public/img/gallery, when we have one. */
  photo?: string;
  /** Archived site of that edition. */
  archiveUrl?: string;
}

export const editions: Edition[] = [
  { n: 1, year: 2017, venue: "Cluj-Napoca", motif: "m0" },
  {
    n: 2,
    year: 2018,
    venue: "Cluj-Napoca",
    motif: "m1",
    photo: "jsh-2018.png",
  },
  {
    n: 3,
    year: 2019,
    venue: "Cluj-Napoca",
    motif: "m2",
    photo: "jsh-2019.png",
  },
  {
    n: 4,
    year: 2022,
    venue: "Cluj-Napoca",
    motif: "m3",
    photo: "jsh-2022.png",
    archiveUrl: "https://2022.jsheroes.io",
  },
  {
    n: 5,
    year: 2023,
    venue: "Cluj-Napoca",
    motif: "m4",
    photo: "jsh-2023.jpg",
    archiveUrl: "https://2023.jsheroes.io",
  },
  {
    n: 6,
    year: 2024,
    venue: "Cluj-Napoca",
    motif: "m5",
    photo: "jsh-2024.png",
    archiveUrl: "https://2024.jsheroes.io",
  },
  {
    n: 7,
    year: 2025,
    venue: "Cluj-Napoca",
    motif: "m6",
    archiveUrl: "https://2025.jsheroes.io",
  },
  {
    n: 8,
    year: 2026,
    venue: "Grand Hotel Italia",
    motif: "m7",
    archiveUrl: "https://2026.jsheroes.io",
  },
];
