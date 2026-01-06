import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Features } from "@/components/sections/Features"
import { Partners } from "@/components/sections/Partners"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { Process } from "@/components/sections/Process"
import { CTA } from "@/components/sections/CTA"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Partners />
      <Services />
      <Projects />
      <Process />
      <CTA />
      <FAQ />
      <Contact />
    </>
  )
}

