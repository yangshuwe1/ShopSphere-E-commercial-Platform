"use client";

import React from 'react';

const CompanyMap: React.FC = () => {
  // Default company address (San Francisco, CA)
  const companyAddress = {
    street: "123 Innovation Drive",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  };

  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDpr4GuXM0MOehjA0hah-cyoRO56jJVjBo&q=${encodeURIComponent(
    `${companyAddress.street}, ${companyAddress.city}, ${companyAddress.state} ${companyAddress.zip}`
  )}`;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-lg">
            Come see us in person or explore our location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Company Address */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Headquarters
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{companyAddress.street}</p>
                    <p className="text-gray-600">
                      {companyAddress.city}, {companyAddress.state} {companyAddress.zip}
                    </p>
                    <p className="text-gray-600">{companyAddress.country}</p>
                  </div>
                </div>

                                 <div className="flex items-start space-x-4">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="font-medium text-gray-900">Office Hours</p>
                     <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                     <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM PST</p>
                   </div>
                 </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Main office line</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Getting Here</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>By Car:</strong> Located in the heart of San Francisco's tech district</p>
                  <p><strong>By Public Transit:</strong> 10-minute walk from Montgomery BART station</p>
                  <p><strong>Parking:</strong> Street parking and nearby garages available</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Before You Visit</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Appointments recommended for meetings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Visitor badges provided at reception</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free Wi-Fi available for guests</span>
                </li>
              </ul>
            </div>
          </div>

                     {/* Map */}
           <div className="space-y-6">
             <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
               <iframe
                 src={mapUrl}
                 width="100%"
                 height="400"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Company Location"
                 className="w-full aspect-video"
               />
             </div>

             {/* Quick Actions */}
             <div className="grid grid-cols-2 gap-4">
               <a
                 href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                   `${companyAddress.street}, ${companyAddress.city}, ${companyAddress.state} ${companyAddress.zip}`
                 )}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm text-center"
               >
                 Get Directions
               </a>
               <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
                 Schedule Visit
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMap;
