"use client"

import Image from "next/image"
import { Users, Target, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { VALUES } from "@/lib/constants"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { hoverLift } from "@/lib/animations"

const iconMap = {
  users: Users,
  target: Target,
  handshake: Handshake,
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left: Title and paragraph */}
          <ScrollReveal className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a digital agency focused on delivering exceptional results
              through innovative design, strategic marketing, and cutting-edge
              development. Our team combines creativity with data-driven
              insights to help businesses thrive in the digital landscape.
            </p>
          </ScrollReveal>

          {/* Middle: Value cards */}
          <div className="lg:col-span-1 space-y-6">
            {VALUES.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap]
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <motion.div whileHover={hoverLift}>
                    <Card className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            {Icon && <Icon className="h-6 w-6 text-primary" />}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">
                              {value.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Right: Expert Team image */}
          <ScrollReveal delay={0.3} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] max-w-sm w-full">
              <div className="absolute inset-0 -rotate-3 bg-primary/20 rounded-2xl" />
              <div className="absolute inset-0 rotate-3 bg-primary/10 rounded-2xl" />
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/aboutus-01.jpg"
                  alt="About us"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

