import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heart from "../assets/Heart.png";
import Share from "../assets/Share.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetails = () => {
    const navigate=useNavigate()
  const { id } = useParams();
  const productData = [
    {
      id: 1,
      name: "Smartwatch series 0",
      price: 125000,
      rating: 4.5,
      reviews: 1234,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 2,
      name: "Smartwatch series E",
      price: 85000,
      rating: 4.2,
      reviews: 856,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 3,
      name: "Smartwatch series 3",
      price: 195000,
      rating: 4.8,
      reviews: 2341,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 4,
      name: "Smartwatch series 7",
      price: 225000,
      rating: 4.6,
      reviews: 1892,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 5,
      name: "Smartwatch series 8",
      price: 350000,
      rating: 4.9,
      reviews: 3124,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 6,
      name: "Smartwatch series 9",
      price: 420000,
      rating: 4.7,
      reviews: 2678,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 7,
      name: "Smartwatch series 0",
      price: 125000,
      rating: 4.5,
      reviews: 1234,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 8,
      name: "Smartwatch series E",
      price: 85000,
      rating: 4.2,
      reviews: 856,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 9,
      name: "Smartwatch series 3",
      price: 195000,
      rating: 4.8,
      reviews: 2341,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 10,
      name: "Smartwatch series 7",
      price: 225000,
      rating: 4.6,
      reviews: 1892,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 11,
      name: "Smartwatch series 8",
      price: 350000,
      rating: 4.9,
      reviews: 3124,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 12,
      name: "Smartwatch series 9",
      price: 420000,
      rating: 4.7,
      reviews: 2678,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 13,
      name: "Smartwatch series 0",
      price: 125000,
      rating: 4.5,
      reviews: 1234,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 14,
      name: "Smartwatch series E",
      price: 85000,
      rating: 4.2,
      reviews: 856,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
    {
      id: 15,
      name: "Smartwatch series 3",
      price: 195000,
      rating: 4.8,
      reviews: 2341,
      images: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
    },
  ];

  const product = productData.find((p) => p.id === Number(id));

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log(id);

  return (
    <>
      <section className="p-3">
        <div className="mb-8 flex items-center justify-between">
          <button className="text-sm" onClick={() => navigate(-1)}>
            Back to MarketPlace
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
            {product.images.map((img, i) => (
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
      </section>
    </>
  );
};

export default ProductDetails;
