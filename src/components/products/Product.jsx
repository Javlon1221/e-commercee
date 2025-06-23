import { useProduct } from '../../api/hooks/useProduct';
import { Link, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

const Product = () => {
    const navigate = useNavigate();
    const { getProduct } = useProduct();
    const { data, isLoading, isError } = getProduct();

    if (isLoading) {
        return (
            <div
                className="text-center p-10 text-gray-500"
                role="status"
                aria-live="polite"
            >
                Loading products...
            </div>
        );
    }

    if (isError) {
        return (
            <div
                className="text-center p-10 text-red-500"
                role="alert"
            >
                Failed to load products.
            </div>
        );
    }

    const products = data?.data?.products?.slice(0, 8) || [];

    // Animatsiya variantlari
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08 }
        }),
        hover: { scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <Link
                            to={`/product/${product.id}`}
                            className="group bg-white rounded shadow hover:shadow-lg overflow-hidden transition"
                        >
                            <img
                                src={product.thumbnail || '/fallback.jpg'}
                                alt={product.title || 'Product'}
                                className="w-full h-52 object-cover"
                                loading="lazy"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.title || 'No title'}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    {(product.description?.length > 60
                                        ? product.description.slice(0, 60) + '...'
                                        : product.description) || 'No description'}
                                </p>
                                <p className="text-red-600 font-bold">
                                    Rp {product.price ? product.price.toLocaleString() : 'N/A'}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={() => navigate('/shop')}
                    className="border px-6 py-2 rounded hover:bg-gray-100 transition"
                >
                    Show More
                </button>
            </div>
        </section>
    );
};

export default Product;
