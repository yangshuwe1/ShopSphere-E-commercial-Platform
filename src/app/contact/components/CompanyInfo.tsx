"use client";

import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with us through any of these channels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
            <p className="text-blue-600 font-medium mb-2">support@shopsphere.com</p>
            <p className="text-gray-600 text-sm">24/7 response time</p>
            <p className="text-gray-500 text-sm mt-2">For technical issues and general inquiries</p>
          </div>

          {/* Sales & Business */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales & Business</h3>
            <p className="text-green-600 font-medium mb-2">sales@shopsphere.com</p>
            <p className="text-gray-600 text-sm">Business hours</p>
            <p className="text-gray-500 text-sm mt-2">For sales questions and partnerships</p>
          </div>

          {/* Phone Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Support</h3>
            <p className="text-purple-600 font-medium mb-2">+1 (555) 123-4567</p>
            <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM EST</p>
            <p className="text-gray-500 text-sm mt-2">For urgent matters and complex issues</p>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Live Chat */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                <p className="text-gray-600">Available 24/7 for instant support</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Start Live Chat
            </button>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Weekend Support:</strong> Available via email and live chat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
