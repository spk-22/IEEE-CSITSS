import Hero from "@/components/hero"
import InfoCards from "@/components/info-cards"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Gallery from "@/components/gallery"
import Speakers from "@/components/speakers"
import CallToAction from "@/components/call-to-action"
import { FloatingThemeToggle } from "@/components/floating-theme-toggle"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <InfoCards />
      <About />
      <Timeline />
      <Gallery />
      <Speakers />
      <CallToAction />
      <FloatingThemeToggle />
    </div>
  )
}

