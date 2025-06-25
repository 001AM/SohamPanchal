"use client"

import { useState } from "react"
import { Github, Code, BookOpen, TrendingUp, Award, Calendar, Users, Activity, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function StatsGrid() {
  const [activeTab, setActiveTab] = useState("overview")

  const platforms = [
    { id: "overview", name: "Overview", icon: Activity, color: "from-cyan-400 to-purple-500" },
    { id: "github", name: "GitHub", icon: Github, color: "from-gray-400 to-gray-600" },
    { id: "leetcode", name: "LeetCode", icon: Code, color: "from-orange-400 to-orange-600" },
    { id: "medium", name: "Medium", icon: BookOpen, color: "from-green-400 to-green-600" },
  ]

  const statsData = {
    overview: [
      { label: "Total Commits", value: "1,200+", icon: Github, change: "+15%" },
      { label: "Problems Solved", value: "100+", icon: Code, change: "+8%" },
      { label: "Articles Published", value: "12", icon: BookOpen, change: "+3%" },
      { label: "GitHub Stars", value: "300+", icon: Star, change: "+25%" },
    ],
    github: [
      { label: "Public Repos", value: "25+", icon: Github, change: "+2%" },
      { label: "Total Commits", value: "1,200+", icon: TrendingUp, change: "+15%" },
      { label: "Followers", value: "150+", icon: Users, change: "+12%" },
      { label: "Stars Received", value: "300+", icon: Award, change: "+25%" },
    ],
    leetcode: [
      { label: "Problems Solved", value: "100+", icon: Code, change: "+8%" },
      { label: "Contest Rating", value: "1,650", icon: TrendingUp, change: "+50" },
      { label: "Global Ranking", value: "Top 15%", icon: Award, change: "+2%" },
      { label: "Streak Days", value: "45", icon: Calendar, change: "+5" },
    ],
    medium: [
      { label: "Articles", value: "12", icon: BookOpen, change: "+3%" },
      { label: "Total Reads", value: "1,200+", icon: TrendingUp, change: "+200" },
      { label: "Followers", value: "85", icon: Users, change: "+10" },
      { label: "Claps", value: "450+", icon: Award, change: "+50" },
    ],
  }

  const recentActivity = {
    overview: [
      "🚀 Deployed WhatsApp Business Platform v2.0",
      "📝 Published 'Microservices Best Practices' on Medium",
      "🏆 Solved 5 new LeetCode problems this week",
      "⭐ Received 25 new GitHub stars",
    ],
    github: [
      "Pushed to soham-panchal/whatsapp-business-platform",
      "Created new repository: llm-stack-monitor",
      "Merged PR #15 in ai-job-matcher",
      "Updated README in meme-bot-telegram",
    ],
    leetcode: [
      "Solved: Binary Tree Maximum Path Sum (Hard)",
      "Solved: Longest Increasing Subsequence (Medium)",
      "Participated in Weekly Contest 378",
      "Solved: Design Add and Search Words Data Structure",
    ],
    medium: [
      'Published: "Microservices Architecture Best Practices"',
      'Published: "Scaling WhatsApp Business APIs"',
      'Published: "Docker Swarm vs Kubernetes"',
      'Published: "Building Real-time Analytics Dashboards"',
    ],
  }

  return (
    <section id="stats" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Live Stats</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real-time activity across platforms</p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === platform.id
                  ? `bg-gradient-to-r ${platform.color} text-black font-semibold`
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              <platform.icon size={18} />
              {platform.name}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData[activeTab].map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                  <stat.icon size={18} className="text-black" />
                </div>
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Activity size={20} className="text-cyan-400" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity[activeTab].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
