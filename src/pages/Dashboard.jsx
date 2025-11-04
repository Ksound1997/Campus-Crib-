import React, { useState, useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import QuizContext from "../QuizContext";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Community from "../assets/Community.png";
import Home from "../assets/Home 2.png";
import Settings from "../assets/Settings.png";
import Dash from "../assets/Dashboard.png";
import Wallet from "../assets/Wallet.png";
import Message from "../assets/Message.png";
import Purse from "../assets/Purse.png";
import Order from "../assets/Order.png";

// ====== Sidebar Menu Items ======
const menuItems = [
  { name: "Dashboard", icon: Dash, path: "/dashboard", end: true },
  { name: "Accommodations", icon: Home, path: "/dashboard/accomodation" },
  { name: "Marketplace", icon: Purse, path: "marketplace" },
  { name: "Dues & Payment", icon: Wallet, path: "dues" },
  { name: "Cart & Orders", icon: Order, path: "orders" },
  { name: "Messages", icon: Message, path: "messages" },
  { name: "Community", icon: Community, path: "community" },
  { name: "Settings", icon: Settings, path: "settings" },
];

const Sidebar = ({ items, onClose }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <NavLink
        key={index}
        to={item.path}
        end={item.end}
        onClick={onClose}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-3 rounded-md transition-colors ${
            isActive
              ? "text-black bg-gray-200 font-semibold"
              : "text-gray-700 hover:text-black hover:bg-gray-100"
          }`
        }
      >
        <img src={item.icon} alt="" className="w-5 h-5" />
        <span className="text-sm">{item.name}</span>
      </NavLink>
    ))}
  </ul>
);

const Dashboard = () => {
  const { User } = useContext(QuizContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* ======= Sidebar (Desktop) ======= */}
      <div className="hidden md:flex w-64 flex-shrink-0 bg-white border-r flex-col">
        <div className="border-b-2 p-4 sticky top-0 bg-white z-10">
          <h1 className="text-lg font-bold">
            Campus <span className="text-primary">crib</span>
          </h1>
        </div>
        <div className="p-3 flex-1 overflow-hidden">
          <Sidebar items={menuItems} />
        </div>
      </div>

      {/* ======= Sidebar (Mobile Drawer) ======= */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="absolute left-0 top-0 w-64 h-full bg-white p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-bold">
              Campus <span className="text-primary">crib</span>
            </h1>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>
          <Sidebar items={menuItems} onClose={() => setIsOpen(false)} />
        </div>
      </div>

      {/* ======= Main Content ======= */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* ======= Top Navbar ======= */}
        <header className="p-4 bg-white border-b sticky top-0 z-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(true)}
            >
              <FaBars size={22} />
            </button>
            <h2 className="font-semibold text-gray-800 text-base">
              Dashboard
            </h2>
          </div>
          <span className="hidden md:block font-medium text-gray-600">
            {User}
          </span>
        </header>

        {/* ======= Page Content ======= */}
        <main className="flex-1 bg-white overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


{
  /* <div className="max-w-7xl mx-auto">
     
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <h2 className="text-xl text-gray-600 mt-2">Dashboard</h2>
          <p className="text-gray-500 mt-1">
            Welcome back <span className="font-bold">{User}</span>! Here's what's happening in your cribs
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
          <div className="lg:col-span-1 lg:sticky top-6 self-start">
            <Sidebar items={menuItems} />
          </div>

         
          <div className="lg:col-span-3 space-y-6">
          
            <Outlet />
          </div>
        </div>
      </div> */
}
