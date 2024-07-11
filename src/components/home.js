import React, { useEffect, useRef } from 'react';
import { FaSearch, FaCog, FaTruck, FaUserCheck, FaTools, FaPuzzlePiece, FaCheckCircle, FaWrench } from 'react-icons/fa';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import * as THREE from 'three';
import p5 from 'p5';
import debounce from 'lodash.debounce';
import '../App.css'

const Home = () => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
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
                backgroundColor: 0xffffff
            });
        }

        const handleResize = debounce(() => {
            if (vantaEffect.current) {
                vantaEffect.current.resize();
            }
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section ref={vantaRef} className="py-80 hero-section">
                <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img src="../images/office.jpg" alt="Office" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 bg-opacity-30 backdrop-filter backdrop-blur-md p-8" style={{ borderRadius: '50px' }}>
                        <h1 className="text-4xl font-bold text-blue-700 mb-4">H. Robert Guild Associates, Inc.</h1>
                        <p className="text-gray-700 text-lg">
                            We are a global audio, video, and electronic design, integration, and consulting firm. We provide turnkey solutions for corporate, government, education, and residential clients. Our system designs are based on the latest technology and we work with top-tier manufacturers to provide a high-quality customer experience.
                        </p>
                    </div>
                </div>
            </section>
            {/* What We Do Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-8 lg:px-12">
                    <h2 className="text-3xl font-bold text-blue-700 mb-8">What We Do</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaSearch className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Consulting</h3>
                            <p className="text-gray-700">We offer consulting services to help you plan the right systems for your needs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaCog className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Full System Design</h3>
                            <p className="text-gray-700">Our team of experienced designers can create custom system designs to meet your requirements.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaTruck className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Supply and Build</h3>
                            <p className="text-gray-700">We can supply all the equipment you need, or work with your existing equipment.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaUserCheck className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Supervision</h3>
                            <p className="text-gray-700">Our experts oversee projects to ensure everything runs smoothly.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaTools className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Installation</h3>
                            <p className="text-gray-700">Professional installation services for all types of systems.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaPuzzlePiece className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">System Integration</h3>
                            <p className="text-gray-700">We ensure all system components work together seamlessly.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaCheckCircle className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Testing & Commission</h3>
                            <p className="text-gray-700">We test and commission systems to ensure optimal performance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaWrench className="text-4xl text-blue-700 mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Service & Maintenance</h3>
                            <p className="text-gray-700">Ongoing maintenance and support to keep your systems running smoothly.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
