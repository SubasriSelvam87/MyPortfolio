import React, { useEffect, useRef, useState } from "react";
import "./Nav.css"; // keep your CSS

import { FaBars } from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: "fas fa-tachometer-alt" },
  { label: "Address Book", icon: "far fa-address-book" },
  { label: "Components", icon: "far fa-clone" },
  { label: "Calendar", icon: "far fa-calendar-alt" },
  { label: "Charts", icon: "far fa-chart-bar" },
  { label: "Documents", icon: "far fa-copy" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Hamburger Toggle */}
        <div
          className={`hamburger-lines ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        {/* Menu Items */}
        <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Logo */}
        <h1 className="logo">Navbar</h1>
      </div>
    </nav>
  );
};

export default Nav;
