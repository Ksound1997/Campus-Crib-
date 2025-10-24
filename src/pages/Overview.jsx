import React, { useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome, FaTrash } from "react-icons/fa";
import QuizContext from "../QuizContext";

const Overview = () => {
  const navigate = useNavigate();

  const {
    level,
    score,
    setScore,
    course,
    department,
    setIndex,
    index,
    questions,
  } = useContext(QuizContext);

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

  const ProgressCard = ({ progress }) => (
    <Card title="Tracker">
      <h4 className="text-gray-900 text-lg font-semibold mb-2">
        Campus Crib Account Setup Progress
      </h4>
      <p className="text-gray-600 text-sm mb-4">
        You're almost done! Complete your profile to unlock all features
      </p>
      <div className="flex items-center gap-4">
        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <span className="text-gray-700 font-semibold text-sm">{progress}%</span>
      </div>
    </Card>
  );

  const StatCard = ({ title, value, subtitle, color }) => (
    <Card title="Tracker" center>
      <div className="space-y-2">
        <div
          className={`text-3xl font-bold ${
            color ? `text-${color}-600` : "text-gray-900"
          }`}
        >
          {value}
        </div>
        <div className="text-gray-600 font-medium">{title}</div>
        <div className="text-gray-500 text-sm">{subtitle}</div>
      </div>
    </Card>
  );

  const userData = {
    totalSpent: "N350,000",
    accountType: "Student",
    joinedDate: "20 October 2025",
    activeBookings: 1,
    recentCartItems: 2,
    savedItems: 0,
    completedOrders: 1,
    pendingDues: "N3,000",
    pendingDuesCount: 1,
    processedDues: "N12,000",
    processedDuesCount: 4,
    progress: 75,
  };

  return (
    <>
      <section className="p-5">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back! Here’s what’s happening in your cribs</p>
        </div>
        <div className="flex items-center bg-white p-8 mt-8  mb-5">
          <div>
            <p className="text-gray-600 text-sm">Total Spent</p>
            <p className="text-gray-900 text-2xl font-bold mt-1">
              {userData.totalSpent}
            </p>
          </div>

          <div></div>

          <div></div>
        </div>
        <ProgressCard progress={userData.progress} />

        <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Active Bookings"
            value={userData.activeBookings}
            subtitle={`${userData.activeBookings} Bookings`}
          />
          <StatCard
            title="Recent Cart Activity"
            value={userData.recentCartItems}
            subtitle={`${userData.recentCartItems} Items`}
          />
          <StatCard
            title="Saved Items"
            value={userData.savedItems}
            subtitle={`${userData.savedItems} Saved`}
          />
          <StatCard
            title="Completed Orders"
            value={userData.completedOrders}
            subtitle={`${userData.completedOrders} Items`}
          />
          <StatCard
            title="Pending Dues"
            value={userData.pendingDues}
            subtitle={`${userData.pendingDuesCount} Pending`}
            color="red"
          />
          <StatCard
            title="Processed Dues"
            value={userData.processedDues}
            subtitle={`${userData.processedDuesCount} Processed`}
            color="green"
          />
        </div>
        
      </section>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Account Summary">
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Total Spent</p>
              <p className="text-gray-900 text-2xl font-bold mt-1">
                {userData.totalSpent}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Account Type</p>
              <p className="text-gray-900 text-lg font-semibold mt-1">
                {userData.accountType}
              </p>
            </div>
          </div>
        </Card>

        <Card title="Joined">
          <p className="text-gray-600 text-sm">Date Joined</p>
          <p className="text-gray-900 text-xl font-bold mt-1">
            {userData.joinedDate}
          </p>
        </Card>
      </div> */}

      {/* Progress */}
      {/* <ProgressCard progress={userData.progress} /> */}

      {/* Stats */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Active Bookings"
          value={userData.activeBookings}
          subtitle={`${userData.activeBookings} Bookings`}
        />
        <StatCard
          title="Recent Cart Activity"
          value={userData.recentCartItems}
          subtitle={`${userData.recentCartItems} Items`}
        />
        <StatCard
          title="Saved Items"
          value={userData.savedItems}
          subtitle={`${userData.savedItems} Saved`}
        />
        <StatCard
          title="Completed Orders"
          value={userData.completedOrders}
          subtitle={`${userData.completedOrders} Items`}
        />
        <StatCard
          title="Pending Dues"
          value={userData.pendingDues}
          subtitle={`${userData.pendingDuesCount} Pending`}
          color="red"
        />
        <StatCard
          title="Processed Dues"
          value={userData.processedDues}
          subtitle={`${userData.processedDuesCount} Processed`}
          color="green"
        />
      </div> */}
    </>
  );
};

export default Overview;
