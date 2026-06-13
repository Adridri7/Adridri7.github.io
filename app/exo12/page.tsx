"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Exercice12() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const track = container.current?.querySelector<HTMLElement>(".gallery-track");
      if (!track) return;
      const getAmountToScroll = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getAmountToScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${getAmountToScroll()}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: false,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="horizontal-gallery h-screen overflow-hidden">
      <div className="gallery-track flex w-max gap-4 p-16 h-full items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <article className="gallery-card flex w-[60vw] p-4 items-end h-[80vh] bg-accent text-[4vw] rounded-2xl" key={index}>
            Project {index + 1}
          </article>
        ))}
      </div>
    </section>
  );
}