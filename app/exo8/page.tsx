"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Exercise8() {
  const container = useRef<HTMLDivElement | null>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);
  const isMenuOpen = useRef(false);

  const toggleMenu = () => {
    if (isMenuOpen.current) {
      menuTl.current?.reverse();
    } else {
      menuTl.current?.play();
    }
    isMenuOpen.current = !isMenuOpen.current;
  };

  useGSAP(
    () => {
      gsap.set(".menu-overlay", { yPercent: -100 });

      menuTl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
        })
        .from(".menu-link", {
          y: 80,
          opacity: 0,
          stagger: {
            amount: 0.5,
            from: "random",
          },
          duration: 0.8,
          ease: "power4.out",
        });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <button onClick={toggleMenu} className="menu-btn fixed top-8 right-8 z-50 bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">
        Menu
      </button>

      <div className="menu-overlay fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8">

        <div className="menu-links flex flex-col items-center gap-4">
          {["Home", "Projects", "About", "Contact"].map((link) => (
            <a className="menu-link text-[5vw]" href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}