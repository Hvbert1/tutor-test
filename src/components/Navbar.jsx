import React, { useState } from "react";
import tutorLogo from "../assets/logo.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="navContainer">
        <div className="navContent">
          <a href="/home">
            <img src={tutorLogo} className="logo" alt="Tutoring logo" />
          </a>
          <ul className="navHeader">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/classes">Classes</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <li className="navDropdown">
            <span
              className="material-symbols-outlined"
              onClick={toggleDropdown}
            >
              menu
            </span>
          </li>
        </div>
      </nav>
      {dropdownOpen && (
        <div className="dropdownContent">
          <a href="/about">About</a>
          <a href="/classes">Classes</a>
          <a href="/contact">Contact Us</a>
          <a href="/login">Login</a>
        </div>
      )}
    </>
  );
}
