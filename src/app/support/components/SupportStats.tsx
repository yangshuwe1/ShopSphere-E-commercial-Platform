"use client";

import React from 'react';

const SupportStats: React.FC = () => {
  const stats = [
    {
      number: '24/7',
      label: 'Support Availability',
      description: 'Round-the-clock assistance'
    },
    {
      number: '< 2min',
      label: 'Average Response Time',
      description: 'For live chat support'
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Based on support interactions'
    },
    {
      number: '15min',
      label: 'Resolution Time',
      description: 'Average time to solve issues'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Support Promise
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We're committed to providing exceptional support for every order and every shopper
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-blue-200 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of satisfied users who trust our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Start Free Trial
              </button>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportStats;
