import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { cardImageSizes, createImageProps } from '../imageProps';
import images from '../imageData/projects.json';

import { projects } from '../catalogData';
export { projects } from '../catalogData';

const imageProps = createImageProps(images);

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
                    {...imageProps(project.image, { sizes: cardImageSizes, loading: index < 6 ? 'eager' : 'lazy' })}
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
              {...imageProps(selectedProject.image, { sizes: '(min-width: 768px) 704px, calc(100vw - 80px)', loading: 'eager' })}
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