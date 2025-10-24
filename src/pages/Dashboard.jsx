import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
// import { motion } from "framer-motion";
import QuizContext from "../QuizContext";
import {
  FaHome,
  FaChartBar,
  FaShoppingCart,
  FaCreditCard,
  FaBox,
  FaEnvelope,
  FaUsers,
  FaCog,
} from "react-icons/fa";

// ====== Reusable Components ======
const Card = ({ title, children, center }) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${
      center ? "text-center" : ""
    }`}
  >
    {title && (
      <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-4">
        {title}
      </h3>
    )}
    {children}
  </div>
);

const menuItems = [
  { name: "Dashboard", icon: <FaChartBar />, path: "/dashboard", end: true },
  { name: "Accommodations", icon: <FaHome />, path: "/dashboard/accomodation" },
  { name: "Marketplace", icon: <FaShoppingCart />, path: "marketplace" },
  { name: "Dues & Payment", icon: <FaCreditCard />, path: "dues" },
  { name: "Cart & Orders", icon: <FaBox />, path: "orders" },
  { name: "Messages", icon: <FaEnvelope />, path: "messages" },
  { name: "Community", icon: <FaUsers />, path: "community" },
  { name: "Settings", icon: <FaCog />, path: "settings" },
];

const Sidebar = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <NavLink
        to={item.path}
        end={item.end}
        className={({ isActive }) =>
          `flex items-center gap-3 w-full text-left py-3 px-2 font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
            isActive
              ? "text-black bg-[#F0F0F0]"
              : "text-gray-700 hover:text-primary"
          }`
        }
      >
        {item.icon}
        <span>{item.name}</span>
      </NavLink>
    ))}
  </ul>
);

// ====== Main Dashboard ======
const Dashboard = () => {
  const { User } = useContext(QuizContext);

  console.log(User);

  return (
    <>
      {/* <div className="min-h-screen bg-gradient-to-b flex from-gray-50 to-gray-100">
        <div>
          <div className="border-b-2 p-2 sticky">
            <h1>
              Campus <span className="text-primary">crib</span>
            </h1>
          </div>

          <div className="p-3 bg-white h-screen overflow-hidden">
            <Sidebar items={menuItems} />
          </div>
        </div>

        <div className="from-gray-50 to-gray-100 flex-1">
          <header className="p-2 bg-white sticky top-0 border-b-2 z-10">
            <h2>{User}</h2>

            <div></div>
          </header>

          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div> */}
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar (fixed, non-scrollable) */}
        <div className="w-64 flex-shrink-0 bg-white border-r flex flex-col">
          <div className="border-b-2 p-4 sticky top-0 bg-white z-10">
            <h1 className="text-lg font-bold">
              Campus <span className="text-primary">crib</span>
            </h1>
          </div>

          <div className="p-3 flex-1 overflow-hidden">
            <Sidebar items={menuItems} />
          </div>
        </div>

        {/* Main Content Area (scrollable Outlet) */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Sticky Header */}
          <header className="p-4 bg-white border-b sticky top-0 z-10">
            <h2 className="font-semibold text-gray-800">{User}</h2>
          </header>

          {/* Scrollable Outlet content */}
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
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
