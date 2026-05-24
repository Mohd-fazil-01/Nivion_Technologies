import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const leftContentRef = useRef(null);
  const rightBoxRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Left elements slide in
    if (leftContentRef.current) {
      tl.fromTo(
        leftContentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }
      );
    }

    // Right logo container scales and pops in
    if (rightBoxRef.current) {
      tl.fromTo(
        rightBoxRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.5"
      );
    }

    // Stat boxes stagger slide in
    if (statsRef.current) {
      tl.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Mission cards slide up in order
    if (cardsRef.current) {
      tl.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
        "-=0.3"
      );
    }
  }, []);

  return (
    <section className="about" style={{ marginTop: "40px" }}>
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left" ref={leftContentRef}>
          <button className="btn-tag">About Us</button>

          <h1>
            We’re <span>Nivion Technologies</span> building modern AI-powered
            experiences for brands.
          </h1>

          <p>
            We combine creativity, technology, and AI to help businesses
            grow faster with smart, sustainable digital solutions. Our work bridges the gap
            between deep learning systems and pristine visual presentation rules, making sure
            your brand commands high-tier market authority.
          </p>

          <div className="about-stats" ref={statsRef}>
            <div className="stat-box">
              <h2>30+</h2>
              <span>Projects Completed</span>
            </div>

            <div className="stat-box">
              <h2>08+</h2>
              <span>Active Clients</span>
            </div>

            <div className="stat-box">
              <h2>10+</h2>
              <span>Team Experts</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div 
            ref={rightBoxRef}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "380px",
              borderRadius: "var(--border-radius)",
              background: "linear-gradient(135deg, var(--primary), var(--primary-hover))",
              boxShadow: "0 10px 30px rgba(91, 77, 247, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--white)",
              fontSize: "72px",
              fontWeight: "800"
            }}
          >
            N
          </div>
        </div>
      </div>

      {/* MISSION / VISION / VALUES SECTION */}
      <div className="mission-section" ref={cardsRef}>
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To empower forward-thinking brands by integrating bleeding-edge AI models, sleek interactive designs, and reliable automated pipelines.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            To become a leading global studio where design aesthetics and artificial intelligence merge to set new creative standards.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Core Values</h2>
          <p>
            High aesthetic standards, rigorous AI execution, clear client transparency, and continuous technological experimentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;