import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaArrowLeft } from 'react-icons/fa';

export const projects = [
  { 
    name: 'Beirut International Airport', 
    category: 'Airports', 
    image: '/images/projects/beirut.png', 
    description: 'Located in Beirut, Lebanon, this project involved the implementation of a comprehensive Public Address System, Emergency Audio Evacuation System, and Courtesy Flight Announcement System across 23 gates.' 
  },
  { 
    name: 'Carnegie Mellon University', 
    category: 'Universities', 
    image: '/images/projects/mellon.png', 
    description: 'Located in Doha, Qatar, the project involved the design and integration of Digital Audio/Visual Systems across 36 classrooms and two 70-person lecture halls, along with Digital Signage, Audio/Video Conferencing, Video Wall, and Custom Media Consoles.' 
  },
  { 
    name: 'Catholic Church of Our Lady of the Rosary', 
    category: 'House of Worship', 
    image: '/images/projects/catholic-church.png', 
    description: 'Located in Doha, Qatar, this project involved the complete design and calibration of the church\'s audio system, including the installation of wireless microphones to ensure seamless communication during services.' 
  },
  { 
    name: 'Hamad International Airport', 
    category: 'Airports', 
    image: '/images/projects/hamad.png', 
    description: 'Situated in Doha, Qatar, this airport features over 400 steerable line arrays across 53 gates, serving 30-40 million annual passengers. The project includes a System Wide Airport Public Address, Emergency Evacuation/Paging, Flight Announcements, and Courtesy Announcements.'
  },
  { 
    name: 'Islamic Development Bank', 
    category: 'Financial Centers', 
    image: '/images/projects/idb.png', 
    description: 'Situated in Jeddah, Saudi Arabia, this project was the first commercial building to use a fully automated emergency public address system. It includes System Wide Public Address, Audio Emergency Paging, CCTV & MATV Systems, and Multi-Media Conference Rooms.' 
  },
  { 
    name: 'Khalifa Sports Hall', 
    category: 'Sport Stadiums', 
    image: '/images/projects/sport.png', 
    description: 'Located in Doha, Qatar, this multi-venue sports complex, which hosted the 2006 Asian Games, features a System Wide Public Address System and an Emergency Announcement/Evacuation Mass Notification System across 10 sports venues.' 
  },
  { 
    name: 'King Abdul Aziz Hospital', 
    category: 'Hospitals', 
    image: '/images/projects/azizhos.png', 
    description: 'Located in Riyadh, Saudi Arabia, this 690-bed hospital features a Nurse Call System, Intercom System, Music and Paging System, Medical Staff Pocket Paging System, MATV System, and an Operating Room TV Recording Studio System.'
  },
  { 
    name: 'King Fahd International Airport', 
    category: 'Airports', 
    image: '/images/projects/king-airport.png', 
    description: 'Located in Dammam, Saudi Arabia, this airport project included the design and installation of conference room sound systems, multi-format video systems, TV studio systems, and various projection solutions across 31 gates.'
  },
  { 
    name: 'King Faisal University—Conference Center', 
    category: 'Universities', 
    image: '/images/projects/KFU.png', 
    description: 'Situated in Dammam, Saudi Arabia, this conference center has hosted over 66 international conferences. The project involved the installation of a Delegate Congress Microphone System, Audio System, and Simultaneous Interpretation System.'
  },
  { 
    name: 'Marriott Hotel', 
    category: 'Hotels', 
    image: '/images/projects/marriott-hotel.png', 
    description: 'Located in Amman, Jordan, this hotel features 292 guest rooms and five restaurants. The project included the installation of Public Area Music and Paging Systems, Ballroom Combining Sound Systems, and Multi-Selection Music Systems for hotel rooms.'
  },
  { 
    name: 'NorthWestern University', 
    category: 'Universities', 
    image: '/images/projects/nwest.png', 
    description: 'Also in Doha, Qatar, this project includes the design and integration of Audio/Visual Systems in 15 seminar rooms and a 120-seat lecture hall with JBL Synthesis surround sound, alongside Digital Signage and Video Conferencing solutions.' 
  }
];

const categories = [
  'Show All', 
  'Airports',
  'Universities',
  'Hotels',
  'Sport Stadiums',
  'Financial Centers',
  'House of Worship',
  'Hospitals',
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const scrollPositionRef = React.useRef(0);

  useEffect(() => {
    setSelectedCategory('Show All');
  }, []);

  useEffect(() => {
    if (selectedProject) {
      // Store current scroll position
      scrollPositionRef.current = window.pageYOffset;
      
      // Apply multiple techniques to prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none';
    } else {
      // Restore scrolling and position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      
      // Restore scroll position
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'smooth'
      });
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
    };
  }, [selectedProject]);

  const filteredProjects = selectedCategory === 'Show All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
        <div className="mb-6">
          <h1 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 pb-1 leading-relaxed">
            Our Projects
          </h1>
        </div>

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
          {/* Projects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 flex-1">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                className="group text-center transform transition-all duration-500 hover:scale-110 cursor-pointer"
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 flex items-center justify-center h-40 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:border-blue-400/50">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105 rounded select-none"
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
                  {project.name}
                </p>
              </div>
            ))}
          </div>

          {/* Category Menu */}
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 px-4 sm:px-6">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.3)] border border-blue-200/30 p-8 max-w-3xl w-full relative transform transition-all duration-500 scale-100">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300"
            >
              <FaArrowLeft />
              Back
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="object-cover w-full h-64 rounded-lg mb-6 shadow-md select-none"
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
            <h2 className="text-3xl font-bold text-blue-600 mb-4">{selectedProject.name}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;