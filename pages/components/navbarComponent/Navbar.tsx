import React, { useState } from "react";
import { FaUser, FaBriefcase, FaCog, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Define the menu items with associated icons
  const menuItems = [
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Projects", href: "#projects", icon: <FaBriefcase /> },
    { name: "Skills", href: "#skills", icon: <FaCog /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <FaBars
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              />
              {/* Close Icon */}
              <FaTimes
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              />
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleScroll(item.href.slice(1))}
                    className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 hover:text-yellow-400 transition-all"
                  >
                    {/* Render the icon before the text */}
                    <span className="transition-transform transform hover:scale-110 hover:translate-x-2 hover:translate-y-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* User Profile Name */}
            <div className="text-white text-sm font-medium">
              <span>Your Name</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href.slice(1))}
              className="block rounded-md bg-opacity-80 px-3 py-2 text-base font-medium text-white hover:bg-opacity-90 hover:text-yellow-400 transition-all"
            >
              <span className="transition-transform transform hover:scale-110 hover:translate-x-2 hover:translate-y-2">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
