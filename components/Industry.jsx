"use client";

import Image from "next/image";
import { useState } from "react";

const Industry = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState();
  const getColSpanClass = (span) => {
    switch (span) {
      case 2:
        return "md:col-span-2";
      case 3:
        return "md:col-span-3";
      case 1:
      default:
        return "md:col-span-1";
    }
  };
  const industries = [
    {
      title: "Fintech",
      icon: "fintech",
      span: 1,
      bgColor: "#34C4DD1A",
      textColor: "#34C4DD",
      description:
        "We develop secure, scalable, and user-friendly financial software. From payment platforms and digital wallets to trading systems and regulatory tech, we help fintech companies deliver smarter, faster financial experiences.",
    },
    {
      title: "Healthcare & Biotech",
      icon: "biotech",
      span: 2,
      bgColor: "#DD34BE1A",
      textColor: "#DD34BE",
      description:
        "Our solutions support healthcare providers, biotech firms, and wellness platforms with secure, HIPAA-compliant systems. We build tools for patient care, diagnostics, research, and operational efficiency—powered by smart technology.",
    },
    {
      title: "Education Technology",
      icon: "education",
      span: 2,
      bgColor: "#7134DD1A",
      textColor: "#7134DD",
      description:
        "We build end-to-end logistics tech for smart routing, fleet management, real-time tracking, and automation. Our solutions improve delivery speed, visibility, and efficiency across supply chains and transport networks.",
    },
    {
      title: "Travel & Hospitality",
      icon: "travel",
      span: 1,
      bgColor: "#FF90401A",
      textColor: "#FF9040",
      description:
        "We create immersive, accessible, and intuitive EdTech platforms. From e-learning apps to LMS and virtual classrooms, our solutions enhance learning outcomes for educators, institutions, and students around the world.",
    },
    {
      title: "Real Estate",
      icon: "realestate",
      span: 1,
      bgColor: "#A0DD341A",
      textColor: "#A0DD34",
      description:
        "We craft tech that elevates guest experiences and streamlines operations. From booking engines to customer portals and smart concierge tools, our solutions help businesses in travel and hospitality deliver excellence at every step.",
    },
    {
      title: "Logistics & Transportation",
      icon: "logistics",
      span: 2,
      bgColor: "#3CDD341A",
      textColor: "#3CDD34",
      description:
        "Our custom platforms simplify property management, listings, virtual tours, and real-time market data. Whether you're a realtor, investor, or property tech startup—we help you move faster and close smarter.",
    },
  ];

  return (
    <div className="w-full min-h-96 bg-[#121015] rounded-xl px-3 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-3 gap-3">
        {industries?.map((industry, index) => (
          <div
            key={index}
            onMouseOver={() => setActiveIndustryIndex(index)}
            onMouseLeave={() => setActiveIndustryIndex(null)}
            style={{ backgroundColor: industry.bgColor }}
            className={`relative flex flex-col gap-4 cursor-pointer col-span-1 ${getColSpanClass(
              industry.span
            )} min-h-52 justify-center items-center rounded-xl hover:bg-gradient-to-b hover:from-[${
              industry.bgColor
            }] hover:via-[#121015] hover:to-[#1f1e1e] hover:transition-colors`}
          >
            {activeIndustryIndex == index ? (
              <div className="absolute text-center text-md leading-6 font-figtree font-bold px-2">
                {industry.description}
              </div>
            ) : (
              <>
                <Image
                  width={58}
                  height={58}
                  alt="expertise-icons"
                  src={`/images/icons/${industry.icon}.png`}
                />
                <p
                  style={{ color: industry.textColor }}
                  className="font-figtree text-xl font-semibold"
                >
                  {industry.title}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
