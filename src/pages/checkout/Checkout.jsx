import CheckoutHero from "./CheckoutHero";

const Checkout = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen transition-colors duration-700">
      <CheckoutHero />
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {/* Billing Details */}
        <div className="bg-white/80 rounded-xl shadow-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Billing details</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="transition-all duration-300 hover:scale-105">
                <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-700">First Name</label>
                <input id="firstName" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-700">Last Name</label>
                <input id="lastName" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
              </div>
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-700">Company Name (Optional)</label>
              <input id="company" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="country" className="block text-sm font-medium mb-1 text-gray-700">Country / Region</label>
              <select id="country" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition">
                <option>Sri Lanka</option>
              </select>
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="street" className="block text-sm font-medium mb-1 text-gray-700">Street address</label>
              <input id="street" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="city" className="block text-sm font-medium mb-1 text-gray-700">Town / City</label>
              <input id="city" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="province" className="block text-sm font-medium mb-1 text-gray-700">Province</label>
              <select id="province" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition">
                <option>Western Province</option>
              </select>
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="zip" className="block text-sm font-medium mb-1 text-gray-700">ZIP code</label>
              <input id="zip" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">Phone</label>
              <input id="phone" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email address</label>
              <input id="email" type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none transition" />
            </div>

            <div className="transition-all duration-300 hover:scale-105">
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1 text-gray-700">Additional information</label>
              <textarea id="additionalInfo" className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-orange-400 outline-none transition"></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white/90 border rounded-xl p-8 shadow-xl animate-slide-in">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Product</h3>
          <div className="flex justify-between mb-2 text-sm">
            <span>Asgard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4 font-bold text-orange-500">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>

          {/* Payment Method */}
          <div className="text-sm mb-4">
            <div className="mb-3">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="radio" name="payment" className="mt-1 accent-orange-500" defaultChecked />
                <div>
                  <p className="font-medium">Direct Bank Transfer</p>
                  <p className="text-gray-600 text-xs mt-1">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </label>
            </div>
            <div className="mb-2">
            <div className="mb-2">
              <label className="flex items-center gap-2 cursor-pointer text-gray-400">
                <input type="radio" name="payment" disabled />
                Credit Card
              </label>
            </div>
              <label className="flex items-center gap-2 cursor-pointer text-gray-400">
                <input type="radio" name="payment" disabled />
                Cash On Delivery
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="underline">privacy policy</span>.
            </p>
          </div>

          <button className="w-full py-3 border border-orange-500 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md">
            Place order
          </button>
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          .animate-slide-in {
            animation: slide-in 0.8s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
