import React from "react";
import living from "../../assets/living.png";
import bedroom from "../../assets/bedroom.png";
import dining from "../../assets/dining.png";
import { motion } from "framer-motion";

const categories = [
  { title: "Dining", image: dining },
  { title: "Living", image: living },
  { title: "Bedroom", image: bedroom },
];

const Rasm = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white group"
          >
            <div className="overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="text-center py-5 bg-white">
              <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
                {cat.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold text-gray-900">Our Products</h2>
        <p className="text-gray-500 mt-2">Explore our full collection of home essentials</p>
      </div>
    </div>
  );
};

export default Rasm;
