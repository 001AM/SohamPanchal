"use client"

import { useState, useEffect } from "react"
import { Menu, X, Circle } from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "01 Home" },
    { href: "#about", label: "02 About" },
    { href: "#projects", label: "03 Work" },
    { href: "#stats", label: "04 Stats" },
    { href: "#contact", label: "05 Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
              <Circle size={12} className="fill-black" />
            </div>
            <span className="text-xl font-mono font-bold tracking-wider">SOHAM.DEV</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black/60 hover:text-black transition-colors duration-300 font-mono text-sm tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button className="bg-black text-white hover:bg-black/90 font-mono tracking-wider px-6">CONNECT</Button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-black hover:bg-black/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border border-black/10 rounded-2xl mt-4 p-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-4 text-black/60 hover:text-black transition-colors duration-300 font-mono tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-6 bg-black text-white font-mono tracking-wider">CONNECT</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
