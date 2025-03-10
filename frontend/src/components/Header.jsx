// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">EchoGuard</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

