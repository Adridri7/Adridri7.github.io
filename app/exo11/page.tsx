"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Exercise11() {
  const container = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!track.current) {
        return
      }

      const getAmountToScroll = () =>
        track.current!.scrollWidth - window.innerWidth

      gsap.to(track.current, {
        x: () => -getAmountToScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: ".pinned-section",
          start: "top top",
          end: () => `+=${getAmountToScroll()}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: container }
  )

  return (
    <main ref={container} className="">
      <section className="normal-section flex h-screen items-center justify-center bg-[#95D5B2] px-8 text-white">
        <h1 className="text-[12vw] leading-none tracking-[-0.08em]">
          Scroll down
        </h1>
      </section>

      <section className="pinned-section h-screen overflow-hidden">
        <div ref={track} className="pinned-content flex h-screen w-[300vw]">
          <div className="panel flex h-screen w-screen items-center justify-center border-r border-white/20 bg-[#52B788] text-white">
            <h2 className="text-[10vw] leading-none tracking-[-0.08em]">
              Chapter 01
            </h2>
          </div>

          <div className="panel flex h-screen w-screen items-center justify-center border-r border-white/20 bg-[#40916C] text-white">
            <h2 className="text-[10vw] leading-none tracking-[-0.08em]">
              Chapter 02
            </h2>
          </div>

          <div className="panel flex h-screen w-screen items-center justify-center border-r border-white/20 bg-[#2D6A4F] text-white">
            <h2 className="text-[10vw] leading-none tracking-[-0.08em]">
              Chapter 03
            </h2>
          </div>
        </div>
      </section>

      <section className="normal-section flex h-screen items-center justify-center bg-[#1B4332] px-8 text-white">
        <h1 className="text-[12vw] leading-none tracking-[-0.08em]">
          End section
        </h1>
      </section>
    </main>
  )
}
