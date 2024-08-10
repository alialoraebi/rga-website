import React, { useState } from 'react';

const vendors = [
  { name: 'JBL Professional', category: 'Audio Systems', image: '/images/jbl.png' },
  { name: 'Crestron', category: 'Control Systems', image: '/images/crestron.png' },
  { name: 'beyerdynamic', category: 'Audio Systems', image: '/images/beyerdynamic.png' },
  { name: 'Countryman', category: 'Audio Systems', image: '/images/countryman.png' },
  { name: 'Lectrosonics', category: 'Audio Systems', image: '/images/lectrosonics.png' },
  { name: 'Yamaha', category: 'Audio Systems', image: '/images/yamaha.png' },
  { name: 'Shure', category: 'Audio Systems', image: '/images/shure.png' },
  { name: 'Sennheiser', category: 'Audio Systems', image: '/images/sennheiser.png' },
  { name: 'Audio-Technica', category: 'Audio Systems', image: '/images/audio-technica.png' },
  { name: 'QSC', category: 'Audio Systems', image: '/images/qsc.png' },
  { name: 'AKG', category: 'Audio Systems', image: '/images/akg.png' },
  { name: 'Bose', category: 'Audio Systems', image: '/images/bose.png' },
  { name: 'Sony', category: 'Video Systems', image: '/images/sony.png' },
  { name: 'Biamp', category: 'Control Systems', image: '/images/biamp.png' },
  { name: 'Meyer Sound', category: 'Audio Systems', image: '/images/meyer-sound.png' },
  { name: 'Dante', category: 'Telecommunications', image: '/images/dante.png' },
  { name: 'Radial Engineering', category: 'Audio Systems', image: '/images/radial-engineering.png' },
  { name: 'Soundcraft', category: 'Audio Systems', image: '/images/soundcraft.png' },
  { name: 'Allen & Heath', category: 'Audio Systems', image: '/images/allen-heath.png' },
  { name: 'Rode Microphones', category: 'Audio Systems', image: '/images/rode-microphones.png' },
];

const categories = [
  'Audio Systems',
  'Video Systems',
  'Control Systems',
  'Telecommunications',
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState('Audio Systems');

  const filteredVendors = vendors.filter(vendor => vendor.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-black mb-8">Vendors</h1>

      <div className="flex flex-col lg:flex-row">
        {/* Vendors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          {filteredVendors.map((vendor, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 p-4 rounded-lg">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <p className="mt-2 text-black">{vendor.name}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-8 lg:mt-0 lg:ml-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`block px-4 py-2 text-sm font-medium text-left mb-2 transition-colors duration-200 ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              } rounded-md`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
