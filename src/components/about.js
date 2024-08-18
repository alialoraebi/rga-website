import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-20">
      <h2 className="text-5xl font-bold text-blue-600 mb-12 text-center">About</h2>

      <div className="mb-12 px-4 lg:px-8 max-w-4xl mx-auto">
        <p className="text-lg mb-32 text-left lg:text-left">
          Our company, headquartered in the United States with a regional office in Doha, Qatar, boasts over 30 years of industry experience. We are a global leader in audio, video, and electronic design, integration, and consulting, specializing in planning and installing electronic systems that range from residential to enterprise-class solutions.
        </p>
      </div>

      <div className="mb-32">
        <h3 className="text-3xl font-semibold mb-8 text-center text-blue-600">Timeline</h3>
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Vertical line on mobile, horizontal line on desktop */}
          <div className="absolute w-1 lg:w-full h-full lg:h-1 bg-gray-300 lg:top-1/3"></div>
          <div className="flex flex-col lg:flex-row justify-between w-full items-center lg:items-start">
            {[
              { year: "1980", color: "bg-blue-600", title: "Founded in USA", description: "New York Subway Public Address - USA" },
              { year: "1983", color: "bg-blue-600", title: "Islamic Development Bank - KSA" },
              { year: "1997", color: "bg-blue-600", title: "Beirut International Airport - Lebanon" },
              { year: "2004", color: "bg-blue-600", title: "Khalifa Sports Hall - Qatar", description: "Opened office in Qatar" },
              { year: "2006-2010", color: "bg-blue-600", title: "Carnegie Mellon & Northwestern University Qatar" },
              { year: "2010", color: "bg-blue-600", title: "Hamad International Airport Qatar" },
              { year: "2018 - Present", color: "bg-blue-600", title: "Amiri Guard Base", description: "Continued international expansion across the Gulf Region and Africa" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center lg:items-center w-full lg:w-1/7 mb-8 lg:mb-0 relative">
                {/* Year */}
                <h4 className="text-2xl font-semibold mb-2 lg:mb-0 text-center">{item.year}</h4>
                {/* Circle on the line */}
                <div className="relative mb-4 lg:mb-2 flex flex-col items-center">
                    <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center`}>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                </div>
                {/* Description */}
                <div className="text-center">
                  <p className="text-xs font-semibold">{item.title}</p>
                  {item.description && <p className="text-xs">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-4 text-blue-600 text-center lg:text-left">Our Industry Certifications</h3>
        <ul className="list-disc pl-5 text-lg">
          <li>IED master certified contractor</li>
          <li>Crown IQ</li>
          <li>QSC venue manager</li>
          <li>QSC level 2 designer</li>
          <li>SynAudCon</li>
          <li>TEF systems and software</li>
          <li>Symetrix software design</li>
          <li>Crestron programming</li>
          <li>Dante certified</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
