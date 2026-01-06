"use client"

import { Search, Code, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PROCESS_STEPS } from "@/lib/constants"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { staggerContainer, hoverLift } from "@/lib/animations"

const iconMap = {
  search: Search,
  code: Code,
  rocket: Rocket,
}

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Working Process
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <motion.div whileHover={hoverLift}>
                  <Card className="bg-gray-800 border-gray-700 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl font-bold text-primary">
                          {step.number}
                        </div>
                        <div className="p-3 bg-primary/20 rounded-lg">
                          {Icon && <Icon className="h-6 w-6 text-primary" />}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

