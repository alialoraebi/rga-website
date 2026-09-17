import React from "react";
import { PageIntro, ProjectCTA, Reveal } from "../components/ui";
const milestones = [
  [
    "1980",
    "An American beginning",
    "Founded in the USA, with work on the New York Subway public address system.",
  ],
  [
    "1983",
    "Engineering across borders",
    "Islamic Development Bank, Saudi Arabia.",
  ],
  [
    "1997",
    "Connecting international gateways",
    "Beirut International Airport, Lebanon.",
  ],
  [
    "2004",
    "A new chapter in Qatar",
    "Our Qatar office opened, alongside work at Khalifa Sports Hall.",
  ],
  [
    "2006–2010",
    "Supporting the next generation",
    "Carnegie Mellon and Northwestern University, Qatar.",
  ],
  ["2010", "On an international stage", "Hamad International Airport, Qatar."],
  [
    "2018–Present",
    "Building what comes next",
    "Amiri Guard Base and continued work across the Gulf region and Africa.",
  ],
];
export default function About() {
  return (
    <>
      <PageIntro eyebrow="OUR COMPANY / EST. 1980" title="About Us">
        International experience. Personal commitment. We bring people, spaces,
        and technology together.
      </PageIntro>
      <section className="section-space">
        <div className="site-container company-grid">
          <Reveal>
            <p className="eyebrow">THE PEOPLE BEHIND THE SYSTEMS</p>
            <h2>
              Expertise that connects.
              <br />
              Relationships that last.
            </h2>
          </Reveal>
          <Reveal>
            <p className="large-copy">
              We believe the best technology is the technology that works for
              you.
            </p>
            <p>
              Robert Guild Associates specializes in audio, video, and
              electronic design, integration, and consulting. Headquartered in
              the United States with a regional office in Doha, Qatar, we plan
              and install systems from residential spaces to enterprise
              environments.
            </p>
            <p>
              Our approach brings careful planning, technical expertise, and
              hands-on support together, with one goal: systems that work
              seamlessly for the people who use them.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-space history-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR JOURNEY</p>
              <h2>
                Decades of progress.
                <br />
                One clear purpose.
              </h2>
            </div>
            <p>
              From our first projects to some of the region’s most recognizable
              institutions.
            </p>
          </div>
          <div className="timeline">
            {milestones.map(([year, title, description]) => (
              <Reveal className="timeline-row" key={year}>
                <span className="timeline-year">{year}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROFESSIONAL KNOW-HOW</p>
              <h2>Our industry certifications</h2>
            </div>
            <p>
              Specialist knowledge across the technologies we design, install,
              and support.
            </p>
          </div>
          <div className="certification-grid">
            {[
              "IED Master Certified Contractor",
              "Crown IQ",
              "QSC Venue Manager",
              "QSC Level 2 Designer",
              "SynAudCon",
              "TEF Systems & Software",
              "Symetrix Software Design",
              "Crestron Programming",
              "Dante Certified",
            ].map((name, index) => (
              <div key={name}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
