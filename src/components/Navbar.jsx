import React, { useState } from "react";
import tutorLogo from "../assets/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="navContainer">
        <div className="navContent">
          <CustomLink to="/">
            <img src={tutorLogo} className="logo" alt="Tutoring logo" />
          </CustomLink>
          <ul className="navHeader">
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/classes">Classes</CustomLink>
            <CustomLink to="/contact">Contact Us</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
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
        <ul className="dropdownContent">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/classes">Classes</CustomLink>
          <CustomLink to="/contact">Contact Us</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </ul>
      )}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
