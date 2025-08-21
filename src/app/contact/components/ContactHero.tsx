"use client";

import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Get in
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {' '}Touch
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We'd love to hear from you. Whether you have a question, need support, 
          or want to discuss a partnership, our team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact-form" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center">
            Send Message
          </a>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
