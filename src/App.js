import React, { lazy, Suspense, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
const pageComponents = {
  Home: lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home")),
  About: lazy(
    () => import(/* webpackChunkName: "about" */ "./pages/About"),
  ),
  Services: lazy(
    () => import(/* webpackChunkName: "services" */ "./pages/Services"),
  ),
  Vendors: lazy(
    () => import(/* webpackChunkName: "vendors" */ "./pages/Vendors"),
  ),
  Projects: lazy(
    () => import(/* webpackChunkName: "projects" */ "./pages/Projects"),
  ),
  Contact: lazy(
    () => import(/* webpackChunkName: "contacts" */ "./pages/Contact"),
  ),
  Careers: lazy(
    () => import(/* webpackChunkName: "careers" */ "./pages/Careers"),
  ),
  Privacy: lazy(
    () => import(/* webpackChunkName: "privacy" */ "./pages/Privacy"),
  ),
  Terms: lazy(() => import(/* webpackChunkName: "terms" */ "./pages/Terms")),
};

const pageTitles = {
  "/": "Home",
  "/about": "About Us",
  "/services": "Our Services",
  "/vendors": "Our Vendors",
  "/projects": "Our Projects",
  "/contacts": "Contact Us",
  "/careers": "Careers",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Use",
};

function RouteAccessibility() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title = `${pageTitles[pathname] || "Page Not Found"} | RGA Qatar - Robert Guild Associates`;
    if (previousPath.current !== pathname) {
      document.getElementById("main-content").focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "auto" });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return null;
}

export function AppContent({ pages = pageComponents }) {
  const {
    Home,
    About,
    Services,
    Vendors,
    Projects,
    Contact,
    Careers,
    Privacy,
    Terms,
  } = pages;
  return (
    <div className="App">
      <RouteAccessibility />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div
              role="status"
              className="min-h-[70vh] grid place-items-center p-8"
            >
              <span
                aria-hidden="true"
                className="block h-10 w-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin motion-reduce:animate-none"
              />
              <span className="sr-only">Loading...</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
