import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="relative mt-12 border-t border-neutral-800 bg-gradient-to-b from-neutral-900 to-black">
      <div className="container mx-auto px-6 py-10">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-rose-400 transition-transform transform hover:scale-125"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Company Name + Tagline */}
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
            🍴 Bennett Eats
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Where flavors meet friendships.
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Bennett Eats</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
