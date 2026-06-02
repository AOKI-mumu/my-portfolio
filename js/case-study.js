const navItems = [...document.querySelectorAll(".case-rail a[data-section]")];
const caseRail = document.querySelector(".case-rail");
const sections = navItems
  .map((item) => document.getElementById(item.dataset.section))
  .filter(Boolean);

function setActive(sectionId) {
  navItems.forEach((item) => {
    const isActive = item.dataset.section === sectionId;
    item.classList.toggle("is-active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "true");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => setActive(item.dataset.section));
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActive(visible.target.id);
    }
  },
  {
    rootMargin: "-28% 0px -55% 0px",
    threshold: [0.15, 0.35, 0.6]
  }
);

sections.forEach((section) => observer.observe(section));

function syncFloatingNavVisibility() {
  const shouldShow = window.scrollY > Math.max(360, window.innerHeight * 0.45);
  if (caseRail) caseRail.classList.toggle("is-visible", shouldShow);
}

window.addEventListener("scroll", syncFloatingNavVisibility, { passive: true });
syncFloatingNavVisibility();
