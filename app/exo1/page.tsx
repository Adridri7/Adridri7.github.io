"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(useGSAP);


export default function Exercise1() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".cta", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-img", {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="hero flex flex-col md:flex-row min-h-screen p-8 gap-4 items-center overflow-hidden">
      <div className="m-10">
        <h1 className="title text-4xl md:text-8xl lg:text-9xl">Creative Studio</h1>
        <p className="subtitle mt-5 text-xl">Digital experiences with motion.</p>
        <button className="cta mt-8 p-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
          Explore
        </button>
      </div>

      <img
        className="hero-img rounded-xl object-cover"
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        alt=""
      />
    </section>
  );
}