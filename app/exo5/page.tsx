"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Exercise5() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
        },
      });

      tl.from(".loader-logo", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .to(".loader-progress", {
          scaleX: 1,
          duration: 1.2,
          transformOrigin: "left",
        })
        .to(".loader", {
          yPercent: -100,
          duration: 1,
        })
        .from(
          ".hero-title",
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <div className="loader fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
        <div className="loader-logo text-6xl tracking-tight">Adrien Rocchetti</div>
        <div className="loader-line w-[40vw] h-1 bg-primary mt-4 overflow-hidden border-white ">
          <div className="loader-progress h-full w-full bg-white  transform scale-x-0" />
        </div>
      </div>

      <section className="hero flex flex-col items-center justify-center min-h-screen p-8 gap-4">
        <h1 className="hero-title text-4xl md:text-9xl">Fullstack Developer</h1>
      </section>
    </main>
  );
}