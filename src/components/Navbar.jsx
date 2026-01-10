import { ArrowUpRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between border-b border-gray-400 py-5">
        <div className="navLinks w-full">
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
        <div className="logo w-full flex justify-center items-center">
          <a href="#" className="flex gap-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <h2 className="text-2xl font-semibold">Astratto</h2>
          </a>
        </div>
        <div className="cta w-full flex items-center gap-4 justify-end font-semibold">
          <a href="">Career</a>
          <a href="" className="flex items-center gap-2 border border-amber-600 rounded-full px-4 py-1.5">
            Contact us
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
