import { ArrowUpRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Magnetic } from "./Magnetic";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between border-b border-gray-400 py-5 px-4 md:px-5">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex navLinks w-full">
          <ul className="flex items-center gap-10 font-semibold">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        <div className="logo w-full flex justify-start md:justify-center items-center">
          <a href="#" className="flex gap-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <h2 className="text-2xl font-semibold">Astratto</h2>
          </a>
        </div>

        <div className="hidden md:flex cta w-full items-center gap-4 justify-end font-semibold">
          <a href="">Career</a>
          <Magnetic>
            <a
              href=""
              className="flex items-center gap-2 border border-amber-600 rounded-full px-4 py-1.5 group"
            >
              Contact us
              <ArrowUpRight className="group-hover:rotate-45 transition-all ease-out duration-300" />
            </a>
          </Magnetic>
        </div>

        <div className="md:hidden flex items-center">
          <Magnetic>
            <a
              href=""
              className="flex items-center gap-2 border border-amber-600 rounded-full px-4 py-1.5 group"
            >
              Contact
              <ArrowUpRight className="group-hover:rotate-45 transition-all ease-out duration-300" />
            </a>
          </Magnetic>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-4 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-4 py-6">
            <a
              href="#"
              className="block py-3 px-4 text-lg font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href=""
              className="block py-3 px-4 text-lg font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
