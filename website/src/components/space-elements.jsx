"use client"
import { useEffect, useState } from "react"

export default function SpaceElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />
      </div>

      {/* Floating Geometric Shapes */}
      <div
        className="absolute w-32 h-32 border border-blue-600/20 rotate-45"
        style={{
          left: mousePosition.x * 0.01,
          top: mousePosition.y * 0.01,
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
      />
      <div
        className="absolute w-24 h-24 border border-red-600/20"
        style={{
          right: -mousePosition.x * 0.005,
          bottom: -mousePosition.y * 0.005,
          transform: "translate(50%, 50%)",
        }}
      />

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent animate-pulse" />
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-black/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-black/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-black/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-black/20" />
    </div>
  )
}
