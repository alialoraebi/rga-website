
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
   git clone https://github.com/yourusername/robert-guild-associates-website.git
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

### Building for Production

To create an optimized build for production, run:
```bash
npm run build
```
This will generate a `build` folder containing the optimized files for deployment.

## Notes

- **Animated Background**: The home page uses Vanta.js for the animated background. This can cause slight delays during page load. If performance becomes an issue, consider optimizing the animation or loading it after critical content.
- **Responsive Design**: The website is fully responsive and should work on various screen sizes, from mobile to desktop.

## Contributions

If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## Contact

Feel free to contact us if you have any questions or need further information about our services.

- **US Office**: [Phone Number], [2202 Monmouth Boulevard, Wall Township NJ, 07719]
- **Qatar Office**: [+974-4458 1222], [Salwa Road - Midmad Roundabout, West Corner Building, Street 340, Unit 51, Building 155, Zone 43, P.O. Box 37544, Doha, Qatar]
