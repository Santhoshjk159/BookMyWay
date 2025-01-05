import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 text-black shadow-lg bg-blue-950">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://files.oaiusercontent.com/file-VAykRJWKyokwP7D9Uhazgd?se=2025-01-05T12%3A59%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D35371bde-d903-4e03-8524-5bd2ef5907c8.webp&sig=FBQhZ1AwkpfI6uqDm5UrqDFgAtGIaPlHGNxzukQy028%3D"
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
