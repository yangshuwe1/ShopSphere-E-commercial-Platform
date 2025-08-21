"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "../data";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    dragFree: true,
    inViewThreshold: 0.7,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  // Handle product click
  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="w-full">
      {/* Product Carousel */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-14 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand‑picked bestsellers and trending items with great prices and fast delivery.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 px-8 py-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="w-80 flex-shrink-0"
                >
                  <div
                    className="bg-white rounded-xl shadow-lg transition-all duration-300 cursor-pointer transform-gpu h-full select-none hover:shadow-xl"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative">
                      <div className="w-full h-48 rounded-t-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                        {(() => {
                          const imgSrc = (product as any).images?.[0] || (product as any).image || '';
                          return imgSrc ? (
                            <img src={imgSrc} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600" />
                          );
                        })()}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold">
                          {product.price}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index * 3)}
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-300"
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close details"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  {(() => {
                    const imgSrc = (selectedProduct as any)?.images?.[0] || (selectedProduct as any)?.image || '';
                    return imgSrc ? (
                      <img src={imgSrc} alt={selectedProduct.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600" />
                    );
                  })()}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProduct.details}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-blue-600">
                  {selectedProduct.price}
                </div>
                <div className="flex gap-3">
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Start Free Trial
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
