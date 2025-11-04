import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Star, ShoppingCart } from 'lucide-react';

const productData = [
  {
    id: 1,
    name: "Smartwatch series 0",
    price: 125000,
    rating: 4.5,
    reviews: 1234,
  },
  {
    id: 2,
    name: "Smartwatch series E",
    price: 85000,
    rating: 4.2,
    reviews: 856,
  },
  {
    id: 3,
    name: "Smartwatch series 3",
    price: 195000,
    rating: 4.8,
    reviews: 2341,
  },
  {
    id: 4,
    name: "Smartwatch series 7",
    price: 225000,
    rating: 4.6,
    reviews: 1892,
  },
  {
    id: 5,
    name: "Smartwatch series 8",
    price: 350000,
    rating: 4.9,
    reviews: 3124,
  },
  {
    id: 6,
    name: "Smartwatch series 9",
    price: 420000,
    rating: 4.7,
    reviews: 2678,
  },
  {
    id: 7,
    name: "Smartwatch series 0",
    price: 125000,
    rating: 4.5,
    reviews: 1234,
  },
  {
    id: 8,
    name: "Smartwatch series E",
    price: 85000,
    rating: 4.2,
    reviews: 856,
  },
  {
    id: 9,
    name: "Smartwatch series 3",
    price: 195000,
    rating: 4.8,
    reviews: 2341,
  },
  {
    id: 10,
    name: "Smartwatch series 7",
    price: 225000,
    rating: 4.6,
    reviews: 1892,
  },
  {
    id: 11,
    name: "Smartwatch series 8",
    price: 350000,
    rating: 4.9,
    reviews: 3124,
  },
  {
    id: 12,
    name: "Smartwatch series 9",
    price: 420000,
    rating: 4.7,
    reviews: 2678,
  },
  {
    id: 13,
    name: "Smartwatch series 0",
    price: 125000,
    rating: 4.5,
    reviews: 1234,
  },
  {
    id: 14,
    name: "Smartwatch series E",
    price: 85000,
    rating: 4.2,
    reviews: 856,
  },
  {
    id: 15,
    name: "Smartwatch series 3",
    price: 195000,
    rating: 4.8,
    reviews: 2341,
  },
];

const ProductCardComponent = ({ product }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };


  const navigate= useNavigate()
  //   const renderStars = (rating) => {
  //     return Array.from({ length: 5 }, (_, i) => (
  //       <Star
  //         key={i}
  //         className={`w-4 h-4 ${
  //           i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
  //         }`}
  //       />
  //     ));
  //   };

  return (
    <div onClick={() => navigate(`product/${product.id}`)} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-48 flex items-center justify-center">
        <div className="text-gray-400">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div>
            <h3>Description:<span className="text-sm">{product.description}</span></h3>
        </div>

        {/*         
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
        </div> */}

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              isAddingToCart
                ? "bg-green-600 text-white"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {/* <ShoppingCart className="w-4 h-4" /> */}
            {isAddingToCart ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
