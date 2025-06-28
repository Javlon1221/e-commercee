import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { AiFillStar } from "react-icons/ai";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Products from "@/components/products/Product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cart";
import { toggleWishlist } from "@/redux/features/wishlist";

const Skeleton = ({ className = "" }) => (
  <div className={`bg-gray-200 animate-pulse ${className}`} />
);

const colors = ["#7E33E0", "#1A1A1A", "#B88E2F"];

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => api.get(`/products/${id}`).then((res) => res.data),
    enabled: Boolean(id),
    retry: 1,
  });

  const {
    data: relatedProducts,
    isLoading: relatedLoading,
  } = useQuery({
    queryKey: ["related-products", data?.category],
    queryFn: () =>
      api.get(`/products/category/${data?.category}`).then((res) => res.data.products),
    enabled: !!data?.category,
  });

  if (!id) return <div className="p-10 text-center text-red-500">Invalid product ID.</div>;
  if (isError) return <div className="p-10 text-center text-red-500">Failed to load product.</div>;

  if (isLoading || !data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 animate-pulse">
        <Skeleton className="w-full h-[500px] rounded-xl" />
        <div>
          <Skeleton className="h-10 w-2/3 mb-2 rounded" />
          <Skeleton className="h-6 w-1/4 mb-3 rounded" />
          <Skeleton className="h-20 w-full mb-6 rounded" />
        </div>
      </div>
    );
  }

  const images = Array.isArray(data.images) && data.images.length > 0 ? data.images : ["/no-image.png"];
  const mainImage = selectedImage || images[0];
  const isLiked = wishlist.some((item) => item.id === data.id);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex md:flex-col gap-4 md:mr-4 overflow-x-auto md:overflow-visible">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover border-2 rounded-md cursor-pointer shadow transition-transform duration-200 ${
                  img === selectedImage ? "border-black scale-105" : "border-gray-300"
                }`}
                loading="lazy"
              />
            ))}
          </div>

          <img
            src={mainImage}
            alt={data.title}
            onClick={() => setIsModalOpen(true)}
            className="w-full h-[500px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg cursor-zoom-in"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">{data.title}</h2>
          <p className="text-xl text-red-600 font-bold mb-3">Rs. {Number(data.price).toLocaleString()}</p>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-gray-500">{data.rating || 5} Review</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{data.description}</p>

          <div className="mb-6">
            <span className="text-md font-medium">Color: </span>
            <div className="flex gap-3 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 transition duration-200 ${
                    selectedColor === color ? "border-black scale-110" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <span className="text-md font-medium">Quantity: </span>
            <div className="flex items-center mt-2 border rounded-lg overflow-hidden w-fit shadow-sm">
              <button
                className="px-3 py-1 text-lg bg-gray-50 hover:bg-gray-200 transition-colors"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 py-1 bg-white">{quantity}</span>
              <button
                className="px-3 py-1 text-lg bg-gray-50 hover:bg-gray-200 transition-colors"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => dispatch(addToCart({ ...data, quantity }))}
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 shadow"
            >
              Add To Cart
            </button>
            <button
              onClick={() => dispatch(toggleWishlist(data))}
              className={`border px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300 ${
                isLiked ? "bg-red-100 text-red-600 border-red-400" : "border-gray-300"
              }`}
            >
              {isLiked ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
            </button>
          </div>

          <ul className="text-sm text-gray-500 space-y-1">
            <li><strong>SKU</strong>: {data.id}</li>
            <li><strong>Category</strong>: {data.category}</li>
            <li><strong>Tags</strong>: Sofa, Chair, Home, Shop</li>
          </ul>
        </div>

        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0">
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full animate-fadeIn">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black transition"
                onClick={() => setIsModalOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <img src={mainImage} alt="Zoomed" className="w-full object-contain max-h-[80vh] p-4 rounded" />
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>

      {relatedProducts && relatedProducts.length > 1 && (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h3 className="text-2xl font-semibold mb-6">Related Products</h3>
          <Products data={relatedProducts.filter(p => p.id !== data.id).slice(0, 4)} loading={relatedLoading} count={4} />
        </div>
      )}
    </>
  );
};

export default DetailPage;
