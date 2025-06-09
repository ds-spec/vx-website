"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "George",
      title: "Chairman",
      image: "/productpage/george.png",
      quote: "Help to maintain and students in a constructive organization's life easy.",
      bgColor: "bg-purple-500"
    },
    {
      id: 2,
      name: "B Rama Krishna",
      title: "Head of Bhashyam Schools",
      image: "/productpage/rama.png", 
      quote: "VX School Board has simplified our admission procedures, data management process, data accessibility and communication between the stakeholders thereby saving our valuable time as well as paper.",
      bgColor: "bg-purple-400"
    },
    {
      id: 3,
      name: "Willie",
      title: "Sri Chaitanya",
      image: "/api/placeholder/80/80",
      quote: "Great system that has been a boon for our institution! In terms of organization and efficiency that in a large institution like Fedena is crucial.",
      bgColor: "bg-green-400"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='bg-white p-6'>
    <div className="bg-black text-white rounded-2xl max-w-8xl mx-auto relative overflow-hidden" style={{ minHeight: '450px' }}>
      {/* Rating Badge */}
      <div className="absolute top-6 left-5 z-10">
        <div className="bg-black border-2 border-white rounded-full px-4 py-2 flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white">Excellent 4.6 of 5</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="absolute top-16 left-6 z-10 max-w-sm ">
        <h2 className="text-4xl font-bold mt-4 mb-4 leading-tight">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-300 text-lg">
          Real stories from schools, teachers, and parents who trust VX School Board.
        </p>
      </div>

      {/* Cards Container */}
      <div className="absolute top-3 right-10 w-3/5 h-full flex items-center justify-center">
        <div className="relative w-full h-80 flex items-center justify-center">
          
          {/* Left Card - George (Partially visible) */}
          <div className="absolute left-0 top-8 w-100 h-64 z-10">
            <div className="bg-[#7354FF] rounded-2xl p-6 text-white relative h-full shadow-xl">
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-4xl font-serif opacity-30 text-white"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="#1E1E1E"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
</svg>
</div>
              
              {/* Quote text */}
              <div className="pt-4 pb-16">
                <p className="text-black text-base leading-relaxed border-b pb-22 border-black">
                  {testimonials[0].quote}
                </p>
              </div>

              {/* Bottom section with profile */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0 ">
                    <img 
                      src={testimonials[0].image} 
                      alt={testimonials[0].name}  
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[0].name}</h4>
                    <p className="text-sm opacity-90 text-white">{testimonials[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Card - B Rama Krishna (Main/Prominent) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-156 h-80 z-20">
            <div className="bg-[#986CE6] rounded-2xl p-8 text-black relative h-full shadow-2xl">
              {/* Quote marks */}
              <div className="absolute top-4 left-6 text-5xl font-serif opacity-30 text-black"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="#1E1E1E"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fill-opacity="0.2"/>
                </svg>
              </div>
              
              {/* Quote text */}
              <div className="pt-2  pb-20">
                <p className="text-black text-lg  font-bold leading-relaxed font-medium border-b pb-24  ">
                  {testimonials[1].quote}
                </p>
              </div>             
              {/* Bottom section with profile */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[1].image} 
                      alt={testimonials[1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black">{testimonials[1].name}</h4>
                    <p className="text-base opacity-80 text-black">{testimonials[1].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Willie (Partially visible) */}
          <div className="absolute right-0 top-8 w-80 h-64 z-10">
            <div className="bg-[#A0DD34] rounded-2xl p-6 text-black relative h-full shadow-xl">
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-4xl font-serif opacity-30 text-black">"</div>
              
              {/* Quote text */}
              <div className="pt-8 pb-16">
                <p className="text-black text-base leading-relaxed">
                  {testimonials[2].quote}
                </p>
              </div>

              {/* Bottom section with profile */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[2].image} 
                      alt={testimonials[2].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{testimonials[2].name}</h4>
                    <p className="text-sm opacity-80 text-black">{testimonials[2].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-30">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
    </div>
  );
}