// =========================================================
// Haleema Naeem — Portfolio scripts
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initActiveNav();
  initScrollReveal();
  initSkillBars();
  initTerminalTyping();
  initContactForm();
});

// ---------- Mobile nav ----------
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("nav-open", isOpen);
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

// ---------- Highlight nav link for current section ----------
// Only runs the scroll-spy behaviour on the home page, where nav links are
// same-page hash anchors (e.g. "#about"). On project pages the nav links
// point back to "../index.html#about", so there's nothing to spy on here.
function initActiveNav() {
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  if (!links.length) return;

  const sections = [];
  links.forEach((link) => {
    const hash = link.getAttribute("href").slice(1);
    const el = document.getElementById(hash);
    if (el) sections.push({ id: hash, el, link });
  });

  if (!sections.length) return;

  const setActive = () => {
    let current = sections[0];
    const scrollPos = window.scrollY + 140;
    sections.forEach((s) => {
      if (s.el.offsetTop <= scrollPos) current = s;
    });
    links.forEach((l) => l.classList.remove("active"));
    current.link.classList.add("active");
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
}

// ---------- Scroll reveal ----------
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

// ---------- Animated skill bars ----------
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar");
  if (!bars.length) return;

  if (!("IntersectionObserver" in window)) {
    bars.forEach((b) => b.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// ---------- Terminal typing signature ----------
function initTerminalTyping() {
  const body = document.querySelector("[data-terminal-body]");
  if (!body) return;

  const script = [
    { type: "prompt", text: "whoami" },
    { type: "out", text: "haleema_naeem — cyber security undergrad" },
    { type: "prompt", text: "cat focus.txt" },
    { type: "out", text: "network security · ethical hacking · vuln hunting" },
    { type: "prompt", text: "ls current_build/" },
    { type: "out", text: "clover-ai.py   tumblepop.cpp   wandering-bloom.html" },
    { type: "prompt", text: "status --availability" },
    { type: "key", text: "open to internships & collabs ✓" },
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    body.innerHTML = script
      .map((line) => renderStaticLine(line))
      .join("");
    return;
  }

  body.innerHTML = "";
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= script.length) {
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      body.appendChild(cursor);
      return;
    }

    const item = script[lineIndex];
    const lineEl = document.createElement("div");
    lineEl.className = "line";

    if (item.type === "prompt") {
      const promptSpan = document.createElement("span");
      promptSpan.className = "prompt";
      promptSpan.textContent = "$ ";
      lineEl.appendChild(promptSpan);
    }

    const textSpan = document.createElement("span");
    textSpan.className = item.type === "out" ? "out" : item.type === "key" ? "key" : "";
    lineEl.appendChild(textSpan);
    body.appendChild(lineEl);

    let charIndex = 0;
    const speed = item.type === "prompt" ? 42 : 14;

    const typeChar = () => {
      if (charIndex < item.text.length) {
        textSpan.textContent += item.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        lineIndex++;
        setTimeout(typeLine, item.type === "prompt" ? 220 : 380);
      }
    };
    typeChar();
  }

  // Kick off once in view
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeLine();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(body);
  } else {
    typeLine();
  }
}

function renderStaticLine(item) {
  if (item.type === "prompt") {
    return `<div class="line"><span class="prompt">$ </span>${item.text}</div>`;
  }
  if (item.type === "key") {
    return `<div class="line key">${item.text}</div>`;
  }
  return `<div class="line out">${item.text}</div>`;
}

// ---------- Contact form (Formspree) ----------
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "Message sent — thanks for reaching out! I'll get back to you soon.";
        status.classList.add("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const msg = data && data.errors ? data.errors.map((er) => er.message).join(", ") : "Something went wrong. Please try again or email me directly.";
        status.textContent = msg;
        status.classList.add("error");
      }
    } catch (err) {
      status.textContent = "Network error — please email me directly at haleema090107@gmail.com.";
      status.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });
}
