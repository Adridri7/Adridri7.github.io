"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Exercise9() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const title = section.querySelector(".section-title");
        const text = section.querySelector(".section-text");
        const image = section.querySelector(".section-img");

        gsap.from(title, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });

        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });

        gsap.from(image, {
          scale: 1.2,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <section className="reveal-section min-h-screen p-8 flex flex-col items-center justify-center gap-8" key={index}>
          <div>
            <h2 className="section-title">Section {index + 1}</h2>
            <p className="section-text">
              Une section éditoriale avec une animation au scroll.
            </p>
          </div>

          <img
            className="section-img w-full h-[70vh] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
          />
        </section>
      ))}
    </main>
  );
}
