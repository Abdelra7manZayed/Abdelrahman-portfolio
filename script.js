/* =========================================================
   Premium Portfolio Interactions
   Smooth motion · cursor glow · scroll effects · polish
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const loader = document.getElementById("pageLoader");
  const header = document.querySelector(".header");
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const floatResume = document.getElementById("floatResume");
  const backTop = document.getElementById("backTop");
  const cursorGlow = document.getElementById("cursorGlow");

  /* ---- Page loader ---- */
  const hideLoader = () => {
    setTimeout(() => loader?.classList.add("hidden"), 350);
  };
  window.addEventListener("load", hideLoader);
  if (document.readyState === "complete") hideLoader();

  /* ---- Theme toggle ---- */
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

  /* ---- Mobile nav ---- */
  navToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle?.classList.remove("open");
    });
  });

  /* ---- Header scroll shadow ---- */
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 20);
    floatResume?.classList.toggle("visible", y > 400);
    backTop?.classList.toggle("visible", y > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Back to top ---- */
  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Cursor glow (desktop) ---- */
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    let raf = null;
    let mx = 0, my = 0;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          cursorGlow.style.left = mx + "px";
          cursorGlow.style.top = my + "px";
          raf = null;
        });
      }
    });
  }

  /* ---- Reveal on scroll ---- */
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
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---- Active nav highlighting ---- */
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
    { threshold: 0.35 }
  );
  sections.forEach((section) => navObserver.observe(section));

  /* ---- Subtle tilt on profile card ---- */
  const profileCard = document.querySelector(".profile-card");
  if (profileCard && window.matchMedia("(pointer: fine)").matches) {
    profileCard.addEventListener("mousemove", (e) => {
      const rect = profileCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      profileCard.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    profileCard.addEventListener("mouseleave", () => {
      profileCard.style.transform = "";
    });
  }
});
