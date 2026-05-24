import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import gsap from "gsap";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const categories = ["All", "AI Integration", "Brand Design", "Motion Design"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeCategory);

  // Trigger stagger animation when the active category changes
  useEffect(() => {
    // Filter out null elements from ref array
    const validCards = cardsRef.current.filter(Boolean);
    
    if (validCards.length > 0) {
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initial header entrance
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="portfolio-section" style={{ minHeight: "100vh", marginTop: "40px" }}>
      <div className="services-header" ref={headerRef}>
        <button className="btn-tag">Our Portfolio</button>
        <h2 className="section-title">Showcasing Our <span>Impact</span></h2>
        <p className="section-desc">
          Explore our latest projects. We combine state-of-the-art AI tooling with
          premium, human-centric design aesthetics to deliver exceptional outcomes.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="portfolio-filters">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PORTFOLIO GRID */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, idx) => (
          <div 
            className="portfolio-card" 
            key={project.id}
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <div className="portfolio-card-content">
              <div>
                <span className="portfolio-cat">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="portfolio-card-footer">
                <div className="portfolio-tech-list">
                  {project.tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                  ))}
                </div>
                {project.stats && (
                  <div className="portfolio-stats">
                    <span style={{ color: "var(--primary)" }}>✦</span> {project.stats}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
