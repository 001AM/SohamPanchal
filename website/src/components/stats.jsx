"use client"

import { useState } from "react"
import { Github, Code, BookOpen, Twitter, TrendingUp, Award, Calendar, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Stats() {
  const [activeTab, setActiveTab] = useState("github")

  const platforms = [
    { id: "github", name: "GitHub", icon: Github, color: "from-gray-500 to-gray-600" },
    { id: "leetcode", name: "LeetCode", icon: Code, color: "from-orange-500 to-orange-600" },
    { id: "medium", name: "Medium", icon: BookOpen, color: "from-green-500 to-green-600" },
    { id: "twitter", name: "X (Twitter)", icon: Twitter, color: "from-blue-500 to-blue-600" },
  ]

  const statsData = {
    github: {
      stats: [
        { label: "Public Repositories", value: "25+", icon: Github },
        { label: "Total Commits", value: "1,200+", icon: TrendingUp },
        { label: "Followers", value: "150+", icon: Users },
        { label: "Stars Received", value: "300+", icon: Award },
      ],
      recentActivity: [
        "Pushed to soham-panchal/whatsapp-business-platform",
        "Created new repository: llm-stack-monitor",
        "Merged PR #15 in ai-job-matcher",
        "Updated README in meme-bot-telegram",
      ],
    },
    leetcode: {
      stats: [
        { label: "Problems Solved", value: "100+", icon: Code },
        { label: "Contest Rating", value: "1,650", icon: TrendingUp },
        { label: "Global Ranking", value: "Top 15%", icon: Award },
        { label: "Streak Days", value: "45", icon: Calendar },
      ],
      recentActivity: [
        "Solved: Binary Tree Maximum Path Sum (Hard)",
        "Solved: Longest Increasing Subsequence (Medium)",
        "Participated in Weekly Contest 378",
        "Solved: Design Add and Search Words Data Structure",
      ],
    },
    medium: {
      stats: [
        { label: "Articles Published", value: "12", icon: BookOpen },
        { label: "Total Reads", value: "1,200+", icon: TrendingUp },
        { label: "Followers", value: "85", icon: Users },
        { label: "Claps Received", value: "450+", icon: Award },
      ],
      recentActivity: [
        'Published: "Microservices Architecture Best Practices"',
        'Published: "Scaling WhatsApp Business APIs"',
        'Published: "Docker Swarm vs Kubernetes"',
        'Published: "Building Real-time Analytics Dashboards"',
      ],
    },
    twitter: {
      stats: [
        { label: "Followers", value: "320", icon: Users },
        { label: "Tweets", value: "180", icon: Twitter },
        { label: "Engagement Rate", value: "4.2%", icon: TrendingUp },
        { label: "Tech Threads", value: "25", icon: BookOpen },
      ],
      recentActivity: [
        "Tweeted about microservices best practices",
        "Shared insights on system design interviews",
        "Posted thread on Docker optimization tips",
        "Retweeted latest tech industry news",
      ],
    },
  }

  return (
    <section id="stats" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Platform Stats
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time activity and achievements across development platforms
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === platform.id
                  ? `bg-gradient-to-r ${platform.color} text-white shadow-lg`
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-purple-500/20"
              }`}
            >
              <platform.icon size={20} />
              {platform.name}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData[activeTab]?.stats?.map((stat, index) => (
            <Card
                key={index}
                className="bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
                <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <stat.icon size={24} className="text-purple-400" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                </CardHeader>
                <CardContent>
                <p className="text-gray-300 text-sm">{stat.label}</p>
                </CardContent>
            </Card>
            ))}

        </div>

        {/* Recent Activity */}
        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp size={24} className="text-purple-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {statsData[activeTab].recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
