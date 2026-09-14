import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

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
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  const filteredProjects = selectedCategory === 'Show All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project, opener) => {
    openerRef.current = opener;
    setSelectedProject(project);
  };

  const closeModal = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelectedProject(null);
    openerRef.current?.focus();
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
          <label htmlFor="project-category" className="block font-bold text-gray-800 mb-2">Project category</label>
          <select id="project-category" value={selectedCategory} onChange={(event) => handleCategorySelect(event.target.value)} className="w-full h-14 px-4 text-blue-600 bg-white border border-gray-500 rounded-lg">
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </div>
        <p role="status" className="text-gray-700 mb-6">{filteredProjects.length} projects</p>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Projects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 content-start items-start gap-8 flex-1 min-w-0">
            {filteredProjects.map((project, index) => (
              <button
                key={index}
                type="button"
                aria-haspopup="dialog"
                onClick={(event) => handleProjectClick(project, event.currentTarget)}
                className="group min-w-0 text-center transform transition-all duration-500 hover:scale-110 cursor-pointer"
              >
                <span className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-200/30 flex items-center justify-center h-40 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:border-blue-400/50">
                  <img
                    src={project.image}
                    alt=""
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
                </span>
                <span className="block mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </span>
              </button>
            ))}
          </div>

          {/* Category Menu */}
          <div role="group" aria-label="Project category" className="hidden lg:flex flex-col space-y-4 w-64 shrink-0">
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

      {/* Modal */}
      {selectedProject && (
        <dialog ref={dialogRef} aria-labelledby="project-title" aria-describedby="project-description" onCancel={closeModal} onClose={closeModal} onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            closeModal();
          }
        }} className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-lg p-0 backdrop:bg-black/60">
          <div className="bg-white p-6 sm:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="mb-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300"
            >
              <FaArrowLeft aria-hidden="true" focusable="false" />
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
            <h2 id="project-title" className="text-3xl font-bold text-blue-600 mb-4">{selectedProject.name}</h2>
            <p id="project-description" className="text-lg text-gray-700 leading-relaxed">{selectedProject.description}</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Projects;