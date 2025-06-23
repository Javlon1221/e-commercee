import React from 'react';
import viteLogo from '../../assets/vite.svg';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafe] px-4">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-lg p-10 relative">
        
        {/* Logo */}
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
          <img src={viteLogo} alt="logo" className="w-12 h-12" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mt-8">Create an Account</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Fill in your details to get started
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Javlonbek Jalilov"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
