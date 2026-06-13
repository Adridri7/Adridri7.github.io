"use client"

import AboutSection from "@/components/landing/about-section"
import ScrollProgress from "@/components/landing/scroll-progress"
import SmoothScroll from "@/components/landing/smooth-scroll"
import Exercise11 from "./exo11/page"
import HeroSection from "@/components/landing/hero-section"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll>
        <main className="min-h-svh overflow-hidden bg-background text-foreground">
          <HeroSection/>
          <AboutSection />
          <Exercise11/>
        </main>
      </SmoothScroll>
    </>
  )
}
