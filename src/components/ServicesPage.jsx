import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import gsap from "gsap";

const ServicesPage = () => {
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP page load animations
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }
    );
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  return (
    <section className="services" style={{ minHeight: "100vh", marginTop: "40px" }}>
      <div className="services-header" ref={headerRef}>
        <button className="btn-tag">Nivion Capabilities</button>
        <h2 className="section-title">Our Dedicated <span>Services</span></h2>
        <p className="section-desc">
          Accelerate your operational efficiency and visual footprint. We build intelligent, 
          custom-tailored automation structures, brand books, and cinematic loops.
        </p>
      </div>

      <div className="card">
        {servicesData.map((item, idx) => (
          <div 
            className="service-grid" 
            key={item.id}
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <div className="service-card" style={{ height: "100%" }}>
              <div className="text" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <h1 style={{ fontSize: "24px" }}>{item.title}</h1>
                  <p style={{ fontSize: "14px", marginTop: "10px", minHeight: "60px" }}>{item.para}</p>
                  <div className="tags" style={{ marginTop: "15px" }}>
                    {item.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div style={{ marginTop: "20px" }}>
                  <Link to={`/services/${item.id}`} className="service-learn-more" style={{ fontSize: "14px", fontWeight: "600" }}>
                    Explore Details <span style={{ transition: "0.2s" }}>➔</span>
                  </Link>
                </div>
              </div>

              <div className="image" style={{ height: "220px", marginTop: "20px" }}>
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
