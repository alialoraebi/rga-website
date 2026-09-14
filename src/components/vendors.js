import React, { useState } from 'react';
import { cardImageSizes, createImageProps } from '../imageProps';
import images from '../imageData/vendors.json';

import { vendors } from '../catalogData';
export { vendors } from '../catalogData';

const imageProps = createImageProps(images);

const categories = [
  'Show All', 
  'Audio Systems',
  'Video Systems',
  'Control Systems',
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');

  const filteredVendors = selectedCategory === 'Show All'
    ? vendors
    : vendors.filter(vendor => vendor.category === selectedCategory);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 pb-1 leading-relaxed">
            Our Vendors
          </h1>
        </div>


        {/* Mobile Category Dropdown */}
        <div className="lg:hidden mb-12">
          <label htmlFor="vendor-category" className="block font-bold text-gray-800 mb-2">Vendor category</label>
          <select id="vendor-category" value={selectedCategory} onChange={(event) => handleCategorySelect(event.target.value)} className="w-full h-14 px-4 text-blue-600 bg-white border border-gray-500 rounded-lg">
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </div>
        <p role="status" className="text-gray-700 mb-6">{filteredVendors.length} vendors</p>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Vendors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 flex-1 min-w-0">
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
                    {...imageProps(vendor.image, { sizes: cardImageSizes, loading: index < 6 ? 'eager' : 'lazy' })}
                    alt=""
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
          <div role="group" aria-label="Vendor category" className="hidden lg:flex flex-col space-y-4 w-64 shrink-0">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                aria-pressed={selectedCategory === category}
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