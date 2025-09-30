"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const sections = ["home", "about", "team", "events", "resources", "blogs", "contact"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -70% 0px",
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  const resourceNavItems = [
    { id: "resources", label: "Resources", href: "/resources" },
    { id: "opportunities", label: "Opportunities", href: "/opportunities" },
    { id: "home", label: "Back to Home", href: "/" },
  ]

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/#about" },
    { id: "team", label: "Team", href: "/team" },
    { id: "events", label: "Events", href: "/#events" },
    { id: "blogs", label: "Blogs", href: "/blogs" },
    { id: "resources", label: "Resources & Opportunities", href: "/resources" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ]

  const handleNavClick = (item: any) => {
    setIsMenuOpen(false)

    if (["resources", "opportunities", "team", "blogs"].includes(item.id)) {
      return
    }

    if (item.id === "home") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      return
    }

    if (pathname !== "/" && item.href.startsWith("/#")) {
      window.location.href = item.href
      return
    }

    if (item.href.startsWith("/#")) {
      const sectionId = item.href.substring(2)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const isActive = (item: any) => {
    if (item.id === "resources" && pathname === "/resources") return true
    if (item.id === "opportunities" && pathname === "/opportunities") return true
    if (item.id === "team" && pathname === "/team") return true
    if (item.id === "blogs" && pathname === "/blogs") return true
    if (pathname === "/" && activeSection === item.id) return true
    return false
  }

  const currentNavItems =
    pathname === "/resources" || pathname === "/opportunities" ? resourceNavItems : navItems

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-foreground font-bold text-xl tracking-wide hover:text-primary transition-all duration-300 neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            CODEBENDERS
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {currentNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "relative transition-all duration-300 hover:text-primary py-2 hover:neon-glow",
                  isActive(item) ? "text-primary neon-glow" : "text-muted",
                )}
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {item.label}
                {isActive(item) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-in slide-in-from-left duration-300 shadow-lg shadow-primary/50" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-muted hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/20 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {currentNavItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "text-left px-4 py-2 rounded-lg transition-all duration-200 neon-border",
                    isActive(item)
                      ? "text-primary bg-primary/10 neon-glow"
                      : "text-muted hover:text-primary hover:bg-card",
                  )}
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
