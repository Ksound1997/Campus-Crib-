import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const dues = [
  { title: "Faculty Dues", dept: "Engineering", amount: 3000 },
  { title: "Department Levy", dept: "Electrical Engineering", amount: 3000 },
  { title: "Union Dues", dept: "Electrical Engineering", amount: 3000 },
  { title: "Journal Dues", dept: "Engineering", amount: 6000 },
];

const payments = [
  {
    date: "Apr 12, 2025",
    desc: "Faculty Dues",
    status: "Pending",
    amount: 3000,
  },
  {
    date: "Mar 28, 2025",
    desc: "Departmental Dues",
    status: "Successful",
    amount: 3000,
  },
  {
    date: "Feb 15, 2025",
    desc: "Union Dues",
    status: "Successful",
    amount: 3000,
  },
  {
    date: "Mar 20, 2025",
    desc: "Journal Dues",
    status: "Successful",
    amount: 6000,
  },
];

const PaymentScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pay"); // "pay" or "history"

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Payment</h1>
          <p className="text-gray-600">
            Manage your student fees and track payment history
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
        >
          ← Back to Dues
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-200 rounded-xl p-1 mb-6">
        <button
          onClick={() => setActiveTab("pay")}
          className={`flex-1 py-2 rounded-lg font-medium text-sm ${
            activeTab === "pay"
              ? "bg-white text-black shadow"
              : "text-gray-500 hover:bg-gray-300"
          }`}
        >
          Pay Dues
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`flex-1 py-2 rounded-lg font-medium text-sm ${
            activeTab === "history"
              ? "bg-white text-black shadow"
              : "text-gray-500 hover:bg-gray-300"
          }`}
        >
          History
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "pay" ? (
        // --- PAY DUES TAB ---
        <div className="space-y-4">
          {dues.map((due, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm"
            >
              <div>
                <h2 className="font-semibold text-lg">{due.title}</h2>
                <p className="text-sm text-gray-500">{due.dept}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-semibold text-lg">
                    ₦{due.amount.toLocaleString()}
                  </p>
                </div>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // --- HISTORY TAB ---
        <div className="bg-white rounded-xl p-6 shadow-sm text-gray-500 text-center">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">All Due Payment</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-500 text-sm text-left">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Description</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p, index) => (
                    <tr
                      key={index}
                      className="bg-gray-50 hover:bg-gray-100 rounded-lg"
                    >
                      <td className="py-3 px-4 rounded-l-lg">{p.date}</td>
                      <td className="py-3 px-4">{p.desc}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-white text-sm ${
                            p.status === "Successful"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        ₦{p.amount.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 rounded-r-lg">
                        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100">
                          <FaDownload className="text-gray-600" size={14} />{" "}
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentScreen;
