import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="logo">Mario</span>
            </Link>
            <div className="ml-6 flex space-x-4 items-center">
              <Link to="/about" className="text-gray-700 hover:text-heal-primary px-3 py-2">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth" className="text-gray-700 hover:text-heal-primary px-3 py-2">
              Sign In
            </Link>
            <Link to="/auth" className="bg-heal-primary text-white px-4 py-2 rounded-md hover:bg-heal-secondary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar