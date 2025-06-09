"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";
import RoundedTag from "./RoundedTag";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText() {
  useEffect(() => {
    let split = SplitText.create(".text", {
      type: "words",
      smartWrap: true,
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 80,
      stagger: 0.05,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".text",
        start: "top center",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="px-4 py-2">
      <div className="flex flex-col w-full min-h-96 gap-12 bg-[#121015] rounded-3xl px-8 py-12">
        <RoundedTag
          title={"Why VX Software Solutions"}
          icon={<FaStar color="#fdd835" />}
          borderColor={"#1423C9"}
          bgColor={"#1423C933"}
        />
        <p className="text text-2xl md:text-6xl text-[#A0DD34] leading-none md:leading-20 font-figtree font-semibold">
          With over 4 years of experience delivering software solutions to tech
          enterprises, innovative startups, and AI-driven companies worldwide,
          our developers consistently bring efficiency and deep technical
          expertise to every project.
        </p>
        <Button name={"Contact Us"} bgcolor={"#5029FF"} textcolor={"white"} />
      </div>
    </div>
  );
}
