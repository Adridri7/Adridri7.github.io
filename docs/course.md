Oui. Mais première idée importante : un site “digne d’Awwwards” n’est pas juste un site avec beaucoup d’animations. Awwwards évalue notamment **Design 40%**, **UX/UI 30%**, **Créativité 20%**, **Contenu 10%**. Donc ton objectif doit être : **direction artistique forte + motion design précis + performance + accessibilité + storytelling**. ([Awwwards][1])

Voici un parcours complet, progressif, avec beaucoup d’exercices.

---

# 0. Stack recommandée

Tu peux partir sur :

```bash
npm create vite@latest my-gsap-site
cd my-gsap-site
npm install
npm install gsap @gsap/react
npm run dev
```

GSAP fournit un hook React officiel, `useGSAP()`, qui simplifie l’intégration avec React et gère le cleanup des animations via le contexte GSAP. C’est préférable à des animations bricolées dans des `useEffect` mal nettoyés. ([gsap.com][2])

Structure conseillée :

```txt
src/
  components/
    Hero.jsx
    Loader.jsx
    ProjectCard.jsx
    SmoothSection.jsx
  pages/
    Home.jsx
    Project.jsx
  styles/
    base.css
    typography.css
    layout.css
  animations/
    reveal.js
    text.js
    scroll.js
```

---

# 1. Mentalité “Awwwards”

Avant GSAP, tu dois comprendre les piliers.

## Ce qu’il faut viser

Un bon site créatif a généralement :

1. **Une idée visuelle forte**
   Exemple : portfolio brutaliste, site éditorial immersif, galerie horizontale, landing page cinématique.

2. **Une grille solide**
   Les animations ne sauvent pas un mauvais layout.

3. **Une typographie travaillée**
   Gros titres, contrastes, hiérarchie claire, rythme vertical.

4. **Une signature motion**
   Pas 50 effets différents. Un langage cohérent : reveal vertical, blur, masking, scroll cinématique, curseur interactif.

5. **Une navigation fluide**
   Le site doit rester utilisable.

6. **Performance**
   Un site magnifique mais lent ou injouable sur mobile ne fonctionne pas.

---

# 2. Bases GSAP à maîtriser

GSAP sert à animer des propriétés CSS, SVG, canvas, objets JavaScript, etc. Son cœur permet déjà beaucoup de choses, et les plugins comme ScrollTrigger ajoutent des capacités avancées. ([gsap.com][3])

## Les méthodes essentielles

### `gsap.to()`

Anime depuis l’état actuel vers un nouvel état.

```jsx
gsap.to(".box", {
  x: 300,
  opacity: 0.5,
  duration: 1,
  ease: "power3.out",
});
```

### `gsap.from()`

Anime depuis un état initial vers l’état naturel du CSS.

```jsx
gsap.from(".title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});
```

### `gsap.fromTo()`

Contrôle l’état de départ et d’arrivée.

```jsx
gsap.fromTo(
  ".image",
  { scale: 1.2, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
);
```

### `gsap.set()`

Place instantanément un élément dans un état.

```jsx
gsap.set(".menu", {
  yPercent: -100,
});
```

---

# 3. Premier composant React + GSAP propre

React recommande les refs pour manipuler des éléments DOM quand c’est nécessaire ; les refs persistent entre les rendus sans déclencher de nouveau rendu. ([React][4])

```jsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="hero">
      <h1 className="hero-title">Creative Developer</h1>
      <p className="hero-subtitle">React · GSAP · Motion Design</p>
    </section>
  );
}
```

Le `scope` évite d’animer toute la page par accident. Tu peux utiliser des classes simples à l’intérieur du composant, sans risquer de cibler les éléments d’autres composants.

---

# 4. Exercices niveau 1 — bases GSAP

Fais-les dans cet ordre.

## Exercice 1 — Fade + slide

Crée une section avec :

```txt
Titre
Sous-titre
Bouton
Image
```

Anime :

```txt
Titre : y: 100 -> 0, opacity: 0 -> 1
Sous-titre : y: 50 -> 0
Bouton : scale: 0.9 -> 1
Image : clip-path ou scale
```

Objectif : comprendre `from()`.

---

## Exercice 2 — Easing

Refais la même animation avec :

```txt
power1.out
power2.out
power3.out
power4.out
back.out
expo.out
circ.out
```

Note ce que tu ressens. Un site premium utilise rarement des animations linéaires.

---

## Exercice 3 — Transformations

Crée 6 cartes et anime :

```txt
x
y
scale
rotate
opacity
filter: blur()
clip-path
```

But : voir quelles propriétés sont fluides et lesquelles peuvent coûter plus cher.

---

## Exercice 4 — Stagger

GSAP permet de décaler automatiquement l’animation de plusieurs éléments avec `stagger`. ([gsap.com][5])

```jsx
gsap.from(".card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.12,
  ease: "power3.out",
});
```

À faire :

```txt
6 cartes
12 cartes
Une grille responsive
Un stagger depuis le centre
Un stagger aléatoire
```

---

## Exercice 5 — Loader simple

Crée un faux loader :

```txt
Fond noir
Logo au centre
Barre de progression
Texte "Loading"
```

Animation :

```txt
Logo arrive
Barre se remplit
Fond monte vers le haut
Hero apparaît
```

---

# 5. Timelines : le vrai cœur de GSAP

Une timeline sert à séquencer plusieurs animations et à les contrôler comme un ensemble. C’est beaucoup plus propre que d’empiler des `delay` partout. ([gsap.com][6])

```jsx
const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power3.out",
  },
});

tl.from(".logo", { y: 30, opacity: 0 })
  .from(".nav-link", { y: 20, opacity: 0, stagger: 0.08 }, "-=0.6")
  .from(".hero-title", { y: 120, opacity: 0 }, "-=0.4")
  .from(".hero-image", { scale: 1.2, opacity: 0 }, "-=0.8");
```

Le `"-=0.6"` signifie : commence cette animation 0.6 seconde avant la fin de la précédente.

---

# 6. Exercices niveau 2 — timelines

## Exercice 6 — Intro premium

Crée une intro complète :

```txt
1. Fond noir
2. Logo apparaît
3. Ligne horizontale se dessine
4. Texte apparaît mot par mot
5. Overlay disparaît
6. Hero apparaît
```

Contraintes :

```txt
Une seule timeline
Aucun setTimeout
Aucun delay externe
```

---

## Exercice 7 — Navigation animée

Crée une navbar avec :

```txt
Logo
4 liens
Bouton contact
```

Animation :

```txt
Logo depuis la gauche
Liens en stagger
Bouton depuis la droite
```

Puis ajoute une version mobile avec menu plein écran.

---

## Exercice 8 — Menu fullscreen

Quand tu cliques sur “Menu” :

```txt
Overlay descend
Liens apparaissent en stagger
Image décorative apparaît
Bouton close rotate
```

Quand tu fermes :

```txt
Animation inverse
```

Indice :

```jsx
const menuTl = useRef();

useGSAP(() => {
  menuTl.current = gsap
    .timeline({ paused: true })
    .to(".menu-overlay", { yPercent: 100, duration: 0.9, ease: "power4.inOut" })
    .from(".menu-link", { y: 80, opacity: 0, stagger: 0.08 }, "-=0.4");
});
```

Puis :

```jsx
menuTl.current.play();
menuTl.current.reverse();
```

---

# 7. ScrollTrigger : le niveau supérieur

ScrollTrigger permet de déclencher ou contrôler des animations avec le scroll : déclenchement, scrub, pin, snap, etc. ([gsap.com][7])

Installation :

```jsx
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
```

Exemple simple :

```jsx
useGSAP(
  () => {
    gsap.from(".section-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
      },
    });
  },
  { scope: container }
);
```

---

# 8. Les paramètres ScrollTrigger à connaître

```jsx
scrollTrigger: {
  trigger: ".section",
  start: "top 80%",
  end: "bottom 20%",
  scrub: true,
  pin: true,
  markers: true,
}
```

## Signification

```txt
trigger : élément qui déclenche
start : quand l’animation commence
end : quand elle finit
scrub : lie l’animation au scroll
pin : bloque une section pendant le scroll
markers : affiche les repères de debug
```

Pendant l’apprentissage, garde `markers: true`. En production, enlève-le.

---

# 9. Exercices niveau 3 — ScrollTrigger

## Exercice 9 — Reveal au scroll

Crée 5 sections. Chaque section contient :

```txt
Titre
Paragraphe
Image
```

À chaque apparition :

```txt
Titre monte
Paragraphe fade
Image scale de 1.2 à 1
```

---

## Exercice 10 — Image reveal avec clip-path

Anime une image comme ceci :

```css
.image-wrapper {
  overflow: hidden;
}

.image {
  clip-path: inset(100% 0 0 0);
}
```

Puis :

```jsx
gsap.to(".image", {
  clipPath: "inset(0% 0 0 0)",
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".image-wrapper",
    start: "top 75%",
  },
});
```

---

## Exercice 11 — Section pinned

Crée une section qui reste bloquée pendant le scroll.

```jsx
gsap.to(".pinned-content", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".pinned-section",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true,
  },
});
```

But : comprendre les expériences “cinématiques”.

---

## Exercice 12 — Galerie horizontale

Crée :

```txt
Une section très haute
Une ligne de projets horizontale
Le scroll vertical déplace les projets horizontalement
```

C’est un classique des portfolios créatifs.

---

## Exercice 13 — Texte qui se transforme au scroll

Crée un gros titre :

```txt
MAKE
THINGS
MOVE
```

Au scroll :

```txt
MAKE part à gauche
THINGS scale
MOVE part à droite
```

---

# 10. Animation de texte

Les sites haut niveau utilisent souvent du texte animé : mot par mot, ligne par ligne, lettre par lettre.

Tu peux commencer sans plugin premium en découpant toi-même :

```jsx
const title = "Creative Developer";

return (
  <h1>
    {title.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </h1>
);
```

Puis :

```jsx
gsap.from(".char", {
  yPercent: 100,
  opacity: 0,
  stagger: 0.03,
  duration: 0.8,
  ease: "power4.out",
});
```

CSS :

```css
h1 {
  overflow: hidden;
}

.char {
  display: inline-block;
}
```

---

# 11. Exercices niveau 4 — texte premium

## Exercice 14 — Titre lettre par lettre

Crée un hero avec :

```txt
BIG
CREATIVE
PORTFOLIO
```

Chaque lettre doit entrer avec :

```txt
yPercent: 100
rotate: 8
opacity: 0
```

---

## Exercice 15 — Texte ligne par ligne

Crée un paragraphe éditorial. Découpe-le en lignes ou blocs. Anime chaque ligne avec un masque.

Effet recherché :

```txt
Le texte semble sortir de dessous une fenêtre invisible.
```

---

## Exercice 16 — Hover typographique

Sur chaque lien du menu :

```txt
Le texte actuel monte
Le texte dupliqué arrive depuis le bas
```

Structure :

```jsx
<a className="nav-link">
  <span>Projects</span>
  <span>Projects</span>
</a>
```

CSS :

```css
.nav-link {
  height: 1em;
  overflow: hidden;
  display: inline-block;
}

.nav-link span {
  display: block;
}
```

---

# 12. Interactions souris

Les sites créatifs utilisent souvent des interactions au curseur, mais attention : ça doit rester utile ou élégant.

## Curseur custom simple

```jsx
useGSAP(() => {
  const xTo = gsap.quickTo(".cursor", "x", {
    duration: 0.4,
    ease: "power3",
  });

  const yTo = gsap.quickTo(".cursor", "y", {
    duration: 0.4,
    ease: "power3",
  });

  const move = (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  };

  window.addEventListener("mousemove", move);

  return () => {
    window.removeEventListener("mousemove", move);
  };
});
```

CSS :

```css
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
```

---

# 13. Exercices niveau 5 — interactions

## Exercice 17 — Curseur magnétique

Quand tu survoles un bouton :

```txt
Le curseur grossit
Le bouton se rapproche légèrement de la souris
Le texte change de couleur
```

---

## Exercice 18 — Image follow cursor

Dans une liste de projets :

```txt
Au hover d’un projet, une image apparaît
Elle suit la souris
Elle disparaît au mouseleave
```

Très utilisé dans les portfolios créatifs.

---

## Exercice 19 — Cards 3D légères

Sur une carte :

```txt
La carte rotateX / rotateY selon la souris
L’image interne bouge moins vite
Le texte bouge encore moins vite
```

But : créer une profondeur subtile.

---

# 14. Transitions entre pages

Pour un rendu premium, les changements de page ne doivent pas être brutaux.

Exercice :

```txt
Page Home
Page Project
Page About
```

Au clic :

```txt
Overlay noir arrive
Route change
Overlay repart
Nouvelle page anime son hero
```

Avec React Router, tu peux créer un composant `PageTransition`.

Idée de structure :

```jsx
function TransitionOverlay() {
  return <div className="transition-overlay" />;
}
```

Timeline :

```jsx
const transitionIn = () => {
  return gsap.to(".transition-overlay", {
    yPercent: 0,
    duration: 0.8,
    ease: "power4.inOut",
  });
};

const transitionOut = () => {
  return gsap.to(".transition-overlay", {
    yPercent: -100,
    duration: 0.8,
    ease: "power4.inOut",
  });
};
```

---

# 15. Projet guidé 1 — Landing page premium

## Objectif

Créer une landing page pour une marque fictive.

Sections :

```txt
Loader
Hero
Manifeste
Galerie
Section pinned
Services
Footer
```

Animations :

```txt
Loader cinématique
Hero avec texte masqué
Images reveal au scroll
Galerie horizontale
Services en stagger
Footer avec gros texte animé
```

Contraintes :

```txt
Pas plus de 3 styles d’animation différents
Mobile propre
Pas de scroll cassé
Pas d’animation inutile
```

---

# 16. Projet guidé 2 — Portfolio créatif

## Pages

```txt
Home
Projects
Project detail
About
Contact
```

## Interactions

```txt
Menu fullscreen
Curseur custom
Hover image preview
Transitions de page
ScrollTrigger
Galerie horizontale
Texte animé
```

## Direction artistique

Choisis une contrainte forte :

```txt
Noir/blanc brutaliste
Editorial suisse
Portfolio minimal luxe
Site expérimental typographique
Style magazine culturel
```

Ne commence pas par coder. Fais d’abord une maquette rapide dans Figma ou même sur papier.

---

# 17. Projet guidé 3 — Site storytelling

Crée un site narratif sur un sujet :

```txt
Une exposition
Un artiste
Une marque fictive
Un album
Un film
Un lieu
```

Structure :

```txt
Intro immersive
Chapitre 1
Chapitre 2 pinned
Chapitre 3 horizontal
Conclusion
```

Animations :

```txt
Scroll narratif
Images qui se superposent
Texte qui apparaît ligne par ligne
Changements de fond
Pin sections
```

---

# 18. Plan d’apprentissage sur 8 semaines

## Semaine 1 — GSAP core

À apprendre :

```txt
to
from
fromTo
set
ease
duration
delay
stagger
```

À faire :

```txt
10 micro-animations
1 hero animé
1 loader simple
```

---

## Semaine 2 — Timelines

À apprendre :

```txt
timeline
defaults
labels
position parameter
play
pause
reverse
```

À faire :

```txt
Menu fullscreen
Intro de site
Animation de navbar
```

---

## Semaine 3 — React + GSAP propre

À apprendre :

```txt
useRef
useGSAP
scope
cleanup
components réutilisables
```

À faire :

```txt
Composant Reveal
Composant AnimatedText
Composant MagneticButton
```

---

## Semaine 4 — ScrollTrigger

À apprendre :

```txt
trigger
start
end
scrub
pin
markers
toggleActions
```

À faire :

```txt
5 reveals au scroll
1 section pinned
1 galerie horizontale
```

---

## Semaine 5 — Motion design

À apprendre :

```txt
rythme
easing
anticipation
overshoot
masques
transitions
```

À faire :

```txt
3 animations de texte
3 animations d’image
3 hovers premium
```

---

## Semaine 6 — Interactions avancées

À apprendre :

```txt
curseur custom
hover preview
magnetic button
mouse parallax
```

À faire :

```txt
Liste de projets interactive
Menu créatif
Section galerie
```

---

## Semaine 7 — Projet portfolio

À faire :

```txt
Home
Projects
About
Contact
Transitions
Responsive
```

---

## Semaine 8 — Polish final

À faire :

```txt
Optimisation mobile
Accessibilité
Performance
Réduction des animations inutiles
Tests sur plusieurs écrans
Refactor du code
```

---

# 19. Checklist “site premium”

Avant de considérer ton site terminé :

```txt
[ ] Le concept visuel est clair
[ ] La typographie est forte
[ ] Les espacements sont cohérents
[ ] Les animations ont un rôle
[ ] Les easings sont harmonisés
[ ] Le mobile est pensé, pas juste adapté
[ ] Le scroll reste naturel
[ ] Les images sont optimisées
[ ] Les animations ne cassent pas l’accessibilité
[ ] Le site fonctionne sans lag
[ ] Il y a une vraie idée créative
```

---

# 20. Erreurs classiques à éviter

## 1. Tout animer

Un site haut de gamme n’anime pas tout. Il anime les bons moments.

## 2. Utiliser `top`, `left`, `width`, `height` pour tout

Privilégie :

```txt
transform
opacity
clip-path avec modération
```

## 3. Oublier le cleanup React

Avec React, les animations doivent être nettoyées correctement. Le hook `useGSAP()` existe justement pour simplifier ce problème. ([gsap.com][8])

## 4. Penser que GSAP remplace le design

GSAP ne rend pas un mauvais design meilleur. Il rend un bon design vivant.

## 5. Négliger mobile

Beaucoup d’effets hover n’existent pas sur mobile. Il faut prévoir une version tactile.

---

# 21. Ta feuille de route concrète

Commence par ces 10 mini-projets, dans l’ordre :

```txt
1. Hero animé simple
2. Loader avec timeline
3. Navbar animée
4. Menu fullscreen
5. Cards en stagger
6. Images reveal au scroll
7. Section pinned
8. Galerie horizontale
9. Curseur custom
10. Portfolio one-page complet
```

Ensuite seulement, passe à :

```txt
Transitions entre pages
Text split avancé
WebGL / Three.js
Smooth scroll
Shaders
Canvas
```

---

# 22. Premier exercice à faire maintenant

Crée une page React avec :

```txt
Un loader noir
Un hero plein écran
Un gros titre
Une image
Une navbar
```

Animation attendue :

```txt
1. Le loader affiche ton nom
2. Une ligne se remplit
3. Le loader part vers le haut
4. La navbar apparaît
5. Le titre apparaît ligne par ligne
6. L’image scale de 1.2 à 1
```

Contraintes :

```txt
Une seule timeline principale
useGSAP obligatoire
Aucun setTimeout
Pas plus de 2 easings différents
Responsive minimum
```

Quand tu maîtrises ça, tu as déjà une vraie base pour construire des interfaces créatives en React + GSAP.

[1]: https://www.awwwards.com/about-evaluation/?utm_source=chatgpt.com "Evaluation System"
[2]: https://gsap.com/resources/React/?utm_source=chatgpt.com "React & GSAP | GSAP | Docs & Learning"
[3]: https://gsap.com/docs/v3/?utm_source=chatgpt.com "docsHome | GSAP | Docs & Learning"
[4]: https://react.dev/learn/manipulating-the-dom-with-refs?utm_source=chatgpt.com "Manipulating the DOM with Refs"
[5]: https://gsap.com/resources/getting-started/Staggers/?utm_source=chatgpt.com "Staggers | GSAP | Docs & Learning"
[6]: https://gsap.com/docs/v3/GSAP/Timeline/?utm_source=chatgpt.com "Timeline | GSAP | Docs & Learning"
[7]: https://gsap.com/docs/v3/Plugins/ScrollTrigger/?utm_source=chatgpt.com "ScrollTrigger | GSAP | Docs & Learning"
[8]: https://gsap.com/resources/react-basics/?utm_source=chatgpt.com "React & GSAP - Useful Patterns | GSAP | Docs & Learning"
