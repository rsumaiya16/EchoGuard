// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">EchoGuard</h1> {/* Brand name */}
        <nav>
          <ul className="flex space-x-4">

        
    
           <li>
              <Link to="/contact">Contact</Link> {/* Link to Contact Screen */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
