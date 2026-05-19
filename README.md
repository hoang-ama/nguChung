# nguChung Landing Page

This repository contains the source code for the **nguChung** landing page, a Vietnamese campaign-style website focused on better sleep and co-sleeping awareness.

The page is designed as a single-page experience with a fixed background image, animated intro content, feature highlights, partner logos, and a contact form connected to Google Sheets via a Google Apps Script Web App.

## Live Website

- Production URL: `https://nguchung.vercel.app`

## Website Content Overview

The landing page is organized into five main sections:

1. **Intro (`#intro`)**
   - Brand logo and hero headline
   - Smooth-scroll CTA button ("Khám phá")

2. **Benefits / Work (`#work`)**
   - Circular feature cards
   - Responsive layout:
     - Desktop: 4 columns
     - Tablet: 2 columns
     - Mobile: 1 column

3. **About (`#about`)**
   - Short project description
   - Partner/client logo strip with normalized logo sizing

4. **Contact (`#contact`)**
   - Form fields: name, email, message
   - Honeypot field for spam prevention
   - Frontend validation + async submit feedback states
   - Submission target: Google Apps Script Web App for Google Sheets storage

5. **Footer (`#footer`)**
   - Social icons
   - Copyright and studio attribution

## Tech Stack

- **HTML5** for page structure
- **CSS3** for layout, animations, and responsive breakpoints
- **JavaScript (jQuery)** for animation triggers, smooth scrolling, and contact form submission logic
- **Vercel** for deployment and hosting
- **Google Apps Script + Google Sheets** for form data collection

## Project Structure

```text
.
├── index.html
├── script.js
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── plugins.css
│   ├── js/
│   │   ├── main.js
│   │   └── plugins.js
│   ├── img/
│   │   ├── background.png
│   │   ├── nguChung-logo.png
│   │   ├── work/
│   │   └── clients/
│   ├── fonts/
│   └── php/
│       └── contact.php
└── README.md
```

## Local Development

This is a static site. To run locally:

1. Open `index.html` directly in a browser, or
2. Use any local static server (recommended) for consistent behavior.

## Deployment

The project is connected to Vercel and GitHub.

- Push to `main` to update production (auto-deploy enabled).

