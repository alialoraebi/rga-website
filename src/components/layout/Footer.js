import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Brand, links } from "./Navbar";
export default function Footer() {
  const location = useLocation();
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Thoughtful engineering.
              <br />
              Extraordinary experiences.
            </p>
            <a className="footer-email" href="mailto:info@rgaqatar.com">
              info@rgaqatar.com
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h2>Explore</h2>
            <div className="footer-links">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    if (location.pathname === link.path) {
                      document
                        .getElementById("main-content")
                        .focus({ preventScroll: true });
                      window.scrollTo({ top: 0, behavior: "auto" });
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="footer-locations">
            <h2>Our offices</h2>
            <div className="footer-office-grid">
              <div className="footer-office">
                <p className="footer-office-label">01 / REGIONAL OFFICE</p>
                <h3>Doha, Qatar</h3>
                <address>
                  Salwa Road, Midmac Roundabout
                  <br />
                  West Corner Building
                  <br />
                  Street 340, Unit 44, Building 155
                  <br />
                  Zone 43, P.O. Box 37544
                </address>
                <a href="tel:+97444581222">+974 4458 1222</a>
              </div>
              <div className="footer-office">
                <p className="footer-office-label">02 / UNITED STATES</p>
                <h3>Wall Township, New Jersey</h3>
                <address>
                  2202 Monmouth Boulevard
                  <br />
                  Wall Township
                  <br />
                  New Jersey 07719
                </address>
                <a href="tel:+19084893470">+1 (908) 489-3470</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Robert Guild Associates. All rights
            reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
