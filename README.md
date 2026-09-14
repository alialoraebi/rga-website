
# Robert Guild Associates Website

Welcome to the official website repository of Robert Guild Associates, a global leader in audio, video, and electronic design, integration, and consulting. With over 30 years of industry experience, our company is headquartered in the United States and operates a regional office in Doha, Qatar. This website is designed to showcase our services, projects, and vendors, providing visitors with detailed information about our capabilities and past work.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Running the Backend](#running-the-backend)
  - [Building for Production](#building-for-production)
- [Notes](#notes)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)

## Overview

This website is built to highlight the extensive range of services offered by Robert Guild Associates. From residential to enterprise-class solutions, we specialize in the planning and installation of electronic systems. The website features our company’s key projects, services, and vendors, presented in a user-friendly and visually appealing manner.

## Features

- **Home Page**
  - **Hero Section**: Features a decorative background video, with a project grid further down the page.
  - **What We Do**: A detailed section outlining the services provided by Robert Guild Associates, including consulting, full system design, and system integration.

- **About Page**
  - Provides information about the company's history, mission, and values.

- **Services Page**
  - A comprehensive list of all services offered, with descriptions and images for each service.

- **Projects Page**
  - Displays a grid of notable projects, with filtering options by category (e.g., Airports, Universities, Hotels).
  - **Project Details**: Clicking on a project opens a modal with a detailed description and images.

- **Vendors Page**
  - Lists key vendors in a grid format, with filtering options by category (e.g., Audio Systems, Control Systems).
  - **Vendor Details**: Clicking on a vendor provides more information and a link to their official website.

- **Contact Section**
  - Contains contact information for both the Qatar and US offices, including phone numbers and addresses.

- **Footer**
  - Navigation footer with links to all main sections of the website and quick access to contact information.

## Project Structure

- `home.js`: Layout and components for the Home page, including the animated hero section and service blocks.
- `about.js`: Content and layout for the About page.
- `services.js`: Manages the display of services, including detailed descriptions.
- `projects.js`: Displays projects in a grid layout, allows filtering by category, and shows project details in a modal.
- `vendors.js`: Displays vendor logos and details in a grid, with filtering options.
- `navbar.js`: Navigation bar providing links to main sections of the site.
- `footer.js`: Footer containing navigation links, contact information, and company details.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **npm**: Node Package Manager, which comes with Node.js.

### Installation

1. Clone the Repository:
   ```bash
   git clone https://github.com/alialoraebi/rga-website
   cd robert-guild-associates-website
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Start the Development Server:
   ```bash
   npm start
   ```
   The website will be available at [http://localhost:3000](http://localhost:3000).

### Running the Backend
1. Start the backend server:
  ```bash
  cd backend
  ```
2. Installing the necessary dependencies
  ```bash
  npm install 
  ```
3. Start the backend server in a separate terminal:
  ```bash
  node server.js
  ```

### Building for Production

To create an optimized build for production, run:
```bash
npm run build
```
This will generate a `build` folder containing the optimized files for deployment.

## Notes

- **Background Video**: The decorative home-page video loops without visible controls or a dark overlay, matching the requested design. It starts paused when reduced motion is requested. Vendor logos appear once each in a static grid.
- **Responsive Design**: The website is fully responsive and should work on various screen sizes, from mobile to desktop.

## Accessibility

The September 2026 remediation addresses the supplied homepage report and related barriers on the other routes. Changes include a single main landmark and skip link, labeled primary navigation, genuinely hidden closed menus and panels, decorative icon handling, keyboard-operable services and projects, a native project dialog with Escape and focus restoration, labeled contact fields and live submission feedback, route titles and focus, reduced-motion support, stronger contrast, and narrow-screen reflow fixes.

Run the regression tests and production build:

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

Initial remediation verification on September 14, 2026 (before the requested removal of the hero overlay and pause control):

- Twelve regression tests cover landmarks, menu state, icons, unique vendor logos, video playback, reduced motion, services, filtering, dialogs, route focus, and contact submission success/failure. The video test was subsequently updated to verify playback without visible controls. Contact requests are mocked; no messages are sent by these tests.
- Axe-core 4.10.3 found no automatic violations on all six routes at 320px and 1440px widths, including all service panels expanded. The open project dialog also had no automatic violations.
- Browser keyboard checks covered the skip link, mobile menu, route focus, dialog focus containment, Escape, and focus restoration. The mobile dialog scrolls within the viewport.
- No horizontal page overflow was detected at those widths. Date-marker gradient endpoints were checked for at least 4.5:1 contrast with white text.

These results are not an ADA compliance certification or a complete WCAG conformance assessment. Axe still marks contrast over gradients/images for manual review. Before claiming conformance, complete a manual WCAG 2.2 AA audit, including VoiceOver/Safari and NVDA/browser testing, zoom and text-spacing checks, forced-colors testing, visual contrast checks across video frames, and image-description review. The background video is treated as decorative; meaningful information added to it needs an equivalent accessible alternative.

The requested control-free, unshaded hero introduces known accessibility limitations: continuous automatic motion without a pause/stop/hide mechanism does not meet WCAG 2.2.2, and white text may not meet WCAG 1.4.3 over bright video frames. Reduced-motion support alone does not resolve the pause requirement. Restore an accessible motion control (which can be outside the hero) or limit automatic motion to five seconds or less, and verify text contrast before claiming conformance.

Deploy the changes and rerun the original scanner against the live site. Verify real contact delivery separately with an authorized test submission; backend availability and delivery were not tested here. Continue accessibility checks when changing content or interactions.

### Follow-Up Accessibility Scan Review

The follow-up accessScan report lists 14 findings. Inspection of the deployed homepage on September 14, 2026 did not reproduce those findings as accessibility defects:

| Report findings | Verified behavior | Disposition |
| --- | --- | --- |
| Three landmark findings | One visible native `main` contains page content, not the header, navigation, or footer. The labeled native `nav` contains the six primary site links. | Retain the correct native landmarks; request scanner review. A wrapper `div` inside `main` does not invalidate it. |
| One hidden-content finding showing `<body></body>` | The live body is populated, visible, and has neither `hidden` nor `aria-hidden`. | Not reproduced; the snapshot alone does not identify a fixable site defect. |
| Ten visible `aria-hidden` findings | Two decorative wave elements and eight decorative service icons convey no information beyond adjacent text. The report also passes the same eight icons under its decorative-graphics rule. | Retain decorative hiding. Removing it would reintroduce unnecessary screen-reader announcements. |

Axe-core 4.10.3 passed `aria-hidden-body`, `aria-hidden-focus`, `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-one-main`, `landmark-unique`, and `region` on the deployed homepage, with no incomplete results for these targeted rules. This does not certify full conformance or guarantee the accessScan score will change. Ask the scanner provider to review the contradictory findings rather than remove valid semantics to change its score.

Service panels now animate their intrinsic height and opacity over 400ms in both directions. Closed panels become inert and `aria-hidden` immediately, then visually hidden when the closing transition finishes. Reduced-motion preferences disable the transition. Browser checks confirmed intermediate opening/closing heights, a final zero-height hidden state, and no automatic axe violations in the checked expanded Services state (image/gradient contrast remains a manual check). All 13 regression tests pass. This follow-up leaves the Home video and both pages' wave implementations unchanged.

## Performance

Images use responsive WebP variants with intrinsic dimensions. Below-fold images load lazily; service panel photos receive a source only after the first expansion and remain loaded for smooth closing animations. The Services hero image loads eagerly at high priority, retaining its centered cover rendering and existing clip path. The Home video and both wave implementations are unchanged.

The unused blocking Three.js CDN script was removed. All routes, including Home, now load as separate JavaScript chunks. Image metadata is split by page, so secondary pages do not download Home code or unrelated image tables. The shared production main bundle is approximately 60.55 kB gzip, down from 68.64 kB. Each route also loads its own chunk (about 1.80-8.78 kB gzip); the main-bundle reduction is not a claim that total Home JavaScript fell by the same amount.

The production build automatically regenerates image assets, compiles React, then renders all six routes into HTML using the existing components:

```bash
npm run build
```

The generated HTML contains page content, responsive image URLs, route-specific titles, and a preload for only that route's script. Above-fold images remain eager. React hydrates the existing content instead of inserting an empty page after JavaScript loads. The build verifies every page has a main heading, valid optimized image references, and a route-chunk preload. It also checks that service panel photos remain deferred and the Home video source is unchanged.

The Sharp generator processes the logo, map, Services hero, and images in the logos, projects, and services directories. Commit both `public/images/optimized` and `src/imageData` with source changes. Run `npm run images:optimize` separately when updating assets during development. Filenames hash the encoded content, so updated images receive new cache keys. Originals remain available as source assets. The current 45 originals total 20.77 MB; their largest WebP variants total 2.13 MB (about 90% less). This compares asset sizes, not a single page's transfer size. Smaller 96px, 128px, and 240px variants and grid-aware sizes avoid sending oversized thumbnails to padded cards.

`vercel.json` gives hashed images and CRA static assets one-year immutable caching. The unchanged video URL uses a one-day cache lifetime with one week of stale-while-revalidate; it is not immutable. HTML retains Vercel's revalidation behavior. These headers take effect after deployment, not in the CRA dev server or the local static preview. Verify the deployed response headers and rerun Lighthouse after deployment.

Vercel rewrites each secondary route to its generated HTML document. Deploy the complete `build` directory using `npm run build`, not just `react-scripts build`, which skips the npm lifecycle steps. For a local production preview use `npx serve build -l 3001` without `-s`; the SPA fallback would serve Home's HTML at every URL and cause hydration mismatches. Other hosts must map `/about`, `/services`, `/vendors`, `/projects`, and `/contacts` to the corresponding `.html` files. `npm start` remains a client-rendered development server, not a production performance preview.

Local production verification: all 13 regression tests and the production build pass. All six routes were checked at 390px and 1440px with no hydration errors, broken loaded images, or horizontal overflow. Each page requests only the shared main script and its own route chunk. A native-viewport request trace confirmed the route preload starts alongside the main script and the logo chooses one appropriately sized variant. With JavaScript blocked, Vendors still contains its heading and images in the initial document. Home requests neither service panel photos nor secondary-route chunks. Services retains its closing animation and fixed wave geometry.

The local Home LCP observer previously identified the video first frame as the final LCP candidate. Its URL is now present in initial HTML, but its original 14.46 MB file and playback behavior are intentionally untouched, so transfer and decoding remain performance constraints. The small application stylesheet still blocks rendering intentionally to avoid unstyled content. No mobile Lighthouse score or complete elimination of its warnings is claimed; deployed throttled testing is still required.

## Contributions

If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## Contact

Feel free to contact us if you have any questions or need further information about our services.

- **US Office**: [+1 (732)775-0777], [2202 Monmouth Boulevard, Wall Township NJ, 07719]
- **Qatar Office**: [+974-4458 1222], [Salwa Road - Midmad Roundabout, West Corner Building, Street 340, Unit 51, Building 155, Zone 43, P.O. Box 37544, Doha, Qatar]
