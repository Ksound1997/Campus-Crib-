import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-orange-500">
            Campus<span className="text-black">crib</span>
          </h2>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Student Login
        </h3>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-medium py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>

          <button
            type="button"
            className="w-full bg-gray-100 text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-200 transition flex justify-center items-center gap-2"
          >
            <span>Switch to Vendor Login</span>
            <img
              src="https://www.svgrepo.com/show/513725/switch.svg"
              alt="switch icon"
              className="w-4 h-4"
            />
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
