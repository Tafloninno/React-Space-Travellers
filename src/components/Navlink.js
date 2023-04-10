import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <image />
      </div>
      <div className="nav">
        <NavLink to="rockets">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/myprofile">My Profile</NavLink>
      </div>
    </nav>
  </>
);

export default Navlink;
