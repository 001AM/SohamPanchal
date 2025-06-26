"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowRight, Zap, Users, TrendingUp } from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"

export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "WhatsApp Business Platform",
      subtitle: "Enterprise Messaging Solution",
      description:
        "Architected a scalable messaging platform processing 1M+ messages monthly with 99.99% uptime using microservices architecture, Docker Swarm, and advanced load balancing.",
      // image: "/placeholder.svg?height=400&width=600",
      tech: ["Python", "Django", "Docker", "Redis", "PostgreSQL", "Microservices"],
      metrics: [
        { label: "Messages/Month", value: "1M+", icon: TrendingUp },
        { label: "Uptime", value: "99.99%", icon: Zap },
        { label: "Team Size", value: "6", icon: Users },
      ],
      highlights: [
        "65-70% faster response times",
        "40% increase in conversions",
        "Zero-downtime deployments",
        "Advanced analytics dashboard",
      ],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "LLM Stack Monitor",
      subtitle: "AI Usage Analytics",
      description:
        "Scalable monitoring tool for tracking LLM API usage across services with real-time anomaly detection, usage heatmaps, and cost optimization insights.",
      // image: "/placeholder.svg?height=400&width=600",
      tech: ["Python", "React.js", "FastAPI", "PostgreSQL", "Django"],
      metrics: [
        { label: "Cost Reduction", value: "20%", icon: TrendingUp },
        { label: "Services", value: "10+", icon: Zap },
        { label: "Accuracy", value: "95%", icon: Users },
      ],
      highlights: ["Real-time monitoring", "Anomaly detection", "Usage optimization", "Multi-service support"],
      github: "https://github.com/001AM/LLMStackWatch",
      demo: "#",
      featured: false,
    },
    {
      title: "AI Job Profile Matcher",
      subtitle: "ML-Powered Recruitment",
      description:
        "Intelligent system using machine learning to assess candidate strengths, suggest improvements, and match profiles with job roles using advanced NLP algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Django", "NLP"],
      metrics: [
        { label: "Accuracy", value: "85%", icon: TrendingUp },
        { label: "Matches", value: "1000+", icon: Zap },
        { label: "Users", value: "500+", icon: Users },
      ],
      highlights: ["Smart profile matching", "Career insights", "Skill gap analysis", "Interview preparation"],
      github: "https://github.com/001AM/LLMStackWatch",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Featured Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Projects that make a real impact</p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs font-bold rounded-full">
                    FEATURED
                  </span>
                  <span className="text-gray-400 text-sm">{projects[0].subtitle}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{projects[0].title}</h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{projects[0].description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {projects[0].metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <metric.icon size={16} className="text-cyan-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={projects[0].image || "/placeholder.svg"}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 text-sm">{project.subtitle}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1">
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black flex-1">
                    <ExternalLink size={14} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
