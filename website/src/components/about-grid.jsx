import { Code, Database, Cloud } from "lucide-react"

export default function AboutGrid() {
  const skills = [
    {
      category: "LANGUAGES",
      items: ["Python", "JavaScript", "SQL", "HTML/CSS"],
      icon: Code,
      color: "blue",
    },
    {
      category: "FRAMEWORKS",
      items: ["Django", "React.js", "Next.js", "FastAPI"],
      icon: Database,
      color: "red",
    },
    {
      category: "DATABASES",
      items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
      icon: Database,
      color: "blue",
    },
    {
      category: "CLOUD & DEVOPS",
      items: ["AWS", "Docker", "Kubernetes", "Terraform"],
      icon: Cloud,
      color: "red",
    },
  ]

  const achievements = [
    "Architected WhatsApp Business Platform processing 1M+ messages/month",
    "Reduced response times by 65-70% and increased conversions by 40%",
    "7th nationally in Smart India Hackathon 2024 (10,000+ teams)",
    "Led team of 6 developers and mentored 10+ interns",
  ]

  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm tracking-wider text-black/60">02</span>
            <div className="h-px bg-black/20 flex-1"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">ABOUT</h2>
          <p className="text-xl text-black/60 max-w-3xl leading-relaxed">
            Full Stack Developer with expertise in building scalable enterprise solutions. Currently pursuing Computer
            Engineering at University of Mumbai while architecting systems that serve millions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-black mb-8 tracking-tight">TECHNICAL EXPERTISE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="border border-black/10 p-6 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-8 h-8 border-2 ${
                        skill.color === "blue" ? "border-blue-600" : "border-red-600"
                      } flex items-center justify-center`}
                    >
                      <skill.icon size={16} className={skill.color === "blue" ? "text-blue-600" : "text-red-600"} />
                    </div>
                    <h4 className="font-mono text-xs tracking-wider text-black/60">{skill.category}</h4>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="font-mono text-sm text-black">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-black mb-8 tracking-tight">KEY ACHIEVEMENTS</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-black/10 p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 border border-black/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-black leading-relaxed">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-black mb-8 tracking-tight">EXPERIENCE</h3>
          <div className="space-y-8">
            {/* Full Time Experience */}
            <div className="border border-black/10 p-8 bg-white">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-xs tracking-wider text-black/60 mb-2">PERIOD</div>
                  <div className="font-mono text-sm">OCT 2023 - FEB 2025</div>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-wider text-black/60 mb-2">ROLE</div>
                  <div className="font-mono text-sm">FULL STACK DEVELOPER</div>
                </div>
                <div className="md:col-span-2">
                  <div className="font-mono text-xs tracking-wider text-black/60 mb-2">COMPANY</div>
                  <div className="font-mono text-sm">ALTISSADVANCE TECH PVT LTD</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-black/10">
                <p className="text-black/80 leading-relaxed">
                  Architected enterprise-grade WhatsApp Business Platform processing 1M+ messages/month with 99.99%
                  uptime using microservices, Docker Swarm, and Traefik load balancing. Built drag-and-drop flow builder
                  reducing response times by 65-70%. Led a team of 6 developers and established agile processes.
                </p>
              </div>
            </div>

            {/* Intern Experience */}
            <div className="border border-black/10 p-8 bg-white">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-xs tracking-wider text-black/60 mb-2">PERIOD</div>
                  <div className="font-mono text-sm">JUL 2023 - OCT 2023</div>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-wider text-black/60 mb-2">ROLE</div>
                  <div className="font-mono text-sm">FULL STACK DEVELOPER INTERN</div>
                </div>
                <div className="md:col-span-2">
                  <div className="font-mono text-xs tracking-wider text-black/60 mb-2">COMPANY</div>
                  <div className="font-mono text-sm">ALTISSADVANCE TECH PVT LTD</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-black/10">
                <p className="text-black/80 leading-relaxed">
                  Implemented scalable CRM and Affiliate Management System supporting 10+ users. Optimized MySQL queries
                  with indexing strategies, reducing data retrieval by 75% for 100K+ record datasets. Built RESTful APIs
                  with authentication serving 1K+ daily requests with sub-200ms response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
