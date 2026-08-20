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

  /* ---- Custom cursor highlight circle (desktop) ---- */
  const cursorRing = document.getElementById("cursorRing");
  const cursorDot = document.getElementById("cursorDot");
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;

  if (isFinePointer && (cursorGlow || cursorRing || cursorDot)) {
    document.body.classList.add("custom-cursor");

    let mx = 0, my = 0;
    let rx = 0, ry = 0; // ring lagged position
    let raf = null;

    const interactiveSelector =
      "a, button, .btn, .skill-card, .project-card, .lead-card, .education-card, .research-card, .theme-toggle, .nav-toggle, .float-resume, .back-top, .metric, .stat, .tech-pills span, .course-tags span, .research-tags span, .project-tags span, .contact-links a, .social-links a";

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = mx + "px";
        cursorDot.style.top = my + "px";
      }
      if (cursorGlow) {
        cursorGlow.style.left = mx + "px";
        cursorGlow.style.top = my + "px";
      }

      if (!raf) {
        const animate = () => {
          // Smooth lag for the ring
          rx += (mx - rx) * 0.18;
          ry += (my - ry) * 0.18;
          if (cursorRing) {
            cursorRing.style.left = rx + "px";
            cursorRing.style.top = ry + "px";
          }
          if (Math.abs(mx - rx) > 0.3 || Math.abs(my - ry) > 0.3) {
            raf = requestAnimationFrame(animate);
          } else {
            raf = null;
          }
        };
        raf = requestAnimationFrame(animate);
      }
    });

    // Expand ring on interactive elements
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRing?.classList.add("hovering"));
      el.addEventListener("mouseleave", () => cursorRing?.classList.remove("hovering"));
    });

    // Hide custom cursor when leaving window
    document.addEventListener("mouseleave", () => {
      if (cursorRing) cursorRing.style.opacity = "0";
      if (cursorDot) cursorDot.style.opacity = "0";
      if (cursorGlow) cursorGlow.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      if (cursorRing) cursorRing.style.opacity = "";
      if (cursorDot) cursorDot.style.opacity = "";
      if (cursorGlow) cursorGlow.style.opacity = "";
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
