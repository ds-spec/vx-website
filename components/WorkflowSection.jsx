"use client";

import { useState } from "react";
import { MdOutlineWork } from "react-icons/md";
import RoundedTag from "./RoundedTag";

export default function WorkflowSection() {
  const [isActive, setIsActive] = useState(false);
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: `We kick things off with deep dives, whiteboards, and caffeine. This is where we unpack your ideas, map user journeys, and define technical requirements. Whether it’s a startup MVP or enterprise-grade platform, we get crystal clear on what we’re building and why.`,
      bgColor: "#DCD4FF",
      src: "discovery",
      hoverBgColor: "#6C3BFF",
      textColor: "black",
    },
    {
      step: "02",
      title: "Resource Planning",
      description: `Once the game plan’s locked, we assemble your dream team—developers, designers, architects, and project leads. We choose the tech stack, set up the repo, and gear up with the right tools to move fast and build smart.`,
      bgColor: "#F4F1D0",
      src: "resource",
      hoverBgColor: "#FFF5CC",
      textColor: "black",
    },
    {
      step: "03",
      title: "Development & Execution",
      description: `Here’s where the magic (and code) happens. We build in agile sprints, ship fast, and iterate faster. Each milestone comes with demos, feedback loops, and quality checks to ensure everything’s aligned with your vision—and runs like clockwork.`,
      bgColor: "#ECF8D6",
      src: "development",
      hoverBgColor: "#F0FFE2",
      textColor: "#000000",
    },
    {
      step: "04",
      title: "Launch & Delivery",
      description: `Launch day isn’t the end—it’s the beginning. After final QA and performance checks, we hit deploy. Whether it’s a full-scale release or phased rollout, we make sure it’s smooth, stable, and ready to scale. Post-launch? We’ve got your back.`,
      bgColor: "#D0D3F4",
      src: "launch",
      hoverBgColor: "#E3DEFF",
      textColor: "#000000",
    },
  ];

  return (
    <div className="pt-4">
      <div className="flex flex-col gap-5 w-full min-h-96 bg-[#F3F3F3] px-8 py-12">
        <RoundedTag
          title={"Why VX Software Solutions"}
          icon={<MdOutlineWork color="#5029FF" />}
          borderColor={"#5029FF"}
          bgColor={"#5029FF33"}
          color={"black"}
        />
        <div className="flex items-center w-full gap-5">
          {processSteps?.map((step, index) => (
            <div key={index} className="relative flex">
              {/* <Image
                className="rounded-l-xl"
                width={270}
                height={100}
                src={`/images/${step.src}.jpg`}
              /> */}
              <div
                style={{ backgroundColor: step.bgColor, color: step.textColor }}
                key={index}
                className="flex flex-col gap-6 p-4 bg-[#5029FF] w-64 h-[480px] rounded-xl"
              >
                <div className="flex flex-col gap-7">
                  <h1 className="text-6xl font-figtree font-bold">
                    {step.step}
                  </h1>
                  <h2 className="text-3xl font-figtree font-semibold tracking-wide">
                    {step.title}
                  </h2>
                </div>
                <p className="text-lg font-figtree font-semibold">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
