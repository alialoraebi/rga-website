// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4AA3F5] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img src="../images/logo.png" alt="Logo" className="h-16 w-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left mb-4 md:mb-0">
            <a href="#home" className="text-gray-200 hover:text-blue-300 px-4 py-3 rounded-md text-base md:text-xl font-bold transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-200 hover:text-blue-300 px-4 py-3 rounded-md text-base md:text-xl font-bold transition-colors duration-200">About</a>
            <a href="#services" className="text-gray-200 hover:text-blue-300 px-4 py-3 rounded-md text-base md:text-xl font-bold transition-colors duration-200">Services</a>
            <a href="#vendors" className="text-gray-200 hover:text-blue-300 px-4 py-3 rounded-md text-base md:text-xl font-bold transition-colors duration-200">Vendors</a>
            <a href="#projects" className="text-gray-200 hover:text-blue-300 px-4 py-3 rounded-md text-base md:text-xl font-bold transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-200 hover:text-blue-300 px-4 py-3 rounded-md text-base md:text-xl font-bold transition-colors duration-200">Contact</a>
          </div>

          {/* Address Details */}
          <div className="text-sm text-center md:text-left">
            <div className="mb-4">
              <p className="font-bold">Doha Qatar Office</p>
              <p>Office No. 5D, Al Kuwari Building</p>
              <p>Al Sadd Street</p>
              <p>P.O. Box 13063</p>
              <p>Doha, Qatar</p>
              <p>Tel: +974-6682-6200</p>
              <p>+974-6682-1968</p>
            </div>
            <div>
              <p className="font-bold">US Office</p>
              <p>2202 Monmouth Boulevard</p>
              <p>Wall Township NJ, 07719</p>
              <p>Phone Numbers:</p>
              <p>Office: (732)775-0777</p>
              <p>Fax: (732)775-7077</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
