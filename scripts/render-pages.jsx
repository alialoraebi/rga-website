import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppContent } from '../src/App';
import Home from '../src/components/home';
import About from '../src/components/about';
import Services from '../src/components/services';
import Vendors from '../src/components/vendors';
import Projects from '../src/components/projects';
import Contact from '../src/components/contacts';
import Careers from '../src/components/careers';

const pages = { Home, About, Services, Vendors, Projects, Contact, Careers };

export function renderPage(pathname) {
  return renderToString(
    <StaticRouter location={pathname}>
      <AppContent pages={pages} />
    </StaticRouter>
  );
}
