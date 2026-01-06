"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setSubmitMessage({
        type: "success",
        text: data.message || "Thank you for subscribing!",
      })
      setEmail("")
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000)
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20" />
      </div>

      <div className="container relative z-10 py-12 md:py-16">
        {/* Upper Section - Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Newsletter - Wider column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h3 className="text-white text-lg font-semibold">Newsletter</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Keep up out latest update subscribe our newsletter!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="bg-gray-800 border-white/20 text-white placeholder:text-gray-500 flex-1"
                  required
                  disabled={isSubmitting}
                  aria-label="Newsletter email input"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-black hover:bg-primary/90 whitespace-nowrap px-6"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              {submitMessage && (
                <p
                  className={`text-sm ${
                    submitMessage.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitMessage.text}
                </p>
              )}
            </form>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white hover:text-primary transition-colors block"
                >
                  10 Essential Web Design Trends for 2024
                </Link>
                <span className="text-xs text-gray-500 block mt-1">March 15, 2024</span>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white hover:text-primary transition-colors block"
                >
                  How to Improve Your Website&apos;s Conversion Rate
                </Link>
                <span className="text-xs text-gray-500 block mt-1">March 10, 2024</span>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white hover:text-primary transition-colors block"
                >
                  The Complete Guide to Digital Marketing in 2024
                </Link>
                <span className="text-xs text-gray-500 block mt-1">March 5, 2024</span>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  FAQ&apos;s
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Social Media
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  YouTube
                </Link>
              </li>
            </ul>
            {/* Contact Email Button */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        {/* Middle Section - Logo */}
        <div className="flex justify-center my-12">
          <Link href="https://bravoonline.hk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <span className="text-3xl font-bold text-white">BravoOnline</span>
          </Link>
        </div>

        {/* Bottom Section - Copyright Bar */}
        <div className="border-t border-gray-800 pt-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright - Left */}
            <p className="text-sm text-white">
              © All rights reserved {new Date().getFullYear()}
            </p>

            {/* Credits - Center */}
            <p className="text-sm text-white flex items-center gap-1">
              make with{" "}
              <span className="text-primary">❤️</span> by BravoOnline
            </p>

            {/* Privacy Policy - Right */}
            <Link
              href="/privacy-policy"
              className="text-sm text-white hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute bottom-0 right-0 w-10 h-10 bg-gray-800 border border-primary rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
