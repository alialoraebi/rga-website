import React from 'react';

const services = [
  {
    title: "Consulting",
    description: "We provide consulting services for new construction and renovation projects. We can help you develop a technology plan that will meet your current and future needs. Our consulting services include audio, video, lighting, and control systems.",
  },
  {
    title: "Full System Design",
    description: "We provide system design services for audio, video, lighting, and control systems. We can help you develop a detailed system design that will meet your needs and budget. Our system design services include detailed drawings, equipment lists, and system specifications.",
  },
  {
    title: "Supply and Build",
    description: "We provide supply and build services for audio, video, lighting, and control systems. We can help you select the right equipment for your needs and budget. We can also install and commission the system for you. Our supply and build services include equipment sales, installation, and system commissioning.",
  },
  {
    title: "Supervision",
    description: "We offer supervision services to ensure that all installations are carried out to the highest standards. Our team will oversee the process to ensure quality and adherence to specifications.",
  },
  {
    title: "Installation",
    description: "We provide professional installation services for all the systems we design and supply. Our experienced technicians ensure that every component is installed correctly and operates flawlessly.",
  },
  {
    title: "System Integration",
    description: "We offer system integration services to ensure all components work together seamlessly. This includes integrating new systems with existing infrastructure to create a cohesive and efficient setup.",
  },
  {
    title: "Testing & Commissioning",
    description: "Before any system goes live, we conduct thorough testing and commissioning to ensure everything operates as expected. We identify and resolve any issues to ensure a smooth handover.",
  },
  {
    title: "Service & Maintenance",
    description: "We provide ongoing service and maintenance for the systems we install. This includes regular check-ups, repairs, and upgrades to keep your systems running at their best.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div
        className="relative w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/audiostuffs.png')", height: '75vh' }}
        >
            <div className="mt-80 bg-opacity-20 backdrop-filter backdrop-blur-md p-6" style={{ borderRadius: '25px', width: '73%' }}>
                <h1 className="text-5xl text-white font-bold text-left">Our Services</h1>
                <p className="text-lg text-white mt-4 text-left">
                We are specialists in the design and implementation of audio, video, and control systems for churches, schools, businesses, and performance venues.
                </p>
            </div>
        </div>
      
      <div className="container mx-auto px-32 py-12">
        {services.map((service, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">{service.title}</h2>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;