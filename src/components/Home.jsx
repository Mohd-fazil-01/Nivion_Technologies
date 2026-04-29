import React from "react";
import brandLogo1 from "../assets/logo1.png";
import brandLogo2 from "../assets/logo2.png";
import brandLogo3 from "../assets/logo3.png";
import brandLogo4 from "../assets/logo4.png";
import brandLogo5 from "../assets/logo5.png";
import brandLogo6 from "../assets/logo6.png";


const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
       <div className="home-rating">
        <h1 className="rating"><span > ★ ★ ★ ★ ☆ </span> 4.5 Ratings </h1>
        <p>Trusted by 08+ Clients</p>
       </div>

        <div className="home-text">
          <h1>AI-First Agency <br /> for Modern Brands</h1>
          <p>
            We help ambitious brands grow through design, technology, and AI.
          </p>

           <button >View Services</button>
        </div>

       

       
      
      </div>
        <div className="home-brands">
          <img src={brandLogo1} alt="brands" />
          <img src={brandLogo2} alt="brands" />
          <img src={brandLogo3} alt="brands" />
          <img src={brandLogo4} alt="brands" />
          <img src={brandLogo5} alt="brands" />
          <img src={brandLogo6} alt="brands" />
        </div>
    </section>
  );
};

export default Home;
