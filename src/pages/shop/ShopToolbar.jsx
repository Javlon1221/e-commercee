import React from 'react';
import { FaList, FaThLarge } from 'react-icons/fa';
import { SlidersHorizontal } from 'lucide-react';

const ShopToolbar = ({ sort, setSort, limit, setLimit }) => {
  return (
    <div className="bg-[#f9f3eb] py-3 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200">
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <button className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <div className="flex items-center gap-2 border-l pl-4">
          <button className="p-1 rounded hover:bg-gray-200">
            <FaThLarge className="w-4 h-4" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200">
            <FaList className="w-4 h-4" />
          </button>
        </div>
        <span className="ml-4 hidden sm:inline-block text-xs sm:text-sm">
          Showing 1–{limit} of 32 results
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <label htmlFor="show" className="text-gray-700">Show</label>
        <select
          id="show"
          value={limit}
          onChange={e => setLimit(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm focus:outline-none"
        >
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>

        <label htmlFor="sort" className="text-gray-700">Sort by</label>
        <select
          id="sort"
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border rounded px-2 py-1 text-sm focus:outline-none"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">Title: A to Z</option>
        </select>
      </div>
    </div>
  );
};

export default ShopToolbar;
