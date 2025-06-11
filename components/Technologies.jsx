"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { TbCpu } from "react-icons/tb";
import RoundedTag from "./RoundedTag";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".expanding-circle",
      start: "top 80%",
      end: "-=200",
      scrub: 2,
    },
  });
  useEffect(() => {
    tl.to(".expanding-circle", {
      borderColor: "#7134DD",
    })
      .to(".expanding-circle", {
        scale: 3.4,
        borderColor: "#A0DD34",
      })
      .to(".expanding-circle", {
        scale: 4.4,
        borderColor: "#5029FF",
      })
      .to(".expanding-circle", {
        scale: 5.5,
        borderColor: "#C9BA14",
      })
      .to(".expanding-circle", {
        scale: 6.6,
        borderColor: "#D8FF29",
      })
      .to(".expanding-circle", {
        scale: 7.6,
        borderColor: "#D8FF29",
      })
      .to(".expanding-circle", {
        scale: 8.6,
        borderColor: "#D8FF29",
      });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <RoundedTag
        title={"All Technologies"}
        icon={<TbCpu color="#1423c9" />}
        bgColor={"#1423C933"}
        borderColor={"#1423C9"}
        color={"white"}
      />
      <div className="relative w-full min-h-[90vh] bg-[#121015] rounded-xl px-3 py-4 overflow-hidden">
        <Image
          src="/images/technologies.png"
          fill
          objectFit="cover"
          alt="technologies"
        />
        <div className="absolute top-1/2 left-1/2 scale-[2.5] -translate-x-1/2 -translate-y-1/2 expanding-circle w-40 h-40 rounded-full border-[0.1px] border-transparent"></div>
      </div>
      <p className="font-figtree text-4xl font-extrabold leading-11 text-outline">
        At VX Software Solutions, we work with all leading-edge technologies to
        build world-class digital solutions. From AI to cloud, mobile to
        blockchain—we cover the full tech spectrum. Our team stays ahead of the
        curve to deliver future-ready products. Simply put, we're built to be
        the best at what we do.
      </p>
    </>
  );
};

export default Technologies;
