import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 z-20">
            <img
              className="h-12 w-auto"
              src='../images/logo.png'
              alt="Logo"
            />
          </div>
          <div className="sm:hidden z-20">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex flex-col justify-center items-center w-10 h-10 group focus:outline-none"
            >
              <div className={`w-6 h-0.5 bg-gray-700 transition-transform transform ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-100 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-transform transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></div>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-end flex-1">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:ml-auto text-center sm:text-left">
              <a href="#home" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#vendors" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Vendors</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-start min-h-screen pt-20 bg-white z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            <a href="#home" className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#vendors" className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Vendors</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
