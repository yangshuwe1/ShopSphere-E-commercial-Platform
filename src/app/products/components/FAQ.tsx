'use client';

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the Plus free trial work?",
      answer: "Enjoy 30 days of Plus benefits including free standard shipping and exclusive deals. You can cancel anytime within the trial with no charges."
    },
    {
      question: "Can I cancel my membership at any time?",
      answer: "Yes, you can cancel from your account settings with no long-term contracts or cancellation fees. Benefits remain active until the end of the billing period."
    },
    {
      question: "How do returns and refunds work?",
      answer: "Most items are eligible for returns within 30 days. Start a return from your orders page to get a prepaid label. Refunds are issued once the item is received."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support via chat and email, with priority support for Plus members and dedicated assistance for Business accounts."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes. We use industry-standard encryption, PCI-compliant processing, and do not store full card details on our servers."
    },
    {
      question: "Do you support business sellers?",
      answer: "Absolutely. Our Business plan includes a seller dashboard, bulk shipping rates, promotions tools, and account management."
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about shopping, membership, shipping, and returns.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform ${
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
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
