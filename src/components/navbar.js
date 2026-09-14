import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { imageProps } from '../imageProps';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/vendors', label: 'Vendors' },
  { path: '/projects', label: 'Projects' },
  { path: '/contacts', label: 'Contact Us' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1186.25px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="bg-white relative z-30">
    <nav aria-label="Primary" onKeyDown={(event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current.focus();
      }
    }}>
      <div className="max-w-7.5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-between h-20">
          <div className="min-w-0 mr-4 z-50">
            <img
              className="h-auto max-h-20 w-auto max-w-full"
              {...imageProps('/images/logo.png', { sizes: '(max-width: 400px) 65vw, 320px', loading: 'eager', fetchpriority: 'high' })}
              alt="Robert Guild Associates"
            />
          </div>
          <div className="md-lg:hidden shrink-0 z-50">
            <button 
              ref={toggleRef}
              type="button"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)} 
              className="flex justify-center items-center w-11 h-11 text-gray-700 text-2xl"
            >
              {isOpen ? <FaTimes aria-hidden="true" focusable="false" /> : <FaBars aria-hidden="true" focusable="false" />}
            </button>
          </div>
          <div className="hidden md-lg:flex md-lg:items-center md-lg:justify-end flex-1 ml-20">
            <div className="flex flex-col md-lg:flex-row space-y-4 md-lg:space-y-0 md-lg:space-x-4 md-lg:ml-auto text-center md-lg:text-left">
              {links.map((link) => (
                <NavLink key={link.path} end to={link.path} className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold transition-colors duration-200">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-navigation" hidden={!isOpen} className={isOpen ? 'md-lg:hidden bg-white' : 'hidden'}>
        <div className="px-4 pt-2 pb-3 space-y-6 text-center">
          {links.map((link) => (
            <NavLink
              key={link.path}
              end
              to={link.path}
              onClick={() => {
                setIsOpen(false);
                toggleRef.current.focus();
              }}
              className={`block text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-xl font-bold transition transform duration-300 ease-in-out`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
