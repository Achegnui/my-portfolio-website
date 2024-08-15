import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLinks";

const navlinks = [
  { path: "#about", title: "About" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
];
// Navbar.jsx
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={100}
            height={100}
            style={{ borderRadius: "50%", width: "70px", height: "70px" }}
            className=""
          />
        </Link>

        <div className="menu block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <NavLink href={navlink} title={navlink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
