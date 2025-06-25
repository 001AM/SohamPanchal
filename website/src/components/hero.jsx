"use client"

import { useEffect, useState } from "react"
import { ArrowDown, MapPin, Calendar } from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        })
        setCurrentTime(timeString)
      } catch (error) {
        setCurrentTime("00:00:00")
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-8 py-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs tracking-wider text-black/60">STATUS</span>
            </div>
            <p className="font-mono text-sm">AVAILABLE FOR WORK</p>
          </div>

          <div className="border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={12} className="text-black/60" />
              <span className="font-mono text-xs tracking-wider text-black/60">LOCATION</span>
            </div>
            <p className="font-mono text-sm">MUMBAI, INDIA</p>
          </div>

          <div className="border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={12} className="text-black/60" />
              <span className="font-mono text-xs tracking-wider text-black/60">LOCAL TIME</span>
            </div>
            <p className="font-mono text-sm">{currentTime} IST</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              <span className="block text-black">SOHAM</span>
              <span className="block text-blue-600">PANCHAL</span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-mono tracking-wider text-black/80 mb-4">
                FULL STACK DEVELOPER & SYSTEM ARCHITECT
              </p>
              <p className="text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
                Building scalable enterprise solutions that process{" "}
                <span className="text-red-600 font-semibold">1M+ messages monthly</span> with{" "}
                <span className="text-blue-600 font-semibold">99.99% uptime</span>
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "EXPERIENCE", value: "1.5+ YRS" },
              { label: "PROJECTS", value: "15+" },
              { label: "COMMITS", value: "1.2K+" },
              { label: "PROBLEMS", value: "100+" },
            ].map((metric, index) => (
              <div key={index} className="border border-black/10 p-6 bg-white text-center">
                <div className="text-2xl font-black text-black mb-2">{metric.value}</div>
                <div className="font-mono text-xs tracking-wider text-black/60">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 font-mono tracking-wider px-12 py-4 text-lg"
            >
              VIEW WORK
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white font-mono tracking-wider px-12 py-4 text-lg"
            >
              DOWNLOAD CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs tracking-wider text-black/60">SCROLL</span>
            <ArrowDown size={16} className="text-black/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
