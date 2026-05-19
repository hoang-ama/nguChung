# nguChung - Product Landing Page

[![Vercel](https://img.shields.io/badge/Live-nguchung.vercel.app-black?logo=vercel)](https://nguchung.vercel.app)
[![Status](https://img.shields.io/badge/Status-Active-success)](https://nguchung.vercel.app)
[![Tech](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20jQuery-blue)](#tech-stack)

**nguChung** is a campaign-style landing page that promotes better sleep and co-sleeping awareness through a clean visual story, concise messaging, and a conversion-focused contact flow.

The site is built as a fast static one-page experience, optimized for readability, responsive layout behavior, and lightweight hosting.

## Live Product

- Website: [https://nguchung.vercel.app](https://nguchung.vercel.app)
- Repository: [https://github.com/hoang-ama/nguChung](https://github.com/hoang-ama/nguChung)

## Product Highlights

- **Strong hero section** with centered headline and brand logo
- **Benefit cards** in circular style with responsive 4/2/1 column layout
- **Readable visual treatment** over background image (contrast + text shadow tuning)
- **Partner credibility block** with standardized logo sizing
- **Contact form pipeline** wired to Google Sheets through Apps Script
- **Auto-deploy workflow** through GitHub + Vercel

## Screenshots

### Hero Section

![Hero section](assets/img/background.png)

### Feature Icons

![Feature icon sample](assets/img/work/item-1.png)
![Feature icon sample](assets/img/work/item-2.png)
![Feature icon sample](assets/img/work/item-3.png)
![Feature icon sample](assets/img/work/item-4.png)

### Brand Asset

![nguChung logo](assets/img/nguChung-logo.png)

## Page Structure

The landing page is split into five core sections:

1. **Intro (`#intro`)**
   - Hero headline
   - Top logo placement
   - Smooth-scroll CTA

2. **Benefits (`#work`)**
   - Circular image cards
   - Titles + supporting descriptions
   - Responsive behavior:
     - Desktop: 4 columns
     - Tablet: 2 columns
     - Mobile: 1 column

3. **About (`#about`)**
   - Project narrative
   - Partner logos

4. **Contact (`#contact`)**
   - Name, email, message fields
   - Honeypot anti-spam field
   - Async submit states:
     - Sending
     - Success
     - Error

5. **Footer (`#footer`)**
   - Social links
   - Copyright

## Tech Stack

- **HTML5** - semantic page structure
- **CSS3** - layout, responsive breakpoints, typography, visual effects
- **JavaScript + jQuery** - animations, smooth scrolling, form submission logic
- **Google Apps Script + Google Sheets** - contact data collection endpoint
- **Vercel** - production hosting and CI deployment

## Project Architecture

```text
.
├── index.html                # Main one-page layout
├── script.js                 # Additional script entry (if needed)
├── assets/
│   ├── css/
│   │   ├── main.css          # Core custom styles
│   │   └── plugins.css       # Vendor/plugin styles
│   ├── js/
│   │   ├── main.js           # Main interactions and form handling
│   │   └── plugins.js        # Vendor scripts
│   ├── img/                  # Background, logo, features, partner logos
│   ├── fonts/                # Icon/web fonts
│   └── php/
│       └── contact.php       # Legacy contact endpoint (not primary flow)
└── README.md
```

## Local Setup

This is a static project, so setup is simple:

```bash
# Option 1: open directly
open index.html

# Option 2: run a lightweight static server
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

Production deployment is handled by **Vercel**.

- Push to `main` -> Vercel auto-build + auto-deploy
- Live domain: `nguchung.vercel.app`

## Product Roadmap

- [ ] Add dedicated screenshot gallery (`docs/screenshots/`)
- [ ] Add bilingual content support (VI/EN)
- [ ] Add analytics events for CTA and form conversion
- [ ] Add end-to-end form submission tests
- [ ] Add SEO metadata improvements (Open Graph, Twitter cards)
- [ ] Add custom domain and DNS hardening

## Contributing Guide

Contributions are welcome and appreciated.

1. Fork this repository
2. Create a feature branch:
   - `git checkout -b feature/your-feature-name`
3. Commit your changes with clear messages
4. Push and open a Pull Request

### Contribution Standards

- Keep UI responsive across desktop/tablet/mobile
- Preserve visual consistency with existing style language
- Test form behavior (validation, sending state, success/error state)
- Keep changes focused and PR-friendly

## Contact

For product collaboration or feedback, use the contact form on the live site:

- [https://nguchung.vercel.app](https://nguchung.vercel.app)

