import React, { useState, useEffect, useRef } from "react";
import { createImageProps } from "../utils/imageProps";
import images from "../data/images/projects.json";
import { projects } from "../data/catalog";
import { PageIntro, ProjectCTA, Arrow } from "../components/ui";
export { projects } from "../data/catalog";
const imageProps = createImageProps(images);
const categories = [
  "Show All",
  "Airports",
  "Universities",
  "Hotels",
  "Sport Stadiums",
  "Financial Centers",
  "House of Worship",
  "Hospitals",
];
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  useEffect(() => {
    if (!selectedProject) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);
  const closeModal = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelectedProject(null);
    openerRef.current?.focus();
  };
  const filtered =
    selectedCategory === "Show All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  return (
    <>
      <PageIntro
        eyebrow="OUR PORTFOLIO / ENGINEERED FOR THE REAL WORLD"
        title="Our Projects"
      >
        Behind every great space is a system that connects it. Explore the
        places we’ve helped bring to life.
      </PageIntro>
      <section className="section-space catalog-section">
        <div className="site-container">
          <div className="filter-select">
            <label htmlFor="project-category">Project category</label>
            <select
              id="project-category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div
            className="filter-bar"
            role="group"
            aria-label="Project category"
          >
            {categories.map((category) => (
              <button
                key={category}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p role="status" className="result-count">
            {filtered.length} projects
          </p>
          <div className="project-grid">
            {filtered.map((project, index) => (
              <button
                key={project.name}
                className="portfolio-card"
                aria-label={project.name}
                aria-haspopup="dialog"
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setSelectedProject(project);
                }}
              >
                <span className="project-photo">
                  <img
                    {...imageProps(project.image, {
                      sizes:
                        "(min-width: 1000px) 33vw, (min-width: 600px) 50vw, 100vw",
                      loading: index < 3 ? "eager" : "lazy",
                    })}
                    alt=""
                  />
                  <span className="project-arrow">
                    <Arrow diagonal />
                  </span>
                </span>
                <span className="eyebrow">{project.category}</span>
                <span className="project-name">{project.name}</span>
                <span className="project-detail">
                  View project <Arrow />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
      {selectedProject && (
        <dialog
          ref={dialogRef}
          aria-labelledby="project-title"
          aria-describedby="project-description"
          onCancel={(event) => {
            event.preventDefault();
            closeModal();
          }}
          onClose={closeModal}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              closeModal();
            }
          }}
          className="project-dialog"
        >
          <div className="dialog-top">
            <span className="eyebrow">PROJECT DETAILS</span>
            <button className="dialog-close" onClick={closeModal}>
              Back <span aria-hidden="true">×</span>
            </button>
          </div>
          <img
            {...imageProps(selectedProject.image, {
              sizes: "(min-width: 800px) 760px, 100vw",
              loading: "eager",
            })}
            alt={selectedProject.name}
          />
          <div className="dialog-copy">
            <p className="eyebrow">{selectedProject.category}</p>
            <h2 id="project-title">{selectedProject.name}</h2>
            <p id="project-description">{selectedProject.description}</p>
          </div>
        </dialog>
      )}
    </>
  );
}
