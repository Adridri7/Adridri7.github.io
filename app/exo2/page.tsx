"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

      gsap.from(".ease-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: (index) => eases[index] as any,
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