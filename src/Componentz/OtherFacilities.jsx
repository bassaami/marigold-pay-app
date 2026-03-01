import React from 'react';
import { Link } from 'react-router';

const facilities = [
  { 
    id: 1, 
    title: 'Contact Us', 
    path: '/support', 
    color: 'bg-emerald-50 text-emerald-700', 
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
  },
  { 
    id: 2, 
    title: 'Daily Limits', 
    path: '/limits', 
    color: 'bg-orange-50 text-orange-700', 
    icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
  },
  { 
    id: 3, 
    title: 'Zakat Evaluation', 
    path: '/zakat', 
    color: 'bg-blue-50 text-blue-700', 
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
  },
  { 
    id: 4, 
    title: 'More', 
    path: '/more-facilities', 
    color: 'bg-gray-50 text-gray-700', 
    icon: <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
  },
];

const OtherFacilities = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 my-4">
      <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-6">Other Facilities</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {facilities.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="group flex items-center p-3 sm:p-4 rounded-xl border border-gray-50 bg-gray-50/30 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-200"
          >
            {/* Icon Box */}
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                {item.icon}
              </svg>
            </div>

            {/* Title */}
            <div className="ml-3 sm:ml-4">
              <span className="block text-xs sm:text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherFacilities;