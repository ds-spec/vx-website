"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";
import { RiApps2AiFill } from "react-icons/ri";
import Industry from "./Industry";
import RoundedTag from "./RoundedTag";
import Technologies from "./Technologies";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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
        <div className="flex flex-col gap-14">
          <RoundedTag
            title={"Multi-Industry Expertise"}
            bgColor={"#D8FF2933"}
            borderColor={"#D8FF29"}
            color={"white"}
            icon={<RiApps2AiFill color="#d8ff29" />}
          />
          <Industry />
          <Technologies />
          <Portfolio />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
