import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const vendors = [
  { name: 'AKG', category: 'Audio Systems', image: '/images/logos/akg.png', url: 'https://www.akg.com/' },
  { name: 'AtlasIED', category: 'Audio Systems', image: '/images/logos/atlasied.png', url: 'https://www.atlasied.com/' },
  { name: 'Beyerdynamic', category: 'Audio Systems', image: '/images/logos/beyerdynamic.png', url: 'https://north-america.beyerdynamic.com/' },
  { name: 'Biamp', category: 'Control Systems', image: '/images/logos/biamp.png', url: 'https://www.biamp.com/' },
  { name: 'Countryman', category: 'Audio Systems', image: '/images/logos/countryman.png', url: 'https://www.countryman.com/' },
  { name: 'Crestron', category: 'Control Systems', image: '/images/logos/crestron.png', url: 'https://www.crestron.com/' },
  { name: 'Crown', category: 'Audio Systems', image: '/images/logos/crown.png', url: 'https://www.crownaudio.com/' },
  { name: 'Draper', category: 'Video Systems', image: '/images/logos/draper.png', url: 'https://www.draperinc.com/' },
  { name: 'Electro-Voice', category: 'Audio Systems', image: '/images/logos/electro-voice.png', url: 'https://www.electrovoice.com/' },
  { name: 'Harman International', category: 'Audio Systems', image: '/images/logos/harman.png', url: 'https://www.harman.com/' },
  { name: 'JBL Professional', category: 'Audio Systems', image: '/images/logos/jblpro.png', url: 'https://jblpro.com/' },
  { name: 'Legrand AV', category: 'Video Systems', image: '/images/logos/legrandav.png', url: 'https://www.legrandav.com/' },
  { name: 'Mackie', category: 'Audio Systems', image: '/images/logos/mackie.png', url: 'https://mackie.com/' },
  { name: 'Middle Atlantic Products', category: 'Audio Systems', image: '/images/logos/middle-atlantic.png', url: 'https://www.middleatlantic.com/' },
  { name: 'Panasonic', category: 'Video Systems', image: '/images/logos/panasonic.png', url: 'https://www.panasonic.com/' },
  { name: 'Penton Audio USA', category: 'Audio Systems', image: '/images/logos/penton.png', url: 'https://www.penton.com/' },
  { name: 'QSC', category: 'Audio Systems', image: '/images/logos/qsc.png', url: 'https://www.qsc.com/' },
  { name: 'RDL (Radio Design Labs)', category: 'Audio Systems', image: '/images/logos/rdl.png', url: 'https://www.rdlnet.com/' },
  { name: 'Renkus-Heinz', category: 'Audio Systems', image: '/images/logos/renkus-heinz.png', url: 'https://www.renkus-heinz.com/' },
  { name: 'Shure', category: 'Audio Systems', image: '/images/logos/shure.png', url: 'https://www.shure.com/' },
  { name: 'Soundcraft', category: 'Audio Systems', image: '/images/logos/soundcraft.png', url: 'https://www.soundcraft.com/' }
];

const categories = [
  'Show All', 
  'Audio Systems',
  'Video Systems',
  'Control Systems',
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    setSelectedCategory('Show All');
  }, []);

  const filteredVendors = selectedCategory === 'Show All'
    ? vendors
    : vendors.filter(vendor => vendor.category === selectedCategory);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategories(false); // Hide categories after selection
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-blue-600 text-3xl font-bold text-black mb-4">Vendors</h1>

        {/* Categories Button for Mobile View */}
        <div className="lg:hidden mb-8">
          <button
            onClick={toggleCategories}
            className="flex items-center justify-between w-full h-12 px-4 bg-gray-200 text-black rounded-md font-medium"
          >
            <span>{selectedCategory}</span>
            <FaChevronDown className={`transform transition-transform ${showCategories ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`flex flex-col mt-2 space-y-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
              showCategories ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
                className={`w-full h-12 text-center flex items-center justify-center font-medium transition-colors duration-200 ${
                  selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                } rounded-md`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Vendors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
            {filteredVendors.map((vendor, index) => (
              <a
                key={index}
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center transform transition duration-500 hover:scale-105"
              >
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center" style={{ height: '150px' }}>
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="object-contain max-w-full max-h-full"
                    style={{ margin: 'auto' }}
                  />
                </div>
                <p className="mt-2 text-black">{vendor.name}</p>
              </a>
            ))}
          </div>

          {/* Categories for Desktop View */}
          <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col space-y-2 hidden lg:flex">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
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
    </div>
  );
};

export default Vendors;