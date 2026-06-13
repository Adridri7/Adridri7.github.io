"use client"

import { type ReactNode, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

type SmoothScrollProps = {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapper = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!wrapper.current || !content.current) {
      return
    }

    // ScrollSmoother controle le scroll de ce wrapper et deplace le content.
    // Le composant est dedie a ca, donc les sections peuvent garder leurs animations locales.
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    })

    ScrollTrigger.refresh()

    return () => {
      smoother.kill()
    }
  })

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  )
}
