import React, { useState } from "react";
import { createImageProps } from "../utils/imageProps";
import images from "../data/images/vendors.json";
import { vendors } from "../data/catalog";
import { PageIntro, ProjectCTA, Arrow } from "../components/ui";
export { vendors } from "../data/catalog";
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
  const sorted = [...filtered].sort(
    (a, b) => Number(Boolean(b.partner)) - Number(Boolean(a.partner)),
  );
  return (
    <>
      <PageIntro eyebrow="MANUFACTURERS WE WORK WITH" title="Our Vendors">
        We are an official partner of AtlasIED and Renkus-Heinz, and we work
        with products from a wide range of manufacturers to find the right fit
        for every project.
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
            {sorted.map((vendor, index) => (
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
                    {vendor.partner && (
                      <span className="partner-badge">Official partner</span>
                    )}
                    <span className="eyebrow">{vendor.category}</span>
                    <h2>{vendor.name}</h2>
                  </div>
                  <Arrow diagonal />
                </div>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
          <p className="trademark-note">
            Only vendors marked “Official partner” have a formal partnership
            with RGA. All other product names, logos, and brands are the
            property of their respective owners and are shown only to identify
            manufacturers whose products we work with. Their use does not imply
            partnership, sponsorship, or endorsement.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
