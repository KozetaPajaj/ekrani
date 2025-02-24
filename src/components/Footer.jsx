import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="px-8 pt-16 lg:px-9 bg-[#111111] text-white  border-t border-[#2e2e2e]">
      <div className="grid gap-10 row-gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="h-14 w-40 block">
            <img src={logo} alt="Ekrani Logo" className="h-full w-full object-cover"/>
          </Link>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-[#ffffffc2]">
              Ekrani brings you a seamless streaming experience with a vast
              collection of movies and TV shows. Browse, discover, and enjoy
              high-quality entertainment anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold">Browse</p>
          <Link to="/" className="text=[#ffffffc2]">Home</Link>
          <Link to="/movies" className="text-[#ffffffc2]">Movies</Link>
          <Link to="/TVShows" className="text-[#ffffffc2]">TV Shows</Link>
        </div>

        <div>
          <p className="text-base font-bold mb-2">
            CONTACT US
          </p>
          <a href="mailto:kozetapajaj27@gmail.com" target="_blank" rel="noreferrer" className="text-[#ffffffc2]">kozetapajaj27@gmail.com</a>
        </div>
      </div>

      <div className="pt-10 pb-10 border-t">
        <p className="text-sm">© Copyright {new Date().getFullYear()} EKRANI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
