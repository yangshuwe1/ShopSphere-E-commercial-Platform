import React from 'react';
import { Product } from '../data';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "",
      description: "Create an account to start shopping",
      features: [
        "Personalized recommendations",
        "Order tracking",
        "Standard support",
        "Wishlist & saves",
        "Email deals"
      ],
      popular: false,
      buttonText: "Create Account",
      buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Plus",
      price: "$9.99",
      period: "/month",
      description: "Free shipping on eligible orders",
      features: [
        "Free standard shipping",
        "Exclusive deals",
        "Priority customer support",
        "Early access to sales",
        "Extended returns"
      ],
      popular: true,
      buttonText: "Start 30‑day Trial",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white"
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Tools for sellers and small businesses",
      features: [
        "Seller dashboard",
        "Bulk shipping rates",
        "Promotions manager",
        "Account manager",
        "API access",
        "Team members"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle: "border-2 border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Membership & Seller Plans
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pick the option that fits you best. Try Plus free for 30 days—cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-auto w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom plan? We're here to help!
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold underline">
            Contact our sales team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
