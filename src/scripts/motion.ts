/**
 * Marks elements as they scroll into view: [data-reveal] gets data-revealed
 * once (the CSS in assets/motion.css does the animating), and [data-motion]
 * gets data-inview while visible so ambient animations can pause off-screen.
 */
const reveal = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.setAttribute("data-revealed", "");
      reveal.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
);

const ambient = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    entry.target.toggleAttribute("data-inview", entry.isIntersecting);
  }
});

// The last element on the page can sit inside the observer's bottom margin and
// never cross it, so reveal whatever is left once the page is scrolled to the end.
let frame = 0;
window.addEventListener(
  "scroll",
  () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (
        window.innerHeight + window.scrollY <
        document.documentElement.scrollHeight - 2
      )
        return;
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => {
          el.setAttribute("data-revealed", "");
          reveal.unobserve(el);
        });
    });
  },
  { passive: true },
);

function init() {
  document
    .querySelectorAll("[data-reveal]:not([data-revealed])")
    .forEach((el) => reveal.observe(el));
  document
    .querySelectorAll("[data-motion]")
    .forEach((el) => ambient.observe(el));
}

document.addEventListener("astro:page-load", init);
