import React from "react";
import { useState } from "react";
import { Link } from "gatsby";

import { NavbarProps } from "./types";
import NavbarMenu from "./navbarMenu";

// Page header/navbar
const Navbar = ({ menuItems }: NavbarProps) => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
    <nav className="relative px-4 py-4 flex justify-between max-lg:justify-end items-center border-b border-grey bg-black text-white h-20">
      {/* Hamburger button, only shown for small screens */}
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center p-3" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      {/* Hamburger button, only shown for small screens */}
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        {menuItems.map((menuItem) => (
          <li>
            <Link className="text-gray-400 hover:text-white text-xl"
              to={menuItem.slug}>{menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    {/* Menu from opening hamburger button */}
    { menuOpen ? <NavbarMenu menuItems={menuItems} closeMenu={() => setMenuOpen(false)} /> : null }
    </>
  );
};

export default Navbar;