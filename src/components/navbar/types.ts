export type NavbarProps = {
  menuItems: {
    title: string;
    slug: string;
  }[];
};

export type NavbarMenuProps = NavbarProps & {
  closeMenu: () => void;
};
