import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import Heart from "../assets/Heart.png";
import House from "../assets/House.png";
import japan from "../assets/japan.png";
import NewYork from "../assets/new-york.png";
import Location from "../assets/Location.png";
import { FaWifi, FaBolt, FaTint, FaBed } from "react-icons/fa";

const Accomodation = () => {
  const navigate = useNavigate();

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  // Dropdown filter options
  const filterOptions = {
    University: ["Delta State University, Oleh Campus", "Uniben", "Unilag"],
    Amenities: ["Water", "Electricity", "WiFi"],
    Availability: ["Available Now", "Coming Soon"],
    Rooms: ["1 Bedroom", "2 Bedroom", "Self-Contain"],
    "Construction & Finishing": ["POP", "Tiles", "Painted"],
    Budget: ["₦100k - ₦300k", "₦300k - ₦500k", "₦500k+"],
  };



  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(value)) {
        // Remove the filter if it’s already selected
        return prevFilters.filter((f) => f !== value);
      } else {
        // Add the filter if it’s not already selected
        return [...prevFilters, value];
      }
    });
    console.log(selectedFilters);
  };

  useEffect(() => {
    console.log("Selected filters:", selectedFilters);
  }, [selectedFilters]);

  const applyFilters = async () => {
    setLoading(true);

    // Simulate loading for 1.5 seconds
    setTimeout(() => {
      console.log("Filters applied:", selectedFilters);
      setLoading(false);
    }, 1500);
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  const clearAll = () => setSelectedFilters([]);

  // Sample data (you can replace this with real data later)
  const apartments = [
    {
      id: 1,
      name: "Victory Lodge",
      price: 250000,
      Amenities: ["1 Bedroom", "Water", "Electricity"],
      image: House,
    },
    {
      id: 2,
      name: "Montes Lodge",
      price: 150000,
      Amenities: ["1 Bedroom", "Water", "Electricity"],
      image: japan,
    },
    {
      id: 3,
      name: "Wisdom Lodge",
      price: 100000,
      Amenities: ["2 Bedroom", "Water", "Electricity"],
      image: NewYork,
    },
    {
      id: 4,
      name: "Victory Lodge",
      price: 250000,
      Amenities: ["1 Bedroom", "Water", "Electricity"],
      image: japan,
    },
    {
      id: 5,
      name: "Victory Lodge",
      price: 250000,
      Amenities: ["1 Bedroom", "Water", "Electricity"],
      image: japan,
    },
    {
      id: 6,
      name: "Victory Lodge",
      price: 250000,
      Amenities: ["1 Bedroom", "Water", "Electricity"],
      image: japan,
    },
  ];

  const amenityIcons = {
    WiFi: <FaWifi size={12} className="text-gray-600" />,
    Electricity: <FaBolt size={12} className="text-yellow-500" />,
    Water: <FaTint size={12} className="text-blue-500" />,
    "1 Bedroom": <FaBed size={12} className="text-orange-500" />,
    "2 Bedroom": <FaBed size={12} className="text-orange-500" />,
    "Self-Contain": <FaBed size={12} className="text-orange-500" />,
  };

  // Pagination (simple)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(apartments.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = apartments.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="p-2 md:p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl">Accomodation</h1>
          <p className="hidden text-gray-600 text-sm md:block">
            Browse verified student accomodation near campus
          </p>
        </div>

        <button
          onClick={() => navigate("bookings")}
          className="hidden bg-white hover:bg-gray-200 border px-4 py-2 rounded-lg md:block text-sm font-medium"
        >
          ← Click to see bookings
        </button>
      </div>

      {/* Search */}
      <div className="hidden bg-[#ECECEC] md:flex p-2 items-center rounded-md gap-2 mt-4">
        <FaSearch size={18} className="text-gray-600" />
        <input
          className="flex-1 outline-none bg-transparent text-sm"
          type="text"
          placeholder="Search by Location or Hostel name"
        />
      </div>

      <div className="border border-1 md:hidden flex items-center rounded-md justify-between gap-2 mt-4">
        <div className="flex p-2 flex-1 items-center gap-1">
          <FaSearch size={18} className="text-gray-600" />
          <input
            className=" outline-none w-full bg-transparent text-sm"
            type="text"
            placeholder="Search by Location or Hostel name"
          />
        </div>

        <button className="bg-primary p-2 rounded-md text-white">Search</button>
      </div>

     {/* MOBILE FILTERS */}
<div className="flex md:hidden flex-col gap-2 mt-3">
  <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
    {Object.entries(filterOptions).map(([category, options]) => (
      <div key={category} className="flex-shrink-0">
        <select
          onChange={(e) => handleFilterChange(category, e.target.value)}
          className="border rounded-full px-4 py-2 text-sm bg-gray-50 text-gray-700"
          defaultValue=""
        >
          <option value="">{category}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    ))}
  </div>

  {selectedFilters.length > 0 && (
    <div className="flex gap-2">
      <button
        onClick={clearAll}
        className="bg-orange-500 text-white px-3 py-2 rounded text-sm flex-1"
      >
        Clear All
      </button>
      <button
        onClick={applyFilters}
        className="bg-orange-500 text-white px-3 py-2 rounded text-sm flex-1"
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Apply All"
        )}
      </button>
    </div>
  )}
</div>


      {/* Filters */}
      <div className="hidden p-2 md:flex flex-wrap items-center gap-2 mt-4 border-y">
        {Object.entries(filterOptions).map(([category, options]) => (
          <select
            key={category}
            onChange={(e) => handleFilterChange(category, e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              {category}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}

        {selectedFilters.length > 0 && (
          <>
            <button
              onClick={clearAll}
              className="bg-orange-500 text-white px-3 py-2 rounded text-sm"
            >
              Clear All
            </button>

            <button
              onClick={() => applyFilters()}
              className="bg-orange-500 text-white px-3 py-2 rounded text-sm"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Apply All"
              )}
            </button>
          </>
        )}
      </div>

      {/* Selected Filters */}
      {selectedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 mb-5">
          {selectedFilters.map((filter, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2 text-sm"
            >
              {filter}
              <button
                onClick={() => removeFilter(filter)}
                className="font-bold text-gray-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Apartment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {currentItems.map((apt) => (
          <div
            key={apt.id}
            onClick={() => navigate(`details/${apt.id}`)}
            className="border rounded-lg  bg-white shadow-sm "
          >
            <div className="rounded-md cursor-pointer overflow-hidden">
              <div className="relative h-[300px]">
                <img
                  src={apt.image}
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <div className="bg-[#A6A3A3] absolute bottom-0 p-1 rounded-tr-xl text-white">
                  <span>Available</span>
                </div>

                <div className="bg-[#A6A3A3] w-14 text-center absolute overflow-hidden top-0 right-0 p-1 rounded-tr-sm text-white">
                  <span>New</span>
                </div>

                <div className="absolute right-2 top-10">
                  <img src={Heart} alt="" />
                  <img src={Location} alt="" />
                </div>
              </div>

              {/* Info section */}
              <div className="p-2 cursor-none">
                <h3 className="font-semibold text-sm">{apt.name}</h3>
                <div className="flex items-center gap-2">
                  {apt.Amenities?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 flex items-center gap-2 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {amenityIcons[item] || null}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="font-bold mt-2 text-sm">
                  ₦{apt.price.toLocaleString()}/
                  <span className="font-normal text-gray-600">Annum</span>
                </p>

                <button
                  onClick={() => navigate(`details/${apt.id}`)}
                  className="mt-3 w-full bg-orange-500 text-white py-2 rounded text-sm hover:bg-orange-600"
                >
                  Explore Apartment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50 text-sm"
        >
          Previous
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50 text-sm"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Accomodation;
