import React from "react";
import logo1 from "../assets/animate1.png";
import logo2 from "../assets/animate2.png";

const Animate = () => {
  return (
    <section className="animate">
      <div className="slider">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>
    </section>
  );
};

export default Animate;