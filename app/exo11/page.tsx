"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Exercise11() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".pinned-content", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".pinned-section",
          start: "top top",
          end: "+=1600",
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="bg-black">
      <section className="normal-section flex h-screen items-center justify-center px-8 bg-amber-500">
        <h1 className="text-[12vw] leading-none tracking-[-0.08em]">
          Scroll down
        </h1>
      </section>

      <section className="pinned-section h-screen overflow-hidden">
        <div className="pinned-content flex h-screen w-[300vw]">
          <div className="panel flex h-screen w-screen items-center justify-center border-r border-white/20 bg-green-500 ">
            <h2 className="text-[10vw] leading-none tracking-[-0.08em]">
              Chapter 01
            </h2>
          </div>

          <div className="panel flex h-screen w-screen items-center justify-center border-r border-white/20 bg-blue-500 text-neutral-950">
            <h2 className="text-[10vw] leading-none tracking-[-0.08em]">
              Chapter 02
            </h2>
          </div>

          <div className="panel flex h-screen w-screen items-center justify-center border-r border-white/20 bg-violet-500 text-neutral-950">
            <h2 className="text-[10vw] leading-none tracking-[-0.08em]">
              Chapter 03
            </h2>
          </div>
        </div>
      </section>

      <section className="normal-section flex h-screen items-center justify-center px-8 bg-red-500">
        <h1 className="text-[12vw] leading-none tracking-[-0.08em]">
          End section
        </h1>
      </section>
    </main>
  );
}