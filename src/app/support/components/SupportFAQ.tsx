"use client";

import React, { useState } from 'react';

const SupportFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Go to Your Orders, select the order you want to track, and click Track Package to view the latest status."
    },
    {
      question: "What is the return policy?",
      answer: "Most items are returnable within 30 days of delivery. Start a return from Your Orders to get a prepaid label."
    },
    {
      question: "How do I start or cancel Plus membership?",
      answer: "Start a 30‑day free trial from your account. You can cancel anytime in Membership & Billing—benefits last through the billing period."
    },
    {
      question: "How do I contact the seller?",
      answer: "Open the product page or your order details and choose Contact Seller to send a message."
    },
    {
      question: "What payment methods are supported?",
      answer: "We accept major credit/debit cards, PayPal, and selected digital wallets depending on your region."
    },
    {
      question: "Do you offer business accounts?",
      answer: "Yes. Business accounts include bulk pricing, tax-exempt purchasing, and team controls. Contact sales to learn more."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find quick answers to common questions about orders, returns, and membership
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportFAQ;
