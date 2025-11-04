import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaHeart,
  FaShare,
  FaTint,
  FaBed,
  FaLock,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Timer from "../assets/Timer.png";
import Phone from "../assets/Phone.png";
import Message from "../assets/Message.png";
import Calender from "../assets/uit_calender.png";
import LightClock from "../assets/Light-clock.png";
import Heart from "../assets/Heart.png";
import Share from "../assets/Share.png";
import Payment from "../assets/Payment.png";
import Location from "../assets/location-outline.png";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWifi,
  FaBolt,
  FaHome,
} from "react-icons/fa";

const DetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [Paid, setPaid] = useState(false);
  const [Booked, setBooked] = useState(false);

   const prevRef = useRef(null);
  const nextRef = useRef(null);

  //   console.log(typeof(id));

  const apartments = [
    {
      id: 1,
      name: "Victory Lodge",
      price: 250000,
      landlord: {
        name: "Mr John Adekunle",
        phone: "+2348064447464",
        email: "john.adekunle@gmail.com",
        verified: true,
      },
      details: {
        rooms: "1 Bedroom",
        flooring: "Tiled",
        bathrooms: "1 Bathroom",
        furnishing: "Semi Furnished",
        ceiling: "Abestos",
        window: "Glass Window",
        availability: "3 Available",
      },
      defects: [
        "Kitchen tap needs minor repair",
        "Bedroom window lock slightly loosed",
      ],
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
      video: "/tour.mp4",
      distance: "500m from Main Gate, Ugbowo",
      Amenities: [
        "WiFi",
        "Water Supply",
        "Light Supply",
        "Security",
        "Kitchen",
      ],
    },
    {
      id: 2,
      name: "Montes Lodge",
      price: 150000,
      landlord: {
        name: "Mrs Sarah Richards",
        phone: "+234806327464",
        email: "sararichards@gmail.com",
        verified: true,
      },
      details: {
        rooms: "1 Bedroom",
        flooring: "Not Tiled",
        bathrooms: "2 Bathroom",
        furnishing: "Furnished",
        ceiling: "Abestos",
        window: "Glass Window",
        availability: "2 Available",
      },
      defects: [
        "Kitchen tap needs minor repair",
        "Bedroom window lock slightly loosed",
      ],
      images: [
        "/house1.jpg",
        "https://picsum.photos/1200/700",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
      video: "/tour.mp4",
      distance: "200m from Main Gate, Oleh",
      Amenities: [
        "WiFi",
        "Water Supply",
        "Light Supply",
        "Security",
        "Kitchen",
      ],
    },
    {
      id: 3,
      name: "Wisdom Lodge",
      price: 100000,
      Amenities: ["2 Bedroom", "Water", "Electricity"],
    },
    {
      id: 4,
      name: "Victory Lodge",
      price: 250000,
      Amenities: ["1 Bedroom", "Water", "Electricity"],
    },
    { id: 5, name: "Victory Lodge", price: 250000 },
    { id: 6, name: "Victory Lodge", price: 250000 },
  ];

  const property = apartments.find((p) => p.id === Number(id));

  console.log(property);

  const handleClick = () => {
    setShowModal(!showModal);
    setPaid((prev) => !prev);
  };

  //   const date= New Date

  return (
    <>
      <section className="p-3">
        <div className="mb-8 flex items-center justify-between">
          <button className="text-sm" onClick={() => navigate(-1)}>
            Back to Properties
          </button>

          <div className="flex gap-2">
            <img
              src={Heart}
              alt=""
              className="w-[25px] h-[25px] cursor-pointer"
            />
            <img
              src={Share}
              alt=""
              className="w-[25px] h-[25px] cursor-pointer"
            />
          </div>
        </div>
        {/* Details */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">{property.name}</h1>
            <p className="text-sm flex gap-2 items-center">
              <img src={Location} alt="" />
              {property.distance}
            </p>
          </div>
        </div>

        {/* <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full mt-3 rounded-lg overflow-hidden mb-6"
        >
          {property.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt="" className="w-full h-[350px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="relative w-full mt-3 rounded-lg  mb-6">
          {/* Custom Buttons */}
          <button
            ref={prevRef}
            className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white hover:bg-white p-3 rounded-full shadow-md"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white hover:bg-white p-3 rounded-full shadow-md"
          >
            <FaChevronRight className="text-gray-800" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            onInit={(swiper) => {
              // connect custom buttons
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="rounded-lg"
          >
            {property.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt=""
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex gap-3 mt-4">
          <div className=" flex-[60%]">
            <div className="bg-white p-4 rounded-md mb-4">
              <div>
                <h3 className="font-semibold">Important Pricing Breakdown</h3>
                <h5 className="text-sm mb-2 text-[#767575]">
                  Current Payment(2025){" "}
                </h5>
              </div>
              <div className="border-b">
                <h2 className="text-black mb-1 font-bold text-2xl">
                  ₦{property.price}
                  <span className="text-xs text-[#767575]">/Annum</span>
                </h2>
                <p className="text-[#767575] text-sm">
                  or ₦{property.price / 2} with roomate split
                </p>
              </div>

              {/* <div className="w-full h-[1px] bg-[#767575] mt-4"></div> */}

              <div className="border-b ">
                <h5 className="text-sm mt-1 mb-2 text-[#767575]">
                  Next Year Payment (Estimated)
                </h5>
                <h2 className="text-black mb-1 font-bold text-2xl">
                  ₦{property.price}
                  <span className="text-xs text-[#767575]">/Annum</span>
                </h2>
                <p className="text-[#767575] text-sm mb-2">
                  or ₦{property.price / 2} with roomate split
                </p>
              </div>

              <div className="flex gap-3 mt-3 bg-[#FCF7E6] p-2">
                <img
                  src={Timer}
                  alt=""
                  className="w-[25px] h-[25px] self-center"
                />

                <div>
                  <h4 className="font-semibold">
                    Booking & House visit Fee: N6,000
                  </h4>
                  <p className="text-xs text-[#767575]">
                    One time fee required to schedule property inspection
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md">
              <h2 className="font-bold mb-2">Apartment Details</h2>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h4 className="text-sm text-[#767575]">Rooms</h4>
                  <p className="text-sm font-medium">{property.details.rooms}</p>
                </div>

                <div>
                  <h4 className="text-sm text-[#767575]">BathRooms</h4>
                  <p className="text-sm font-medium">{property.details.bathrooms}</p>
                </div>
                <div>
                  <h4 className="text-sm text-[#767575]">Floor Type</h4>
                  <p className="text-sm font-medium">{property.details.flooring}</p>
                </div>
                <div>
                  <h4 className="text-sm text-[#767575]">Furnished</h4>
                  <p className="text-sm font-medium">{property.details.furnishing}</p>
                </div>
                <div>
                  <h4 className="text-sm text-[#767575]">Ceiling Type</h4>
                  <p className="text-sm font-medium">{property.details.ceiling}</p>
                </div>
                <div>
                  <h4 className="text-sm text-[#767575]">Window Type</h4>
                  <p className="text-sm font-medium">{property.details.window}</p>
                </div>
                <div>
                  <h4 className="text-sm text-[#767575]">Availability</h4>
                  <p className="text-sm font-medium">{property.details.availability}</p>
                </div>
              </div>

              <div className="mt-3 border-t">
                <div className="mt-2 flex items-center gap-2">
                  <img className="w-[20px] h-[20px]" src={LightClock} alt="" />
                  <h6 className="font-semibold">Known Defects</h6>
                </div>

                <ul className="list-disc list-inside text-gray-700">
                  {property.defects.map((k, index) => (
                    <li className="text-sm" key={index}>{k}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-2 rounded-md mb-4 mt-3">
              <h5>Ammenities</h5>

              <div className="grid grid-cols-3 gap-3">
                {property.Amenities.map((a, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-2 rounded-md text-sm"
                  >
                    {a === "Wifi" && <FaWifi />}
                    {a === "Power Supply" && <FaBolt />}
                    {a === "Water Supply" && <FaHome />}
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Roomate finder */}
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="flex justify-between items-center ">
                <div>
                  <h3 className="font-bold text-lg">Roommate Matching</h3>
                  <p className="text-gray-500 text-sm">
                    Find your perfect roommate
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setEnabled(!enabled)}
                    className={`relative w-11 h-6 flex items-center rounded-full transition ${
                      enabled ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                        enabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
              {enabled && <h1>lll</h1>}
            </div>
          </div>

          {/* Right Side */}

          <div className="flex-[40%]">
            <div className="bg-white border shadow-lg p-2 rounded-md mb-4">
              <h1 className="font-bold">Contact Section</h1>

              <div className="flex gap-2">
                <div className="h-[40px] w-[40px] rounded-full bg-red-400"></div>
                <div className="mb-3">
                  <h4 className="text-[#767575] text-xs">
                    For support, Schedule & Payments:
                  </h4>
                  <p className="font-semibold">Campuscrib Support Team Only</p>
                </div>
              </div>

              <div>
                <button className="w-full flex items-center justify-center gap-2 p-2 text-white bg-primary rounded-md mb-2">
                  <span>
                    <img src={Phone} alt="" />
                  </span>
                  Call Campus Crib
                </button>

                <div>
                  <button className="w-full flex items-center justify-center gap-2 p-2 text-[#595858] border border-[#595858] bg-white rounded-md">
                    <span>
                      <img src={Message} alt="" />
                    </span>
                    Chat With Us
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-4 rounded-md">
              <div className="flex gap-3 mb-5">
                <img src={Calender} alt="" />
                <h2>Scheduled House Visit</h2>
              </div>

              <h3>Scheduled Visit - Mon - 15/11/2025, 8 - 9am</h3>
              <button
                onClick={() => setShowModal(!showModal)}
                className="w-full mt-4 flex items-center justify-center gap-2 p-2 text-white bg-primary rounded-md mb-2"
              >
                <span>
                  <img src={Phone} alt="" />
                </span>
                Schedule Visit
              </button>
            </div>

            {showModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg w-[600px] shadow-lg">
                  <h2 className="text-xl font-semibold mb-2">
                    Schedule a Visit
                  </h2>
                  <p className="text-xs">
                    Book your inspection for Harmony Height Apartment
                  </p>

                  <div>
                    <div className="flex items-center gap-3">
                      <img src={Calender} alt="" />
                      <label htmlFor="" className="text-xs">
                        Preferred Date
                      </label>
                    </div>

                    <input
                      type="date"
                      name=""
                      id=""
                      className="border border-primary w-full p-2"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <img src={Calender} alt="" />
                      <label htmlFor="" className="text-xs">
                        Time Availability
                      </label>
                    </div>

                    <select
                      name=""
                      id=""
                      className="w-full border border-primary p-2 pr-8"
                    >
                      <option value="" disabled>
                        Select time slot
                      </option>
                      <option value="">jjj</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <img src={Calender} alt="" />
                      <p>Need Location Pickup?</p>
                    </div>

                    <div>
                      <button
                        onClick={() => setActive(!active)}
                        className={`relative w-11 h-6 flex items-center rounded-full transition ${
                          active ? "bg-orange-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                            active ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {active && (
                    <div className="flex items-center gap-3 bg-[#FCF7E6] rounded-md p-2">
                      <img className="self-start" src={Timer} alt="" />

                      <div>
                        <h2>Note</h2>
                        <p>Please pickup attracts a fee of N500</p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleClick}
                    className="bg-primary text-white w-full p-2 rounded-md"
                  >
                    Confirm Visit -6,000
                  </button>
                </div>
              </div>
            )}

            {Paid && (
              <>
                <div className="bg-[#FCF7E6] flex shadow-md p-4 gap-3 mt-4 rounded-md">
                  <img src={Timer} alt="" className="h-[25px] w-[25px]" />

                  <p className="text-xs text-[#767575]">
                    Rescheduling are expected to be initiated under 24hours, any
                    rescheduling done after 24hours after first scheduling,
                    attracts an extra fee of N2000
                  </p>
                </div>

                <div className="bg-[#FCF7E6] flex shadow-md p-4 gap-3 mt-4 rounded-md">
                  <img src={Timer} alt="" className="h-[25px] w-[25px]" />

                  <p className="text-xs text-[#767575]">
                    Please all payments must be done through CampusCrib for
                    record purpose, as any payment done outside of the platform
                    to any agent or landlord is at users risk, and campuscrib
                    shall not be liable or responsible for any further or future
                    issues that may arise
                  </p>
                </div>

                <div className="bg-white shadow-md p-4 rounded-md mt-3">
                  <h2>Book This Property</h2>
                  <div>
                    <p>Rent Duration</p>
                    <input
                      className="p-2 w-full bg-white placeholder:text-black border border-primary font-bold"
                      type="text"
                      placeholder={`12 Months -${property.price}`}
                      disabled
                    />
                  </div>

                  <div>
                    <p>Move-In Date</p>
                    <input
                      type="date"
                      className="w-full bg-white p-2 border border-primary font-bold"
                    />
                  </div>

                  <button
                    onClick={() => setShowCheckout(!showCheckout)}
                    className="w-full mt-4 flex items-center justify-center gap-2 p-2 text-white bg-primary rounded-md mb-2"
                  >
                    <span>
                      <img src={Payment} alt="" />
                    </span>
                    Book Now
                  </button>

                  <button className="w-full mt-4 flex items-center justify-center gap-2 p-2 text-white bg-primary rounded-md mb-2">
                    <span>
                      <img src={Heart} alt="" />
                    </span>
                    Save For Later
                  </button>
                </div>
              </>
            )}

            {showCheckout && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className=" bg-gray-100 w-[600px] rounded-2xl h-[90vh] overflow-y-auto p-4 shadow">
                  <h2 className="text-xl font-bold">Current Booking</h2>
                  <p className="text-sm text-gray-600">House booking</p>

                  <button
                    onClick={() => setShowCheckout(!showCheckout)}
                    className="absolute top-10 right-24 bg-black text-white h-12 w-12 rounded-full p-4 flex items-center justify-center text-4xl"
                  >
                    X
                  </button>

                  {/* Image Placeholder */}
                  <div className="bg-gray-300 h-56 rounded-xl mt-3"></div>

                  {/* Apartment Info */}
                  <div className="mt-3 bg-white p-3 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-lg">
                      Harmony Heights Apartment
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1 space-x-2">
                      <FaBed /> <span>Self - Contained</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-1 space-x-2">
                      <FaMapMarkerAlt />{" "}
                      <span>Opposite Engineering faculty Main Gate</span>
                    </div>
                  </div>

                  {/* Booking Progress */}

                  {Booked && (
                    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-4 shadow mt-6">
                      <h3 className="font-semibold text-lg mb-4">
                        Booking Progress
                      </h3>

                      <div className="flex items-center justify-between">
                        {/* Payment Sent */}
                        <div className="flex flex-col items-center">
                          <FaCheckCircle className="text-green-500 text-3xl" />
                          <span className="text-sm text-gray-600 mt-1">
                            Payment Sent
                          </span>
                        </div>

                        {/* Progress Line */}
                        <div className="flex-1 mx-2 h-1 bg-orange-400"></div>

                        {/* Payment Confirmed */}
                        <div className="flex flex-col items-center">
                          <FaCheckCircle className="text-gray-300 text-3xl" />
                          <span className="text-sm text-gray-600 mt-1">
                            Payment Confirmed
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Rent Info */}
                  <div className="mt-4 bg-white p-3 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-base">
                      Rent Information
                    </h3>
                    <div className="flex justify-between mt-2 text-sm">
                      <div>
                        <p className="text-gray-600 flex items-center gap-1">
                          <FaCalendarAlt /> Date of Rent
                        </p>
                        <p className="font-semibold">July 20th, 2025</p>
                      </div>
                      <div>
                        <p className="text-gray-600 flex items-center gap-1">
                          <FaCalendarAlt /> Expiration Date
                        </p>
                        <p className="font-semibold">July 20th, 2026</p>
                      </div>
                    </div>

                    <p className="mt-2 text-gray-500 flex items-center gap-2 text-sm">
                      <span className="text-lg">⏳</span> 326 Days Remaining
                    </p>
                  </div>

                  {/* Payment Details */}
                  <div className="mt-4 bg-yellow-50 p-3 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-base">Payment Details</h3>

                    <div className="mt-2 text-sm space-y-1">
                      <p className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-md">
                          Awaiting Payment
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Amount Held</span>
                        <span className="font-semibold">250,000.00</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Payment ID</span>
                        <span>ESC - 55428Z</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Payment Method</span>
                        <span className="font-semibold">
                          Bank Transfer (Via Paystack)
                        </span>
                      </p>
                    </div>

                    <p className="flex items-center text-xs text-gray-500 mt-3">
                      <FaLock className="mr-1" /> Hit Confirm payment after
                      you’ve made your booking/rent payment
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4">
                    <button
                      onClick={() => setBooked(!Booked)}
                      className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
                    >
                      {!Booked ? "Rent House" : "Download Receipt"}
                    </button>
                    <button className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl flex justify-center items-center gap-2">
                      🚨 Report Issue
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsScreen;
