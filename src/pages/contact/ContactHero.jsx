import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/hero.svg'; // Rasmingizga mos path

const ContactHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-52 md:h-64 flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Contact</h1>
        <div className="mt-2 text-sm text-gray-700 flex justify-center items-center gap-1">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-1">&gt;</span>
          <span className="font-medium text-black">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
