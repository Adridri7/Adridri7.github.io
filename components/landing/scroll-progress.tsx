"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ScrollProgress() {
  const progress = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!progress.current) {
      return
    }

    // Composant autonome : il ne wrap pas la page et ne touche pas aux refs
    // de ScrollSmoother. Ca evite de casser les animations des sections.
    const scrollProgress = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.set(progress.current, { scaleX: self.progress })
      },
    })

    return () => {
      scrollProgress.kill()
    }
  })

  return (
    <div
      ref={progress}
      className="fixed top-0 left-0 z-[100] h-1 w-full origin-left scale-x-0 bg-primary"
    />
  )
}
