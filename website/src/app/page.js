import Hero from "@/components/hero"
import AboutGrid from "@/components/about-grid"
import ProjectsGrid from "@/components/projects-grid"
import StatsMatrix from "@/components/stats-matrix"
import ContactGrid from "@/components/contact-grid"
import Navigation from "@/components/navigation"
import SpaceElements from "@/components/space-elements"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <SpeedInsights />
      <SpaceElements />
      <Navigation />
      <Hero />
      <AboutGrid />
      <ProjectsGrid />
      <StatsMatrix />
      <ContactGrid />
    </div>
  )
}
