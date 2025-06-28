import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { useNavigate } from "react-router-dom";

const ProductItem = ({
  id,
  title,
  brand,
  price,
  thumbnail,
  discountPercentage,
  stock,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const isLiked = wishlist.some((item) => item.id === id);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-2xl shadow-sm overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300"
    >
      {/* Image & Overlay */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay: Add to cart */}
        <div
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart({ id, title, brand, price, thumbnail, discountPercentage, stock }));
            }}
            className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200 shadow-md transition"
          >
            Add to cart
          </button>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleWishlist({ id, title, brand, price, thumbnail, discountPercentage, stock }));
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-red-500 hover:scale-110 transition"
        >
          {isLiked ? <HeartFilled /> : <HeartOutlined />}
        </button>

        {/* Badges */}
        {discountPercentage >= 10 && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
            -{Math.round(discountPercentage)}%
          </span>
        )}

        {stock >= 100 && (
          <span className="absolute bottom-3 left-3 bg-green-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
            New
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate mb-2">{brand}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">
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
