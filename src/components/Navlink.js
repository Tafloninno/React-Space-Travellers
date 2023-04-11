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
        <NavLink to="rockets" className="navlink">
          Rockets
        </NavLink>
        <NavLink to="/missions" className="navlink">
          Missions
        </NavLink>
        <NavLink to="/myprofile" className="navlink">
          My Profile
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navlink;
