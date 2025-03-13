import React from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react"; // Icons from Lucide React

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Hamburger Menu + Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button className="p-2 rounded hover:bg-gray-800">
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            EchoGuard
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-900 text-white p-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Right Section: Notifications + User Name */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="relative p-2 rounded hover:bg-gray-800">
            <Bell size={24} />
            <span className="absolute top-0 right-0 bg-red-600 text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
              9+
            </span>
          </button>

          {/* User Name */}
          <div className="font-semibold">John Doe</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
