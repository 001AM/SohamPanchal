import { Code, Database, Cloud, Wrench, Users, Zap } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: ["Python", "JavaScript", "React.js", "Next.js", "Django", "FastAPI", "Flask"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Jenkins"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Tools & Architecture",
      skills: ["REST APIs", "Microservices", "Git", "JIRA", "Postman", "Linux"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Leadership",
      skills: ["Team Management", "Mentoring", "Code Reviews", "Agile/Scrum"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Specializations",
      skills: ["System Design", "Performance Optimization", "AI Integration", "Scalable Architecture"],
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50 hover:border-purple-500/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
