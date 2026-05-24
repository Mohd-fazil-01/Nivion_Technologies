import React from "react";
import { testimonialsData } from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="services-header">
        <button className="btn-tag">Testimonials</button>
        <h2 className="section-title">What Our <span>Clients</span> Say</h2>
        <p className="section-desc">
          We partner with ambitious startups and established companies to build
          intelligent digital experiences. Here is what they say about our work.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div>
              <div className="testimonial-rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#ccc" }}>★</span>
                ))}
              </div>
              <p>"{item.feedback}"</p>
            </div>

            <div className="testimonial-profile">
              <div
                className="avatar-fallback"
                style={{ backgroundColor: item.color || "var(--primary)" }}
              >
                {item.initials}
              </div>
              <div className="profile-info">
                <h4>{item.name}</h4>
                <span>{item.role}, {item.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
