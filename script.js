/* Professional Portfolio Interactions */

document.addEventListener("DOMContentLoaded", () => {
  // Page loader
  const loader = document.getElementById("pageLoader");
  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("hidden"), 400);
  });
  // Fallback if already loaded
  if (document.readyState === "complete") {
    setTimeout(() => loader?.classList.add("hidden"), 300);
  }

  // Theme toggle
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
    if (themeToggle) themeToggle.textContent = saved === "light" ? "🌙" : "☀️";
  }

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "light" ? "🌙" : "☀️";
  });

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  navToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("open");
  });

  // Close menu on link click
  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Active nav section
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((section) => navObserver.observe(section));
});
