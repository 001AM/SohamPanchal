export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building scalable enterprise solutions. Currently
              pursuing my Bachelor's in Computer Engineering from the University of Mumbai, I've gained valuable
              experience working at AltissAdvance Tech Private Ltd.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey includes architecting a WhatsApp Business Platform that processes 1M+ messages monthly with
              99.99% uptime, leading teams of 6+ developers, and mentoring 10+ interns. I'm passionate about
              microservices architecture, AI integration, and creating impactful digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                <h3 className="text-purple-400 font-semibold mb-2">Experience</h3>
                <p className="text-gray-300">1.5+ Years</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                <h3 className="text-purple-400 font-semibold mb-2">Projects</h3>
                <p className="text-gray-300">15+ Completed</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Architected enterprise-grade WhatsApp Business Platform processing 1M+ messages/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced response times by 65-70% and increased conversions by 40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>7th nationally in Smart India Hackathon 2024 (10,000+ teams)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Published Medium articles with 1,200+ reads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
