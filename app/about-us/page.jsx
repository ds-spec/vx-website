"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
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

  const members = [
    {
      name: "Vamsi D Krishna",
      designation: "Founder and CEO",
      src: "founder",
    },
    {
      name: "Venkata Siva kumar",
      designation: "Co-founder and Managing Director",
      src: "cofounder",
    },
    {
      name: "Pradeep Reddy",
      designation: "Co-founder and CFO",
      src: "cfo",
    },
  ];

  const categories = [
    { name: "Vebha", bgColor: "#7134DD33", borderColor: "#7134DD" },
    { name: "Jeeva", bgColor: "#A0DD3433", borderColor: "#A0DD34" },
    { name: "VX School Board", bgColor: "#D8FF2933", borderColor: "#D8FF29" },
    { name: "Air Asia", bgColor: "#5029FF33", borderColor: "#5029FF" },
    { name: "Data Bricks", bgColor: "#1423C933", borderColor: "#1423C9" },
    { name: "Jasper", bgColor: "#C9BA1433", borderColor: "#C9BA14" },
    { name: "VX Marketing", bgColor: "#7134DD33", borderColor: "#7134DD" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0C0C0C]">
      <Navbar />
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-6 lg:px-8 xl:px-4">
        {/* About Us Header */}
        <div className="w-full bg-[#1423C933] border-[0.8px] border-[#1423C9] px-3 sm:px-6 py-6 sm:py-9 rounded-xl mt-6 sm:mt-8">
          <p className="font-figtree text-xl sm:text-2xl lg:text-3xl uppercase font-semibold text-center">
            About Us
          </p>
        </div>

        {/* About Sections */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {about?.map((info, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 w-full bg-[#121015] border-[0.8px] border-[#232323] px-3 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-xl"
            >
              <p className="font-figtree text-[#1423C9] text-lg sm:text-xl font-semibold">
                {info.title}
              </p>
              <p className="text-base sm:text-lg font-figtree font-bold leading-relaxed">
                {info.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="flex flex-col gap-4 sm:gap-6 px-3 sm:px-6 lg:px-8 py-6 sm:py-8 w-full min-h-96 bg-[#F3F3F3] rounded-xl">
          <div className="flex flex-col gap-3 sm:gap-4 w-full">
            <p className="font-figtree text-[#1423C9] text-lg sm:text-xl font-semibold">
              Core Values
            </p>
            <p className="text-base sm:text-lg font-figtree font-semibold text-[#000000] leading-relaxed">
              Our core values are the foundation of everything we do. They shape
              our culture, guide our decisions, and define how we work with
              clients, collaborate as a team, and approach every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {coreValues?.map((value, index) => (
                <div
                  key={index}
                  className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden"
                >
                  <Image
                    className="rounded-xl object-cover"
                    src={`/images/${value.src}.png`}
                    alt="core-values"
                    fill
                  />
                  <div className="absolute w-full h-full z-10 bg-[#00000080] rounded-xl" />
                  <div className="flex flex-col gap-2 sm:gap-3 absolute bottom-2 sm:bottom-3 px-3 sm:px-4 z-20">
                    <h3 className="font-figtree text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      {value.title}
                    </h3>
                    <h4 className="font-figtree text-sm sm:text-base font-semibold leading-4 sm:leading-5 text-white break-words">
                      {value.description}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-xl">
            <p className="font-figtree text-[#1423C9] text-lg sm:text-xl font-semibold">
              Our Leadership Team
            </p>
            <p className="text-base sm:text-lg font-figtree font-bold leading-relaxed">
              Our leadership team believes that technology is most powerful when
              it's built with purpose, collaboration, and vision. We are
              committed to fostering a culture of innovation, integrity, and
              continuous learning—where people feel empowered to challenge the
              norm and build solutions that make a difference. We believe in
              leading by example, investing in talent, and creating a space
              where creativity, strategy, and execution come together. At the
              heart of VX is a shared belief: that great software can shape
              industries, improve lives, and unlock new possibilities for the
              future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-5">
            {members?.map((member, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-4 py-4 sm:py-6 w-full bg-[#121015] min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] rounded-xl"
              >
                <div className="relative w-full flex-1 min-h-[45vh] sm:min-h-[50vh] lg:min-h-[55vh] rounded-md overflow-hidden">
                  <Image
                    className="rounded-md object-cover"
                    src={`/images/${member.src}.jpg`}
                    alt={member.name}
                    fill
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h2 className="font-figtree text-xl sm:text-2xl font-semibold text-white">
                    {member.name}
                  </h2>
                  <h3 className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {member.designation}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col gap-2 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-xl">
            <p className="font-figtree text-[#1423C9] text-lg sm:text-xl font-semibold">
              Our Clients
            </p>
          </div>
          {/* Clients Grid */}
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full bg-[#121015] border-[1px] px-3 sm:px-4 lg:px-6 py-4 sm:py-6 border-[#232323] rounded-xl">
            {categories?.map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: category.bgColor,
                  borderColor: category.borderColor,
                }}
                className="flex items-center justify-center font-figtree text-sm sm:text-base lg:text-lg xl:text-xl py-4 sm:py-6 lg:py-7 border-[1px] rounded-xl text-center px-2 min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]"
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>

        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
