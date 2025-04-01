import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
          Our company, headquartered in the United States with a regional office in Doha, Qatar, boasts over 31 years of industry experience. We are a global leader in audio, video, and electronic design, integration, and consulting, specializing in planning and installing electronic systems that range from residential to enterprise-class solutions.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="mb-24 relative">
        <h2 className="text-4xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
          Our Journey
        </h2>
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 z-0 animate-glow"></div>

          {/* Timeline Items */}
          <div className="space-y-24 relative">
            {[
              { year: "1980", color: "from-blue-500 to-indigo-600", title: "Founded in the USA", description: "New York Subway Public Address - USA" },
              { year: "1983", color: "from-green-500 to-teal-600", title: "Islamic Development Bank - KSA" },
              { year: "1997", color: "from-yellow-500 to-orange-600", title: "Beirut International Airport - Lebanon" },
              { year: "2004", color: "from-red-500 to-rose-600", title: "Khalifa Sports Hall - Qatar", description: "Opened office in Qatar" },
              { year: "2006 - 2010", color: "from-purple-500 to-violet-600", title: "Carnegie Mellon & Northwestern University Qatar" },
              { year: "2010", color: "from-teal-500 to-cyan-600", title: "Hamad International Airport Qatar" },
              { year: "2018 - Present", color: "from-orange-500 to-amber-600", title: "Amiri Guard Base", description: "Continued international expansion across the Gulf Region and Africa" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-12 relative ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'text-left'} group`}
              >
                {/* Glowing Square Marker */}
                <div className="relative flex-shrink-0">
                  {/* Connecting Glow Effect */}
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-full' : 'left-full'} w-12 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
                  
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 transform transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] relative`}>
                    <span className="text-white font-bold text-lg tracking-wider text-center px-2 leading-tight">
                      {item.year.split(' ').map((part, i) => (
                        <span key={i} className="block">{part}</span>
                      ))}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-300/30 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                  <h3 className="text-3xl font-bold text-blue-600 mb-4 tracking-tight">{item.title}</h3>
                  {item.description && (
                    <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-24">
        <h2 className="text-4xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6">
          Our Industry Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            "IED Master Certified Contractor",
            "Crown IQ",
            "QSC Venue Manager",
            "QSC Level 2 Designer",
            "SynAudCon",
            "TEF Systems & Software",
            "Symetrix Software Design",
            "Crestron Programming",
            "Dante Certified"
          ].map((certification, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-blue-200/50 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-lg font-semibold text-gray-800 tracking-wide">{certification}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;