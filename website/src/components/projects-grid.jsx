import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import {Button}  from "@/components/ui/button"

export default function ProjectsGrid() {
  const projects = [
    {
      id: "01",
      title: "WhatsApp Business Platform",
      category: "ENTERPRISE SOLUTION",
      description:
        "Scalable messaging platform processing 1M+ messages monthly with 99.99% uptime using microservices architecture.",
      tech: ["Python", "Django", "Docker", "Redis", "PostgreSQL"],
      metrics: [
        { label: "MESSAGES/MONTH", value: "1M+" },
        { label: "UPTIME", value: "99.99%" },
        { label: "RESPONSE TIME", value: "-65%" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: "02",
      title: "LLM Stack Monitor",
      category: "AI ANALYTICS",
      description: "Real-time monitoring tool for LLM API usage with anomaly detection and cost optimization.",
      tech: ["Python", "React.js", "FastAPI", "PostgreSQL"],
      metrics: [
        { label: "COST REDUCTION", value: "20%" },
        { label: "SERVICES", value: "10+" },
        { label: "ACCURACY", value: "95%" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: "03",
      title: "AI Job Profile Matcher",
      category: "MACHINE LEARNING",
      description: "ML-powered system for candidate assessment and job matching using advanced algorithms.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Django"],
      metrics: [
        { label: "ACCURACY", value: "85%" },
        { label: "MATCHES", value: "1K+" },
        { label: "USERS", value: "500+" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: "04",
      title: "MemeBot Telegram",
      category: "AUTOMATION",
      description: "Intelligent bot serving 100+ memes with real-time analytics and keyword recognition.",
      tech: ["Python", "Telegram API", "Redis", "NLP"],
      metrics: [
        { label: "USERS", value: "100+" },
        { label: "KEYWORDS", value: "30+" },
        { label: "UPTIME", value: "99%" },
      ],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-32 px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm tracking-wider text-white/60">03</span>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">SELECTED WORK</h2>
          <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
            A collection of projects that showcase technical expertise and real-world impact.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="border border-white/20 bg-black overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-sm tracking-wider text-white/60">{projects[0].id}</span>
                  <span className="px-3 py-1 border border-blue-600 text-blue-400 font-mono text-xs tracking-wider">
                    FEATURED
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{projects[0].title}</h3>
                <p className="font-mono text-sm tracking-wider text-white/60 mb-6">{projects[0].category}</p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">{projects[0].description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {projects[0].metrics.map((metric, index) => (
                    <div key={index} className="border border-white/20 p-4 text-center">
                      <div className="text-2xl font-black text-white mb-1">{metric.value}</div>
                      <div className="font-mono text-xs tracking-wider text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tech.map((tech, index) => (
                    <span key={index} className="border border-white/20 px-3 py-1 font-mono text-xs tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button className="bg-white text-black hover:bg-white/90 font-mono tracking-wider">
                    <ExternalLink size={16} className="mr-2" />
                    VIEW LIVE
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-black hover:bg-white hover:text-black font-mono tracking-wider"
                  >
                    <Github size={16} className="mr-2" />
                    SOURCE
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={projects[0].image || "/placeholder.svg"}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="border border-white/20 bg-black group hover:border-white/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-sm tracking-wider text-white/60">{project.id}</span>
                </div>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs tracking-wider text-white/60 mb-2">{project.category}</p>
                <h3 className="text-xl font-black tracking-tight mb-3">{project.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-black text-white">{metric.value}</div>
                      <div className="font-mono text-xs tracking-wider text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="border border-white/20 px-2 py-1 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="border border-white/20 px-2 py-1 font-mono text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-black hover:bg-white hover:text-black font-mono text-xs flex-1"
                  >
                    <Github size={14} className="mr-2" />
                    CODE
                  </Button>
                  <Button size="sm" className="bg-white text-black hover:bg-white/90 font-mono text-xs flex-1">
                    <ArrowUpRight size={14} className="mr-2" />
                    LIVE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
