"use client"
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function EducationalPlatform() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const platforms = [
    {
      title: "Web Platform for Schools",
      subtitle: "A powerful web-based platform designed for modern schools.",
      image: "/productpage/nine.png"
    },
    {
      title: "Web Platform for Teachers",
      subtitle: "A smart web platform built to support today's educators.",
      image: "/productpage/nine.png"
    },
    {
      title: "Mobile Application for Teachers",
      subtitle: "A dedicated mobile app that empowers teachers on the go.",
      image: "/productpage/nine.png"
    },
    {
      title: "Web Platform for Parents / Students",
      subtitle: "An easy-to-use web platform for parents and students to stay informed and engaged.",
      image: "/productpage/nine.png"
    },
    {
      title: "Mobile Application for Parents",
      subtitle: "A convenient mobile application for parents to stay connected.",
      image: "/productpage/nine.png"
    }
  ];

  const nextSlide = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.firstChild;
      if (!card) return;
      
      const cardWidth = card.offsetWidth;
      const gap = 24; // matches gap-6 (1.5rem = 24px)
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      setCurrentSlide(prev => Math.min(prev + 1, platforms.length - 1));
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.firstChild;
      if (!card) return;
      
      const cardWidth = card.offsetWidth;
      const gap = 24; // matches gap-6 (1.5rem = 24px)
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className={`p-6 bg-white ${figtree.className}`}>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-screen border-2 rounded-[16px] border-black/20 bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border-2 border-black mb-8">
              <Globe className="w-4 h-4 text-black" />
              <span className="text-sm text-black">All Platforms</span>
            </div>
            
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
              Designed for Schools, Trusted by Teachers, Loved by Parents
            </h1>
          </div>

          {/* Cards Container */}
          <div className="relative p-4">
            <div 
              ref={containerRef}
              className="flex hide-scrollbar overflow-x-auto gap-6 mb-8 snap-x snap-mandatory"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-72 h-96 bg-white p-3 rounded-xl  border border-gray-100 overflow-hidden  transition-shadow duration-300 flex flex-col snap-start"
                >
                  {/* Image Header */}
                  <div className="h-48 w-full rounded overflow-hidden">
                    <img 
                      src={platform.image} 
                      alt={platform.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {platform.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {platform.subtitle}
                    </p>
                    
                    <div className="mt-auto">
                      {/* <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                        Know More
                        <ChevronRight className="w-4 h-4" />
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-left gap-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-2 rounded-full bg-white transition-shadow duration-200 border border-gray-200 ${
                  currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === platforms.length - 1}
                className={`p-2 rounded-full bg-white transition-shadow duration-200 border border-gray-200 ${
                  currentSlide === platforms.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}