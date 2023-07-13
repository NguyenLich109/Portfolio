interface typeNavbar {
  text: string;
  href: string;
}

export const Navbar = () => {
  const dataNavbar: typeNavbar[] = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
  ];
  return { dataNavbar };
};
