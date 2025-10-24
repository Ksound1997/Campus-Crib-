import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="bg-orange-500 text-white flex flex-col justify-center px-8 md:px-20 py-10 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Your space, your life <br /> - simplified
        </h1>

        <p className="text-lg mb-8 max-w-md">
          Join thousands of students and campus vendors who are earning, growing
          and navigating their campus experience with ease.
        </p>

        <ul className="space-y-4 text-white/90">
          <li className="flex items-center gap-3">
            <span className="text-2xl">✔</span>
            Secure verified student accommodation
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">✔</span>
            List or purchase campus-ready items
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">✔</span>
            Manage and pay all your dues and bills
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">✔</span>
            Connect with trusted vendors and fellow students
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center md:w-1/2 bg-white py-10 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-orange-500">
              Campus<span className="text-black">crib</span>
            </h2>
            <h3 className="text-lg font-semibold mt-2">Application Form</h3>
            <p className="text-sm text-gray-500">
              Please kindly complete the form
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <p className="text-xs text-gray-500">
              By signing up, you agree to the{" "}
              <Link to="/terms" className="text-orange-500 underline">
                Terms of condition
              </Link>{" "}
              &{" "}
              <Link to="/privacy" className="text-orange-500 underline">
                Privacy Policy
              </Link>{" "}
              of Campuscrib
            </p>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>

            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-medium">
                Login here
              </Link>
            </p>

            <Link
              to="/"
              className="block text-center text-sm text-gray-500 underline mt-4"
            >
              ← Return to homepage
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
