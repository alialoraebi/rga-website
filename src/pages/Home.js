import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { vendors, projects } from "../data/catalog";
import { createImageProps } from "../utils/imageProps";
import vendorImages from "../data/images/vendors.json";
import projectImages from "../data/images/projects.json";
import { Arrow, Reveal, ProjectCTA } from "../components/ui";
const imageProps = createImageProps({ ...vendorImages, ...projectImages });
const capabilities = [
  [
    "01",
    "Consulting & design",
    "A clear vision, a considered plan. Systems designed around your space, your people, and your ambitions.",
    "Strategy / System design",
  ],
  [
    "02",
    "Integration & delivery",
    "Complex technology. Effortless experiences. Expert supply, installation, and integration from end to end.",
    "Supply / Installation / Integration",
  ],
  [
    "03",
    "Support & assurance",
    "Confidence that lasts beyond handover. Rigorous testing, commissioning, and ongoing care for every system.",
    "Commissioning / Maintenance",
  ],
];
const selectedProjects = [projects[3], projects[1], projects[5]];
const partnerVendors = vendors.filter((vendor) => vendor.partner);
const otherVendors = vendors.filter((vendor) => !vendor.partner);
export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (preference.matches || document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      preference.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, []);

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <video
          ref={videoRef}
          id="hero-video"
          className="hero-video"
          src="/video/hero-df568505855b.mp4"
          poster="/video/hero-df568505855b-poster.webp"
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-stage site-container">
          <div className="hero-copy">
            <h1 id="hero-title">
              Exceptional spaces.
              <br />
              <span>Seamlessly</span>
              <br />
              connected.
            </h1>
            <p className="hero-description">
              Audio, video, and control systems engineered to work beautifully
              together. From a single room to an international landmark.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">
                Explore our work <Arrow />
              </Link>
              <Link to="/services" className="text-link light-link">
                Our expertise <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="credentials-strip" aria-label="Our experience">
        <div className="site-container credentials-grid">
          <p>
            Global perspective.
            <br />
            <strong>Local understanding.</strong>
          </p>
          <div>
            <strong>Since 1980</strong>
            <span>A legacy of engineering expertise</span>
          </div>
          <div>
            <strong>USA + Qatar</strong>
            <span>Connected across continents</span>
          </div>
          <div>
            <strong>End to end</strong>
            <span>From concept to ongoing care</span>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">01 / OUR EXPERTISE</p>
              <h2>
                Technology with purpose.
                <br />
                Integration with precision.
              </h2>
            </div>
            <p>
              We make complex systems feel simple. One experienced team,
              supporting every stage of your project.
            </p>
          </Reveal>
          <div className="capability-grid">
            {capabilities.map(([number, title, description, tags], index) => (
              <Reveal delay={index * 80} key={number}>
                <Link to="/services" className="capability-card">
                  <div className="card-top">
                    <span>{number}</span>
                    <Arrow diagonal />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="card-tags">{tags}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space work-section">
        <div className="site-container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                Trusted in places
                <br />
                that matter.
              </h2>
            </div>
            <Link to="/projects" className="text-link">
              View all projects <Arrow />
            </Link>
          </Reveal>
          <div className="featured-grid">
            {selectedProjects.map((project, index) => (
              <Reveal
                key={project.name}
                delay={index * 60}
                variant="fade"
              >
                <Link className="featured-project" to="/projects">
                  <div className="project-photo">
                    <img
                      {...imageProps(project.image, {
                        sizes: "(min-width: 900px) 33vw, 100vw",
                      })}
                      alt=""
                    />
                    <span className="project-arrow">
                      <Arrow diagonal />
                    </span>
                  </div>
                  <p className="eyebrow">
                    {project.category}
                    <span>DOHA, QATAR</span>
                  </p>
                  <h3>{project.name}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space company-section">
        <div className="site-container company-grid">
          <Reveal>
            <p className="eyebrow">03 / THE RGA DIFFERENCE</p>
            <h2>
              Built on experience.
              <br />
              Driven by possibility.
            </h2>
          </Reveal>
          <Reveal>
            <p className="large-copy">
              Great technology starts with understanding people.
            </p>
            <p>
              Since our beginnings in the United States in 1980, we’ve brought
              thoughtful engineering to ambitious spaces. With a regional office
              in Doha, we combine international expertise with an understanding
              of the places we serve.
            </p>
            <Link to="/about" className="text-link">
              Get to know RGA <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section-space partners-section">
        <div className="site-container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">04 / PARTNERS & TECHNOLOGY</p>
              <h2>
                Exceptional systems.
                <br />
                Trusted technology.
              </h2>
            </div>
            <Link to="/vendors" className="text-link">
              View all vendors <Arrow />
            </Link>
          </Reveal>
          <h3 className="partner-group-title">Official partners</h3>
          <div className="partner-grid partner-grid-official">
            {partnerVendors.map((vendor) => (
              <div key={vendor.name}>
                <img
                  {...imageProps(vendor.image, {
                    sizes: "(min-width: 700px) 200px, 140px",
                  })}
                  alt={vendor.name}
                />
              </div>
            ))}
          </div>
          <h3 className="partner-group-title">
            Other manufacturers we work with
          </h3>
          <div className="partner-grid">
            {otherVendors.map((vendor) => (
              <div key={vendor.name}>
                <img
                  {...imageProps(vendor.image, {
                    sizes: "(min-width: 700px) 140px, 100px",
                  })}
                  alt={vendor.name}
                />
              </div>
            ))}
          </div>
          <p className="trademark-note">
            Only AtlasIED and Renkus-Heinz are official RGA partners. Other
            brands are shown to identify products we work with and do not
            imply partnership or endorsement.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
