Parfait. Voici une **version avec corrections**. Les corrections sont des bases propres : tu dois ensuite les améliorer visuellement, changer les textes, les images, la DA, les timings, etc.

Toutes les corrections supposent ce setup :

```jsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
```

---

# Exercice 1 — Fade + slide

## Objectif

Créer un hero avec un titre, un sous-titre, un bouton et une image.

## Correction

```jsx
export default function Exercise1() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".cta", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-img", {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="hero">
      <div>
        <h1 className="title">Creative Studio</h1>
        <p className="subtitle">Digital experiences with motion.</p>
        <button className="cta">Explore</button>
      </div>

      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        alt=""
      />
    </section>
  );
}
```

```css
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem;
  gap: 4rem;
}

.title {
  font-size: clamp(4rem, 12vw, 10rem);
  line-height: 0.9;
}

.subtitle {
  font-size: 1.25rem;
  margin-top: 1rem;
}

.cta {
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 999px;
}

.hero-img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
```

---

# Exercice 2 — Tester les easings

## Objectif

Comprendre la différence entre les easings.

## Correction

```jsx
export default function Exercise2() {
  const container = useRef(null);

  useGSAP(
    () => {
      const eases = [
        "power1.out",
        "power2.out",
        "power3.out",
        "power4.out",
        "expo.out",
        "back.out(1.7)",
      ];

      gsap.from(".ease-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: (index) => eases[index],
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="grid">
      {["power1", "power2", "power3", "power4", "expo", "back"].map((ease) => (
        <div className="ease-card" key={ease}>
          {ease}
        </div>
      ))}
    </section>
  );
}
```

```css
.grid {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 4rem;
  align-items: center;
}

.ease-card {
  height: 180px;
  border: 1px solid #222;
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

---

# Exercice 3 — Transformations

## Objectif

Tester `x`, `y`, `scale`, `rotate`, `opacity`, `blur`.

## Correction

```jsx
export default function Exercise3() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box-1", { x: -150, opacity: 0, duration: 1 });
      gsap.from(".box-2", { y: 150, opacity: 0, duration: 1 });
      gsap.from(".box-3", { scale: 0.3, opacity: 0, duration: 1 });
      gsap.from(".box-4", { rotate: 20, opacity: 0, duration: 1 });
      gsap.from(".box-5", { filter: "blur(20px)", opacity: 0, duration: 1 });
      gsap.from(".box-6", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="transform-grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className={`box box-${item}`} key={item}>
          Box {item}
        </div>
      ))}
    </section>
  );
}
```

```css
.transform-grid {
  min-height: 100vh;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: center;
}

.box {
  height: 200px;
  background: #111;
  color: white;
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

---

# Exercice 4 — Stagger

## Objectif

Animer plusieurs cartes avec un décalage.

## Correction

```jsx
export default function Exercise4() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "center",
        },
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="cards-grid">
      {Array.from({ length: 12 }).map((_, index) => (
        <article className="card" key={index}>
          Project {index + 1}
        </article>
      ))}
    </section>
  );
}
```

```css
.cards-grid {
  min-height: 100vh;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.card {
  height: 220px;
  border: 1px solid #222;
  display: flex;
  align-items: end;
  padding: 1rem;
  font-size: 1.5rem;
}
```

---

# Exercice 5 — Loader simple

## Objectif

Créer un loader avec une barre qui se remplit puis disparaît.

## Correction

```jsx
export default function Exercise5() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
        },
      });

      tl.from(".loader-logo", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .to(".loader-progress", {
          scaleX: 1,
          duration: 1.2,
          transformOrigin: "left",
        })
        .to(".loader", {
          yPercent: -100,
          duration: 1,
        })
        .from(
          ".hero-title",
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <div className="loader">
        <div className="loader-logo">ADRI</div>
        <div className="loader-line">
          <div className="loader-progress" />
        </div>
      </div>

      <section className="hero">
        <h1 className="hero-title">Creative Developer</h1>
      </section>
    </main>
  );
}
```

```css
.loader {
  position: fixed;
  inset: 0;
  background: #050505;
  color: white;
  z-index: 10;
  display: grid;
  place-items: center;
}

.loader-logo {
  font-size: 4rem;
  letter-spacing: -0.05em;
}

.loader-line {
  position: absolute;
  bottom: 4rem;
  width: 40vw;
  height: 2px;
  background: #333;
  overflow: hidden;
}

.loader-progress {
  width: 100%;
  height: 100%;
  background: white;
  transform: scaleX(0);
}

.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.hero-title {
  font-size: clamp(4rem, 14vw, 12rem);
}
```

---

# Exercice 6 — Intro premium avec timeline

## Objectif

Une seule timeline, pas de `setTimeout`.

## Correction

```jsx
export default function Exercise6() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
        },
      });

      tl.from(".intro-logo", {
        y: 60,
        opacity: 0,
        duration: 0.8,
      })
        .to(".intro-line", {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1,
        })
        .from(".intro-word", {
          yPercent: 100,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
        })
        .to(".intro", {
          yPercent: -100,
          duration: 1,
        })
        .from(
          ".page-title",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.3"
        );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <section className="intro">
        <div className="intro-logo">Studio</div>
        <div className="intro-line" />
        <div className="intro-text">
          {["Design", "Motion", "React"].map((word) => (
            <span className="intro-word" key={word}>
              {word}
            </span>
          ))}
        </div>
      </section>

      <section className="page">
        <h1 className="page-title">Awwwards Style</h1>
      </section>
    </main>
  );
}
```

```css
.intro {
  position: fixed;
  inset: 0;
  background: black;
  color: white;
  z-index: 20;
  display: grid;
  place-items: center;
}

.intro-logo {
  font-size: 4rem;
}

.intro-line {
  width: 50vw;
  height: 1px;
  background: white;
  transform: scaleX(0);
}

.intro-text {
  display: flex;
  gap: 2rem;
  overflow: hidden;
}

.intro-word {
  display: inline-block;
  font-size: 2rem;
}

.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.page-title {
  font-size: 12vw;
}
```

---

# Exercice 7 — Navbar animée

## Correction

```jsx
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

      tl.from(".logo", {
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
    <nav ref={nav} className="navbar">
      <div className="logo">ADRI</div>

      <div className="links">
        {["Work", "Studio", "About", "Contact"].map((link) => (
          <a className="nav-link" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>

      <button className="contact-btn">Let’s talk</button>
    </nav>
  );
}
```

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
}

.links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: inherit;
  text-decoration: none;
}

.contact-btn {
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
}
```

---

# Exercice 8 — Menu fullscreen

## Correction

```jsx
import { useRef } from "react";

export default function Exercise8() {
  const container = useRef(null);
  const menuTl = useRef(null);

  useGSAP(
    () => {
      gsap.set(".menu-overlay", { yPercent: -100 });

      menuTl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          yPercent: 0,
          duration: 1,
          ease: "power4.inOut",
        })
        .from(".menu-link", {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power4.out",
        });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <button onClick={() => menuTl.current.play()} className="menu-btn">
        Menu
      </button>

      <div className="menu-overlay">
        <button onClick={() => menuTl.current.reverse()} className="close-btn">
          Close
        </button>

        <div className="menu-links">
          {["Home", "Projects", "About", "Contact"].map((link) => (
            <a className="menu-link" href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
```

```css
.menu-btn {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 30;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: black;
  color: white;
  z-index: 25;
  display: grid;
  place-items: center;
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.menu-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu-link {
  font-size: clamp(4rem, 12vw, 10rem);
  color: white;
  text-decoration: none;
}
```

---

# Exercice 9 — Reveal au scroll

## Correction

```jsx
export default function Exercise9() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section.querySelector(".section-title"), {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });

        gsap.from(section.querySelector(".section-text"), {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });

        gsap.from(section.querySelector(".section-img"), {
          scale: 1.2,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <section className="reveal-section" key={index}>
          <div>
            <h2 className="section-title">Section {index + 1}</h2>
            <p className="section-text">
              Une section éditoriale avec une animation au scroll.
            </p>
          </div>

          <img
            className="section-img"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
          />
        </section>
      ))}
    </main>
  );
}
```

```css
.reveal-section {
  min-height: 100vh;
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: 7vw;
}

.section-img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
```

---

# Exercice 10 — Image reveal avec `clip-path`

## Correction

```jsx
export default function Exercise10() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".image", {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".image-wrapper",
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="image-section">
      <div className="image-wrapper">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt=""
        />
      </div>
    </section>
  );
}
```

```css
.image-section {
  min-height: 120vh;
  display: grid;
  place-items: center;
}

.image-wrapper {
  width: 70vw;
  height: 70vh;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(100% 0% 0% 0%);
  transform: scale(1.15);
}
```

---

# Exercice 11 — Section pinned

## Correction

```jsx
export default function Exercise11() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".pinned-content", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".pinned-section",
          start: "top top",
          end: "+=1600",
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="pinned-section">
      <div className="pinned-content">
        <div className="panel">Chapter 01</div>
        <div className="panel">Chapter 02</div>
      </div>
    </section>
  );
}
```

```css
.pinned-section {
  height: 100vh;
  overflow: hidden;
}

.pinned-content {
  display: flex;
  width: 200vw;
  height: 100vh;
}

.panel {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 10vw;
  border-right: 1px solid #222;
}
```

---

# Exercice 12 — Galerie horizontale

## Correction

```jsx
export default function Exercise12() {
  const container = useRef(null);

  useGSAP(
    () => {
      const track = document.querySelector(".gallery-track");
      const amountToScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-gallery",
          start: "top top",
          end: `+=${amountToScroll}`,
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="horizontal-gallery">
      <div className="gallery-track">
        {Array.from({ length: 6 }).map((_, index) => (
          <article className="gallery-card" key={index}>
            Project {index + 1}
          </article>
        ))}
      </div>
    </section>
  );
}
```

```css
.horizontal-gallery {
  height: 100vh;
  overflow: hidden;
}

.gallery-track {
  display: flex;
  gap: 2rem;
  height: 100%;
  padding: 4rem;
  width: max-content;
}

.gallery-card {
  width: 60vw;
  height: 80vh;
  background: #111;
  color: white;
  display: flex;
  align-items: end;
  padding: 2rem;
  font-size: 4vw;
}
```

---

# Exercice 13 — Texte qui se transforme au scroll

## Correction

```jsx
export default function Exercise13() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text-scene",
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".word-left", {
        xPercent: -60,
      })
        .to(
          ".word-center",
          {
            scale: 1.8,
          },
          0
        )
        .to(
          ".word-right",
          {
            xPercent: 60,
          },
          0
        );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="text-scene">
      <h2 className="word word-left">MAKE</h2>
      <h2 className="word word-center">THINGS</h2>
      <h2 className="word word-right">MOVE</h2>
    </section>
  );
}
```

```css
.text-scene {
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.word {
  font-size: 12vw;
  line-height: 0.8;
  margin: 0;
}
```

---

# Exercice 14 — Titre lettre par lettre

## Correction

```jsx
function SplitText({ text }) {
  return (
    <>
      {text.split("").map((char, index) => (
        <span className="char" key={index}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function Exercise14() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".char", {
        yPercent: 120,
        rotate: 8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.025,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="split-hero">
      <h1>
        <SplitText text="BIG CREATIVE PORTFOLIO" />
      </h1>
    </section>
  );
}
```

```css
.split-hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.split-hero h1 {
  font-size: 10vw;
  line-height: 0.85;
  max-width: 80vw;
  overflow: hidden;
}

.char {
  display: inline-block;
}
```

---

# Exercice 15 — Texte ligne par ligne

## Correction

```jsx
export default function Exercise15() {
  const container = useRef(null);

  const lines = [
    "We build immersive digital experiences.",
    "Every detail has rhythm and intention.",
    "Motion becomes part of the story.",
  ];

  useGSAP(
    () => {
      gsap.from(".line span", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".text-block",
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="text-block">
      {lines.map((line) => (
        <p className="line" key={line}>
          <span>{line}</span>
        </p>
      ))}
    </section>
  );
}
```

```css
.text-block {
  min-height: 100vh;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.line {
  overflow: hidden;
  margin: 0;
  font-size: clamp(2rem, 6vw, 7rem);
  line-height: 1;
}

.line span {
  display: inline-block;
}
```

---

# Exercice 16 — Hover typographique

## Correction CSS simple

```jsx
export default function Exercise16() {
  return (
    <nav className="hover-nav">
      {["Projects", "Studio", "About", "Contact"].map((link) => (
        <a className="hover-link" href="#" key={link}>
          <span>{link}</span>
          <span>{link}</span>
        </a>
      ))}
    </nav>
  );
}
```

```css
.hover-nav {
  min-height: 100vh;
  display: grid;
  place-items: center;
  gap: 1rem;
}

.hover-link {
  height: 1em;
  overflow: hidden;
  color: black;
  text-decoration: none;
  font-size: 6vw;
  line-height: 1;
}

.hover-link span {
  display: block;
  transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}

.hover-link:hover span {
  transform: translateY(-100%);
}
```

---

# Exercice 17 — Curseur magnétique

## Correction

```jsx
export default function Exercise17() {
  const container = useRef(null);

  useGSAP(
    () => {
      const cursor = document.querySelector(".cursor");
      const button = document.querySelector(".magnetic-btn");

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.4,
        ease: "power3",
      });

      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.4,
        ease: "power3",
      });

      const moveCursor = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const moveButton = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(cursor, {
          scale: 3,
          duration: 0.3,
        });
      };

      const resetButton = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });

        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
        });
      };

      window.addEventListener("mousemove", moveCursor);
      button.addEventListener("mousemove", moveButton);
      button.addEventListener("mouseleave", resetButton);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        button.removeEventListener("mousemove", moveButton);
        button.removeEventListener("mouseleave", resetButton);
      };
    },
    { scope: container }
  );

  return (
    <section ref={container} className="magnetic-section">
      <div className="cursor" />
      <button className="magnetic-btn">Hover me</button>
    </section>
  );
}
```

```css
.magnetic-section {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  pointer-events: none;
  z-index: 100;
  transform: translate(-50%, -50%);
}

.magnetic-btn {
  padding: 1.2rem 2.4rem;
  border-radius: 999px;
  font-size: 1.2rem;
}
```

---

# Exercice 18 — Image follow cursor

## Correction

```jsx
export default function Exercise18() {
  const container = useRef(null);

  const projects = [
    "Brand Identity",
    "Editorial Website",
    "Product Launch",
    "Digital Experience",
  ];

  useGSAP(
    () => {
      const preview = document.querySelector(".project-preview");

      const xTo = gsap.quickTo(preview, "x", {
        duration: 0.4,
        ease: "power3",
      });

      const yTo = gsap.quickTo(preview, "y", {
        duration: 0.4,
        ease: "power3",
      });

      const move = (e) => {
        xTo(e.clientX + 30);
        yTo(e.clientY - 100);
      };

      const show = () => {
        gsap.to(preview, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        });
      };

      const hide = () => {
        gsap.to(preview, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
        });
      };

      const items = gsap.utils.toArray(".project-row");

      items.forEach((item) => {
        item.addEventListener("mouseenter", show);
        item.addEventListener("mousemove", move);
        item.addEventListener("mouseleave", hide);
      });

      return () => {
        items.forEach((item) => {
          item.removeEventListener("mouseenter", show);
          item.removeEventListener("mousemove", move);
          item.removeEventListener("mouseleave", hide);
        });
      };
    },
    { scope: container }
  );

  return (
    <section ref={container} className="projects-list">
      <div className="project-preview">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
          alt=""
        />
      </div>

      {projects.map((project) => (
        <div className="project-row" key={project}>
          {project}
        </div>
      ))}
    </section>
  );
}
```

```css
.projects-list {
  min-height: 100vh;
  padding: 6rem 4rem;
}

.project-row {
  font-size: 6vw;
  padding: 2rem 0;
  border-bottom: 1px solid #222;
  cursor: pointer;
}

.project-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 220px;
  opacity: 0;
  scale: 0.9;
  pointer-events: none;
  z-index: 10;
}

.project-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

# Exercice 19 — Cards 3D légères

## Correction

```jsx
export default function Exercise19() {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".tilt-card");

      cards.forEach((card) => {
        const image = card.querySelector("img");

        const move = (e) => {
          const rect = card.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const rotateY = ((x / rect.width) - 0.5) * 16;
          const rotateX = ((y / rect.height) - 0.5) * -16;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(image, {
            x: rotateY * 1.5,
            y: rotateX * 1.5,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const reset = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.4)",
          });

          gsap.to(image, {
            x: 0,
            y: 0,
            duration: 0.7,
          });
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", reset);
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="tilt-section">
      {[1, 2, 3].map((item) => (
        <article className="tilt-card" key={item}>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
          />
          <h3>Project {item}</h3>
        </article>
      ))}
    </section>
  );
}
```

```css
.tilt-section {
  min-height: 100vh;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 4rem;
  perspective: 1000px;
}

.tilt-card {
  width: 30vw;
  height: 60vh;
  overflow: hidden;
  transform-style: preserve-3d;
  position: relative;
  background: #111;
  color: white;
}

.tilt-card img {
  width: 110%;
  height: 110%;
  object-fit: cover;
}

.tilt-card h3 {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  font-size: 2rem;
}
```

---

# Exercice 20 — Page complète avec loader + hero

## Objectif

Créer une mini landing page avec :

```txt
Loader
Navbar
Hero
Image
Titre animé
```

## Correction

```jsx
export default function Exercise20() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
        },
      });

      tl.from(".loader-name", {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
        .to(".loader-bar-fill", {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1,
        })
        .to(".loader", {
          yPercent: -100,
          duration: 1,
        })
        .from(".nav-item", {
          y: -30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power4.out",
        })
        .from(
          ".hero-line span",
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-image",
          {
            scale: 1.2,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <section className="loader">
        <div className="loader-name">ADRI</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </section>

      <nav className="main-nav">
        {["Home", "Work", "About", "Contact"].map((item) => (
          <a className="nav-item" href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>

      <section className="final-hero">
        <div>
          <h1>
            <div className="hero-line">
              <span>Creative</span>
            </div>
            <div className="hero-line">
              <span>Developer</span>
            </div>
          </h1>
        </div>

        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
          alt=""
        />
      </section>
    </main>
  );
}
```

```css
.loader {
  position: fixed;
  inset: 0;
  z-index: 20;
  background: black;
  color: white;
  display: grid;
  place-items: center;
}

.loader-name {
  font-size: 5vw;
}

.loader-bar {
  position: absolute;
  bottom: 4rem;
  width: 40vw;
  height: 2px;
  background: #333;
}

.loader-bar-fill {
  width: 100%;
  height: 100%;
  background: white;
  transform: scaleX(0);
}

.main-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  z-index: 5;
}

.nav-item {
  color: black;
  text-decoration: none;
}

.final-hero {
  min-height: 100vh;
  padding: 6rem 4rem 4rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.final-hero h1 {
  font-size: clamp(5rem, 14vw, 14rem);
  line-height: 0.8;
}

.hero-line {
  overflow: hidden;
}

.hero-line span {
  display: inline-block;
}

.hero-image {
  width: 100%;
  height: 75vh;
  object-fit: cover;
}
```

---

# Projet guidé 1 — Landing page premium

## Correction structure

```txt
src/
  components/
    Loader.jsx
    Navbar.jsx
    Hero.jsx
    Manifesto.jsx
    Gallery.jsx
    PinnedSection.jsx
    Services.jsx
    Footer.jsx
  pages/
    Home.jsx
```

## Correction `Home.jsx`

```jsx
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Gallery from "../components/Gallery";
import PinnedSection from "../components/PinnedSection";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Manifesto />
      <Gallery />
      <PinnedSection />
      <Services />
      <Footer />
    </>
  );
}
```

## Correction d’animations à viser

```txt
Loader : timeline d’intro
Hero : texte masqué + image scale
Manifesto : texte ligne par ligne au scroll
Gallery : ScrollTrigger horizontal
PinnedSection : pin + scrub
Services : stagger au scroll
Footer : gros texte qui entre par le bas
```

---

# Projet guidé 2 — Portfolio créatif

## Correction structure

```txt
src/
  components/
    Navbar.jsx
    Menu.jsx
    Cursor.jsx
    PageTransition.jsx
    ProjectCard.jsx
  pages/
    Home.jsx
    Projects.jsx
    ProjectDetail.jsx
    About.jsx
    Contact.jsx
```

## Correction logique

Tu dois avoir :

```txt
Une animation d’entrée par page
Une transition entre pages
Un menu fullscreen
Des cartes projets animées
Une liste projets avec image preview
Un curseur custom désactivé sur mobile
```

## Exemple de composant `ProjectCard`

```jsx
export default function ProjectCard({ title, image }) {
  return (
    <article className="project-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </article>
  );
}
```

```css
.project-card {
  overflow: hidden;
}

.project-card img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
}

.project-card:hover img {
  transform: scale(1.08);
}
```

---

# Projet guidé 3 — Site storytelling

## Correction structure

```txt
Intro immersive
Chapitre 1 : reveal classique
Chapitre 2 : section pinned
Chapitre 3 : galerie horizontale
Chapitre 4 : texte cinématique
Conclusion
```

## Correction animation principale

```jsx
export default function StoryScene() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-scene",
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      tl.from(".story-title", {
        y: 200,
        opacity: 0,
      })
        .to(".story-bg", {
          scale: 1.2,
        })
        .to(
          ".story-text",
          {
            y: -150,
            opacity: 1,
          },
          0.3
        );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="story-scene">
      <img
        className="story-bg"
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt=""
      />
      <h2 className="story-title">Chapter One</h2>
      <p className="story-text">A visual narrative driven by scroll.</p>
    </section>
  );
}
```

```css
.story-scene {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  color: white;
}

.story-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-title {
  position: relative;
  z-index: 2;
  font-size: 12vw;
}

.story-text {
  position: absolute;
  bottom: 10vh;
  z-index: 2;
  opacity: 0;
  font-size: 2rem;
}
```

---

# Comment travailler avec ces corrections

Pour chaque exercice :

```txt
1. Tu recopies la correction.
2. Tu la fais fonctionner.
3. Tu changes les valeurs : duration, ease, y, scale, stagger.
4. Tu refais sans regarder.
5. Tu crées une variante visuelle.
```

Le vrai apprentissage vient à l’étape 4 : **refaire sans copier**.

Ton ordre de pratique idéal :

```txt
Jour 1 : exercices 1 à 5
Jour 2 : exercices 6 à 8
Jour 3 : exercices 9 à 13
Jour 4 : exercices 14 à 16
Jour 5 : exercices 17 à 20
Jour 6-7 : mini landing page complète
```

Quand tu as terminé ces corrections une première fois, le meilleur exercice est de refaire tout ça sur un thème unique : **portfolio créatif, studio fictif, marque de mode, galerie photo, label musical ou site d’artiste**.
