import React from "react";
import Products from "@/components/products/Product";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">My Wishlist</h2>

      {wishlist.length ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Products data={wishlist} />
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <img
            src="https://uzum.uz/static/img/hearts.cf414be.png"
            alt="Empty wishlist"
            className="w-40 h-40 object-contain mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-700">Wishlist bo‘sh</h3>
          <p className="text-gray-500 mt-2">Siz hali hech qanday mahsulotni saqlamadingiz.</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
