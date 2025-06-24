import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCart,
  decrementCart,
  removeCart,
} from "@/redux/features/cart";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  selectCartItems,
  selectCartTotal,
} from "@/redux/features/cartSelector";
import CartHero from "./CartHero";

const Cart = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <CartHero />
    <motion.div
      className="p-4 sm:p-8 bg-white min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Cart
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2">
          <div className="hidden sm:grid grid-cols-5 bg-orange-50 text-gray-700 font-semibold py-3 px-4 rounded-t-md">
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cart.map((product, index) => (
            <motion.div
              key={product.id}
              className="grid grid-cols-1 sm:grid-cols-5 items-center border-b px-4 py-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {/* Image + Title */}
              <div className="sm:col-span-2 flex items-center gap-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <p className="font-medium text-gray-800 text-sm sm:text-base">
                  {product.title}
                </p>
              </div>

              {/* Price */}
              <p className="text-gray-700">Rs. {product.price.toLocaleString()}</p>

              {/* Quantity */}
              <div className="flex items-center gap-2 border rounded px-2 py-1 w-fit mx-auto">
                <button
                  onClick={() => dispatch(decrementCart(product))}
                  disabled={product.quantity <= 1}
                  className="px-2 text-lg font-bold disabled:opacity-40"
                >
                  −
                </button>
                <span className="px-2">{product.quantity}</span>
                <button
                  onClick={() => dispatch(incrementCart(product))}
                  className="px-2 text-lg font-bold"
                >
                  +
                </button>
              </div>

              {/* Subtotal + Delete */}
              <div className="flex items-center justify-between sm:justify-end gap-2">
                <span className="font-semibold text-gray-800">
                  Rs. {(product.price * product.quantity).toLocaleString()}
                </span>
                <button
                  onClick={() => dispatch(removeCart(product))}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Summary */}
        <motion.div
          className="bg-orange-50 p-6 rounded-md shadow-md h-fit"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-6 text-black font-bold">
            <span>Total</span>
            <span className="text-orange-500">Rs. {total.toLocaleString()}</span>
          </div>
          <button className="w-full bg-white text-black border border-black py-2 rounded hover:bg-black hover:text-white transition">
            Check Out
          </button>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default Cart;
