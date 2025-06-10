"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutUs() {
  const about = [
    {
      title: "About Company",
      desc: "At VX, we are a forward-thinking software development company that builds powerful digital solutions and future-ready products for businesses worldwide. With a strong foundation in cutting-edge technologies and a passion for solving complex challenges, we empower enterprises, startups, and tech-driven organizations to scale, innovate, and lead in their industries.",
    },
    {
      title: "Our Mission",
      desc: "Our mission is to craft high-quality, scalable software solutions that create measurable impact for businesses. We blend technical excellence with intuitive, user-centered design and agile development processes to deliver products that are not only robust and future-ready, but also meaningful and efficient. Our goal is to empower organizations with digital tools that solve real-world problems, drive growth, and elevate user experiences.",
    },
    {
      title: "Our Vision",
      desc: "Our vision is to become a global leader in software innovation—where cutting-edge technology aligns seamlessly with real-world purpose. We strive to build solutions that go beyond functionality, delivering meaningful impact for businesses and enhancing the lives of the people they serve. Our aim is to shape the future of digital experiences by creating products that are intelligent, reliable, and purpose-driven. Through relentless innovation, user-focused design, and a commitment to excellence, we envision a world where every solution we deliver drives transformation, inspires progress, and sets new standards for what technology can achieve.",
    },
  ];

  const coreValues = [
    {
      title: "Vision",
      description:
        "We think ahead. We build with a future-focused mindset—always striving to innovate and lead through transformative technology.",
      src: "vision",
    },
    {
      title: "Value",
      description:
        "We create meaningful impact. Every solution we deliver is designed to provide real, measurable value to our clients and their users.",
      src: "value",
    },
    {
      title: "Velocity",
      description:
        "We move fast without compromising quality. With agile practices and efficient processes, we deliver results quickly and consistently.",
      src: "velocity",
    },
    {
      title: "Versatility",
      description:
        "We adapt. From tech stacks to team dynamics, we remain flexible and responsive to every unique challenge and need.",
      src: "versatility",
    },
    {
      title: "Virtue",
      description:
        "We do the right thing. Integrity, transparency, and trust are at the core of our relationships—with clients, partners, and each other.",
      src: "virtue",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0C0C0C]">
      <Navbar />
      <div className="flex flex-col gap-10 px-3">
        <div className="w-full bg-[#1423C933] border-[0.8px] border-[#1423C9] px-3 py-9 rounded-xl mt-8">
          <p className="font-figtree text-3xl uppercase font-semibold text-center">
            About Us
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {about?.map((info, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 w-full bg-[#121015] border-[0.8px] border-[#232323] px-3 py-6 rounded-xl"
            >
              <p className="font-figtree text-[#1423C9] text-xl font-semibold">
                {info.title}
              </p>
              <p className="text-lg font-figtree font-bold">{info.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 px-3 py-8 w-full min-h-96 bg-[#F3F3F3]">
          <div className="flex flex-col gap-3 w-full">
            <p className="font-figtree text-[#1423C9] text-xl font-semibold">
              Core Values
            </p>
            <p className="text-lg font-figtree font-semibold text-[#000000]">
              Our core values are the foundation of everything we do. They shape
              our culture, guide our decisions, and define how we work with
              clients, collaborate as a team, and approach every project.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {coreValues?.map((value, index) => (
                <div key={index} className="relative w-full min-h-64 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={`/images/${value.src}.png`}
                    alt="core-values"
                    fill
                  />
                  <div className="absolute w-full h-full z-10 bg-[#00000080] rounded-xl" />
                  <div className="flex flex-col gap-5 absolute bottom-2 px-3 z-20">
                    <h3 className="font-figtree text-2xl font-bold">
                      {value.title}
                    </h3>
                    <h4 className="font-figtree text-md min-w-56 font-semibold leading-5">
                      {value.description}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
