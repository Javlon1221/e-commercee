import React from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import { motion } from "framer-motion";
import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Product";
import ShopHero from "./ShopHero";
import ShopToolbar from "./ShopToolbar";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Shop = () => {
  const { getProduct } = useProduct();
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page")) || 1;
  const pageSize = Number(params.get("pageSize")) || 16;

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

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
    <div className="min-h-screen bg-white">
      <motion.div {...fadeUp}>
        <ShopHero />
        <ShopToolbar />
      </motion.div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Shop
        </motion.h2>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Products
            data={data?.data?.products}
            loading={isLoading}
            count={pageSize} 
          />
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Pagination
            current={page}
            onChange={handleChangePage}
            total={data?.data?.total || 0}
            pageSize={pageSize}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
