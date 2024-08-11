import React, { useState } from 'react';

const projects = [
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
      image: '/images/projects/catholic-church.jpg', 
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
      image: '/images/projects/marriott-hotel.jpg', 
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
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('Show All');
    const [selectedProject, setSelectedProject] = useState(null);
  
    const filteredProjects = selectedCategory === 'Show All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  
    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };
  
    const closeModal = () => {
      setSelectedProject(null);
    };
  
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-blue-600 text-3xl font-bold text-black mb-8">Projects</h1>
  
          <div className="flex flex-col lg:flex-row">
            {/* Projects Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className="text-center transform transition duration-500 hover:scale-105 cursor-pointer"
                >
                  <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center" style={{ height: '150px' }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-contain max-w-full max-h-full rounded-lg"
                      style={{ margin: 'auto' }}
                    />
                  </div>
                  <p className="mt-2 text-black">{project.name}</p>
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
  
        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full relative">
              <button onClick={closeModal} className="absolute top-0 right-0 p-2 text-blue-600 hover:text-red-600">
                Back
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="object-contain max-w-full max-h-96 mb-4 mx-auto rounded-lg" 
              />
              <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              
            </div>
          </div>
        )}
      </div>
    );
};

export default Projects;
