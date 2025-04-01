import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToTop = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <footer className="bg-white text-gray-800 py-12 px-4 sm:px-8 lg:px-20 border-t border-blue-200/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex justify-center md:justify-start">
          <img
            src="../images/logo.png"
            alt="Robert Guild Associates Logo"
            className="w-80 sm:w-96 h-auto object-contain max-w-none select-none"
            style={{ 
              maxWidth: '100%', 
              width: '400px',
              WebkitUserDrag: 'none',
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              msUserSelect: 'none'
            }}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Navigation and Address */}
        <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-12">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Quick Links
            </h3>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/services', label: 'Services' },
              { path: '/vendors', label: 'Vendors' },
              { path: '/projects', label: 'Projects' },
              { path: '/contacts', label: 'Contact Us' },
            ].map((link, index) => (
              <button
                key={index}
                onClick={() => handleScrollToTop(link.path)}
                className={`w-full text-center flex items-center justify-center font-medium rounded-lg transition-all duration-300 px-4 py-2 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-white/80 text-blue-600 border border-blue-200/30 hover:bg-blue-50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Address Details */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-4">
              Contact Us
            </h3>
            <div className="text-sm text-gray-700 space-y-6">
              <div>
                <p className="font-semibold text-gray-800">Qatar Office</p>
                <p>Salwa Road - Midmac Roundabout</p>
                <p>West Corner Building</p>
                <p>Street 340, Unit 44, Building 155, Zone 43</p>
                <p>P.O. Box 37544</p>
                <p>Doha, Qatar</p>
                <p>Number: <a href="tel:+97444987522" className="hover:text-blue-600 transition-colors duration-200">+974-4498 7522</a></p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">US Office</p>
                <p>2202 Monmouth Boulevard</p>
                <p>Wall Township NJ, 07719</p>
                <p>Number: <a href="tel:+19084893470" className="hover:text-blue-600 transition-colors duration-200">+1 (908) 489-3470</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-600 bg-blue-50/50 inline-block px-6 py-2 rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.1)]">
          © {new Date().getFullYear()} Robert Guild Associates. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;