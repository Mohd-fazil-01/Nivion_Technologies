import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import brandLogo1 from "../assets/logo1.png";
import brandLogo2 from "../assets/logo2.png";
import brandLogo3 from "../assets/logo3.png";
import brandLogo4 from "../assets/logo4.png";
import brandLogo5 from "../assets/logo5.png";
import brandLogo6 from "../assets/logo6.png";

// Import other landing page components
import Service from "./Service";
import WhyUs from "./WhyUs";
import Animate from "./Animate";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";

const Home = () => {
  const ratingRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const brandsRef = useRef(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Create GSAP animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ratingRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    );

    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.5"
    );

    tl.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.8)" },
      "-=0.4"
    );

    // Staggered entry for brand partner logos
    if (brandsRef.current) {
      tl.fromTo(
        brandsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 0.65, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="home">
        <div className="home-content">
          <div className="home-rating" ref={ratingRef}>
            <h1>
              <span>★ ★ ★ ★ ☆</span> 4.5 Ratings
            </h1>
            <p>Trusted by 08+ Enterprise Clients</p>
          </div>

          <div className="home-text">
            <h1 ref={titleRef}>
              AI-First Agency <br /> for Modern Brands
            </h1>
            <p ref={descRef}>
              We merge cutting-edge AI systems with premium design aesthetics to elevate your 
              digital footprint and accelerate scaling.
            </p>
            <button className="primary-btn" ref={btnRef} onClick={handleScrollToServices}>
              View Services
            </button>
          </div>
        </div>

        {/* TRUSTED BRANDS LOGOS */}
        <div className="home-brands" ref={brandsRef}>
          <img src={brandLogo1} alt="Brand partner 1" />
          <img src={brandLogo2} alt="Brand partner 2" />
          <img src={brandLogo3} alt="Brand partner 3" />
          <img src={brandLogo4} alt="Brand partner 4" />
          <img src={brandLogo5} alt="Brand partner 5" />
          <img src={brandLogo6} alt="Brand partner 6" />
        </div>
      </section>

      {/* CORE SECTIONS SHOWN ON HOMEPAGE */}
      <Service />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Animate />
    </>
  );
};

export default Home;
