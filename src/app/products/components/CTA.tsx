import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Shop Smarter?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join millions of shoppers getting great prices, free shipping with Plus, and easy returns.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/products" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center">
            Shop Deals
          </a>
          <a href="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 text-center">
            Start Plus Trial
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center text-blue-100">
          <div>
            <div className="text-3xl font-bold mb-2">30 Days</div>
            <div className="text-sm">Plus Free Trial</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">No Credit</div>
            <div className="text-sm">Card Required</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Free</div>
            <div className="text-sm">Shipping (Plus)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
