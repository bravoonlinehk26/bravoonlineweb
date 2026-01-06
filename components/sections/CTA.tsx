"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
          alt="Background"
          fill
          className="object-cover grayscale"
          sizes="100vw"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Let&apos;s Work Together!
            </h2>
            <p className="text-xl text-gray-300">
              Ready to transform your digital presence? Get in touch and let&apos;s
              create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 h-auto"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get started today
              </Button>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/90 text-lg px-8 py-6 h-auto"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book an appointment
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

