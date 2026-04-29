
import React from "react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Service = () => {
  const data = [
    {
      title: "AI Services",
      para: "Smarter solutions to save time and scale faster.",
      tags: ["Automation", "Smart", "Growth"],
      img: img1,
    },
    {
      title: "Content Design",
      para: "Bold visuals and strategies for your online presence.",
      tags: ["Social", "Strategy", "Presence"],
      img: img2,
    },
    {
      title: "Brand Identity",
      para: "Build a brand that people remember.",
      tags: ["Logo", "Strategy", "Recognition"],
      img: img3,
    },
    {
      title: "Motion Design",
      para: "Bring your brand to life with movement and story.",
      tags: ["Dynamic", "Interactive", "Story"],
      img: img4,
    },
  ];
  {
   
  }
  return (
    <section className="services">
      <button className="service-btn">Our AI Led Services</button>
      <div className="card">
        {data.map((item, idx) => 
          (
          
              <div className="service-grid" key= {idx}>
                <div className="service-card">
                  <div className="text">
                    <h1>{item.title}</h1>
                    <p>{item.para}</p>
                    <div className="tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="image">
                    <img src={item.img} alt="image" />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Service;
