import React from 'react';
import heroImg from '../../assets/hero.svg';

const Hero = () => {
    return (
        <div
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative bg-cover bg-center flex items-center justify-center mx-auto rounded-xl shadow-lg px-4"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            {/* Shaffof oq quti */}
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-md max-w-lg w-full text-center md:text-left">
                <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase mb-2">New Arrival</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-700 mb-4 leading-tight">
                    Discover Our <br className="hidden sm:block" /> New Collection
                </h1>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md shadow transition">
                    BUY NOW
                </button>
            </div>
        </div>
    );
};

export default Hero;
