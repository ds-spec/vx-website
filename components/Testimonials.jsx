"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import RoundedTag from "./RoundedTag";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "Securely connect your data source with enterprise-grade protection, ensuring compliance and reliability. With built-in security measures, your data remains safe while maintaining seamless accessibility. Our platform is compatible with all major databases, enabling smooth and efficient integration.",
      name: "George William",
      designation: "Head of Data",
      avatar: "/avatars/george.png",
      bgColor: "#2B154733",
      textColor: "#FFFFFF",
    },
    {
      quote:
        "Our infrastructure became far more scalable after using this solution. The integration was smooth, and the support team was incredibly responsive throughout the process.",
      name: "Sophia Patel",
      designation: "Senior Data Engineer",
      avatar: "/avatars/sophia.png",
      bgColor: "#3B4F2433",
      textColor: "#FFFFFF",
    },
    {
      quote:
        "This platform has transformed the way our team collaborates and manages data pipelines. It's fast, secure, and easy to use—an absolute game changer.",
      name: "Liam Nguyen",
      designation: "Data Platform Lead",
      avatar: "/avatars/liam.png",
      bgColor: "#2C3E5033",
      textColor: "#FFFFFF",
    },
    {
      quote:
        "Integrating with legacy systems used to be a nightmare. Now it’s just a few clicks. The security layer gives us complete peace of mind.",
      name: "Aarav Mehta",
      designation: "IT Infrastructure Manager",
      avatar: "/avatars/aarav.png",
      bgColor: "#42351A33",
      textColor: "#FFFFFF",
    },
    {
      quote:
        "From onboarding to deployment, everything was seamless. It’s rare to find a product that balances performance with security so well.",
      name: "Emily Rodriguez",
      designation: "Cloud Solutions Architect",
      avatar: "/avatars/emily.png",
      bgColor: "#1A1A1A33",
      textColor: "#FFFFFF",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const translateX = currentIndex * -40;

  return (
    <>
      <RoundedTag
        title={"Our Testimonials"}
        icon={<FiMessageCircle color="#c9ba14" />}
        bgColor={"#C9BA1433"}
        borderColor={"#C9BA14"}
        color={"white"}
      />
      <div className="flex flex-col items-center gap-8 sm:gap-12 relative w-full bg-[#121015] rounded-xl px-3 sm:px-4 lg:px-6 py-4 sm:py-6 overflow-hidden">
        <div
          className="flex items-center w-full gap-8 sm:gap-12 transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              style={{ backgroundColor: testimonial.bgColor }}
              className="flex flex-col flex-shrink-0 gap-5 sm:gap-7 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-4xl rounded-4xl px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6"
            >
              <div className="flex flex-col gap-2">
                <FaQuoteLeft size={"1.5em"} className="sm:text-2xl" />
                <p className="font-figtree text-lg sm:text-xl lg:text-2xl font-semibold">
                  {testimonial.quote}
                </p>
                <FaQuoteRight size={"1.5em"} className="self-end sm:text-2xl" />
              </div>
              <hr />
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src="/images/users/user1.jpg"
                    alt="User"
                    objectFit="cover"
                    objectPosition="0% 20%"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h4 className="font-figtree font-semibold text-xl sm:text-2xl lg:text-3xl">
                    {testimonial.name}
                  </h4>
                  <h5 className="font-figtree font-medium text-base sm:text-lg lg:text-xl">
                    {testimonial.designation}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 sm:gap-5 self-end">
          <div
            onClick={prevSlide}
            className="bg-white cursor-pointer rounded-full p-2 transform transition-all"
          >
            <ArrowLeft color="black" size={"1.5em"} className="sm:text-2xl" />
          </div>
          <div
            onClick={nextSlide}
            className="bg-white cursor-pointer rounded-full p-2 transform transition-all"
          >
            <ArrowRight color="black" size={"1.5em"} className="sm:text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
