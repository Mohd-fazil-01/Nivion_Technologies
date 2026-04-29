import React from "react";

const About = () => {
  return (
    <section className="about">
     
      <div className="about-content">
        <div className="left-btn">
         <button className="about-btn">About Us</button>
        </div>
        <div className="right-text">
           <h1>
            We’re <span>Nivion Technologies </span> merging creativity and
            <span> AI</span> to help brands stay{" "}
            <span>ahead</span> with smarter ideas.
          </h1>
        </div>

      </div>

    <div className="about-info">
          <div className="info-box">
            <h2>30+</h2>
            <p>Projects</p>
          </div>

          <div className="info-box">
            <h2>08+</h2>
            <p>Clients</p>
          </div>

          <div className="info-box">
            <h2>10+</h2>
            <p>Team Members</p>
          </div>
        </div>

       
     
    </section>
  );
};

export default About;
