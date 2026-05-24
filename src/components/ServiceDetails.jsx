import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceDetails = ({ service: serviceProp }) => {
  const { serviceId } = useParams();

  // If a prop is passed, use it; otherwise, look it up by URL parameter
  const service = serviceProp || servicesData.find((s) => s.id === serviceId);

  // Scroll to top when this details page is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="service-details-page" style={{ padding: "120px 20px", textAlignment: "center" }}>
        <div className="services-header">
          <h2 className="section-title">Service <span>Not Found</span></h2>
          <p className="section-desc">The requested service does not exist or has been moved.</p>
          <Link to="/" className="nav-btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      {/* SERVICE DETAILS HERO */}
      <div className="service-details-hero">
        <div className="service-details-hero-content">
          <button className="btn-tag">Nivion Services</button>
          <h1>{service.title}</h1>
          <p>{service.para}</p>
          <div className="tags" style={{ justifyContent: "center" }}>
            {service.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE DETAILS CONTENT */}
      <div className="service-details-container">
        {/* LEFT MAIN AREA */}
        <div className="service-details-left">
          <div className="detail-section">
            <h2>Overview</h2>
            <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: "1.8", marginTop: "10px" }}>
              {service.description}
            </p>
          </div>

          {service.features && (
            <div className="detail-section">
              <h2>Key Capabilities</h2>
              <div className="feature-list" style={{ marginTop: "15px" }}>
                {service.features.map((feature, idx) => (
                  <div className="feature-item" key={idx}>
                    <span className="feature-icon">✔</span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.benefits && (
            <div className="detail-section">
              <h2>Expected Impact</h2>
              <div className="benefit-grid" style={{ marginTop: "15px" }}>
                {service.benefits.map((benefit, idx) => {
                  const parts = benefit.split(" by ");
                  const title = parts[0];
                  const detail = parts[1] ? `Reduced or improved by ${parts[1]}` : "";
                  return (
                    <div className="benefit-card" key={idx}>
                      <h4>{title}</h4>
                      <p>{detail || "Drive consistent organizational growth and efficiency."}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR AREA */}
        <div className="service-details-right">
          {service.tools && (
            <div className="sidebar-box">
              <h3>Tools & Stack</h3>
              <div className="tools-flex">
                {service.tools.map((tool, idx) => (
                  <span key={idx}>{tool}</span>
                ))}
              </div>
            </div>
          )}

          <div className="sidebar-box cta-box">
            <h3>Ready to Scale?</h3>
            <p>
              Let's integrate {service.title} into your brand pipeline and unlock new growth channels.
            </p>
            <Link to="/contact" className="cta-btn">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
