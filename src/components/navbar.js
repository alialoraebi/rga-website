import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-shrink-0 z-20">
            <img
              className="h-20 w-auto"
              src='../images/logo.png'
              alt="Logo"
            />
          </div>
          <div className="md-lg:hidden z-20"> 
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex flex-col justify-center items-center w-10 h-10 group focus:outline-none"
            >
              <div className={`w-6 h-0.5 bg-gray-700 transition-transform transform ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-100 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-transform transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></div>
            </button>
          </div>
          <div className="hidden md-lg:flex md-lg:items-center md-lg:justify-end flex-1 ml-20">
          <div className="flex flex-col md-lg:flex-row space-y-4 md-lg:space-y-0 md-lg:space-x-4 md-lg:ml-auto text-center md-lg:text-left">
              <a href="#home" className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold">Services</a>
              <a href="#vendors" className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold">Vendors</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-base md-lg:text-xl font-bold">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`md-lg:hidden absolute inset-0 flex flex-col items-center justify-start min-h-screen pt-24 bg-white z-10 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="px-4 pt-2 pb-3 space-y-6 text-center">
          {['home', 'about', 'services', 'vendors', 'projects', 'contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                transitionDelay: `${isOpen ? index * 200 : 0}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
              }}
              className={`block text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-xl font-bold transition transform duration-300 ease-in-out`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
