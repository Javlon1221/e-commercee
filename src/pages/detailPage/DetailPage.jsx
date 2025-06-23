import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { AiFillStar } from "react-icons/ai";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Skeleton = ({ className = "" }) => (
  <div className={`bg-gray-200 animate-pulse ${className}`} />
);

const colors = ["#7E33E0", "#1A1A1A", "#B88E2F"];

const DetailPage = () => {
  const { id } = useParams();
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

  if (!id) return <div className="p-10 text-center text-red-500">Invalid product ID.</div>;
  if (isError) return <div className="p-10 text-center text-red-500">Failed to load product.</div>;

  if (isLoading || !data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 animate-pulse">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-20 h-20 rounded-md" />
            ))}
          </div>
          <Skeleton className="w-full h-[500px] rounded-lg flex-1" />
        </div>
        <div>
          <Skeleton className="h-10 w-2/3 mb-2 rounded" />
          <Skeleton className="h-6 w-1/4 mb-3 rounded" />
          <Skeleton className="h-6 w-1/2 mb-4 rounded" />
          <Skeleton className="h-20 w-full mb-6 rounded" />
          <Skeleton className="h-8 w-1/3 mb-6 rounded" />
          <Skeleton className="h-10 w-1/2 mb-6 rounded" />
          <Skeleton className="h-10 w-32 mb-2 rounded" />
          <Skeleton className="h-10 w-32 mb-2 rounded" />
        </div>
      </div>
    );
  }

  const images = Array.isArray(data.images) && data.images.length > 0 ? data.images : ["/no-image.png"];
  const mainImage = selectedImage || images[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Image Gallery */}
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

      {/* Product Info */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">{data.title}</h2>
        <p className="text-xl text-red-600 font-bold mb-3">Rs. {Number(data.price).toLocaleString()}</p>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="text-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-gray-500">{data.rating || 5} Customer Review</span>
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
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <span className="text-md font-medium">Quantity: </span>
          <div className="flex items-center mt-2 border rounded overflow-hidden w-fit">
            <button
              className="px-3 py-1 bg-gray-100 text-lg"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-100 text-lg"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-10">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">Add To Cart</button>
          <button className="border px-6 py-2 rounded-md hover:bg-gray-100 transition">Compare</button>
        </div>

        <ul className="text-sm text-gray-500 space-y-1">
          <li><strong>SKU</strong>: {data.id}</li>
          <li><strong>Category</strong>: {data.category}</li>
          <li><strong>Tags</strong>: {Array.isArray(data.tags) ? data.tags.join(", ") : "Sofa, Chair, Home, Shop"}</li>
        </ul>
      </div>

      {/* Modal Zoom */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <img src={mainImage} alt="Zoomed" className="w-full object-contain max-h-[80vh]" />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default DetailPage;
