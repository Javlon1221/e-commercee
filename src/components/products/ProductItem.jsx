import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { useNavigate } from "react-router-dom";

const ProductItem = (product) => {
  const { id, title, brand, price, thumbnail, discountPercentage, stock } = product;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const isLiked = wishlist.some((item) => item.id === id);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-xl shadow-sm overflow-hidden group relative cursor-pointer transition duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(product));
            }}
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-100"
          >
            Add to cart
          </button>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleWishlist(product));
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-red-500 hover:scale-110 transition"
        >
          {isLiked ? <HeartFilled /> : <HeartOutlined />}
        </button>

        {discountPercentage >= 10 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            -{Math.round(discountPercentage)}%
          </span>
        )}

        {stock >= 100 && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-md font-medium text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">{brand}</p>
        <div className="flex items-center gap-2">
          <span className="text-md font-semibold text-black">
            ${Number(price).toLocaleString()}
          </span>
          {discountPercentage > 0 && (
            <span className="text-sm line-through text-gray-400">
              ${Math.round(price * (1 + discountPercentage / 100))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
