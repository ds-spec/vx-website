"use client"

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});

const ContentGrid = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    // Simple GSAP-like animations using CSS transitions and JavaScript
    const animateCards = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Initial state
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'all 0.6s ease-out';
          
          // Animate in with stagger
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0px)';
          }, index * 150);
        }
      });
    };

    // Trigger animations on mount
    animateCards();

    // Add hover animations (removed scale, kept only translateY)
    cardsRef.current.forEach(card => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-8px)';
          card.style.transition = 'all 0.3s ease-out';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0px)';
          card.style.transition = 'all 0.3s ease-out';
        });
      }
    });
  }, []);

  // Function to generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Function to handle card click
  const handleCardClick = (item, index) => {
    // Navigate to blogone page with item data as query params
    router.push(`/blogone?id=${item.id}&title=${encodeURIComponent(item.title)}`);
  };

  const contentItems = [
    {
      id: 1,
      title: "AI, Business Agility, and the Future of Work: Insights from Di...",
      date: "12/03/2025 03:10 PM",
      description: "We're excited to announce our partnership with Optimizely, the top CMS platform fo...",
      image: "/blogpage/imageone.png",
      category: "Technology"
    },
    {
      id: 2,
      title: "Why Hire LATAM Developers for Your Next Project",
      date: "12/03/2025 03:10 PM", 
      description: "We're excited to announce our partnership with Optimizely, the top CMS platform fo...",
      image: "/blogpage/imagetwo.png",
      category: "Development"
    },
    {
      id: 3,
      title: "Vadim Peskov Podcast Interview with MatriQpoint",
      date: "12/03/2025 03:10 PM",
      description: "We're excited to announce our partnership with Optimizely, the top CMS platform fo...",
      image: "/blogpage/imagethree.png",
      category: "Podcast"
    },
    {
      id: 4,
      title: "Outsource Python Development: 3 Steps to Success",
      date: "12/03/2025 03:10 PM",
      description: "We're excited to announce our partnership with Optimizely, the top CMS platform fo...",
      image: "/blogpage/imagefour.png",
      category: "Programming"
    },
    {
      id: 5,
      title: "AI, Business Agility, and the Future of Work: Insights from Di...",
      date: "12/03/2025 03:10 PM",
      description: "We're excited to announce our partnership with Optimizely, the top CMS platform fo...",
      image: "/blogpage/imagefive.png",
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-8xl mx-auto">
        {/* First row - 4 cards */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-0"
        >
          {contentItems.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              ref={el => cardsRef.current[index] = el}
              onClick={() => handleCardClick(item, index)}
              className="relative rounded-lg overflow-hidden cursor-pointer bg-[#121015] border border-[#232323] flex flex-col hover:border-gray-500 transition-all duration-300"
            >
              {/* Content at the top */}
              <div className="p-6 flex-1">
                <span className="text-xs font-medium text-gray-400 mb-2 block">
                  {item.category}
                </span>
                <h3 className="font-semibold text-[20px] mb-2 leading-tight text-white">
                  {item.title}
                </h3>
                <p className="text-[16px] mb-3 opacity-80 text-gray-400">
                  {item.date}
                </p>
                <p className="text-[16px] leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Image at the bottom */}
              <div className="h-[304px] p-4 overflow-hidden mt-auto">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Second row - 1 card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div
            ref={el => cardsRef.current[4] = el}
            onClick={() => handleCardClick(contentItems[4], 4)}
            className="relative rounded-lg overflow-hidden cursor-pointer bg-[#121015] border border-[#232323] flex flex-col hover:border-gray-500 transition-all duration-300"
          >
            {/* Content at the top */}
            <div className="p-6 flex-1">
              <span className="text-xs font-medium text-gray-400 mb-2 block">
                {contentItems[4].category}
              </span>
              <h3 className="font-semibold text-lg mb-2 leading-tight text-white">
                {contentItems[4].title}
              </h3>
              <p className="text-sm mb-3 opacity-80 text-gray-400">
                {contentItems[4].date}
              </p>
              <p className="text-sm leading-relaxed text-gray-300">
                {contentItems[4].description}
              </p>
            </div>

            {/* Image at the bottom */}
            <div className="h-48 overflow-hidden mt-auto">
              <img 
                src={contentItems[4].image} 
                alt={contentItems[4].title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;