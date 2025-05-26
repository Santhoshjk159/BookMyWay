import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/bmw.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 text-black shadow-lg bg-blue-950">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="BookMyWay Logo"
          className="h-12 w-12 mr-4"
        />
        <h1 className="text-white text-xl font-bold">BookMyWay</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <NavLink
          to="/"
          className="text-white text-lg font-medium hover:text-orange-300"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-white text-lg font-medium hover:text-orange-300"
        >
          About Us
        </NavLink>
        <NavLink
          to="/plan"
          className="text-white text-lg font-medium hover:text-orange-300"
        >
          Plan Trip
        </NavLink>
        
        <NavLink
          to="/contact"
          className="text-white text-lg font-medium hover:text-orange-300"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
