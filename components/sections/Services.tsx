"use client"

import { useState } from "react"
import { Globe, Megaphone, Smartphone, GraduationCap, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const iconMap = {
  globe: Globe,
  megaphone: Megaphone,
  smartphone: Smartphone,
  palette: GraduationCap,
  graduationcap: GraduationCap,
}

// Color scheme for each service
const serviceColors = {
  "01": {
    iconBg: "bg-blue-500",
    iconText: "text-white",
    border: "border-blue-500",
    borderHover: "hover:border-blue-600",
    tagBg: "bg-blue-100",
    tagBorder: "border-blue-300",
    tagText: "text-blue-700",
    number: "text-blue-200",
    chevron: "text-blue-600",
  },
  "02": {
    iconBg: "bg-purple-500",
    iconText: "text-white",
    border: "border-purple-500",
    borderHover: "hover:border-purple-600",
    tagBg: "bg-purple-100",
    tagBorder: "border-purple-300",
    tagText: "text-purple-700",
    number: "text-purple-200",
    chevron: "text-purple-600",
  },
  "03": {
    iconBg: "bg-pink-500",
    iconText: "text-white",
    border: "border-pink-500",
    borderHover: "hover:border-pink-600",
    tagBg: "bg-pink-100",
    tagBorder: "border-pink-300",
    tagText: "text-pink-700",
    number: "text-pink-200",
    chevron: "text-pink-600",
  },
  "04": {
    iconBg: "bg-primary",
    iconText: "text-black",
    border: "border-primary",
    borderHover: "hover:border-primary/80",
    tagBg: "bg-primary/20",
    tagBorder: "border-primary/40",
    tagText: "text-black",
    number: "text-primary/30",
    chevron: "text-primary",
  },
}

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Driving Growth Through Digital Excellence
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isExpanded = expandedId === service.id
            const colors = serviceColors[service.id as keyof typeof serviceColors] || serviceColors["01"]

            return (
              <ScrollReveal key={service.id}>
                <motion.div
                  className={cn(
                    "bg-white rounded-2xl border-2 transition-all",
                    isExpanded ? `${colors.border} shadow-lg` : `border-gray-200 ${colors.borderHover}`
                  )}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="w-full p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-left"
                  >
                    {/* Left: Tags */}
                    <div className="flex flex-wrap gap-2 flex-1">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={cn(
                            "font-semibold",
                            colors.tagBg,
                            colors.tagBorder,
                            colors.tagText
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Center: Icon */}
                    <div className="flex-shrink-0">
                      <div className={cn("p-4 rounded-xl", colors.iconBg)}>
                        {Icon && <Icon className={cn("h-8 w-8", colors.iconText)} />}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold flex-1 text-gray-900">
                      {service.title}
                    </h3>

                    {/* Right: Number + Chevron */}
                    <div className="flex items-center gap-4">
                      <span className={cn("text-4xl font-bold", colors.number)}>
                        {service.id}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-6 w-6 transition-transform",
                          colors.chevron,
                          isExpanded && "rotate-180"
                        )}
                      />
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <p className="text-muted-foreground text-lg mb-6">
                            {service.description}
                          </p>
                          <Button
                            className={cn(
                              "text-white hover:opacity-90",
                              service.id === "01" && "bg-blue-500 hover:bg-blue-600",
                              service.id === "02" && "bg-purple-500 hover:bg-purple-600",
                              service.id === "03" && "bg-pink-500 hover:bg-pink-600",
                              service.id === "04" && "bg-primary text-black hover:bg-primary/90"
                            )}
                            onClick={(e) => {
                              e.stopPropagation()
                              const element = document.querySelector("#contact")
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                              }
                            }}
                          >
                            Learn More
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

