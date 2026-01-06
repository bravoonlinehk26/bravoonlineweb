"use client"

import { Sparkles, Award, TrendingUp, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FEATURES, STATS } from "@/lib/constants"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { hoverLift } from "@/lib/animations"
import Image from "next/image"

const iconMap = {
  sparkles: Sparkles,
  award: Award,
  "trending-up": TrendingUp,
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div whileHover={hoverLift}>
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                          {Icon && <Icon className="h-8 w-8 text-primary" />}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Rating + Satisfied clients */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold">{STATS.satisfaction}</p>
                  <p className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "1472099645785-5658abf4ff4e",
                    "1507003211169-0a1dd7228f2d",
                    "1494790108377-be9c29b29330",
                    "1438761681033-6461ffad8d80",
                    "1500648767791-00dcc994a43e",
                  ].map((id, i) => (
                    <div
                      key={i}
                      className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${id}?w=100&h=100&fit=crop`}
                        alt={`Client ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold">{STATS.clients}+</p>
                  <p className="text-sm text-muted-foreground">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

