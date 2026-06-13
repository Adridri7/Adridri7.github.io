"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Exercise7() {
  const nav = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power4.out",
        },
      });

      tl.from(nav.current, {
        y: -100,
        opacity: 0,
        duration: 1,
      })
        .from(".logo", {
          x: -60,
          opacity: 0,
        })
        .from(
          ".nav-link",
          {
            y: -30,
            opacity: 0,
            stagger: 0.08,
          },
          "-=0.5"
        )
        .from(
          ".contact-btn",
          {
            x: 60,
            opacity: 0,
          },
          "-=0.5"
        );
    },
    { scope: nav }
  );

  return (
    <div className="flex justify-center">
      <nav ref={nav} className="navbar fixed rounded-full top-5 self-center w-1/2 h-10 flex items-center justify-between p-8 bg-muted z-5">
        <div className="logo">ADRI</div>

        <div className="links flex gap-8">
          {["Work", "Studio", "About", "Contact"].map((link) => (
            <a className="nav-link " href="#" key={link}>
              {link}
            </a>
          ))}
        </div>

        <button className="contact-btn rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2">Let’s talk</button>
      </nav>
    </div>
  );
}
