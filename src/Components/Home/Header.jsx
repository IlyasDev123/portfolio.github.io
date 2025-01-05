import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo / Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Muhammad Ilyas
          </Link>
        </h1>

        {/* Navigation Menu */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <Link
                to="#about"
                className="hover:text-yellow-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="hover:text-yellow-300 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                className="hover:text-yellow-300 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className="block md:hidden">
          <button
            type="button"
            className="text-yellow-300 hover:text-white transition duration-300 focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
