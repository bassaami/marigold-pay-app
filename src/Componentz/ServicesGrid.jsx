import React from 'react';
import { Link } from 'react-router';

const services = [
  { id: 1, title: 'Send Money', path: '/send-money', color: 'bg-blue-50 text-blue-600', icon: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/> },
  { id: 2, title: 'Mobile Recharge', path: '/recharge', color: 'bg-green-50 text-green-600', icon: <path d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm7 11h.01"/> },
  { id: 3, title: 'Cash Out', path: '/cash-out', color: 'bg-orange-50 text-orange-600', icon: <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"/> },
  { id: 4, title: 'Add Money', path: '/add-money', color: 'bg-purple-50 text-purple-600', icon: <path d="M12 5v14M5 12h14"/> },
  { id: 5, title: 'Transfer', path: '/transfer', color: 'bg-indigo-50 text-indigo-600', icon: <path d="M17 1l4 4-4 4m-10 0l-4-4 4-4m-4 13h14M21 17l-4 4-4-4"/> },
  { id: 6, title: 'E-Toll', path: '/e-toll', color: 'bg-red-50 text-red-600', icon: <path d="M10 17h4V5H10v12zM2 9h20M2 15h20"/> },
  { id: 7, title: 'Metro Pass', path: '/metro', color: 'bg-teal-50 text-teal-600', icon: <path d="M7 22l3-3h4l3 3M4 11v8h16v-8m-7-9a9 9 0 00-9 9v1h18v-1a9 9 0 00-9-9z"/> },
  { id: 8, title: 'Insurance EMI', path: '/insurance', color: 'bg-pink-50 text-pink-600', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
];

const ServicesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Our Services</h2>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View History
        </button>
      </div>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
        {services.map((service) => (
          <Link 
            key={service.id} 
            to={service.path} 
            className="flex flex-col items-center group transition-all duration-200 hover:-translate-y-1"
          >
            {/* SVG Icon Container */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl ${service.color} transition-all group-hover:shadow-lg group-active:scale-90`}>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                {service.icon}
              </svg>
            </div>
            
            {/* Title - adjusted font size for responsiveness */}
            <span className="mt-3 text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-700 text-center leading-tight">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;