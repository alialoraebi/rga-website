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
      {/* Hero Section - Unchanged */}
      <section className="hero-section flex items-center justify-center overflow-hidden relative" style={{ minHeight: '85vh', padding: '0 20px' }}>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src="../video/audio.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="container mx-auto flex flex-col justify-center items-center text-center z-10 relative">
          <p className="text-white font-bold text-lg lg:text-2xl mb-8 max-w-xl">
            Delivering World-Class Solutions in Audio, Video, and Electronic Systems Integration
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug mb-10">
            Innovating the Future of AV Integration and Consulting: 
            <br />
            Empowering Your Vision with Cutting-Edge Technology.
          </h1>
          <p className="text-white text-sm lg:text-lg max-w-6xl mb-8">
            At Robert Guild Associates Inc., we specialize in providing comprehensive audio, video, and electronic design and integration solutions. Our commitment to excellence and partnerships with leading manufacturers ensure seamless and tailored services for corporate, government, educational, and residential clients worldwide.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-6" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'><path d='M 0 10 Q 25 25 50 10 T 100 10 V 0 H 0 Z' fill='white' /></svg>")`, 
            backgroundRepeat: 'repeat-x', 
            backgroundSize: '100px 25px' 
          }}>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-6" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'><path d='M 0 15 Q 25 0 50 15 T 100 15 V 25 H 0 Z' fill='white' /></svg>")`, 
            backgroundRepeat: 'repeat-x', 
            backgroundSize: '100px 25px'
          }}>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-32">
          <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaSearch, title: 'Consulting', desc: 'We offer consulting services to help you plan the right systems for your needs.' },
              { icon: FaCog, title: 'Full System Design', desc: 'Our team of experienced designers can create custom system designs to meet your requirements.' },
              { icon: FaTruck, title: 'Supply and Build', desc: 'We can supply all the equipment you need, or work with your existing equipment.' },
              { icon: FaUserCheck, title: 'Supervision', desc: 'Our experts oversee projects to ensure everything runs smoothly.' },
              { icon: FaTools, title: 'Installation', desc: 'Professional installation services for all types of systems.' },
              { icon: FaPuzzlePiece, title: 'System Integration', desc: 'We ensure all system components work together seamlessly.' },
              { icon: FaCheckCircle, title: 'Testing & Commission', desc: 'We test and commission systems to ensure optimal performance.' },
              { icon: FaWrench, title: 'Service & Maintenance', desc: 'Ongoing maintenance and support to keep your systems running smoothly.' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              >
                <service.icon className="text-5xl text-blue-600 mb-4 mx-auto transition-colors duration-300 group-hover:text-blue-900" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-50 z-0"></div>
        <div className="relative z-10 text-center px-6 mx-auto max-w-4xl">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
            Who We Work With
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            We take pride in partnering with a diverse array of industry-leading vendors who are at the forefront of innovation and excellence, offering our clients cutting-edge solutions tailored to their unique needs.
          </p>
        </div>
        <div className="marquee-container relative z-10 mt-12 overflow-hidden whitespace-nowrap">
          <div className="marquee-content flex items-center space-x-12 animate-marquee">
            {vendors.concat(vendors).map((vendor, idx) => (
              <img
                key={idx}
                src={vendor.image}
                alt={vendor.name}
                className="h-16 w-32 md:h-24 md:w-48 object-contain select-none"
                style={{ 
                  WebkitUserDrag: 'none',
                  userSelect: 'none',
                  MozUserSelect: 'none',
                  WebkitUserSelect: 'none',
                  msUserSelect: 'none'
                }}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center mt-12">
          <a
            href="/vendors"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Vendors
          </a>
        </div>
      </section>

      {/* Who We Worked For Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="relative z-10 text-center px-6 mx-auto max-w-4xl">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
            Who We Worked For
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            We are proud to have successfully completed projects for some of the most prestigious organizations and institutions, delivering exceptional results that exceed expectations.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {images.map((image, idx) => (
            <div key={idx} className="aspect-w-1 aspect-h-1 group">
              <img
                src={image}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] select-none"
                style={{ 
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
          ))}
        </div>
        <div className="relative z-10 text-center mt-12">
          <a
            href="/projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Projects
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6 pb-1">
          Thinking About Starting a Project?
        </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We would love to hear from you. Get in touch with us today to discuss your project needs and how we can help.
          </p>
          <a
            href="/contacts"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;