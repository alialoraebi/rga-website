import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'; // Add Marker

const containerStyle = {
  width: '100%',
  height: '200px',
  borderRadius: '20px',
};

const centerQatar = {
  lat: 25.262575,  
  lng: 51.495672,  
};

function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${centerQatar.lat},${centerQatar.lng}`;
    if (window.confirm("Do you want to open this location in Google Maps?")) {
      window.open(googleMapsUrl, '_blank');
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://rga-backend-ihb6.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred', error);
      alert('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:flex lg:items-stretch relative z-10">
        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col relative z-20">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full lg:w-1/2 p-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full lg:w-1/2 p-4 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
              rows="7"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0 flex flex-col relative z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-grow">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Details</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Qatar Office</h3>
              <p className="text-gray-700">
                Salwa Road - Midmac Roundabout<br />
                West Corner Building<br />
                Street 340, Unit 44, Building 155, Zone 43<br />
                P.O. Box 37544<br />
                Doha, Qatar<br />
                Number: +974-4498 7522<br/>
                Email: info@rgaqatar.com
              </p>
              {/* Google Map for Qatar Office */}
              {isLoaded && (
                <div className="mt-4">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={centerQatar}
                    zoom={18}
                    options={{
                      streetViewControl: false,  
                      mapTypeControl: false,    
                    }}
                  >
                    {/* Marker for Qatar Location */}
                    <Marker
                      position={centerQatar}
                      onClick={handleMarkerClick}
                    />
                  </GoogleMap>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">US Office</h3>
              <p className="text-gray-700">
                2202 Monmouth Boulevard<br />
                Wall Township NJ, 07719<br />
                Number: +1 (908)489-3470
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
