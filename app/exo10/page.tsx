"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Exercise10() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".image", {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1,
        duration: 4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".image-wrapper",
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="image-section min-h-screen flex items-center justify-center">
      <div className="image-wrapper overflow-hidden rounded-xl w-[70vw] h-[70vh]">
        <img
          className="image h-full w-full object-cover scale-[1.2]"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt=""
        />
      </div>
    </section>
  );
}