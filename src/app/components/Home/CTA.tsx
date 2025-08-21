import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Shopping?</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore today’s deals and discover millions of products from trusted sellers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center">
            Shop Deals
          </a>
          <a href="/products" className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 text-center">
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
