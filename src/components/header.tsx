import React from "react";
import { Link } from "gatsby";

type HeaderProps = {
  menuItems: {
    title: string;
    slug: string;
  }[];
};

const Header = ({ menuItems }: HeaderProps) => {
  return (
    <nav className="w-full text-center border-b border-grey p-4 sticky bg-black text-white top-0">
      <div>
        {menuItems.map((menuItem) => (
          <Link to={menuItem.slug}>{menuItem.title}</Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
