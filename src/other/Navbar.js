import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navbarElement">
        Home
      </NavLink>
      <NavLink to="/" className="navbarElement">
        navlink2
      </NavLink>
    </div>
  );
};

export default Navbar;
