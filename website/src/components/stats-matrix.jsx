"use client"

import { useState } from "react"
import { Github, Code, BookOpen, Activity, Calendar, ExternalLink, Star } from "lucide-react"

export default function StatsMatrix() {
  const [activeTab, setActiveTab] = useState("leetcode")

  const platforms = [
    { id: "leetcode", name: "LEETCODE", icon: Code },
    { id: "github", name: "GITHUB", icon: Github },
    { id: "medium", name: "MEDIUM", icon: BookOpen },
    { id: "overview", name: "OVERVIEW", icon: Activity },
  ]

  // Static data to prevent undefined errors
  const githubData = {
    public_repos: 25,
    followers: 150,
    stars: 300,
    forks: 45,
    repos: [
      {
        name: "whatsapp-business-platform",
        stargazers_count: 85,
        language: "Python",
        description: "Enterprise messaging platform processing 1M+ messages monthly",
      },
      {
        name: "llm-stack-monitor",
        stargazers_count: 42,
        language: "JavaScript",
        description: "AI usage analytics tool with real-time monitoring",
      },
      {
        name: "ai-job-matcher",
        stargazers_count: 38,
        language: "Python",
        description: "ML-powered recruitment system with 85% accuracy",
      },
      {
        name: "meme-bot-telegram",
        stargazers_count: 25,
        language: "Python",
        description: "Intelligent Telegram bot serving 100+ users",
      },
      {
        name: "portfolio-website",
        stargazers_count: 15,
        language: "TypeScript",
        description: "Personal portfolio with Nothing OS design inspiration",
      },
      {
        name: "microservices-template",
        stargazers_count: 12,
        language: "Docker",
        description: "Scalable microservices architecture template",
      },
    ],
  }

  const leetcodeData = {
    totalSolved: 100,
    easySolved: 45,
    mediumSolved: 40,
    hardSolved: 15,
    ranking: 150000,
    contestRating: 1650,
    recentSubmissions: [
      { title: "Binary Tree Maximum Path Sum", difficulty: "Hard", status: "Accepted", date: "2025-01-20" },
      { title: "Longest Increasing Subsequence", difficulty: "Medium", status: "Accepted", date: "2025-01-19" },
      {
        title: "Design Add and Search Words Data Structure",
        difficulty: "Medium",
        status: "Accepted",
        date: "2025-01-18",
      },
      { title: "Valid Parentheses", difficulty: "Easy", status: "Accepted", date: "2025-01-17" },
    ],
  }

  const mediumBlogs = [
    {
      title: "Microservices Architecture Best Practices",
      link: "https://medium.com/@sohampanchal1469/microservices-best-practices",
      pubDate: "2025-01-15",
      claps: 125,
      readTime: "8 min read",
    },
    {
      title: "Scaling WhatsApp Business APIs: Lessons Learned",
      link: "https://medium.com/@sohampanchal1469/scaling-whatsapp-apis",
      pubDate: "2025-01-10",
      claps: 89,
      readTime: "6 min read",
    },
    {
      title: "Docker Swarm vs Kubernetes: A Practical Comparison",
      link: "https://medium.com/@sohampanchal1469/docker-swarm-vs-kubernetes",
      pubDate: "2025-01-05",
      claps: 156,
      readTime: "10 min read",
    },
    {
      title: "Building Real-time Analytics Dashboards with Python",
      link: "https://medium.com/@sohampanchal1469/realtime-analytics-python",
      pubDate: "2024-12-28",
      claps: 78,
      readTime: "7 min read",
    },
  ]

  const statsData = {
    leetcode: [
      { label: "PROBLEMS SOLVED", value: "100+", change: "+8" },
      { label: "CONTEST RATING", value: "1,650", change: "+50" },
      { label: "EASY SOLVED", value: "45", change: "+3" },
      { label: "HARD SOLVED", value: "15", change: "+2" },
    ],
    github: [
      { label: "PUBLIC REPOS", value: "25+", change: "+2" },
      { label: "TOTAL STARS", value: "300+", change: "+25" },
      { label: "FOLLOWERS", value: "150+", change: "+12" },
      { label: "TOTAL FORKS", value: "45", change: "+8" },
    ],
    medium: [
      { label: "ARTICLES", value: "12", change: "+1" },
      { label: "TOTAL CLAPS", value: "450+", change: "+50" },
      { label: "AVG READ TIME", value: "8 MIN", change: "+1" },
      { label: "LATEST VIEWS", value: "1.2K+", change: "+200" },
    ],
    overview: [
      { label: "LEETCODE SOLVED", value: "100+", change: "+8%" },
      { label: "GITHUB STARS", value: "300+", change: "+25%" },
      { label: "MEDIUM ARTICLES", value: "12", change: "+1" },
      { label: "TOTAL FOLLOWERS", value: "150+", change: "+15%" },
    ],
  }

  // Generate heatmap data for LeetCode and GitHub only
  const generateHeatmapData = (platform) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const data = []

    for (let month = 0; month < 12; month++) {
      const monthData = []
      for (let week = 0; week < 4; week++) {
        for (let day = 0; day < 7; day++) {
          let intensity = 0
          if (platform === "github") {
            intensity = Math.floor(Math.random() * 5) // 0-4 intensity levels
          } else if (platform === "leetcode") {
            intensity = Math.floor(Math.random() * 4) // 0-3 for problems solved
          }
          monthData.push(intensity)
        }
      }
      data.push({ month: months[month], days: monthData })
    }
    return data
  }

  const getHeatmapColor = (intensity, platform) => {
    if (intensity === 0) return "bg-black/5"

    if (platform === "github") {
      const colors = ["bg-black/10", "bg-black/30", "bg-black/50", "bg-black/70", "bg-black/90"]
      return colors[intensity - 1] || "bg-black/20"
    } else if (platform === "leetcode") {
      const colors = ["bg-blue-200", "bg-blue-400", "bg-blue-600", "bg-blue-800"]
      return colors[intensity - 1] || "bg-blue-200"
    }
    return "bg-black/20"
  }

  const currentStats = statsData[activeTab] || []
  const heatmapData = activeTab === "leetcode" || activeTab === "github" ? generateHeatmapData(activeTab) : []

  return (
    <section id="stats" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm tracking-wider text-black/60">04</span>
            <div className="h-px bg-black/20 flex-1"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">LIVE METRICS</h2>
          <p className="text-xl text-black/60 max-w-3xl leading-relaxed">
            Real-time activity and performance across development platforms.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`p-6 border transition-all duration-300 font-mono tracking-wider ${
                activeTab === platform.id
                  ? "border-black bg-black text-white"
                  : "border-black/20 bg-white text-black hover:border-black/40"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <platform.icon size={16} />
                <span className="text-sm">{platform.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentStats.map((stat, index) => (
            <div key={index} className="border border-black/10 p-6 bg-white text-center">
              <div className="flex items-center justify-between mb-4">
                <div className="w-4 h-4 border border-black/20"></div>
                <span className="text-blue-600 font-mono text-xs tracking-wider">{stat.change}</span>
              </div>
              <div className="text-3xl font-black text-black mb-2">{stat.value}</div>
              <div className="font-mono text-xs tracking-wider text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content based on active tab */}
        {(activeTab === "leetcode" || activeTab === "github") && heatmapData.length > 0 && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                  <Calendar size={12} />
                </div>
                <h3 className="text-xl font-black tracking-tight">ACTIVITY HEATMAP - LAST 12 MONTHS</h3>
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-4">
                {/* Month Labels */}
                <div className="grid grid-cols-12 gap-2 mb-4">
                  {heatmapData.map((monthData, index) => (
                    <div key={index} className="text-center">
                      <span className="font-mono text-xs tracking-wider text-black/60">{monthData.month}</span>
                    </div>
                  ))}
                </div>

                {/* Heatmap Cells */}
                <div className="grid grid-cols-12 gap-2">
                  {heatmapData.map((monthData, monthIndex) => (
                    <div key={monthIndex} className="space-y-1">
                      <div className="grid grid-cols-7 gap-1">
                        {monthData.days.slice(0, 28).map((intensity, dayIndex) => (
                          <div
                            key={dayIndex}
                            className={`w-3 h-3 border border-black/10 ${getHeatmapColor(intensity, activeTab)}`}
                            title={`${monthData.month} - Day ${dayIndex + 1}: ${intensity} contributions`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-black/10">
                  <span className="font-mono text-xs tracking-wider text-black/60">LESS</span>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-3 h-3 border border-black/10 ${getHeatmapColor(level, activeTab)}`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs tracking-wider text-black/60">MORE</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GitHub Repositories */}
        {activeTab === "github" && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                  <Github size={12} />
                </div>
                <h3 className="text-xl font-black tracking-tight">TOP REPOSITORIES</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {githubData.repos.map((repo, index) => (
                  <div key={index} className="border border-black/10 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-mono text-sm font-bold text-black">{repo.name}</h4>
                      <div className="flex items-center gap-2">
                        <Star size={12} className="text-black/60" />
                        <span className="font-mono text-xs text-black/60">{repo.stargazers_count}</span>
                      </div>
                    </div>
                    <p className="text-black/60 text-sm mb-3">{repo.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-black/60">{repo.language}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LeetCode Recent Submissions */}
        {activeTab === "leetcode" && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                  <Code size={12} />
                </div>
                <h3 className="text-xl font-black tracking-tight">RECENT SUBMISSIONS</h3>
              </div>

              <div className="space-y-4">
                {leetcodeData.recentSubmissions.map((submission, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-black/10">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                        <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-black">{submission.title}</div>
                        <div className="font-mono text-xs text-black/60">{submission.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2 py-1 border font-mono text-xs ${
                          submission.difficulty === "Easy"
                            ? "border-green-600 text-green-600"
                            : submission.difficulty === "Medium"
                              ? "border-blue-600 text-blue-600"
                              : "border-red-600 text-red-600"
                        }`}
                      >
                        {submission.difficulty.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 border border-green-600 text-green-600 font-mono text-xs">
                        {submission.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Medium Recent Blogs */}
        {activeTab === "medium" && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                  <BookOpen size={12} />
                </div>
                <h3 className="text-xl font-black tracking-tight">RECENT ARTICLES</h3>
              </div>

              <div className="space-y-6">
                {mediumBlogs.map((blog, index) => (
                  <div key={index} className="border border-black/10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-mono text-lg font-bold text-black mb-2">{blog.title}</h4>
                        <div className="flex items-center gap-4 text-black/60 font-mono text-xs">
                          <span>{blog.pubDate}</span>
                          <span>{blog.readTime}</span>
                          <span>{blog.claps} claps</span>
                        </div>
                      </div>
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-black/20 p-2 hover:border-black/40 transition-colors"
                      >
                        <ExternalLink size={16} className="text-black/60" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
