import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppContent } from '../src/App';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Vendors from '../src/pages/Vendors';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';
import Careers from '../src/pages/Careers';
import Privacy from '../src/pages/Privacy';
import Terms from '../src/pages/Terms';

const pages = { Home, About, Services, Vendors, Projects, Contact, Careers, Privacy, Terms };

export function renderPage(pathname) {
  return renderToString(
    <StaticRouter location={pathname}>
      <AppContent pages={pages} />
    </StaticRouter>
  );
}
