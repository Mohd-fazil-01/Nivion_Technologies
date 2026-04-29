import React from "react";
import logo from "../assets/LOGO.png";

const Nav = () => {
  return (
    <header className="nav">
      <nav className="nav-container">
        <img src={logo} alt="logo" />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
         <button className="nav-btn">Get in Touch</button>
      </nav>

     
    </header>
  );
};

export default Nav;
