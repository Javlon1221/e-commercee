import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ShopHero from "./ShopHero";
import { motion } from "framer-motion";

const Shop = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const pageSize = Number(params.get("pageSize")) || 12;

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    if (pageS !== pageSize) {
      params.set("pageSize", pageS);
      params.set("page", "1");
    } else {
      params.set("page", page);
    }
    setParams(params);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Shop</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.products?.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-xl shadow-sm overflow-hidden group relative cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
            <div className="relative overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center space-y-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart funksiyasini chaqiring bu yerda
                  }}
                  className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-100"
                >
                  Add to cart
                </button>
                <div className="flex gap-2 text-white text-sm">
                  <button onClick={(e) => e.stopPropagation()} className="hover:underline">Share</button>
                  <span>|</span>
                  <button onClick={(e) => e.stopPropagation()} className="hover:underline">Compare</button>
                  <span>|</span>
                  <button onClick={(e) => e.stopPropagation()} className="hover:underline">Like</button>
                </div>
              </div>

              {/* Badge */}
              {product.discountPercentage >= 10 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  -{Math.round(product.discountPercentage)}%
                </span>
              )}
              {product.stock >= 100 && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-md font-medium text-gray-800 truncate">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{product.description?.slice(0, 30)}...</p>
              <div className="flex items-center gap-2">
                <span className="text-md font-semibold text-black">
                  Rp {Number(product.price).toLocaleString()}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-sm line-through text-gray-400">
                    Rp {(product.price * (1 + product.discountPercentage / 100)).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Shop;
