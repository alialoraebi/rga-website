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
  { name: 'Penton Audio USA', category: 'Audio Systems', image: '/images/logos/penton.png', url: 'https://penton-usa.com/' },
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
    setShowCategories(false);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
          Our Vendors
        </h1>

        {/* Mobile Category Dropdown */}
        <div className="lg:hidden mb-12">
          <button
            onClick={toggleCategories}
            className="flex items-center justify-between w-full h-14 px-6 bg-white/90 backdrop-blur-sm text-blue-600 font-bold rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <span>{selectedCategory}</span>
            <FaChevronDown className={`transform transition-transform duration-500 ${showCategories ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`mt-4 overflow-hidden transition-all duration-700 ease-in-out ${
              showCategories ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full h-12 min-h-12 max-h-12 text-center flex items-center justify-center font-bold rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                      : 'bg-white/80 text-blue-600 border border-blue-200/30 hover:bg-blue-50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Vendors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 flex-1">
            {filteredVendors.map((vendor, index) => (
              <a
                key={index}
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center transform transition-all duration-500 hover:scale-110"
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 flex items-center justify-center h-40 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:border-blue-400/50">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105 select-none"
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
                <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {vendor.name}
                </p>
              </a>
            ))}
          </div>

          {/* Desktop Category Sidebar */}
          <div className="hidden lg:flex flex-col space-y-4 w-64">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
                className={`w-full h-12 text-center flex items-center justify-center font-bold rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-white/80 text-blue-600 border border-blue-200/30 hover:bg-blue-50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                }`}
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