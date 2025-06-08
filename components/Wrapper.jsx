"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import WrapperCard from "./WrapperCard";

export default function Wrapper() {
  const frameRef = useRef(null);

  const handleHover = () => {
    const tl = gsap.timeline();
    gsap.killTweensOf(frameRef.current);

    tl.to(frameRef.current, {
      rotateZ: 30,
      duration: 3,
      ease: "power1.inOut",
    })
      .to(frameRef.current, {
        rotateZ: 60,
        duration: 3,
        delay: 0.1,
        ease: "power1.inOut",
      })
      .to(frameRef.current, {
        rotateZ: 90,
        duration: 3,
        delay: 0.1,
        ease: "power1.inOut",
      });
  };
  const handleBackToNormal = () => {
    gsap.killTweensOf(frameRef.current);
    gsap.to(frameRef.current, {
      rotate: 0,
      duration: 2,
      delay: 0.2,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full h-[120vh] overflow-hidden">
      <div className="w-full h-full px-4 py-4">
        <WrapperCard />
      </div>
      <div className="relative w-full h-full">
        <Image
          className="absolute z-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform origin-center"
          ref={frameRef}
          onMouseOver={handleHover}
          onMouseLeave={handleBackToNormal}
          src="/images/frame.png"
          alt="animated-frame"
          width={646}
          height={646}
        />
        <Image
          className="object-cover"
          src="/images/bannerimg.jpg"
          fill
          alt="banner img"
        />
        <div className="absolute z-10 inset-0 bg-[#00000099] pointer-events-none"></div>
      </div>
    </div>
  );
}
