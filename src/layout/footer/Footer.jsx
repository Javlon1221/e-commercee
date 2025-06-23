import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-16 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & Address */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Furniro.</h2>
          <address className="not-italic leading-relaxed">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black font-medium">Home</a></li>
            <li><a href="#" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black font-medium">Payment Options</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-400 focus:outline-none py-1 px-2 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="text-sm font-semibold border-b border-black hover:text-white hover:bg-black px-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400 border-t pt-6">
        2023 Furniro. All rights reserved
      </div>
    </footer>
  );
};

export default React.memo(Footer);
