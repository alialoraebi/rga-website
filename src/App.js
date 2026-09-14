import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
const pageComponents = {
  Home: lazy(() => import(/* webpackChunkName: "home" */ './components/home')),
  About: lazy(() => import(/* webpackChunkName: "about" */ './components/about')),
  Services: lazy(() => import(/* webpackChunkName: "services" */ './components/services')),
  Vendors: lazy(() => import(/* webpackChunkName: "vendors" */ './components/vendors')),
  Projects: lazy(() => import(/* webpackChunkName: "projects" */ './components/projects')),
  Contact: lazy(() => import(/* webpackChunkName: "contacts" */ './components/contacts')),
};

const pageTitles = {
  '/': 'Home',
  '/about': 'About Us',
  '/services': 'Our Services',
  '/vendors': 'Our Vendors',
  '/projects': 'Our Projects',
  '/contacts': 'Contact Us',
};

function RouteAccessibility() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title = `${pageTitles[pathname] || 'Page Not Found'} | RGA Qatar - Robert Guild Associates`;
    if (previousPath.current !== pathname) {
      document.getElementById('main-content').focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return null;
}

export function AppContent({ pages = pageComponents }) {
  const { Home, About, Services, Vendors, Projects, Contact } = pages;
  return (
      <div className="App">
        <RouteAccessibility />
        <a className="sr-only focus:not-sr-only focus:block focus:p-4" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
        <Suspense fallback={
          <div role="status" className="min-h-[70vh] grid place-items-center p-8">
            <span aria-hidden="true" className="block h-10 w-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin motion-reduce:animate-none" />
            <span className="sr-only">Loading...</span>
          </div>
        }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/vendors" element={<Vendors/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contacts" element={<Contact/>} />
        </Routes>
        </Suspense>
        </main>
        <Footer />
      </div>
  );
}

function App() {
  return <Router><AppContent /></Router>;
}

export default App;
