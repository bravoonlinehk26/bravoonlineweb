"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { STATS, SERVICES } from "@/lib/constants"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { hoverLift } from "@/lib/animations"

const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Stats strip */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-[#a8d816] rounded-2xl p-8 md:p-12 mb-16 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {STATS.projects}
                </p>
                <p className="text-lg opacity-90">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {STATS.experience}
                </p>
                <p className="text-lg opacity-90">Industry Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {STATS.clients}+
                </p>
                <p className="text-lg opacity-90">Happy Clients</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {SERVICES.slice(0, 4).map((service) => (
                <Badge
                  key={service.id}
                  className="bg-white/20 text-white border-white/30"
                >
                  {service.title}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project gallery */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_IMAGES.map((image, index) => (
              <motion.div
                key={index}
                whileHover={hoverLift}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-1">
                      Project {index + 1}
                    </h3>
                    <p className="text-white/80 text-sm">
                      Digital Excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

