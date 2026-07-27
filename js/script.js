// ===============================
// Smooth Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(16,61,44,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Fade In Sections
// ===============================

const hiddenElements = document.querySelectorAll(
    ".about-card, .project-card, .edu-card, .skill"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// Typing Animation
// ===============================

const subtitle = document.querySelector(".hero-left h2");

const words = [

    "Cyber Security Undergraduate",
    "Frontend Developer",
    "UI / UX Designer",
    "C++ Programmer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        subtitle.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    }

    else {

        subtitle.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll("a");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        const x =
            e.clientX - this.getBoundingClientRect().left;

        const y =
            e.clientY - this.getBoundingClientRect().top;

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ===============================
// Console Welcome
// ===============================

console.log(
    "Welcome to Haleema Naeem's Portfolio!"
);