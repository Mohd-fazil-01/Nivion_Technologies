import React from "react";

const WhyUs = () => {

    const data = [
  {
    num: "01",
    title: "AI-First Approach",
    para: "We use AI to deliver faster, smarter, and more effective results.",
  },
  {
    num: "02",
    title: "Creative Expertise",
    para: "Our team blends strategy, design, and innovation.",
  },
  {
    num: "03",
    title: "Scalable Solutions",
    para: "From startups to enterprises, we design with growth.",
  },
  {
    num: "04",
    title: "Tech Balance",
    para: "Tools that connect creativity with outcomes.",
  },
  {
    num: "05",
    title: "Future Ready",
    para: "We craft brands prepared for tomorrow.",
  },
  {
    num: "06",
    title: "Proven Impact",
    para: "We deliver measurable business results.",
  },
];
  return (
    <section className="Why-us">
      <button className="why-btn">Why Us</button>
      <div className="why-text">
        <h1>
          Why <span>Nivion Technologies</span> Stands Out
        </h1>
      </div>
      <div className="grid-container">
       {data.map((item,idx)=>(
         <div className="why-card" key ={idx}>
          <div className="text-us">
            <span>{item.num}</span>
            <h1>{item.title}</h1>
            <p>
             {item.para}
            </p>
          </div>
        </div>
       ))}
      </div>
    </section>
  );
};

export default WhyUs;
