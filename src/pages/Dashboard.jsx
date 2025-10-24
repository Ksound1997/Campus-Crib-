import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
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
  <Card title="Tracker">
    <ul className="space-y-3">
      {items.map((item, index) => (
        <NavLink
          to={item.path}
          end={item.end}
          className={({ isActive }) =>
            `flex items-center gap-3 w-full text-left py-3 px-2 font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
              isActive
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}
    </ul>
  </Card>
);



// ====== Main Dashboard ======
const Dashboard = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <h2 className="text-xl text-gray-600 mt-2">Dashboard</h2>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening in your cribs
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky top-6 self-start">
            <Sidebar items={menuItems} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Summary Cards */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
