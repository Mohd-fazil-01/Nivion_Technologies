import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const textRef = useRef(null);
  const footerRef = useRef(null);
  const formTagRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }
      );
    }

    if (formRef.current) {
      tl.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.3"
      );
    }

    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Check if the user has replaced the placeholder template ID
    if (!templateId || templateId === "your_template_id_here") {
      alert("EmailJS Template ID is not configured yet! Please update 'VITE_EMAILJS_TEMPLATE_ID' inside your .env file with your actual EmailJS Template ID.");
      return;
    }

    const submitBtn = e.target.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending Message...";
    submitBtn.disabled = true;

    // Package all fields into a rich parameters object to match both standard and custom templates!
    const templateParams = {
      FirstName: e.target.FirstName.value,
      LastName: e.target.LastName.value,
      from_name: `${e.target.FirstName.value} ${e.target.LastName.value}`,
      email: e.target.email.value,
      reply_to: e.target.email.value,
      phone: e.target.phone.value || "Not Provided",
      message: e.target.message.value
    };

    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )
    .then(() => {
      alert("Thank you! Your message has been sent successfully. Our team will get in touch with you shortly.");
      formTagRef.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert(`Failed to send message: ${error.text || "An unexpected error occurred"}. Please try again later or click the WhatsApp button to chat instantly!`);
    })
    .finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  };

  return (
    <section className="contact" style={{ marginTop: "40px" }}>
      {/* HEADER SECTION */}
      <div className="logo" ref={textRef}>
        <img src={logo} alt="Nivion logo" />
        <h1 style={{ marginTop: "15px" }}>Get In Touch</h1>
        <p style={{ marginTop: "10px" }}>
          Have a project in mind or need assistance integrating AI into your stack? 
          Drop us a line and let's build something exceptional.
        </p>
      </div>

      {/* TWO-COLUMN GRID */}
      <div className="contact-grid-container">
        {/* Left Side: Contact Form */}
        <div className="contact-form" ref={formRef}>
          <form ref={formTagRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input 
                type="text" 
                id="first-name"
                name="FirstName"
                placeholder="Enter your first name" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input 
                type="text" 
                id="last-name"
                name="LastName"
                placeholder="Enter your last name" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Enter your email address" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                placeholder="Enter your phone number" 
              />
            </div>

            <div className="form-group full">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell us about your brand goals..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="full">Send Message</button>
          </form>
        </div>

        {/* Right Side: Map & Sidebar Info */}
        <div className="contact-sidebar">
          {/* Card Info */}
          <div className="contact-card-info">
            <div className="contact-card-item">
              <span className="contact-card-icon">
                <FaMapMarkerAlt />
              </span>
              <div className="contact-card-text">
                <h4>Our Agency Location</h4>
                <p>Afzalgarh, Bijnor, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="contact-card-item">
              <span className="contact-card-icon">
                <FaEnvelope />
              </span>
              <div className="contact-card-text">
                <h4>Email Address</h4>
                <p>hello@nivion.tech</p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="contact-map-box">
            <iframe 
              title="Afzalgarh Location Map"
              src="https://maps.google.com/maps?q=Afzalgarh%20Bijnor%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FOOTER SOCIAL LINKS */}
      <div className="contact-info" ref={footerRef}>
        <div className="logo">
          <span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
              <FaInstagram size={18} />
            </a>
          </span>
          <span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
              <FaTwitter size={18} />
            </a>
          </span>
          <span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
              <FaLinkedin size={18} />
            </a>
          </span>
        </div>

        <div className="contact-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
