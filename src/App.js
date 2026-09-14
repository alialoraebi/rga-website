import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services'
import Vendors from './components/vendors'
import Projects from './components/projects'
import Contact from './components/contacts'

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/vendors" element={<Vendors/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contacts" element={<Contact/>} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
