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
    <footer
      className="text-white py-8"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/shattered.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundColor: '#4f6c8f',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:flex md:items-center md:justify-start md:w-1/3">
          <img src="../images/logo.png" alt="Logo" className="w-auto object-contain" />
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-2/6 footnav-links">
          <div className="flex flex-row justify-between w-full">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 text-left mb-4 md:mb-0 md:mr-8">
              <button
                onClick={() => handleScrollToTop('/')}
                className="text-gray-200 hover:text-blue-500 px-2 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollToTop('/about')}
                className="text-gray-200 hover:text-blue-500 px-2 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToTop('/services')}
                className="text-gray-200 hover:text-blue-500 px-2 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleScrollToTop('/vendors')}
                className="text-gray-200 hover:text-blue-500 px-2 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-left"
              >
                Vendors
              </button>
              <button
                onClick={() => handleScrollToTop('/projects')}
                className="text-gray-200 hover:text-blue-500 px-2 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleScrollToTop('/contacts')}
                className="text-gray-200 hover:text-blue-500 px-2 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-left"
              >
                Contact Us
              </button>
            </div>

            {/* Address Details */}
            <div className="text-sm text-left mb-4 md:mb-0 md:ml-4 address-container">
              <div className="mb-4">
                <p className="font-bold">Qatar Office</p>
                <p>Salwa Road - Midmad Roundabout</p>
                <p>West Corner Building</p>
                <p>Street 340, Unit 51, Building 155, Zone 43</p>
                <p>P.O. Box 37544</p>
                <p>Doha, Qatar</p>
                <p>Number: +974-4458 1222</p>
              </div>
              <div>
                <p className="font-bold">US Office</p>
                <p>2202 Monmouth Boulevard</p>
                <p>Wall Township NJ, 07719</p>
                <p>Phone Numbers:</p>
                <p>Number: (732)775-0777</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-sm text-gray-200 mt-4 md:mt-0 md:order-first md:self-start">
        &copy; {new Date().getFullYear()} Robert Guild Associates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
