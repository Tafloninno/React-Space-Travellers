import React from "react";
import { NavLink } from "react-router-dom";
import "./navlink.css";
import logo from "../photo/logo.png";

const Navlink = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Space Travelers&apos; Hub</h3>
      </div>
      <div className="nav">
        <NavLink
          to="/rockets"
          activeClassName="active-navlink"
          className="navlink"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          activeClassName="active-navlink"
          className="navlink"
        >
          Missions
        </NavLink>
        <NavLink
          to="/myprofile"
          activeClassName="active-navlink"
          className="navlink"
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navlink;
