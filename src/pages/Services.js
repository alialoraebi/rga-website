import React, { useState } from "react";
import { createImageProps } from "../utils/imageProps";
import images from "../data/images/services.json";
import { PageIntro, ProjectCTA, Reveal } from "../components/ui";
const imageProps = createImageProps(images);

const services = [
  {
    title: "Consulting",
    description:
      "We provide consulting services for new construction and renovation projects. We can help you develop a technology plan that will meet your current and future needs. Our consulting services include audio, video, lighting, and control systems.",
    image: "/images/services/consulting.jpg",
  },
  {
    title: "Full System Design",
    description:
      "We provide system design services for audio, video, lighting, and control systems. We can help you develop a detailed system design that will meet your needs and budget. Our system design services include detailed drawings, equipment lists, and system specifications.",
    image: "/images/services/full-system-design.jpg",
  },
  {
    title: "Supply and Build",
    description:
      "We provide supply and build services for audio, video, lighting, and control systems. We can help you select the right equipment for your needs and budget. We can also install and commission the system for you. Our supply and build services include equipment sales, installation, and system commissioning.",
    image: "/images/services/supply-build.jpg",
  },
  {
    title: "Supervision",
    description:
      "We offer supervision services to ensure that all installations are carried out to the highest standards. Our team will oversee the process to ensure quality and adherence to specifications.",
    image: "/images/services/supervision.jpg",
  },
  {
    title: "Installation",
    description:
      "We provide professional installation services for all the systems we design and supply. Our experienced technicians ensure that every component is installed correctly and operates flawlessly.",
    image: "/images/services/installation.jpg",
  },
  {
    title: "System Integration",
    description:
      "We offer system integration services to ensure all components work together seamlessly. This includes integrating new systems with existing infrastructure to create a cohesive and efficient setup.",
    image: "/images/services/system-integration.jpg",
  },
  {
    title: "Testing & Commissioning",
    description:
      "Before any system goes live, we conduct thorough testing and commissioning to ensure everything operates as expected. We identify and resolve any issues to ensure a smooth handover.",
    image: "/images/services/testing-commissioning.jpg",
  },
  {
    title: "Service & Maintenance",
    description:
      "We provide ongoing service and maintenance for the systems we install. This includes regular check-ups, repairs, and upgrades to keep your systems running at their best.",
    image: "/images/services/service-maintenance.jpg",
  },
];

export default function Services() {
  const [openIndices, setOpenIndices] = useState(new Set());
  const [loadedIndices, setLoadedIndices] = useState(new Set());
  const toggle = (index) => {
    setLoadedIndices((previous) => new Set(previous).add(index));
    setOpenIndices((previous) => {
      const next = new Set(previous);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };
  return (
    <>
      <PageIntro
        eyebrow="OUR EXPERTISE / FROM CONCEPT TO CONNECTION"
        title="Our Services"
      >
        Every detail considered. Every system connected. Complete audio, video,
        and control solutions, built around you.
      </PageIntro>
      <section className="section-space">
        <div className="site-container services-layout">
          <Reveal className="services-aside">
            <img
              {...imageProps("/images/audiostuffs.png", {
                sizes: "(min-width: 1000px) 35vw, 100vw",
                loading: "eager",
                fetchpriority: "high",
              })}
              alt="Professional audio equipment and system controls"
            />
            <p className="eyebrow">ONE PARTNER. EVERY STAGE.</p>
            <h2>
              From the first idea
              <br />
              to the final detail.
            </h2>
            <p>
              Explore how we bring your systems to life, and keep them
              performing.
            </p>
          </Reveal>
          <div className="services-list">
            {services.map((service, index) => (
              <div className="service-item" key={service.title}>
                <h2>
                  <button
                    id={`service-trigger-${index}`}
                    aria-expanded={openIndices.has(index)}
                    aria-controls={`service-panel-${index}`}
                    onClick={() => toggle(index)}
                    className="service-trigger"
                  >
                    <span className="service-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.title}
                    <span className="service-toggle" aria-hidden="true">
                      {openIndices.has(index) ? "−" : "+"}
                    </span>
                  </button>
                </h2>
                <div
                  id={`service-panel-${index}`}
                  aria-hidden={!openIndices.has(index)}
                  inert={openIndices.has(index) ? undefined : ""}
                  className={`service-panel${openIndices.has(index) ? " service-panel-open" : ""}`}
                >
                  <div className="service-panel-inner">
                    <div className="service-content">
                      <p>{service.description}</p>
                      <img
                        {...(loadedIndices.has(index)
                          ? imageProps(service.image, {
                              sizes: "(min-width: 1000px) 50vw, 100vw",
                              loading: "eager",
                            })
                          : {})}
                        alt={`Illustration for ${service.title} service`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
