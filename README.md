# Dancing Roamer — Website

Marketing site for **Dancing Roamer**, a luxury wedding choreography studio
founded and run by **Smitarani Swain** in Odisha. Built as a React SPA with
Vite, deployed to GitHub Pages under the custom domain `dancingroamer.in`.

## Stack

- [React 18](https://react.dev/) + [React Router 7](https://reactrouter.com/) (SPA, client-side routing)
- [Vite](https://vitejs.dev/) for dev/build tooling
- Plain CSS driven by design tokens in `src/theme.js` — no CSS framework
- No backend: the contact form opens a pre-filled WhatsApp chat

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview     # preview the production build locally
```

## Project structure

```
src/
  theme.js            # single source of truth for brand colors/fonts/radii/shadows
  data/content.js       # all site copy, testimonials, services, image imports
  components/          # Navbar, Footer, cards, illustrations, etc.
  pages/               # Home, About, Services, Gallery, Testimonials, Contact
  assets/images/        # optimized photos sourced from the brand deck
public/
  favicon.svg, apple-touch-icon.png  # brand mark, generated from src/components/LogoMark.jsx
  CNAME                 # dancingroamer.in — keeps the custom domain on every deploy
  404.html               # GitHub Pages SPA fallback (see comments in the file)
```

## Theme

All brand colors and fonts live in **`src/theme.js`** as plain JS values, and
are injected as CSS custom properties (`--color-primary`, `--font-display`,
...) onto `:root` once at startup (`src/main.jsx`). Every stylesheet in the
project consumes those variables — to change the brand palette or fonts,
edit `src/theme.js` only; nothing else needs to change.

- **Display font:** Playfair Display (headings, wordmark)
- **Accent font:** Quicksand (nav, buttons, labels — echoes the logo's tagline lettering)
- **Body font:** Poppins
- **Palette:** terracotta brown (`--color-primary`) + warm blush/cream backgrounds +
  a charcoal dark section color + a soft gold accent for highlights —
  sampled from the Dancing Roamer logo and pitch deck.

## Content

Site copy lives in `src/data/content.js`, sourced from the Dancing Roamer
brand deck (services, founder bio, achievements, testimonials, contact
details). The **Behind-the-Scenes Films** service and its illustration
(`src/components/illustrations/ClapperIllustration.jsx`) were newly created
for this site — the deck only mentioned BTS video in passing, so the fuller
service description and the accompanying line-art illustration were written
from scratch to match the existing brand voice and visual style.

The logo itself (`src/components/LogoMark.jsx`, `public/favicon.svg`) is a
redrawn, code-based recreation of the brand's circular line-art mark, so it
renders crisply at any size and recolors through the theme.

## Deploying to GitHub Pages

This repo ships with a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys `dist/` to GitHub
Pages on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo settings → **Pages**, set the source to **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes automatically.
4. In repo settings → **Pages** → **Custom domain**, enter `dancingroamer.in`
   (the `public/CNAME` file already ships this, so GitHub should pick it up
   automatically) and add the corresponding DNS records with your domain
   registrar (an `A`/`ALIAS` record to GitHub Pages' IPs, or a `CNAME`
   record if using a `www` subdomain — see GitHub's custom domain docs).

If you deploy to `https://<user>.github.io/dancing-roamer-website/` instead
of a custom domain, change `base` in `vite.config.js` to
`"/dancing-roamer-website/"` before building.

### Routing note

The site uses React Router's `BrowserRouter` for clean URLs
(`/about`, `/services`, ...). GitHub Pages doesn't natively support
client-side routing on hard refresh/direct links, so `public/404.html` +
a small inline script in `index.html` implement the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect
trick to make deep links and refreshes work correctly.
