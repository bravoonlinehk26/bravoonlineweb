"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HERO } from "@/lib/constants"
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#c5ee19] overflow-hidden pt-4">
      <div className="container relative z-10 py-4 md:py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left/Center: Main Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="space-y-8"
          >
            {/* Main headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
            >
              {HERO.headline}
            </motion.h1>

            {/* Descriptive text */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-black/80 max-w-2xl leading-relaxed"
            >
              {HERO.subcopy}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/90 rounded-lg px-8 py-6 h-auto text-lg font-medium"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                → {HERO.cta}
              </Button>

              {/* Avatars and customer count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "1472099645785-5658abf4ff4e",
                    "1507003211169-0a1dd7228f2d",
                    "1494790108377-be9c29b29330",
                  ].map((id, i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full border-2 border-[#c5ee19] overflow-hidden"
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${id}?w=100&h=100&fit=crop`}
                        alt={`Customer ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-black text-sm font-medium">
                  {HERO.customersText}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Office Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative flex items-center justify-center"
          >
            {/* Large circular office image */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-2xl">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop"
                  alt="Office workspace"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Circular border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-black/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
