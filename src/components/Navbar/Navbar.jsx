import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>DAILY JOURNAL</h1>
      </div>

      <div className="nav_links">
        <ul>
          <li>
            <NavLink end to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink end to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <a href="https://sajana-wijesinghe.com/">PERSONAL WEBSITE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
