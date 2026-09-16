import React, { useState } from "react";
import { createImageProps } from "../imageProps";
import images from "../imageData/vendors.json";
import { vendors } from "../catalogData";
import { PageIntro, ProjectCTA, Arrow } from "./ui";
export { vendors } from "../catalogData";
const imageProps = createImageProps(images);
const categories = [
  "Show All",
  "Audio Systems",
  "Video Systems",
  "Control Systems",
];
export default function Vendors() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const filtered =
    selectedCategory === "Show All"
      ? vendors
      : vendors.filter((vendor) => vendor.category === selectedCategory);
  return (
    <>
      <PageIntro eyebrow="OUR PARTNERS / BETTER TOGETHER" title="Our Vendors">
        World-class technology, thoughtfully selected. We work with leading
        manufacturers to find the right fit for every project.
      </PageIntro>
      <section className="section-space catalog-section">
        <div className="site-container">
          <div className="filter-select">
            <label htmlFor="vendor-category">Vendor category</label>
            <select
              id="vendor-category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="filter-bar" role="group" aria-label="Vendor category">
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
            {filtered.length} vendors
          </p>
          <div className="vendor-grid">
            {filtered.map((vendor, index) => (
              <a
                key={vendor.name}
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="vendor-card"
              >
                <div className="vendor-logo">
                  <img
                    {...imageProps(vendor.image, {
                      sizes: "180px",
                      loading: index < 8 ? "eager" : "lazy",
                    })}
                    alt=""
                  />
                </div>
                <div className="vendor-info">
                  <div>
                    <span className="eyebrow">{vendor.category}</span>
                    <h2>{vendor.name}</h2>
                  </div>
                  <Arrow diagonal />
                </div>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
