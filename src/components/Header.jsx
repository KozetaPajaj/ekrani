import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const signOut = () => {
    logout();
    setNav(false);
    navigate("/");
  };

  return (
    <header className="bg-[#111111] z-50 flex fixed justify-between container items-center shadow-md shadow-teal-500 py-4 mx-auto px-4 text-white min-w-full">
      <Link to="/" className="block w-40 h-14">
        <img
          src={logo}
          alt="Ekrani Logo"
          className="w-full object-cover h-full"
        />
      </Link>

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

          {!user ? (
            <>
              <li className="py-2 px-4 m-2 cursor-pointer border-1 border-white shadow-md shadow-[#979797]">
                <Link to="/SignIn">Sign In</Link>
              </li>
              <li className="py-2 px-4 m-2 cursor-pointer bg-[#74b6b7] duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none shadow-lg shadow-teal-500/50">
                <Link to="/SignUp">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li className="py-2 px-4 m-2 cursor-pointer border-1 border-white shadow-md shadow-[#979797]">
                <Link to="/UserDashboard">My Profile</Link>
              </li>
              <li
                onClick={signOut}
                className="py-2 px-4 m-2 cursor-pointer bg-[#74b6b7] duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none shadow-lg shadow-teal-500/50"
              >
                Sign Out
              </li>
            </>
          )}
        </ul>
      </nav>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={`fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] z-50 transition-transform duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" className="block w-40 h-14" onClick={handleNav}>
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

        {!user ? (
          <>
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
          </>
        ) : (
          <>
            <li className="p-2 m-2">
              <Link to="/UserDashboard" onClick={handleNav}>
                My Profile
              </Link>
            </li>
            <li className="p-2 m-2 cursor-pointer" onClick={signOut}>
              Sign Out
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
