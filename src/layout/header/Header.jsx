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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
      <div className="hidden md:flex gap-4 items-center relative">
        {/* Profile icon with dropdown */}
        <div className="relative">
          <button
            className="hover:scale-110 transition-transform"
            onClick={() => setIsDropdownOpen(prev => !prev)}
          >
            <CgProfile size={23} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg border rounded-md z-50">
              <NavLink
                to="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Search modal trigger */}
        <button
          className="hover:scale-110 transition-transform"
          onClick={() => setIsSearchOpen(true)}
        >
          <BsSearch size={23} />
        </button>

        <NavLink to="/wishlist" className="hover:scale-110 transition-transform"><FaRegHeart size={23} /></NavLink>
        <NavLink to="/cart" className="hover:scale-110 transition-transform"><SlBasket size={23} /></NavLink>
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
            <NavLink to="/wishlist"><FaRegHeart size={23} /></NavLink>
            <NavLink to="/cart"><SlBasket size={23} /></NavLink>
            <NavLink to="/login"><CiLogin size={23} /></NavLink>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[99]">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <button onClick={() => setIsSearchOpen(false)} className="text-xl">×</button>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
