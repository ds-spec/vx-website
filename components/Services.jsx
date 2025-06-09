"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";
import { RiApps2AiFill } from "react-icons/ri";
import RoundedTag from "./RoundedTag";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState();
  const [activeIndustryIndex, setActiveIndustryIndex] = useState();

  const handleClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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

  const services = [
    {
      title: "AI & Machine Learning",
      icon: "ai",
      description:
        "We design intelligent systems that learn and adapt. From predictive analytics and recommendation engines to computer vision and NLP, our AI/ML solutions help automate processes, unlock insights, and make smarter decisions at scale.",
    },
    {
      title: "Software Development",
      icon: "software",
      description:
        "We specialize in custom software tailored to your business needs. From enterprise platforms to niche internal tools, our developers write clean, maintainable code that solves real problems and scales with your growth.",
    },
    {
      title: "Mobile Development",
      icon: "mobile",
      description:
        "We create native and cross-platform mobile apps that are intuitive, performant, and beautiful. Whether it’s iOS, Android, or both, our mobile solutions are built to engage users and deliver value on the go.",
    },
    {
      title: "Cloud Services",
      icon: "cloud",
      description:
        "We help businesses scale with cloud-native architecture, DevOps, and infrastructure optimization. Whether you’re on AWS, Azure, or Google Cloud, we design secure, efficient, and cost-effective cloud solutions.",
    },
    {
      title: "Blockchain",
      icon: "blockchain",
      description:
        "We develop decentralized apps, smart contracts, and blockchain integrations that are secure and transparent. From NFTs and token systems to supply chain tracking and fintech apps, we bring blockchain ideas to life.",
    },
    {
      title: "AR/VR",
      icon: "ar",
      description:
        "Our AR/VR team creates immersive experiences that blur the line between digital and physical. Whether for training, gaming, or product visualization, we combine storytelling and technology for next-level interaction.",
    },
    {
      title: "Big Data",
      icon: "bigdata",
      description:
        "We help you turn massive data sets into actionable insights. From data lakes and pipelines to real-time dashboards and advanced analytics, we architect systems that support smart, data-driven decision-making.",
    },
    {
      title: "UX/UI Services",
      icon: "ui",
      description:
        "We design user experiences that are intuitive, elegant, and user-focused. From wireframes to final interfaces, our design team ensures your product not only looks great but feels great to use.",
    },
  ];

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
    <div className="w-full min-h-96 bg-[#0C0C0C] px-4">
      <div className="flex flex-col gap-12 px-4 py-12">
        <div className="flex flex-col gap-6 px-4 py-12">
          <RoundedTag
            title={"Our Services"}
            bgColor={"#5029FF33"}
            borderColor={"#1423C9"}
            color={"white"}
            icon={<MdSettingsSuggest color="#ffa000" />}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services?.map((service, index) => (
              <div
                key={index}
                onClick={(e) => handleClick(index, e)}
                className="flex flex-col gap-2 items-center bg-[#121015] w-full px-3 py-4 rounded-xl mb-4 cursor-pointer border border-transparent hover:border-2 hover:border-[#1423C9] transition-colors"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/images/icons/${service.icon}.png`}
                      width={28}
                      height={28}
                      alt="service-icons"
                    />
                    <p className="font-figtree text-lg font-bold">
                      {service.title}
                    </p>
                  </div>
                  <FaPlus color="white" />
                </div>
                {activeIndex == index && (
                  <p className="font-figtree font-bold text-lg">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <RoundedTag
            title={"Multi-Industry Expertise"}
            bgColor={"#D8FF2933"}
            borderColor={"#D8FF29"}
            color={"white"}
            icon={<RiApps2AiFill color="#d8ff29" />}
          />
          <div className="w-full min-h-96 bg-[#121015] rounded-xl px-3 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-3 gap-3">
              {industries?.map((industry, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: industry.bgColor }}
                  className={`relative flex flex-col gap-4 cursor-pointer col-span-1 ${getColSpanClass(
                    industry.span
                  )} min-h-52 justify-center items-center rounded-xl hover:bg-gradient-to-t hover:from-[#2E8B95] hover:via-[#121015] hover:to-[#121015] hover:transition-colors`}
                >
                  <div className="absolute text-center text-lg leading-6 font-figtree font-semibold">
                    {industry.description}
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
