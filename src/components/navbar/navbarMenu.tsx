import React from "react";
import { Link } from "gatsby";

import { NavbarMenuProps } from "./types";

const NavbarMenu = ({ menuItems, closeMenu }: NavbarMenuProps) => {
  return (
    <div className="navbar-menu relative z-50">
      <div
        className="navbar-backdrop fixed inset-0 bg-gray-500 opacity-25"
        onClick={() => closeMenu()}
      ></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <button className="navbar-close" onClick={() => closeMenu()}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {menuItems.map((menuItem) => (
              <li className="mb-1">
                <Link
                  className="block p-4 text-lg font-semibold text-gray-400 hover:bg-gray-300 hover:text-black rounded"
                  to={menuItem.slug}
                  activeClassName="text-gray-700 hover:bg-gray-300 hover:text-black rounded"
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMenu;
