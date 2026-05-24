import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/LOGO.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="nav-container">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Nivion logo" className="nav-logo" />
        </Link>

        {/* DESKTOP & MOBILE MENU */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Contact
          </NavLink>

          <Link to="/contact" className="mobile-btn" onClick={closeMenu}>
            Get in Touch
          </Link>
        </div>

        {/* DESKTOP GET IN TOUCH BUTTON */}
        <Link to="/contact" className="nav-btn">
          Get in Touch
        </Link>

        {/* HAMBURGER FOR MOBILE */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hamburger & Responsive Mobile styles specifically for menu overlay behavior */}
      <style>{`
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          z-index: 10000;
        }

        .hamburger span {
          width: 25px;
          height: 2px;
          background: var(--dark);
          border-radius: 5px;
          transition: var(--transition);
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 320px;
            height: 100vh;
            background: var(--white);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            transition: right 0.4s ease;
            z-index: 9998;
            padding: 40px;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links a {
            font-size: 18px;
            font-weight: 500;
          }

          .mobile-btn {
            display: block;
            margin-top: 10px;
            padding: 10px 22px;
            background: var(--primary);
            color: var(--white);
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Nav;