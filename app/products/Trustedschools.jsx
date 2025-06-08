"use client"
import React from 'react';

const TrustedSchools = () => {
  const schools = [
    {
      name: "Harvard University",
      image: "/productpage/one.png"
    },
    {
      name: "Oxford University", 
      image: "/productpage/two.png"
    },
    {
      name: "MIT",
      image: "/productpage/three.png"
    },
    {
      name: "Stanford University",
      image: "/productpage/four.png"
    },
    {
      name: "Cambridge University",
      image: "/productpage/five.png"
    },
    {
      name: "Yale University",
      image: "/productpage/seven.png"
    },
    {
      name: "Princeton University",
      image: "/productpage/six.png"
    },
    {
      name: "Columbia University",
      image: "/productpage/eight.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-full  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trusted by Schools Worldwide
          </h2>
        </div>

        {/* Continuous Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-8">
            {/* First set of logos */}
            {schools.map((school, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-lg border-2 p-6 rounded-xl"
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-20 h-20 object-cover rounded-full shadow-md  transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {schools.map((school, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-lg border-2 p-6 rounded-xl"
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-20 h-20 object-cover rounded-full shadow-md  transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedSchools;