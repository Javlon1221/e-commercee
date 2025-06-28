// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vite from '../../assets/Flogo.svg';
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useProduct } from '@/api/hooks/useProduct';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const { searchProduct } = useProduct();
  const { data, isFetching } = searchProduct(searchTerm);

  return (
    <header className="w-full h-[100px] flex justify-between items-center px-5 shadow-sm z-50 bg-white relative">
      <img src={vite} alt="Logo" className="h-10" />

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

      <div className="hidden md:flex gap-4 items-center relative">
        <div className="relative">
          <button className="hover:scale-110 transition-transform" onClick={() => setIsDropdownOpen(prev => !prev)}>
            <CgProfile size={23} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg border rounded-md z-50">
              <NavLink to="/profile" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </NavLink>
              <NavLink to="/login" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Login
              </NavLink>
            </div>
          )}
        </div>

        <button className="hover:scale-110 transition-transform" onClick={() => setIsSearchOpen(true)}>
          <BsSearch size={23} />
        </button>
        <NavLink to="/wishlist" className="hover:scale-110 transition-transform"><FaRegHeart size={23} /></NavLink>
        <NavLink to="/cart" className="hover:scale-110 transition-transform"><SlBasket size={23} /></NavLink>
        <NavLink to="/login" className="hover:scale-110 transition-transform"><CiLogin size={23} /></NavLink>
      </div>

      <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
      </button>

      <div className={`absolute top-[100px] left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } md:hidden`}>
        <div className="flex flex-col items-center gap-5 py-6">
          {['/', '/shop', '/about', '/contact'].map((path, index) => (
            <NavLink key={index} to={path} onClick={() => setIsMenuOpen(false)} className="text-[18px] text-gray-700 hover:text-black font-medium transition">
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-28 z-[99]">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md relative">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-2 right-3 text-2xl">×</button>
            <h3 className="text-lg font-semibold mb-4">Search</h3>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {isFetching ? (
              <p>Loading...</p>
            ) : (
              <ul className="max-h-60 overflow-y-auto space-y-2">
                {data?.products?.length > 0 ? (
                  data.products.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                        setIsSearchOpen(false);
                        setSearchTerm('');
                      }}
                      className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    >
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-500">{product.brand}</p>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No results found.</p>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
