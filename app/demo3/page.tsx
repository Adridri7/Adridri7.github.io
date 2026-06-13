"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="hero">
      <h1 className="hero-title">Creative Developer</h1>
      <p className="hero-subtitle">React · GSAP · Motion Design</p>
    </section>
  );
}