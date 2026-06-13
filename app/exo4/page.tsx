"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Exercise4() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".card", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: {
          amount: 1,
          from: "random",
        },
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="cards-grid min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {Array.from({ length: 12 }).map((_, index) => (
        <article className="card h-56 rounded-xl bg-muted border border-gray-300 p-4 items-end" key={index}>
          Project {index + 1}
        </article>
      ))}
    </section>
  );
}