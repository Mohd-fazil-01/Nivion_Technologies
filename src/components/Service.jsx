import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Service = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <button className="btn-tag">Our Services</button>
        <h2 className="section-title">Our <span>AI-Led</span> Services</h2>
        <p className="section-desc">
          We integrate cutting-edge artificial intelligence with premium design to
          accelerate your workflow, boost conversion rates, and build dominant market authority.
        </p>
      </div>

      <div className="card">
        {servicesData.map((item) => (
          <div className="service-grid" key={item.id}>
            <div className="service-card">
              <div className="text">
                <h1>{item.title}</h1>
                <p>{item.para}</p>
                <div className="tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
                
                <Link to={`/services/${item.id}`} className="service-learn-more">
                  Learn More <span style={{ transition: "0.2s" }}>➔</span>
                </Link>
              </div>

              <div className="image">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
