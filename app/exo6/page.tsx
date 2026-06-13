"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Exercise6() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
        },
      });

      tl.from(".intro-logo", {
        y: 60,
        opacity: 0,
        duration: 0.8,
      })
        .to(".intro-line", {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1,
        })
        .from(".intro-word", {
          yPercent: 100,
          opacity: 0,
          stagger: {
            amount: 1,
            from: "start",
          },
          duration: 0.8,
        })
        .to(".intro", {
          yPercent: -100,
          duration: 1,
        })
        .from(
          ".page-title",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.3"
        )
        .from(
          ".page-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <section className="intro fixed inset-0 flex flex-col items-center justify-center z-50 gap-4">
        <div className="intro-logo text-6xl">Adrien Rocchetti</div>
        <div className="intro-line w-[50vw] h-0.5 bg-primary transform scale-x-0" />
        <div className="intro-text flex gap-8 overflow-hidden">
          {["Design", "Motion", "React"].map((word) => (
            <span className="intro-word inline-block text-4xl" key={word}>
              {word}
            </span>
          ))}
        </div>
      </section>

      <section className="page min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="page-title text-[7vw]">Awwwards Style</h1>
        <p className="page-subtitle text-2xl">Fullstack Developer</p>
      </section>
    </main>
  );
}
