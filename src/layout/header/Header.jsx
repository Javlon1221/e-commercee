import React from 'react'
import { NavLink } from 'react-router-dom'
import vite from '../../assets/Flogo.svg'
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const Header = () => {
  return (
    <header className='w-full h-[100px]  flex justify-between items-center px-5'>
      <img src={vite} alt="" />
      <div className=' flex gap-[60px]'>
        <NavLink className='font-[500] text-[16px]' to={"/"}>Home</NavLink>
        <NavLink className='font-[500] text-[16px]' to={"/shop"}>Shop</NavLink>
        <NavLink className='font-[500] text-[16px]' to={"/about"}>About</NavLink>
        <NavLink className='font-[500] text-[16px]' to={"/contact"}>Contact</NavLink>
      </div>
      <div className='flex gap-4 items-center'>
        <NavLink to={"/profile"}><CgProfile className='text-[23px]' /></NavLink>
        <button><BsSearch className='text-[23px]' /></button>
        <NavLink to={"/like"}><FaRegHeart className='text-[23px]' /></NavLink>
        <NavLink to={"/basket"}><SlBasket className='text-[23px]'/></NavLink>
        <NavLink to={"/login"}><CiLogin className='text-[23px]' /></NavLink>
      </div>
    </header>
  )
}

export default React.memo(Header)