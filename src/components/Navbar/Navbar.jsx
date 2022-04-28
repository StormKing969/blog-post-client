import React from "react";
import { NavLink } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar">
      <div className="nav_links">
        <NavLink end to="/">
          WELCOME
        </NavLink>
        <NavLink end to="/about">
          ABOUT
        </NavLink>
        <NavLink end to="/contact">
          CONTACT
        </NavLink>
        <NavLink end to="/blog">
          BLOG
        </NavLink>
      </div>

      <div className="nav_icons">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sajana-wijesinghe"
        >
          <GoMail />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sajana-wijesinghe"
        >
          <BsInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sajana-wijesinghe"
        >
          <FaLinkedinIn />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sajana-wijesinghe"
        >
          <FaFacebookF />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
