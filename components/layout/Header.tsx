"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { COMPANY_NAME, NAV_ITEMS } from "@/lib/constants"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Navigation items matching the actual landing page sections
  const headerNavItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#projects" },
    { label: "PROCESS", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#c5ee19] border-b border-black/10">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Left */}
        <Link
          href="https://bravoonline.hk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-black font-semibold text-lg"
          aria-label="BravoOnline Home"
        >
          <span>A</span>
          <span className="text-xl">→</span>
          <span>BravoOnline</span>
          <span className="text-sm font-normal ml-1">Since. 2016</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
              className="flex items-center gap-1 text-black text-sm font-medium hover:opacity-80 transition-opacity group"
            >
              <span>{item.label}</span>
              <ChevronDown className="h-3 w-3 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          ))}
        </nav>

        {/* Right side - Search and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-black hover:opacity-80 transition-opacity"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-black text-white hover:bg-black/90 rounded-lg px-4 py-2 h-auto font-medium text-sm"
          >
            → LET&apos;S TALK
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" className="text-black">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#c5ee19]">
            <SheetHeader>
              <SheetTitle className="text-black">{COMPANY_NAME}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              {headerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }
                  }}
                  className="text-lg font-medium text-black transition-colors hover:opacity-80 flex items-center gap-2"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 bg-black text-white hover:bg-black/90 rounded-lg"
              >
                → LET&apos;S TALK
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
