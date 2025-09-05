import React, { useState } from "react";
// import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Added import

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        {/* Logo */}
        <h1  width={80} height={22}> Bennett Eats</h1> 

        {/* Desktop Links */}
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              href={`#${link.targetId}`}
              key={index}
              className={`text-sm ${
                index !== 0 ? "border-l border-neutral-300/20 pl-2" : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenuOpen}
            aria-label="Toggle menu"
            className="text-white text-2xl"
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              href={`#${link.targetId}`}
              key={index}
              className="block p-4 uppercase tracking-tighter hover:bg-neutral-800 transition"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
