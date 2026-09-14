
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
  - **Hero Section**: Features an animated background using Vanta.js with a topology effect and a slider showcasing key projects.
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

## Contributions

If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## Contact

Feel free to contact us if you have any questions or need further information about our services.

- **US Office**: [+1 (732)775-0777], [2202 Monmouth Boulevard, Wall Township NJ, 07719]
- **Qatar Office**: [+974-4458 1222], [Salwa Road - Midmad Roundabout, West Corner Building, Street 340, Unit 51, Building 155, Zone 43, P.O. Box 37544, Doha, Qatar]
