"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function AboutSection() {
  const section = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Les refs sont null au premier rendu serveur/client tant que le DOM n'est pas monte.
      if (!section.current) {
        return
      }

      // On cherche le titre dans la section pour eviter de cibler un autre #headline
      // si la page grossit plus tard.
      const headline = section.current.querySelector("#headline")
      const goalline = section.current.querySelector("#goalline")

      if (!headline) {
        return
      }

      // SplitText modifie le DOM en enveloppant chaque lettre.
      // Le mask cache chaque lettre pendant qu'elle arrive depuis le bas.
      const split = SplitText.create(headline, {
        type: "chars",
        mask: "chars",
      })

      // Cette animation est pilotee par le scroll : plus on avance entre start et end,
      // plus les lettres remontent de yPercent 100 vers leur position normale.
      gsap.from(split.chars, {
        yPercent: 100,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: headline,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          // markers: true,
        },
      });

      gsap.from(".goal", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: goalline,
          start: "top 90%",
          end: "top 5%",
          scrub: true,
          //markers: true,
        },
        stagger: {
          amount: 1,
          from: "random",
        },
        ease: "power4.out",
      });

      // SplitText change la hauteur/position interne du titre.
      // Refresh force ScrollTrigger a recalculer ses marqueurs apres cette transformation.
      ScrollTrigger.refresh()

      return () => {
        // En dev, React peut remonter le composant plusieurs fois.
        // On restaure le texte original pour eviter les doublons de SplitText.
        split.revert()
      }
    },
    { scope: section }
  )

  return (
    <section
      ref={section}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="reveal flex min-h-screen flex-col items-center justify-center gap-4">
        <div className="eyebrow text-center text-sm uppercase md:text-lg">
          SplitText - mask chars - yPercent 100 to 0
        </div>
        <h1
          className="headline max-w-[13ch] text-4xl uppercase md:text-8xl"
          id="headline"
        >
          CE TITRE SE REVELE AU FIL DU SCROLL
        </h1>
      </div>

      <div id="goalline" className="pad goalline grid h-screen w-full grid-cols-1 items-center justify-center gap-6 p-6 lg:grid-cols-3">
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-100 text-primary-foreground lg:col-start-1 lg:row-start-1">
          1
        </div>
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-200 text-primary-foreground lg:col-start-1 lg:row-span-2 lg:row-start-2">
          2
        </div>
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-300 text-primary-foreground lg:col-start-2 lg:row-start-1">
          3
        </div>
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-400 text-primary-foreground lg:col-start-2 lg:row-start-2">
          4
        </div>
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-500 text-primary-foreground lg:col-start-2 lg:row-start-3">
          5
        </div>
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-600 text-primary-foreground lg:col-start-3 lg:row-span-2 lg:row-start-1">
          6
        </div>
        <div className="goal flex h-full w-full items-center justify-center rounded-2xl bg-emerald-700 text-primary-foreground lg:col-start-3 lg:row-start-3">
          7
        </div>
      </div>
    </section>
  )
}
