"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Demo2() {
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
          markers: true,
        },
      })

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
      <div className="pad flex h-screen w-full flex-col items-center justify-start p-10">
        <div className="flex h-fit w-full flex-row items-center justify-between">
          <h1 className="xxl:text-[13vw] text-4xl md:text-9xl xl:text-[9vw]">
            Nuaké
          </h1>
          <div className="h-30 w-30 rounded-2xl bg-muted p-6 text-center text-lg md:text-4xl"></div>
        </div>

        <div className="flex h-fit w-full flex-row items-center justify-start gap-10">
          <h1 className="xxl:text-[13vw] text-4xl md:text-9xl xl:text-[9vw]">
            ONG
          </h1>
          <p className="max-w-[60ch] text-2xl md:text-3xl">
            Car demain c&apos;est deja aujourd&apos;hui.
          </p>
        </div>

        <div className="flex h-fit w-full flex-row items-center justify-between gap-10">
          <div className="flex h-fit w-full flex-row items-start justify-start gap-4">
            <p className="max-w-[40ch] text-2xl md:text-3xl">
              Construire un avenir durable pour les générations futures.
            </p>
            {/* <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl p-2">
                                    Read More
                                </button> */}
          </div>
          <h1 className="text-4xl md:text-9xl xl:text-[13vw]">Togo</h1>
        </div>
      </div>

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

      <div className="pad grid h-screen w-full grid-cols-1 items-center justify-center gap-3 p-6 lg:grid-cols-3">
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-100 text-primary-foreground lg:col-start-1 lg:row-start-1">
          1
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-200 text-primary-foreground lg:col-start-1 lg:row-span-2 lg:row-start-2">
          2
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-300 text-primary-foreground lg:col-start-2 lg:row-start-1">
          3
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-400 text-primary-foreground lg:col-start-2 lg:row-start-2">
          4
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-500 text-primary-foreground lg:col-start-2 lg:row-start-3">
          5
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-600 text-primary-foreground lg:col-start-3 lg:row-span-2 lg:row-start-1">
          6
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-emerald-700 text-primary-foreground lg:col-start-3 lg:row-start-3">
          7
        </div>
      </div>
    </section>
  )
}
