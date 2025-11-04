import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CurrentBooking = () => {

    const navigate = useNavigate()
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Current Booking</h1>
          <p className="text-sm text-gray-500">
            Track your ongoing rent and payment status here
          </p>
        </div>

        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-200 transition">
          <span>Click to see Listings</span>
        </button>
      </div>

      {/* Booking Card */}
      <div className="bg-white rounded-lg shadow-sm p-5 max-w-xl">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="font-semibold text-lg text-gray-900">
              Current Accommodation
            </h2>
            <p className="text-sm text-gray-500">
              Unconfirmed / Pending Rental
            </p>
          </div>

          <div className="flex flex-col items-end">
            <button className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100">
              View Transaction →
            </button>
            <span className="text-xs mt-2 bg-gray-200 px-2 py-1 rounded-full">
              Pending / Not Confirmed
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">
            Harmony Heights Apartment
          </h3>
          <p className="text-sm text-gray-500">Room 204, Block B</p>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="grid grid-cols-3 text-sm text-gray-600">
              <div>
                <p className="font-semibold">Annual Rent</p>
                <p className="text-black font-medium">₦250,000</p>
              </div>
              <div>
                <p className="font-semibold">Date of Rent</p>
                <p>-</p>
              </div>
              <div>
                <p className="font-semibold">Next Payment</p>
                <p>-</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-md p-3 mt-4 flex items-start gap-2">
            <FaInfoCircle className="text-gray-400 text-lg mt-0.5" />
            <p className="text-sm text-gray-500">
              Your payment is securely held in escrow. The landlord will receive
              it once you confirm you’ve moved in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBooking;
