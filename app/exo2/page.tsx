"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Exercise2() {
  const container = useRef(null);

  useGSAP(
    () => {
      const eases = [
        "power1.out",
        "power2.out",
        "power3.out",
        "power4.out",
        "expo.out",
        "back.out(1.7)",
      ];

      gsap.utils.toArray<HTMLElement>(".ease-card").forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          ease: eases[index] ?? "power1.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 min-h-screen">
      {["power1", "power2", "power3", "power4", "expo", "back"].map((ease) => (
        <div className="ease-card h-44 rounded-xl bg-muted p-4 flex items-center justify-center" key={ease}>
          {ease}
        </div>
      ))}
    </section>
  );
}
