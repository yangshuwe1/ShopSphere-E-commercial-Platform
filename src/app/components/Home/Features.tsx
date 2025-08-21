import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      wrapper: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      iconBg: 'bg-blue-600',
      title: 'Millions of Products',
      desc: 'Shop electronics, home & kitchen, beauty, fashion, toys, and more from trusted sellers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18v4H3zM3 7l2 14h14l2-14" />
        </svg>
      )
    },
    {
      wrapper: 'bg-gradient-to-br from-green-50 to-emerald-50',
      iconBg: 'bg-green-600',
      title: 'Fast, Reliable Delivery',
      desc: 'Get your orders quickly with tracked shipping and convenient returns.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16V8h11l4 4v4H3zm15-4h3m-3 4h3M7 16a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      wrapper: 'bg-gradient-to-br from-yellow-50 to-amber-50',
      iconBg: 'bg-yellow-600',
      title: 'Everyday Low Prices',
      desc: 'Discover daily deals and seasonal sales across top categories.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop With Us</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need for everyday life—great selection, fast delivery, and secure checkout.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`text-center p-6 rounded-xl ${f.wrapper} hover:shadow-lg transition-all duration-300`}>
              <div className={`w-12 h-12 ${f.iconBg} rounded-full flex items-center justify-center text-white mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
