"use client"

import { useState } from "react"
import { Code, Database, Cloud, Award, Users, TrendingUp, BookOpen, Zap } from "lucide-react"
import Card from "@/components/ui/card"

export default function BentoGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: "About Me",
      description: "Full Stack Developer passionate about building scalable solutions",
      content:
        "Currently pursuing Computer Engineering at University of Mumbai. Led teams of 6+ developers and mentored 10+ interns.",
      icon: Users,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "Tech Stack",
      description: "Modern technologies I work with",
      content: "Python • JavaScript • React • Next.js • Django • AWS • Docker • Kubernetes",
      icon: Code,
      className: "md:col-span-1",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      title: "Experience",
      description: "1.5+ years building enterprise solutions",
      content: "Full Stack Developer at AltissAdvance Tech, architecting WhatsApp Business Platform",
      icon: TrendingUp,
      className: "md:col-span-1",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 4,
      title: "Achievements",
      description: "Recognition and milestones",
      content: "7th nationally in Smart India Hackathon 2024 • 15th globally in BitnBuild International",
      icon: Award,
      className: "md:col-span-2",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 5,
      title: "Database Expertise",
      description: "Data management and optimization",
      content: "PostgreSQL • MySQL • Redis • MongoDB • Query optimization • 75% performance improvement",
      icon: Database,
      className: "md:col-span-1",
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure solutions",
      content: "AWS • Docker Swarm • Kubernetes • Terraform • CI/CD • 99.99% uptime",
      icon: Cloud,
      className: "md:col-span-1",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
    {
      id: 7,
      title: "Content Creation",
      description: "Sharing knowledge with the community",
      content: "Published Medium articles with 1,200+ reads • Technical blog posts • System design insights",
      icon: BookOpen,
      className: "md:col-span-2",
      gradient: "from-violet-500/20 to-purple-500/20",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">What I Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Building the future, one line of code at a time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`${card.className} bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 p-6 group cursor-pointer overflow-hidden relative`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                    <card.icon size={20} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>

                <p className="text-gray-400 mb-4 text-sm">{card.description}</p>

                <div className="flex-1 flex items-end">
                  <p className="text-gray-300 leading-relaxed">{card.content}</p>
                </div>

                {/* Hover Effect */}
                {hoveredCard === card.id && (
                  <div className="absolute top-4 right-4">
                    <Zap size={16} className="text-cyan-400 animate-pulse" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
