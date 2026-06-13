"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Exercice13() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text-scene",
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".word-left", {
        xPercent: -60,
      })
        .to(
          ".word-center",
          {
            scale: 1.8,
          },
          0
        )
        .to(
          ".word-right",
          {
            xPercent: 60,
          },
          0
        );
    },
    // Limiter l'animation a ce composant pour éviter les conflits dans le reste de la page.
    { scope: container }
  );

  return (
    <section ref={container} className="text-scene h-screen flex items-center justify-center overflow-hidden">
      <h2 className="word word-left">MAKE</h2>
      <h2 className="word word-center">THINGS</h2>
      <h2 className="word word-right">MOVE</h2>
    </section>
  );
}