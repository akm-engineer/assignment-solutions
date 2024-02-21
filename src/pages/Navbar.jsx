import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-lg fixed top-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link to="/">
              <img src={logo} className="w-30 h-16" alt="Logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-600 hover:text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="border border-black   rounded-3xl px-4 py-2 font-bold hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link
              to="/contact"
              className="py-3 text-blue-600 hover:underline transition delay-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
