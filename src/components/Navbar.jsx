import React, { useState } from "react";
import tutorLogo from "../assets/logo.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const currentPathname = window.location.pathname;
  console.log("current path: " + currentPathname);

  return (
    <>
      <nav className="navContainer">
        <div className="navContent">
          <a href="/home">
            <img src={tutorLogo} className="logo" alt="Tutoring logo" />
          </a>
          <ul className="navHeader">
            <li>
              <a
                href="/about"
                className={currentPathname === "/about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/classes"
                className={currentPathname === "/classes" ? "active" : ""}
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={currentPathname === "/contact" ? "active" : ""}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={currentPathname === "/login" ? "active" : ""}
              >
                Login
              </a>
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
