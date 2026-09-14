import React, { useState } from 'react';
import { imageProps } from '../imageProps';

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '20px',
  boxShadow: '0 15px 30px rgba(59, 130, 246, 0.2)',
  background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 50%, #ec4899 100%)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const hoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
};

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setNotice('Sending message...');
    setSubmitError('');

    try {
      const response = await fetch('https://rga-backend-ihb6.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotice('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setNotice('');
        setSubmitError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred', error);
      setNotice('');
      setSubmitError('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="container mx-auto lg:flex lg:items-stretch relative z-10 gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 flex flex-col relative z-20 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
            Contact Us
          </h1>
          <p id="contact-required" className="mb-6 text-gray-700">All fields are required.</p>
          <form onSubmit={handleSubmit} aria-describedby="contact-required" className="contact-form space-y-6 flex-grow">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <label className="block w-full lg:w-1/2 text-gray-800 font-medium">
                <span className="block mb-2">First Name</span>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-4 border border-gray-500 rounded-lg bg-blue-50/30 text-gray-800"
                required
              />
              </label>
              <label className="block w-full lg:w-1/2 text-gray-800 font-medium">
                <span className="block mb-2">Last Name</span>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-4 border border-gray-500 rounded-lg bg-blue-50/30 text-gray-800"
                required
              />
              </label>
            </div>
            <label className="block text-gray-800 font-medium">
              <span className="block mb-2">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-500 rounded-lg bg-blue-50/30 text-gray-800"
              required
            />
            </label>
            <label className="block text-gray-800 font-medium">
              <span className="block mb-2">Phone Number</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-gray-500 rounded-lg bg-blue-50/30 text-gray-800"
              required
            />
            </label>
            <label className="block text-gray-800 font-medium">
              <span className="block mb-2">Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 border border-gray-500 rounded-lg bg-blue-50/30 text-gray-800"
              required
            />
            </label>
            <label className="block text-gray-800 font-medium">
              <span className="block mb-2">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-500 rounded-lg bg-blue-50/30 text-gray-800"
              rows="8"
              required
            />
            </label>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : 'Send Message'}
            </button>
          </form>
          <p role="status" aria-atomic="true" className="mt-4 text-gray-800">{notice}</p>
          <p role="alert" aria-atomic="true" className="mt-2 text-red-800">{submitError}</p>
        </div>

        {/* Contact Details */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col relative z-10">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 flex-grow transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
              Contact Details
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Qatar Office</h3>
              <p className="text-gray-700 leading-relaxed">
                Salwa Road - Midmac Roundabout<br />
                West Corner Building<br />
                Street 340, Unit 44, Building 155, Zone 43<br />
                P.O. Box 37544<br />
                Doha, Qatar<br />
                Number: <a href="tel:+97444581222" className="hover:text-blue-600 transition-colors duration-200">+974 4458 1222</a><br/>
                Email: <a href="mailto:info@rgaqatar.com" className="hover:text-blue-600 transition-colors duration-200">info@rgaqatar.com</a>
              </p>
              {/* Google Map for Qatar Office */}
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/place/25%C2%B015'45.3%22N+51%C2%B029'44.4%22E/@25.2625813,51.4944266,18z/data=!4m4!3m3!8m2!3d25.2625833!4d51.4956667?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    {...imageProps('/images/rga-map.png', { sizes: '(min-width: 1024px) 40vw, calc(100vw - 96px)' })}
                    alt="Map of Our Location"
                    style={{ 
                      ...containerStyle, 
                      ...(isHovered ? hoverStyle : {}),
                      WebkitUserDrag: 'none',
                      userSelect: 'none',
                      MozUserSelect: 'none',
                      WebkitUserSelect: 'none',
                      msUserSelect: 'none'
                    }}
                    className="transform transition-all duration-500 hover:scale-105 select-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">US Office</h3>
              <p className="text-gray-700 leading-relaxed">
                2202 Monmouth Boulevard<br />
                Wall Township NJ, 07719<br />
                Number: <a href="tel:+19084893470" className="hover:text-blue-600 transition-colors duration-200">+1 (908) 489-3470</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;