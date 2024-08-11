import React, { useState } from 'react';

const vendors = [
  { name: 'JBL Professional', category: 'Audio Systems', image: '/images/logos/jblpro.png' },
  { name: 'Crestron', category: 'Control Systems', image: '/images/logos/crestron.png' },
  { name: 'beyerdynamic', category: 'Audio Systems', image: '/images/logos/beyerdynamic.png' },
  { name: 'Countryman', category: 'Audio Systems', image: '/images/logos/countryman.png' },
  { name: 'Lectrosonics', category: 'Audio Systems', image: '/images/logos/lectrosonics.png' },
  { name: 'Yamaha', category: 'Audio Systems', image: '/images/logos/yamaha.png' },
  { name: 'Shure', category: 'Audio Systems', image: '/images/logos/shure.png' },
  { name: 'Sennheiser', category: 'Audio Systems', image: '/images/logos/sennheiser.png' },
  { name: 'Audio-Technica', category: 'Audio Systems', image: '/images/logos/audio-technica.png' },
  { name: 'QSC', category: 'Audio Systems', image: '/images/logos/qsc.png' },
  { name: 'AKG', category: 'Audio Systems', image: '/images/logos/akg.png' },
  { name: 'Bose', category: 'Audio Systems', image: '/images/logos/bose.png' },
  { name: 'Sony', category: 'Video Systems', image: '/images/logos/sony.png' },
  { name: 'Biamp', category: 'Control Systems', image: '/images/logos/biamp.png' },
  { name: 'Meyer Sound', category: 'Audio Systems', image: '/images/logos/meyer-sound.png' },
  { name: 'Dante', category: 'Telecommunications', image: '/images/logos/dante.png' },
  { name: 'Radial Engineering', category: 'Audio Systems', image: '/images/logos/radial-engineering.png' },
  { name: 'Soundcraft', category: 'Audio Systems', image: '/images/logos/soundcraft.png' },
  { name: 'Allen & Heath', category: 'Audio Systems', image: '/images/logos/allen-heath.png' },
  { name: 'Rode Microphones', category: 'Audio Systems', image: '/images/logos/rode-microphones.png' },
];

const categories = [
  'Show All', 
  'Audio Systems',
  'Video Systems',
  'Control Systems',
  'Telecommunications',
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');

  const filteredVendors = selectedCategory === 'Show All'
    ? vendors
    : vendors.filter(vendor => vendor.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-blue-600 text-3xl font-bold text-black mb-8">Vendors</h1>

      <div className="flex flex-col lg:flex-row">
        {/* Vendors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          {filteredVendors.map((vendor, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center" style={{ height: '150px' }}>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="object-contain max-w-full max-h-full"
                  style={{ margin: 'auto' }}
                />
              </div>
              <p className="mt-2 text-black">{vendor.name}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`w-40 h-12 text-center flex items-center justify-center font-medium transition-colors duration-200 ${
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
