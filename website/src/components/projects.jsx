import { ExternalLink, Github } from "lucide-react"
import {Button} from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "WhatsApp Business Platform",
      description:
        "Enterprise-grade messaging platform processing 1M+ messages monthly with 99.99% uptime using microservices architecture.",
      tech: ["Python", "Django", "Docker", "Redis", "PostgreSQL", "Microservices"],
      metrics: ["1M+ messages/month", "99.99% uptime", "65-70% faster response"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      title: "LLM Stack Monitor",
      description:
        "Scalable monitoring tool for tracking LLM API usage across services with anomaly detection and usage analytics.",
      tech: ["Python", "React.js", "FastAPI", "PostgreSQL", "Django"],
      metrics: ["20% cost reduction", "Real-time monitoring", "Multi-service support"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Job Profile Matcher",
      description:
        "Machine learning system for assessing candidate strengths and matching with job roles using advanced algorithms.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Django", "ML"],
      metrics: ["85% accuracy", "Smart matching", "Career insights"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      title: "MemeBot - Telegram Bot",
      description:
        "Intelligent Telegram bot serving 100+ memes on demand with real-time analytics and keyword recognition.",
      tech: ["Python", "Telegram API", "Redis", "NLP"],
      metrics: ["100+ active users", "30+ keywords", "Real-time analytics"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing impactful solutions that drive real business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm border border-purple-500/30"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-slate-700/50 border-purple-500/30 hover:bg-purple-500/20"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-slate-700/50 border-purple-500/30 hover:bg-purple-500/20"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
