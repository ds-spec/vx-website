import React from 'react';

export default function HeroSection() {
  return (
    <div className="w-full bg-white p-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-300 via-purple-300 to-green-300 px-8 py-16 md:px-16 md:py-5 text-center min-h-[300px] flex flex-col justify-center" 
           style={{
             borderRadius: '0 15rem 0 15rem'
           }}>
        <div className="relative z-10 max-w-9xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin text-white mb-3 leading-tight tracking-wide">
            Ready to elevate your organization?
          </h1>
          <p className="text-lg md:text-xl lg:text-4xl text-white/95 mb-10 font-light">
            Let's take the first step together.
          </p>
          {/* <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium pl-6 pr-2 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group text-base">
            <span>Know More</span>
            <div className="w-10 h-10 rounded-full  flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="white"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </button> */}
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
}