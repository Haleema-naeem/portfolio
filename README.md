Haleema Naeem — Portfolio
A personal portfolio website built to showcase my projects, skills, and background as a Cyber Security undergraduate at FAST-NUCES Islamabad.
🔗 Live site: Haleema-naeem.github.io/portfolio
![status](https://img.shields.io/badge/status-active-93e0a8) ![type](https://img.shields.io/badge/type-static%20site-d2818a)
---
✨ Features
Single-page home with smooth-scroll navigation (about, skills, projects, writing, education, contact)
Dedicated detail page for every project, each with an overview, features, tech stack, and links
Contact form wired to Formspree — messages land straight in my inbox, no backend needed
Animated terminal-style intro (`whoami.sh`) in the hero section
Skill bars and scroll-reveal animations
Fully responsive: works on desktop, tablet, and mobile, with a slide-out mobile nav
Resume download available from the nav bar and footer on every page
Respects `prefers-reduced-motion` for accessibility
---
🗂️ Project structure
```
portfolio/
├── index.html                  # Home page (all main sections)
├── projects/
│   ├── clover-ai.html          # Clover AI project detail page
│   ├── tumblepop.html          # Tumblepop project detail page
│   ├── wandering-bloom.html    # The Wandering Bloom project detail page
│   └── coding-contest.html     # Coding Contest project detail page
├── css/
│   └── style.css               # All styling (design tokens, layout, responsive rules)
├── js/
│   └── script.js               # Nav toggle, scroll reveal, terminal typing, contact form
├── assets/
│   ├── Haleema_Naeem_CV.pdf    # Downloadable resume
│   └── images/                 # Project & profile images
└── README.md
```
> ⚠️ Keep this folder structure intact. `index.html` looks for `css/style.css`, `js/script.js`, and `assets/...` using **relative paths** — if any of these folders get moved or flattened, the site will load with no styling.
---
🚀 Running it locally
Clone or download this repository, keeping the full folder structure.
Open the folder in VS Code (or any editor).
Right-click `index.html` → Open with Live Server (or just double-click `index.html` to open it directly in a browser).
That's it — no build step, no dependencies, no `npm install`.
---
🌐 Deploying to GitHub Pages
Push the contents of this folder to a GitHub repository (e.g. `portfolio`).
Go to the repo's Settings → Pages.
Under Branch, select `main` (or `master`) and `/ (root)`, then save.
Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
---
📬 Contact form setup
The contact form submits to a Formspree endpoint set in `index.html`:
```html
<form class="contact-form" data-contact-form action="https://formspree.io/f/xxxxxxx" method="POST">
```
To point it at your own Formspree account:
Sign up free at formspree.io and create a new form.
Copy the endpoint URL it gives you (`https://formspree.io/f/xxxxxxx`).
Replace the `action` value above with your own endpoint.
---
🛠️ Built with
HTML5 / CSS3 / vanilla JavaScript (no frameworks, no build tools)
Formspree for form handling
Fonts: Space Grotesk, Inter, JetBrains Mono
---
📄 License
This project is personal portfolio content — feel free to reference the code structure, but please don't reuse my personal content, project descriptions, or images as your own.
---
🙋 About me
Third-semester Cyber Security student at FAST-NUCES Islamabad, interested in network security, ethical hacking, and building things that actually work. Reach me at haleema090107@gmail.com or via the contact form on the site.
