import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Arrow } from "../ui";
import { imageProps } from "../../utils/imageProps";
export const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/vendors", label: "Vendors" },
  { path: "/careers", label: "Careers" },
  { path: "/contacts", label: "Contact Us" },
];
export function Brand() {
  return (
    <span className="brand">
      <img
        className="brand-icon"
        {...imageProps("/images/logo_icon.png", {
          sizes: "(max-width: 699px) 52px, 64px",
          loading: "eager",
        })}
        alt=""
      />
      <span className="brand-name">
        ROBERT GUILD
        <br />
        ASSOCIATES<span>ELECTRONIC SYSTEM SPECIALISTS</span>
      </span>
    </span>
  );
}
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1000px)");
    const close = () => {
      if (desktop.matches) {
        if (
          document
            .getElementById("mobile-navigation")
            ?.contains(document.activeElement)
        )
          document.getElementById("brand-link")?.focus();
        setIsOpen(false);
      }
    };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);
  return (
    <header className="site-header">
      <nav
        aria-label="Primary"
        className="site-container"
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) {
            setIsOpen(false);
            toggleRef.current.focus();
          }
        }}
      >
        <div className="nav-row">
          <NavLink
            id="brand-link"
            to="/"
            aria-label="Robert Guild Associates home"
          >
            <Brand />
          </NavLink>
          <div className="desktop-nav">
            {links.map((link) => (
              <NavLink
                end
                key={link.path}
                to={link.path}
                className={
                  link.path === "/contacts" ? "nav-contact" : "nav-link"
                }
              >
                {link.label}
                {link.path === "/contacts" && <Arrow diagonal />}
              </NavLink>
            ))}
          </div>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden="true">{isOpen ? "−" : "+"}</span> Menu
          </button>
        </div>
        <div id="mobile-navigation" className="mobile-nav" hidden={!isOpen}>
          {links.map((link) => (
            <NavLink
              end
              key={link.path}
              to={link.path}
              onClick={() => {
                setIsOpen(false);
                toggleRef.current.focus();
              }}
            >
              {link.label}
              <Arrow diagonal />
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
