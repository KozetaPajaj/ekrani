import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-[#111111] z-50 flex fixed justify-between container items-center shadow-md shadow-teal-500 py-4 mx-auto px-4 text-white min-w-full">
      {/* Logo */}
      <Link to="/" className="block w-40 h-14">
        <img
          src={logo}
          alt="Ekrani Logo"
          className="w-full object-cover h-full"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav>
        <ul className="hidden md:flex">
          <li className="p-2 m-2 cursor-pointer hover:text-[#569c94] transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 cursor-pointer hover:text-[#569c94] transition-colors">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="p-2 m-2 cursor-pointer hover:text-[#569c94] transition-colors">
            <Link to="/TVShows">TV Shows</Link>
          </li>
          <li className="py-2 px-4 m-2 cursor-pointer border-1 border-white shadow-md shadow-[#979797]">
            <Link to="/SignIn">Sign In</Link>
          </li>
          <li className="py-2 px-4 m-2 cursor-pointer bg-[#74b6b7] duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none shadow-lg shadow-teal-500/50">
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] z-50 transition-transform duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" className="block w-40 h-14">
          <img
            src={logo}
            alt="Ekrani Logo"
            className="w-full object-cover h-full"
          />
        </Link>
        <li className="p-2 m-2">
          <Link to="/" onClick={handleNav}>
            Home
          </Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/movies" onClick={handleNav}>
            Movies
          </Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/TVShows" onClick={handleNav}>
            TV Shows
          </Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/SignIn" onClick={handleNav}>
            Sign In
          </Link>
        </li>
        <li className="p-2 m-2">
          <Link to="/SignUp" onClick={handleNav}>
            Sign Up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
