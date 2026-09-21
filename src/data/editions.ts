/** Past editions, oldest first. Years and venues are provisional until the team confirms them. */

export type TileColor = "white" | "blue" | "yellow" | "mint" | "coral";

export interface Edition {
  n: number;
  year: number;
  venue: string;
  /** Flip-wall motif from src/assets/motifs (brand palette), without the suffix. */
  motif: string;
  /** CSS pixels per motif cell on the front of the tile. */
  motifCell: number;
  tile: TileColor;
  /** Where "Watch the highlights" goes: that year's playlist on the YouTube channel. */
  playlistUrl: string;
  /** Archived site of that edition. */
  archiveUrl?: string;
}

export const editions: Edition[] = [
  {
    n: 1,
    year: 2017,
    venue: "Cluj-Napoca",
    motif: "m4",
    motifCell: 6,
    tile: "white",
    playlistUrl:
      "https://www.youtube.com/watch?v=-HL1xS1y1UI&list=PLB9NqTp0uKrQMLMSeh8RIobwjo5eABnmp&index=1",
  },
  {
    n: 2,
    year: 2018,
    venue: "Cluj-Napoca",
    motif: "m14",
    motifCell: 7,
    tile: "blue",
    playlistUrl:
      "https://www.youtube.com/watch?v=Zx2moTy-yAg&list=PLB9NqTp0uKrRn_C80xQK8QEeO-vaBmN_9&index=1",
  },
  {
    n: 3,
    year: 2019,
    venue: "Cluj-Napoca",
    motif: "m0",
    motifCell: 6,
    tile: "yellow",
    playlistUrl:
      "https://www.youtube.com/watch?v=jdr9eQGq97g&list=PLB9NqTp0uKrR8WFXitMvLMGd-kGGZ4RkX&index=1",
  },
  {
    n: 4,
    year: 2022,
    venue: "Cluj-Napoca",
    motif: "m5",
    motifCell: 7,
    tile: "white",
    playlistUrl:
      "https://www.youtube.com/watch?v=munltx48_xI&list=PLB9NqTp0uKrRQtEbxJbRmSaobC1_mnwee&index=1",
    archiveUrl: "https://2022.jsheroes.io",
  },
  {
    n: 5,
    year: 2023,
    venue: "Cluj-Napoca",
    motif: "m9",
    motifCell: 6,
    tile: "mint",
    playlistUrl:
      "https://www.youtube.com/watch?v=N6qr6L37sl8&list=PLB9NqTp0uKrR8g9ImDK2HPcpuC7oW8wYe&index=1",
    archiveUrl: "https://2023.jsheroes.io",
  },
  {
    n: 6,
    year: 2024,
    venue: "Cluj-Napoca",
    motif: "m10",
    motifCell: 6,
    tile: "white",
    playlistUrl:
      "https://www.youtube.com/watch?v=nzeQPCdXjv4&list=PLB9NqTp0uKrTlXRJq38MxzWp1T5hmp8Hw&index=1",
    archiveUrl: "https://2024.jsheroes.io",
  },
  {
    n: 7,
    year: 2025,
    venue: "Cluj-Napoca",
    motif: "m13",
    motifCell: 8,
    tile: "coral",
    playlistUrl:
      "https://www.youtube.com/watch?v=iPeXgjX_mg0&list=PLB9NqTp0uKrSiuRQQBdaSo2wfDkAI7Eg8&index=1",
    archiveUrl: "https://2025.jsheroes.io",
  },
  {
    n: 8,
    year: 2026,
    venue: "Grand Hotel Italia",
    motif: "m7",
    motifCell: 7,
    tile: "mint",
    playlistUrl:
      "https://www.youtube.com/watch?v=EmNVwmB7k90&list=PLB9NqTp0uKrR4o4yUvMJPSAf2Qfo8ZgmH&index=1",
    archiveUrl: "https://2026.jsheroes.io",
  },
];
