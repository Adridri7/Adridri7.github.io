"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Exercice12() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // On récupère le conteneur de la galerie
      const track = container.current?.querySelector<HTMLElement>(".gallery-track");
      if (!track) return;

      // Cette fonction calcule la distance horizontale à parcourir.
      const getAmountToScroll = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {

        // Anime le track sur l’axe X. Le - est important : pour révéler les éléments à droite, on déplace le bloc vers la gauche.
        x: () => -getAmountToScroll(),

        // Veut dire que le mouvement est linéaire. Il suit directement le scroll, sans accélération ou ralentissement artificiel.
        ease: "none",

        // La partie scrollTrigger contrôle quand et comment l’animation se joue.
        scrollTrigger: {

          // la section entière déclenche l’animation.
          trigger: container.current,

          // l’animation commence quand le haut de la section touche le haut de la fenêtre.
          start: "top top",

          // La durée de scroll vertical est égale à la distance horizontale à parcourir. Par exemple, s’il faut déplacer la galerie de 2400 pixels, l’animation durera 2400 pixels de scroll vertical.
          end: () => `+=${getAmountToScroll()}`,

          // l’animation est synchronisée avec le scroll. Si tu scrolles vers le bas, ça avance ; si tu remontes, ça recule.
          scrub: true,

          // la section reste fixée à l’écran pendant l’animation. C’est ce qui donne l’effet “je scrolle, mais la section reste là pendant que le contenu glisse horizontalement”.
          pin: true,

          // Limite le contexte GSAP à cette section, ce qui aide GSAP à nettoyer correctement l’animation quand le composant est démonté.
          invalidateOnRefresh: false,
        },
      });
    },
    // Limiter l'animation a ce composant pour éviter les conflits dans le reste de la page.
    { scope: container }
  );

  return (
    <section ref={container} className="horizontal-gallery h-screen overflow-hidden">
      <div className="gallery-track flex w-max gap-4 p-16 h-full items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <article className="gallery-card flex w-[60vw] p-4 items-end h-[80vh] bg-accent text-[4vw] rounded-2xl" key={index}>
            Project {index + 1}
          </article>
        ))}
      </div>
    </section>
  );
}