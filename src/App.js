import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
const About = lazy(() => import('./components/about'));
const Services = lazy(() => import('./components/services'));
const Vendors = lazy(() => import('./components/vendors'));
const Projects = lazy(() => import('./components/projects'));
const Contact = lazy(() => import('./components/contacts'));

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

function App() {
  return (
    <Router>
      <div className="App">
        <RouteAccessibility />
        <a className="sr-only focus:not-sr-only focus:block focus:p-4" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<div role="status" className="min-h-screen p-8">Loading...</div>}>
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
    </Router>
  );
}

export default App;
