"use client";

import Navbar from "@/components/Navbar";

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
          <div key={index} className="flex flex-col gap-2 w-full bg-[#121015] border-[0.8px] border-[#232323] px-3 py-6 rounded-xl">
            <p className="font-figtree text-[#1423C9] text-xl font-semibold">
              {info.title}
            </p>
            <p className="text-lg font-figtree font-bold">{info.desc}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
