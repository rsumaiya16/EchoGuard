import React from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react"; // Icons from Lucide React

const Header = ({ userName }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-violet-700 text-white py-3 z-50 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left Section: Hamburger Menu + Logo */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded hover:bg-violet-900/50 transition duration-300">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold">EchoGuard</Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-900 text-white p-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Right Section: Notifications + User Name */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded hover:bg-violet-900/50 transition duration-300">
            <Bell size={24} />
            <span className="absolute top-0 right-0 bg-red-600 text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <div className="font-semibold">{userName}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
