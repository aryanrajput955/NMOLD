import React, { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  return (
    <div>
      <nav className="flex items-center justify-between w-full px-6 py-4 bg-white text-black">
        {/* Logo */}
        <div className="text-2xl font-body font-light lg:flex lg:items-center">
          NMOLD
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden lg:flex gap-10 font-jost text-lg">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">Projects</li>
          <li className="cursor-pointer hover:text-gray-400">Services</li>
          <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
        </ul>

        {/* Search and Hamburger Menu */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            {showSearch && (
              <input
                type="text"
                placeholder="Search here"
                className="absolute right-12 p-2 bg-white text-gray-900 rounded-xl border border-gray-900 focus:outline-none transition-all duration-300 w-[200px]"
              />
            )}
            <button onClick={() => setShowSearch((prev) => !prev)}>
              <img
                className="h-7"
                src="./SEARCH.png"
                alt="search icon"
              />
            </button>
          </div>

          {/* Hamburger Menu (Visible on small screens) */}
          <button
            className="lg:hidden block focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="h-1 w-6 bg-white mb-1"></div>
            <div className="h-1 w-6 bg-white mb-1"></div>
            <div className="h-1 w-6 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="bg-gray-800 text-white font-jost text-lg flex flex-col items-start px-6 py-4 lg:hidden">
          <li className="cursor-pointer py-2 hover:text-gray-400">Home</li>
          <li className="cursor-pointer py-2 hover:text-gray-400">Projects</li>
          <li className="cursor-pointer py-2 hover:text-gray-400">Services</li>
          <li className="cursor-pointer py-2 hover:text-gray-400">Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
