import React from "react";
import { useNavigate } from "react-router-dom";

const Dues = () => {

    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dues Overview</h1>
          <p className="text-gray-600">
            Manage your student fees and track payment history
          </p>
        </div>
        <button  onClick={() => navigate("payment")} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
          Click to go to Payment Screen
        </button>
      </div>

      {/* Total Dues Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Dues Paid</p>
            <h2 className="text-3xl font-bold mt-1">₦12,000</h2>
          </div>

          {/* Dropdowns */}
          <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Select Level</option>
            </select>
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Select Department</option>
            </select>
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Select Semester</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pending & This Semester Dues */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pending Dues */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Pending Dues</h3>
            <span className="text-gray-400 text-sm">⏰</span>
          </div>
          <p className="text-gray-500 text-sm mb-2">Your Pending Dues</p>

          <div className="border-b pb-3 mb-3">
            <p className="font-semibold">Faculty Due</p>
            <p className="text-gray-500 text-sm">
              Electrical Electronic Engineering
            </p>
          </div>

          <div className="flex justify-between text-sm mb-3">
            <p>
              <span className="text-gray-500">Due Amount:</span>{" "}
              <span className="font-semibold">₦3,000</span>
            </p>
            <p>
              <span className="text-gray-500">Payment Date:</span>{" "}
              <span className="font-semibold">July 20th, 2026</span>
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600 flex items-start gap-2">
            <span>ℹ️</span>
            <p>
              We’re taking care of your pending due — it’ll be processed in
              moments.
            </p>
          </div>

          <div className="text-right mt-3">
            <button className="text-sm text-gray-700 font-medium hover:underline">
              View All →
            </button>
          </div>
        </div>

        {/* This Semester Dues */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">This Semester</h3>
            <button className="text-sm text-gray-700 hover:underline">
              View All →
            </button>
          </div>
          <p className="text-gray-500 text-sm mb-1">Total Semester Due Fee</p>
          <h2 className="text-4xl font-extrabold mt-2">₦12,000</h2>
        </div>
      </div>
    </div>
  );
};

export default Dues;
