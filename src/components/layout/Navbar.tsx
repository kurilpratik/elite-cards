import Link from "next/link";
import React from "react";

type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Cards", href: "/cards" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed z-10 flex w-screen justify-between border-b-1 border-b-neutral-600 bg-transparent px-8 py-6 text-white backdrop-blur-2xl">
      <Link href={"/"} className="text-xl">
        <span className="font-merri font-bold">Elite</span>
        Cards
      </Link>
      <ul>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} className="ml-8 text-sm">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
