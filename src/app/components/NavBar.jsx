"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLinks";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  { path: "#about", title: "About" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
];
// Navbar.jsx
const NavBar = () => {
  const [navbarOpen, setnavbarOpen] = useState(true);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 mt-4">
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
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setnavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-200 hover:text-white hover:border-white"
            >
              <FaTimes className="h-5 w-5" color="gray" />
            </button>
          ) : (
            <button
              onClick={() => setnavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-gray-500 text-slate-200 hover:text-white hover:border-white"
            >
              <IoMenu className="h-5 w-5" color="gray" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <NavLink href={navlink} title={navlink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default NavBar;
