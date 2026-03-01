import React from 'react';
import { Link } from 'react-router';

const paymentOptions = [
  { id: 1, title: 'Education', path: '/pay/education', color: 'bg-indigo-50 text-indigo-600', icon: <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 2, title: 'Electricity', path: '/pay/electricity', color: 'bg-yellow-50 text-yellow-600', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 3, title: 'Gas', path: '/pay/gas', color: 'bg-red-50 text-red-600', icon: <path d="M12 2c0 4.5-6 9-6 13a6 6 0 0012 0c0-4-6-8.5-6-13z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 4, title: 'Water', path: '/pay/water', color: 'bg-blue-50 text-blue-600', icon: <path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-4-3.5-4-3.5-2 1.9-4 3.5S5 13 5 15a7 7 0 007 7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 5, title: 'Internet', path: '/pay/internet', color: 'bg-cyan-50 text-cyan-600', icon: <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.59 16.11a6 6 0 016.82 0M12 20h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 6, title: 'Govt Fee', path: '/pay/govt', color: 'bg-emerald-50 text-emerald-600', icon: <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M12 3L2 10h20L12 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 7, title: 'Merchant Pay', path: '/pay/merchant', color: 'bg-pink-50 text-pink-600', icon: <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18m-11 4v4m4-4v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
  { id: 8, title: 'More', path: '/services', color: 'bg-gray-100 text-gray-600', icon: <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> },
];

const RegularPayments = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 my-4">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Regular Payments</h2>
          <p className="text-xs text-gray-500 mt-1 sm:block hidden">Pay your bills instantly and securely</p>
        </div>
        <Link to="/bills/history" className="text-sm font-semibold text-blue-600 hover:underline">
          History
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
        {paymentOptions.map((option) => (
          <Link 
            key={option.id} 
            to={option.path} 
            className="flex flex-col items-center group"
          >
            {/* SVG Icon Container */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full ${option.color} transition-all duration-300 group-hover:scale-110 group-active:scale-95 border border-transparent group-hover:border-gray-200`}>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                {option.icon}
              </svg>
            </div>
            
            {/* Label */}
            <span className="mt-3 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 text-center leading-tight overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {option.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RegularPayments;