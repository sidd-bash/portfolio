import React, { useState } from "react";

function Navbar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 dark:bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Siddharth Bhardwaj</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-indigo-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-3 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-4 py-4 space-y-4">
          <li><a href="#hero" className="block hover:text-indigo-400">Home</a></li>
          <li><a href="#about" className="block hover:text-indigo-400">About</a></li>
          <li><a href="#skills" className="block hover:text-indigo-400">Skills</a></li>
          <li><a href="#projects" className="block hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="block hover:text-indigo-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;