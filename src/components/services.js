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

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleServiceClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-8 lg:py-16">
      <div
        className="relative w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/audiostuffs.png')", height: '60vh' }}
      >
        <div className="bg-opacity-50 backdrop-filter backdrop-blur-md p-6 lg:p-10 text-center mx-auto w-4/5 max-w-4xl" style={{ borderRadius: '15px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <h1 className="text-4xl lg:text-5xl text-white font-bold">Our Services</h1>
          <p className="text-base lg:text-lg text-white mt-4 lg:mt-6">
            We are specialists in the design and implementation of audio, video, and control systems for airports, schools, businesses, and performance venues.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-32 py-8 space-y-4 lg:space-y-8">
        {services.map((service, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 lg:pb-8">
            <h2 
              className="text-xl lg:text-2xl font-bold text-blue-600 mb-2 cursor-pointer flex justify-between items-center"
              onClick={() => handleServiceClick(index)}
            >
              {service.title}
              <FaChevronDown className={`transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} />
            </h2>

            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openIndex === index ? 'max-h-[600px]' : 'max-h-0'}`}>
              <div className="bg-white p-2 lg:p-4 rounded-lg shadow-lg">
                <img src={service.image} alt={service.title} className="w-full h-40 lg:h-64 object-cover rounded-lg mb-2 lg:mb-4" loading="lazy" />
                <p className="text-sm lg:text-base text-gray-700">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white py-12 lg:py-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">Thinking About Starting a Project?</h2>
        <p className="text-sm lg:text-lg text-gray-700 mb-4 lg:mb-8">
          We would love to hear from you. Get in touch with us today to discuss your project needs and how we can help.
        </p>
        <a href="/contacts" className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Services;