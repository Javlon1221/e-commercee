import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import vite from '../../assets/Flogo.svg';
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[100px] flex justify-between items-center px-5 shadow-sm z-50 bg-white relative">
      {/* Logo */}
      <img src={vite} alt="Logo" className="h-10" />

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-[60px]">
        {['/', '/shop', '/about', '/contact'].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `text-[16px] font-[500] transition-all duration-300 hover:text-black ${
                isActive ? 'text-black border-b-2 border-black pb-1' : 'text-gray-500'
              }`
            }
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </nav>

      {/* Icons */}
      <div className="hidden md:flex gap-4 items-center">
        <NavLink to="/profile" className="hover:scale-110 transition-transform"><CgProfile size={23} /></NavLink>
        <button className="hover:scale-110 transition-transform"><BsSearch size={23} /></button>
        <NavLink to="/like" className="hover:scale-110 transition-transform"><FaRegHeart size={23} /></NavLink>
        <NavLink to="/basket" className="hover:scale-110 transition-transform"><SlBasket size={23} /></NavLink>
        <NavLink to="/login" className="hover:scale-110 transition-transform"><CiLogin size={23} /></NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <div className="flex flex-col items-center gap-5 py-6">
          {['/', '/shop', '/about', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[18px] text-gray-700 hover:text-black font-medium transition"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}

          {/* Mobile Icons */}
          <div className="flex gap-6 mt-4">
            <NavLink to="/profile"><CgProfile size={23} /></NavLink>
            <NavLink to="/like"><FaRegHeart size={23} /></NavLink>
            <NavLink to="/basket"><SlBasket size={23} /></NavLink>
            <NavLink to="/login"><CiLogin size={23} /></NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
