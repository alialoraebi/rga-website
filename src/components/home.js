import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaCog, FaTruck, FaUserCheck, FaTools, FaPuzzlePiece, FaCheckCircle, FaWrench } from 'react-icons/fa';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import * as THREE from 'three';
import p5 from 'p5';
import debounce from 'lodash.debounce';
import '../App.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { vendors } from './vendors';


const Home = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = debounce(() => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);

      // Only initialize Vanta if not on mobile
      if (!mobileCheck && !vantaEffect.current && vantaRef.current) {
        vantaEffect.current = TOPOLOGY({
          el: vantaRef.current,
          THREE,
          p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x1A80E5,
          backgroundColor: 0xffffff,
        });
      } else if (mobileCheck && vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    }, 100);

    handleResize(); // Initialize on mount

    window.addEventListener('resize', handleResize);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

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

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: 'block', position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', zIndex: '1000', width: '50px', height: '50px' }}
        src="../images/icons8-forward-94.png"
        alt="next"
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: 'block', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', zIndex: '1000', width: '50px', height: '50px' }}
        src="../images/icons8-back-94.png"
        alt="prev"
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={vantaRef} className={`py-24 hero-section overflow-hidden relative ${isMobile ? 'bg-static-image' : ''}`}>
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center z-10 relative">
          <div className="md:w-1/2">
            {!isMobile && (
              <Slider {...settings}>
                {images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={`Office ${idx}`} className="slider-image" />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-14 bg-opacity-30 backdrop-filter backdrop-blur-md p-8" style={{ borderRadius: '50px' }}>
            <h1 className="text-4xl font-bold text-blue-700 mb-4 text-left sm:text-center">H. Robert Guild Associates Inc.</h1>
            <p className="text-gray-700 text-lg">
            H. Robert Guild Associates Inc. is a global firm specializing in audio, video, and electronic design, integration, and consulting. We provide turnkey solutions tailored to the unique needs of corporate, government, education, and residential clients. Our designs leverage the latest technology, and we partner with top-tier manufacturers to ensure a high-quality, seamless customer experience.
            </p>
          </div>
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
        <div className="bg-blue-300 py-12 lg:py-16 text-center">
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
