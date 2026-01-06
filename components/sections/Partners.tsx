"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

// Using data URIs for placeholder logos to avoid external dependencies
const PARTNER_LOGOS = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Crect width='150' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EPartner 1%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Crect width='150' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EPartner 2%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Crect width='150' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EPartner 3%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Crect width='150' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EPartner 4%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Crect width='150' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EPartner 5%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Crect width='150' height='80' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EPartner 6%3C/text%3E%3C/svg%3E",
]

export function Partners() {
  return (
    <section id="partners" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left: Text */}
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We believe in the power of collaboration
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading brands and innovative startups worldwide.
            </p>
          </ScrollReveal>

          {/* Center: Logo grid */}
          <ScrollReveal delay={0.2} className="lg:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {PARTNER_LOGOS.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Decorative illustration */}
          <ScrollReveal delay={0.4} className="hidden lg:block">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
                alt="3D illustration"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 0vw, 33vw"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

