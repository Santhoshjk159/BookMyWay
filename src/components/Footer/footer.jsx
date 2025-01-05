import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@bookmyway.com"
              className="text-blue-400 hover:underline"
            >
              support@bookmyway.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-400 hover:underline">
              +91 987654321
            </a>
          </p>
        </div>

        {/* Redirection Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="text-blue-400 hover:underline block mb-1">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-blue-400 hover:underline block mb-1"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className="text-blue-400 hover:underline block mb-1"
              >
                PlanTrip
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-blue-400 hover:underline block mb-1"
              >
                Reach Out 
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Handles */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/BookMyWay"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/BookMyWay"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/BookMyWay"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/bookmyway"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2025 BookMyWay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
