import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Instagram, { GithubIcon, LinkedinIcon } from "../Icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max px-8 py-3 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>S</button>
      </nav>
      <div>
        <a href="/" className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-105 transition-all ease duration-200" /></a>
        <a href="/" className="inline-block w-6 h-6 mr-4"><Instagram    className="hover:scale-105 transition-all ease duration-200" /></a>
        <a href="/" className="inline-block w-6 h-6 mr-4"><GithubIcon   className="hover:scale-105 transition-all ease duration-200" /></a>
      </div>
    </header>
  );
};

export default Header;
