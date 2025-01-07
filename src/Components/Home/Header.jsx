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

        {/* Profile Image */}
        <div className="block">
          <img
            src="../../images/profile.jpeg" // Replace with the correct high-resolution image path
            alt="Profile"
            className="h-16 w-16 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
