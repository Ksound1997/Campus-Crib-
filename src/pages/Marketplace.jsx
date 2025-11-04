import React, { useState } from 'react';
import ProductCardComponent from '../components/ProductCardComponent'
// import { Star, ShoppingCart } from 'lucide-react';



const productData = [
  { id: 1, name: 'Smartwatch series 0', price: 125000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.5, reviews: 1234 },
  { id: 2, name: 'Smartwatch series E', price: 85000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.2, reviews: 856 },
  { id: 3, name: 'Smartwatch series 3', price: 195000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.8, reviews: 2341 },
  { id: 4, name: 'Smartwatch series 7', price: 225000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.6, reviews: 1892 },
  { id: 5, name: 'Smartwatch series 8', price: 350000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.9, reviews: 3124 },
  { id: 6, name: 'Smartwatch series 9', price: 420000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.7, reviews: 2678 },
  { id: 7, name: 'Smartwatch series 0', price: 125000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.5, reviews: 1234 },
  { id: 8, name: 'Smartwatch series E', price: 85000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.2, reviews: 856 },
  { id: 9, name: 'Smartwatch series 3', price: 195000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.8, reviews: 2341 },
  { id: 10, name: 'Smartwatch series 7', price: 225000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.6, reviews: 1892 },
  { id: 11, name: 'Smartwatch series 8', price: 350000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.9, reviews: 3124 },
  { id: 12, name: 'Smartwatch series 9', price: 420000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.7, reviews: 2678 },
  { id: 13, name: 'Smartwatch series 0', price: 125000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.5, reviews: 1234 },
  { id: 14, name: 'Smartwatch series E', price: 85000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.2, reviews: 856 },
  { id: 15, name: 'Smartwatch series 3', price: 195000, description:'The apple watch series 8 is a sleek, cutting edge smartwatch designed for both fitness and everyday life....', rating: 4.8, reviews: 2341 },
];



const Marketplace = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = productData.slice(startIndex, endIndex);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
            <p className="text-gray-600 mt-2">Browse our collection of premium smartwatches</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProducts.map((product) => (
              <ProductCardComponent  key={product.id} product={product} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                    currentPage === i + 1
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketplace;