import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Team from './components/Team'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative">
        <Hero />
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <Particles />
        </div>
      </div>

      <Section
        id="services"
        eyebrow="What we do"
        title="Strategic AI, engineered for outcomes"
        desc="Full‑stack capabilities from research to production."
      >
        <Services />
      </Section>

      <Section
        id="case-studies"
        eyebrow="Proof"
        title="Outcomes we’ve delivered"
        desc="We partner long‑term and ship value early."
      >
        <CaseStudies />
      </Section>

      <Section
        id="team"
        eyebrow="People"
        title="A senior, hands‑on team"
        desc="Designers, engineers, and researchers who ship."
      >
        <Team />
      </Section>

      <Section
        id="contact"
        eyebrow="Let’s talk"
        title="Tell us about your goals"
        desc="We’ll propose a pragmatic path to value in days, not months."
      >
        <Contact />
      </Section>

      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} Aurora AI — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
