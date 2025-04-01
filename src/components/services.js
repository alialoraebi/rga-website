import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const services = [
  { 
    title: "Consulting", 
    description: "We provide consulting services for new construction and renovation projects. We can help you develop a technology plan that will meet your current and future needs. Our consulting services include audio, video, lighting, and control systems.",
    image: "/images/services/consulting.jpg"
  }, 
  { 
    title: "Full System Design", 
    description: "We provide system design services for audio, video, lighting, and control systems. We can help you develop a detailed system design that will meet your needs and budget. Our system design services include detailed drawings, equipment lists, and system specifications.",
    image: "/images/services/full-system-design.jpg"
  }, 
  { 
    title: "Supply and Build", 
    description: "We provide supply and build services for audio, video, lighting, and control systems. We can help you select the right equipment for your needs and budget. We can also install and commission the system for you. Our supply and build services include equipment sales, installation, and system commissioning.",
    image: "/images/services/supply-build.jpg"
  }, 
  { 
    title: "Supervision", 
    description: "We offer supervision services to ensure that all installations are carried out to the highest standards. Our team will oversee the process to ensure quality and adherence to specifications.",
    image: "/images/services/supervision.jpg"
  }, 
  { 
    title: "Installation", 
    description: "We provide professional installation services for all the systems we design and supply. Our experienced technicians ensure that every component is installed correctly and operates flawlessly.",
    image: "/images/services/installation.jpg"
  }, 
  { 
    title: "System Integration", 
    description: "We offer system integration services to ensure all components work together seamlessly. This includes integrating new systems with existing infrastructure to create a cohesive and efficient setup.",
    image: "/images/services/system-integration.jpg"
  }, 
  { 
    title: "Testing & Commissioning", 
    description: "Before any system goes live, we conduct thorough testing and commissioning to ensure everything operates as expected. We identify and resolve any issues to ensure a smooth handover.",
    image: "/images/services/testing-commissioning.jpg"
  }, 
  { 
    title: "Service & Maintenance", 
    description: "We provide ongoing service and maintenance for the systems we install. This includes regular check-ups, repairs, and upgrades to keep your systems running at their best.",
    image: "/images/services/service-maintenance.jpg"
  },
];

// Preload images
const preloadedImages = {};
services.forEach(service => {
  const img = new Image();
  img.src = service.image;
  preloadedImages[service.image] = img.src;
});

const Services = () => {
  const [openIndices, setOpenIndices] = useState(new Set());

  const handleServiceClick = (index) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // Close if already open
      } else {
        newSet.add(index); // Open if closed
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white py-0 lg:py-0 overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/audiostuffs.png')", height: '60vh' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center mx-auto w-11/12 max-w-4xl p-8 lg:p-12">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="text-transparent bg-clip-text text-white">
              Our Services
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed tracking-wide animate-fade-in-up">
            We are specialists in the design and implementation of audio, video, and control systems, delivering cutting-edge solutions for every need.
          </p>
        </div>
        {/* Flipped sine wave effect at the top */}
        <div
          className="absolute top-0 left-0 w-full h-6"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'><path d='M 0 10 Q 25 25 50 10 T 100 10 V 0 H 0 Z' fill='white' /></svg>")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100px 25px',
          }}
        />
        {/* Sine wave effect at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-6"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'><path d='M 0 15 Q 25 0 50 15 T 100 15 V 25 H 0 Z' fill='white' /></svg>")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100px 25px',
          }}
        />
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 lg:px-32 py-8 space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          >
            {/* Service Title */}
            <h2
              className="text-2xl lg:text-3xl font-bold text-blue-600 p-6 lg:p-8 cursor-pointer flex justify-between items-center transition-colors duration-300 group-hover:text-blue-700"
              onClick={() => handleServiceClick(index)}
            >
              {service.title}
              <FaChevronDown
                className={`text-blue-600 transition-transform duration-300 ease-in-out group-hover:text-blue-700 ${openIndices.has(index) ? 'rotate-180' : ''}`}
              />
            </h2>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ 
                maxHeight: openIndices.has(index) ? '700px' : '0',
                opacity: openIndices.has(index) ? 1 : 0,
                padding: openIndices.has(index) ? '1.5rem 2rem' : '0 2rem',
                marginTop: openIndices.has(index) ? '0' : '-20px',
              }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <img
                  src={preloadedImages[service.image]}
                  alt={`Illustration for ${service.title} service`}
                  className="w-full lg:w-1/2 h-48 lg:h-64 object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <p className="text-base lg:text-lg text-gray-700 flex-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;