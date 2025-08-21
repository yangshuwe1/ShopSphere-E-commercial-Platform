import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-blue-100">Top Brands</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-4">1M+</div>
            <div className="text-blue-100">Products Listed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100">Order Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
