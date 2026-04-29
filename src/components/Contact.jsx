import React from "react";
import logo from "../assets/LOGO.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {


  return (
    <section className="contact">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="contact-text">
        <h1>Get In Touch with Us</h1>
        <p>
          Have questions or need AI solutions? Let us know by filling out the
          form, and we’ll be in touch!{" "}
        </p>
      </div>
      <div className="contact-form">
        <form action="">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" 
            name="First Name"
            placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" 
            name="Last Name"
            placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" 
            name="email"
            placeholder="Email Address" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="number" 
            name="phone"
            placeholder="Phone Number" />
          </div>

          <div className="form-group full">
            <label>Message</label>
            <textarea name="message" placeholder="Type your message..."></textarea>
          </div>

          <button className="full">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="logo">
          <span>
            <FaInstagram  size={25}/>
          </span>
          <span>
            <FaTwitter size={25} />
          </span>
          <span>
            <FaLinkedin  size={25}/>
          </span>
        </div>
        <div className="contact-link">
          <ul>
            <li> Home </li>
            <li> About Us </li>
            <li> Services </li>
            <li> Why Us </li>
            <li> Privacy Policy </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
