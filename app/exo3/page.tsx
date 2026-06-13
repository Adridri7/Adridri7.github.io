"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Exercise3() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box-1", { x: -150, opacity: 0, duration: 1 });
      gsap.from(".box-2", { y: 150, opacity: 0, duration: 1 });
      gsap.from(".box-3", { scale: 0.01, opacity: 0, duration: 1 });
      gsap.from(".box-4", { rotate: 1080, opacity: 0, duration: 1 });
      gsap.from(".box-5", { filter: "blur(20px)", opacity: 0, duration: 1 });
      gsap.from(".box-6", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="transform-grid grid grid-cols-1 md:grid-cols-3 gap-4 p-8 min-h-screen">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className={`box box-${item} h-48 rounded-xl bg-muted p-4 flex items-center justify-center w-full`} key={item}>
          Box {item}
        </div>
      ))}
    </section>
  );
}