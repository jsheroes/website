/** In display order; anything else is shown as a generic website, after these. */
const PLATFORMS = [
  { icon: "bluesky", label: "Bluesky", hosts: ["bsky.app", "bsky.social"] },
  { icon: "x", label: "X", hosts: ["x.com", "twitter.com"] },
  { icon: "github", label: "GitHub", hosts: ["github.com"] },
  { icon: "linkedin", label: "LinkedIn", hosts: ["linkedin.com"] },
  { icon: "instagram", label: "Instagram", hosts: ["instagram.com"] },
];

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

/** Works out the platform of each URL and sorts them for display. */
export function describeLinks(urls: string[]) {
  return urls
    .map((url) => {
      const host = hostOf(url);
      const rank = PLATFORMS.findIndex(({ hosts }) =>
        hosts.some((h) => host === h || host.endsWith(`.${h}`)),
      );
      const platform = PLATFORMS[rank];
      return {
        url,
        rank: platform ? rank : PLATFORMS.length,
        label: platform?.label ?? (host || "Website"),
        icon: `/img/icons/${platform?.icon ?? "link"}.svg`,
      };
    })
    .sort((a, b) => a.rank - b.rank);
}
