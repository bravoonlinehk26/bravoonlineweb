"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PRICING_PLANS } from "@/lib/constants"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { hoverLift } from "@/lib/animations"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pricing Plans.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <motion.div whileHover={hoverLift}>
                <Card
                  className={cn(
                    "h-full flex flex-col",
                    plan.highlighted
                      ? "border-primary border-2 shadow-lg scale-105"
                      : "border-gray-200"
                  )}
                >
                  <CardHeader
                    className={cn(
                      "text-center",
                      plan.highlighted && "bg-primary text-white rounded-t-xl"
                    )}
                  >
                    <CardTitle
                      className={cn(
                        "text-2xl mb-2",
                        plan.highlighted && "text-white"
                      )}
                    >
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={cn(
                          "text-5xl font-bold",
                          plan.highlighted ? "text-white" : "text-foreground"
                        )}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={cn(
                          "text-lg",
                          plan.highlighted
                            ? "text-white/80"
                            : "text-muted-foreground"
                        )}
                      >
                        /{plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={cn(
                              "h-5 w-5 mt-0.5 flex-shrink-0",
                              plan.highlighted
                                ? "text-primary"
                                : "text-muted-foreground"
                            )}
                          />
                          <span
                            className={cn(
                              plan.highlighted
                                ? "text-foreground"
                                : "text-muted-foreground"
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={cn(
                        "w-full",
                        plan.highlighted
                          ? "bg-white text-primary hover:bg-white/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      )}
                      onClick={() => {
                        const element = document.querySelector("#contact")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

