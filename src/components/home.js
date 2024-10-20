import React from 'react';
import '../App.css';
import { FaSearch, FaCog, FaTruck, FaUserCheck, FaTools, FaPuzzlePiece, FaCheckCircle, FaWrench } from 'react-icons/fa';
import { vendors } from './vendors';

const Home = () => {

  const images = [
    '../images/projects/azizhos.png',
    '../images/projects/Barzan-Camp.png',
    '../images/projects/beirut.png',
    '../images/projects/hamad.png',
    '../images/projects/idb.png',
    '../images/projects/king-airport.png',
    '../images/projects/mellon.png',
    '../images/projects/nwest.png',
    '../images/projects/sport.png',
    '../images/projects/catholic-church.png',
    '../images/projects/KFU.png',
    '../images/projects/marriott-hotel.png',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center overflow-hidden relative" style={{ minHeight: '85vh', padding: '0 20px' }}>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src="../video/audio.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />

        {/* Main container */}
        <div className="container mx-auto flex flex-col justify-center items-center text-center z-10 relative">
          {/* First Subheading */}
          <p className="text-white font-bold text-lg lg:text-2xl mb-8 max-w-xl">
            Delivering World-Class Solutions in Audio, Video, and Electronic Systems Integration
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug mb-10">
            Innovating the Future of AV Integration and Consulting: 
            <br />
            Empowering Your Vision with Cutting-Edge Technology.
          </h1>

          {/* Second Subheading / Body */}
          <p className="text-white text-sm lg:text-lg max-w-6xl mb-8">
            At Robert Guild Associates Inc., we specialize in providing comprehensive audio, video, and electronic design and integration solutions. Our commitment to excellence and partnerships with leading manufacturers ensure seamless and tailored services for corporate, government, educational, and residential clients worldwide.
          </p>
        </div>
        {/* Flipped sine wave effect at the top */}
        <div className="absolute top-0 left-0 w-full h-6" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'><path d='M 0 10 Q 25 25 50 10 T 100 10 V 0 H 0 Z' fill='white' /></svg>")`, 
            backgroundRepeat: 'repeat-x', 
            backgroundSize: '100px 25px' 
          }}>
        </div>

        {/* Sine wave effect at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-6" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'><path d='M 0 15 Q 25 0 50 15 T 100 15 V 25 H 0 Z' fill='white' /></svg>")`, 
            backgroundRepeat: 'repeat-x', 
            backgroundSize: '100px 25px'
          }}>
        </div>





      </section>

      {/* What We Do Section */}
      <section className="py-8 pb-24 wwd-section">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Blocks */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaSearch className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Consulting</h3>
              <p className="text-gray-700">We offer consulting services to help you plan the right systems for your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaCog className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Full System Design</h3>
              <p className="text-gray-700">Our team of experienced designers can create custom system designs to meet your requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaTruck className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Supply and Build</h3>
              <p className="text-gray-700">We can supply all the equipment you need, or work with your existing equipment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaUserCheck className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Supervision</h3>
              <p className="text-gray-700">Our experts oversee projects to ensure everything runs smoothly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaTools className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Installation</h3>
              <p className="text-gray-700">Professional installation services for all types of systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaPuzzlePiece className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">System Integration</h3>
              <p className="text-gray-700">We ensure all system components work together seamlessly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaCheckCircle className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Testing & Commission</h3>
              <p className="text-gray-700">We test and commission systems to ensure optimal performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-blue-100">
              <FaWrench className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Service & Maintenance</h3>
              <p className="text-gray-700">Ongoing maintenance and support to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section
        className="py-32 bg-white relative overflow-hidden"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/always-grey.png')",
          backgroundSize: '50px',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="absolute inset-0 bg-blue-600 opacity-50 z-0"></div>
        <div className="relative z-10 text-center py-4 px-6 mx-auto max-w-screen-lg rounded-lg bg-opacity-5 backdrop-filter backdrop-blur-md">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Work With</h2>
          <p className="text-white text-lg">
            We take pride in partnering with a diverse array of industry-leading vendors who are at the forefront of innovation and excellence. Through these collaborations, we are able to offer our clients cutting-edge solutions tailored to meet their unique needs and drive their success in a competitive marketplace.
          </p>
        </div>
        <div className="marquee-container relative z-10 mt-8 overflow-hidden whitespace-nowrap">
          <div className="marquee-content flex items-center space-x-8 animate-marquee">
            {vendors.concat(vendors).map((vendor, idx) => (
              <img
                key={idx}
                src={vendor.image}
                alt={vendor.name}
                className="h-16 w-32 md:h-24 md:w-48 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center mt-6">
          <a
            href="/vendors"
            className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Explore Our Vendors
          </a>
        </div>
      </section>

      {/* Who We Worked For Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 z-0"></div>
        <div className="relative z-10 text-center py-4 px-6 mx-auto max-w-screen-lg rounded-lg bg-opacity-5 backdrop-filter backdrop-blur-md">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Worked For</h2>
          <p className="text-black text-lg">
            We are proud to have successfully completed projects for some of the most prestigious organizations and institutions, delivering exceptional results that meet their specific requirements and exceed expectations.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 mt-8">
          {images.map((image, idx) => (
            <div key={idx} className="aspect-w-1 aspect-h-1">
              <img
                src={image}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="relative z-10 text-center mt-6">
          <a
            href="/projects"
            className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Explore Our Projects
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section>
        <div className="bg-gray-100 py-12 lg:py-16 text-center"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/arches.png')",
          backgroundSize: '100px',
          backgroundRepeat: 'repeat',
        }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4">Thinking About Starting a Project?</h2>
          <p className="text-sm lg:text-lg text-gray-700 mb-4 lg:mb-8">
            We would love to hear from you. Get in touch with us today to discuss your project needs and how we can help.
          </p>
          <a href="/contacts" className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
