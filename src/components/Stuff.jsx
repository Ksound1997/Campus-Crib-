import React from "react";
import card from "../assets/Group 8.png";

const Stuff = () => {
  return (
    <div className="min-h-screen bg-[#020731] text-white flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-400">
          Features for your comfort
        </h1>
        <p className="mt-2 text-lg">
          Features built to make your campus journey smooth, secure and
          stress-free
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className=" flex gap-4 p-4 rounded-lg ">
          <div className="w-10 h-12 mx-auto mb-2 rounded flex items-center justify-center ">
            <img src={card} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Smart Recommendations</h2>
            <p className="mt-2 text-sm">
              Get personalized suggestions based on your budget, past searches,
              and campus location
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg ">
          <div className="w-10 h-12 mx-auto mb-2 rounded flex items-center justify-center ">
            <img src={card} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Digital Receipts & History
            </h2>
            <p className="mt-2 text-sm">
              Get automatic digital receipts for every payment or purchase.
              Track your transaction history.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg ">
          <div className="w-10 h-12 mx-auto mb-2 rounded flex items-center justify-center ">
            <img src={card} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Safe Payment Gateway</h2>
            <p className="mt-2 text-sm">
              Every transaction runs through a secure in-app payment system -
              your funds are protected
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg ">
          <div className="w-10 h-12 mx-auto mb-2 rounded flex items-center justify-center ">
            <img src={card} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Unified Student Dashboard</h2>
            <p className="mt-2 text-sm">
              Manage your rent, dues, purchases, and receipts - all in one place
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg ">
          <div className="w-10 h-12 mx-auto mb-2 rounded flex items-center justify-center ">
            <img src={card} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Light & Fast Mobile Experience
            </h2>
            <p className="mt-2 text-sm">
              Built to run smoothly on any device, even with low data or patchy
              Wi-Fi
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg ">
          <div className="w-10 h-12 mx-auto mb-2 rounded flex items-center justify-center ">
            <img src={card} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Verified Listing</h2>
            <p className="mt-2 text-sm">
              Every listing - from hostels to household items - is verified for
              authenticity
            </p>
          </div>
        </div>

      </div>

      <button className="mt-10 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
        Get started now
      </button>
    </div>
  );
};

export default Stuff;
