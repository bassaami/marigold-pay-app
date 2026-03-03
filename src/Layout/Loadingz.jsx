import React from 'react';

const Loadingz = () => {
    return (
        <div class="my-50 bg-slate-900 p-12 rounded-3xl flex flex-col items-center justify-center space-y-8 shadow-2xl overflow-hidden">
            <h2 class="text-white text-xl font-semibold">Big Infinity Spin</h2>
            
            {/* <!-- The requested single-tag infinity spinner --> */}
            <div class="relative w-24 h-12 border-4 border-indigo-500 rounded-full animate-spin after:content-[''] after:absolute after:inset-0 after:border-4 after:border-t-white after:rounded-full after:animate-pulse"></div>
            
            <p class="text-slate-400 text-sm">Created with a single div + pseudo-elements</p>
        </div>
    );
};

export default Loadingz;