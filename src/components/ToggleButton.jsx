import React, { useState } from 'react';

export default function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden z-20"> 
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex flex-col justify-center items-center w-10 h-10 group focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-gray-700 transition-transform transform ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-100 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-gray-700 transition-transform transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></div>
        </button>
      </div>
      
      <div className={`md:hidden absolute inset-0 flex flex-col items-center justify-start min-h-screen pt-24 bg-white z-10 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
              className="block text-gray-700 hover:text-blue-500 px-4 py-3 rounded-md text-xl font-bold transition transform duration-300 ease-in-out"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
