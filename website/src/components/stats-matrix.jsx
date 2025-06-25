"use client"
import { useState, useEffect } from "react"
import { Github, Code, BookOpen, Activity, Calendar, ExternalLink, Star, Loader2, AlertCircle } from "lucide-react"

export default function DynamicStatsMatrix() {
  const [activeTab, setActiveTab] = useState("leetcode")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState({
    github: null,
    leetcode: null,
    medium: null
  })

  const platforms = [
    { id: "leetcode", name: "LEETCODE", icon: Code },
    { id: "github", name: "GITHUB", icon: Github },
    { id: "medium", name: "MEDIUM", icon: BookOpen },
    { id: "overview", name: "OVERVIEW", icon: Activity },
  ]

  // API configuration
  const API_CONFIG = {
    github: {
      username: "001AM",
      url: "https://api.github.com/users/001AM",
      reposUrl: "https://api.github.com/users/001AM/repos?sort=updated&per_page=6",
      eventsUrl: "https://api.github.com/users/001AM/events?per_page=10000"
    },
    leetcode: {
      username: "001AM",
      urls: [
        "https://leetcode-api-faisalshohag.vercel.app/001AM",
        "https://alfa-leetcode-api.onrender.com/001AM",
        "https://leetcode-stats-api.herokuapp.com/001AM"
      ]
    },
    medium: {
      username: "sohampanchal1469",
      rssUrl: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sohampanchal1469"
    }
  }
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Optional but recommended

  const fetchGitHubData = async () => {
    try {
      const headers = {
        Accept: "application/vnd.github+json",
      };

      if (GITHUB_TOKEN) {
        headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
      }

      // 1. Get user data
      const userResponse = await fetch(API_CONFIG.github.url, { headers });
      if (!userResponse.ok) throw new Error("Failed to fetch user data");
      const userData = await userResponse.json();

      // 2. Get repos (only need names, so we can limit the response)
      const reposResponse = await fetch(`${API_CONFIG.github.reposUrl}?per_page=100`, { headers });
      if (!reposResponse.ok) throw new Error("Failed to fetch repos");
      const reposData = await reposResponse.json();

      const currentYear = new Date().getFullYear();
      const since = `${currentYear}-01-01T00:00:00Z`;
      const until = `${currentYear}-12-31T23:59:59Z`;

      // 3. Fetch commit activity for each repo
      const commitFetches = reposData.map(async (repo) => {
        // Use the commits API with author filter and date range
        const commitsUrl = `https://api.github.com/repos/${userData.login}/${repo.name}/commits?author=${userData.login}&since=${since}&until=${until}&per_page=100`;
        
        try {
          const commitsResponse = await fetch(commitsUrl, { headers });
          if (!commitsResponse.ok) return [];
          return await commitsResponse.json();
        } catch (e) {
          console.error(`Failed to fetch commits for ${repo.name}:`, e);
          return [];
        }
      });

      const allCommitsNested = await Promise.all(commitFetches);
      const allCommits = allCommitsNested.flat();

      // Create both formats - array for raw data and object for date counts
      const commitsByDate = {};
      allCommits.forEach(commit => {
        if (!commit.commit) return;
        const date = commit.commit.author?.date || commit.commit.committer?.date;
        if (!date) return;
        
        const dateStr = new Date(date).toISOString().split('T')[0];
        commitsByDate[dateStr] = (commitsByDate[dateStr] || 0) + 1;
      });

      return {
        user: userData,
        repos: reposData,
        commits: allCommits, // keep as array
        commitsByDate,      // add date-count mapping
      }
      } catch (error) {
      console.error("GitHub API Error:", error);
      throw error;
    }
  };



  // Fetch LeetCode data with multiple API fallbacks
  const fetchLeetCodeData = async () => {
    let lastError = null
    
    for (const url of API_CONFIG.leetcode.urls) {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          return {
            totalSolved: data.totalSolved || data.solvedProblem || data.solved || 0,
            easySolved: data.easySolved || data.easy || 0,
            mediumSolved: data.mediumSolved || data.medium || 0,
            hardSolved: data.hardSolved || data.hard || 0,
            ranking: data.ranking || data.rank || null,
            contestRating: data.contestRating || data.rating || null,
            recentSubmissions: data.recentSubmissions || data.recentAcSubmission || [],
            submissionCalendar: data.submissionCalendar || {}
          }
        }
      } catch (error) {
        lastError = error
        console.warn(`LeetCode API ${url} failed:`, error)
        continue
      }
    }
    
    throw lastError || new Error('All LeetCode APIs failed')
  }

  // Fetch Medium data
  const fetchMediumData = async () => {
    try {
      const response = await fetch(API_CONFIG.medium.rssUrl)
      if (!response.ok) {
        throw new Error('Failed to fetch Medium data')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Medium API Error:', error)
      throw error
    }
  }

  // Load all data
  const loadData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const [githubData, leetcodeData, mediumData] = await Promise.allSettled([
        fetchGitHubData(),
        fetchLeetCodeData(),
        fetchMediumData()
      ])

      setData({
        github: githubData.status === 'fulfilled' ? githubData.value : null,
        leetcode: leetcodeData.status === 'fulfilled' ? leetcodeData.value : null,
        medium: mediumData.status === 'fulfilled' ? mediumData.value : null
      })

      if (githubData.status === 'rejected') console.error('GitHub failed:', githubData.reason)
      if (leetcodeData.status === 'rejected') console.error('LeetCode failed:', leetcodeData.reason)
      if (mediumData.status === 'rejected') console.error('Medium failed:', mediumData.reason)

    } catch (error) {
      setError('Failed to load data')
      console.error('Data loading error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // Generate stats based on fetched data only
  const generateStats = () => {
    const stats = {
      leetcode: [
        { 
          label: "PROBLEMS SOLVED", 
          value: data.leetcode?.totalSolved || 0
        },
        { 
          label: "CONTEST RATING", 
          value: data.leetcode?.contestRating || "N/A"
        },
        { 
          label: "EASY SOLVED", 
          value: data.leetcode?.easySolved || 0
        },
        { 
          label: "HARD SOLVED", 
          value: data.leetcode?.hardSolved || 0
        },
      ],
      github: [
        { 
          label: "PUBLIC REPOS", 
          value: data.github?.user?.public_repos || 0
        },
        { 
          label: "TOTAL STARS", 
          value: data.github?.repos ? 
            data.github.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) : 0
        },
        { 
          label: "FOLLOWERS", 
          value: data.github?.user?.followers || 0
        },
        { 
          label: "TOTAL FORKS", 
          value: data.github?.repos ? 
            data.github.repos.reduce((sum, repo) => sum + repo.forks_count, 0) : 0
        },
      ],
      medium: [
        { 
          label: "ARTICLES", 
          value: data.medium?.items?.length || 0
        },
        { 
          label: "FEED STATUS", 
          value: data.medium?.status || "Unknown"
        },
        { 
          label: "LATEST ARTICLE", 
          value: data.medium?.items?.[0] ? 
            new Date(data.medium.items[0].pubDate).toLocaleDateString() : "N/A"
        },
        { 
          label: "TOTAL POSTS", 
          value: data.medium?.items?.length || 0
        },
      ],
      overview: [
        { 
          label: "LEETCODE SOLVED", 
          value: data.leetcode?.totalSolved || 0
        },
        { 
          label: "GITHUB STARS", 
          value: data.github?.repos ? 
            data.github.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) : 0
        },
        { 
          label: "MEDIUM ARTICLES", 
          value: data.medium?.items?.length || 0
        },
        { 
          label: "GITHUB FOLLOWERS", 
          value: data.github?.user?.followers || 0
        },
      ],
    }
    return stats[activeTab] || []
  }
  const now = new Date();

  const generateCalendarHeatmap = () => {
    
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear());

    // Get submissions/commits by date
    const activityByDate = {};
    
    if (activeTab === "leetcode" && data.leetcode?.submissionCalendar) {
      Object.entries(data.leetcode.submissionCalendar).forEach(([timestamp, count]) => {
        const date = new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0];
        activityByDate[date] = (activityByDate[date] || 0) + count;
      });
    } 
    else if (activeTab === "github" && data.github?.commitsByDate) {
      Object.entries(data.github.commitsByDate).forEach(([dateStr, count]) => {
        activityByDate[dateStr] = count;
      });
    }

    // Generate all days for the past year (12 months)
    const months = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Start from the first day of the month one year ago
    let targetMonth = now.getMonth() + 1; // move to the next month
    let targetYear = now.getFullYear() - 1;

    if (targetMonth > 11) {
      targetMonth = 0; // January
      targetYear += 1; // back to same year
    }

    const startDate = new Date(targetYear, targetMonth, 1);

    console.log(startDate)
    
    // Process each month
    for (let i = 0; i < 12; i++) {
        const currentMonth = new Date(startDate);
        currentMonth.setMonth(startDate.getMonth() + i);
        
        const monthStr = monthNames[currentMonth.getMonth()];
        const yearStr = currentMonth.getFullYear().toString().slice(2);
        const monthLabel = `${monthStr} '${yearStr}`;
        
        // Get the number of days in this month
        const daysInMonth = new Date(
            currentMonth.getFullYear(), 
            currentMonth.getMonth() + 1, 
            0
        ).getDate();
        
        // Create array for days (28 days for consistent display)
        const days = Array(28).fill(0);
        
        // Fill with actual data
        for (let day = 1; day <= Math.min(28, daysInMonth); day++) {
            const date = new Date(
                currentMonth.getFullYear(), 
                currentMonth.getMonth(), 
                day
            );
            
            if (date > now) continue; // Skip future dates
            
            const dateStr = date.toISOString().split('T')[0];
            const activityCount = activityByDate[dateStr] || 0;
            const intensity = Math.min(
                4, 
                activeTab === "github" ? Math.floor(activityCount / 2) : activityCount
            );
            
            days[day - 1] = intensity;
        }
        
        months.push({
            month: monthLabel,
            days: days
        });
    }

    return months
  }

  const getHeatmapColor = (intensity, platform) => {
    if (intensity === 0) return "bg-gray-100"

    if (platform === "github") {
      const colors = ["bg-green-200", "bg-green-300", "bg-green-400", "bg-green-600", "bg-green-800"]
      return colors[intensity] || "bg-green-200"
    } else if (platform === "leetcode") {
      const colors = ["bg-green-200", "bg-green-300", "bg-green-400", "bg-green-600", "bg-green-800"]
      return colors[intensity] || "bg-green-200"
    }
    return "bg-gray-200"
  }

  const currentStats = generateStats()
  const heatmapData = generateCalendarHeatmap();

  // Generate month labels
  const monthLabels = [];
  const monthLabelDate = new Date(now);
  monthLabelDate.setMonth(now.getMonth() - 11); // Start from 11 months ago

  for (let i = 0; i < 12; i++) {
    monthLabels.push(
      <div 
        key={i}
        className="text-center"
        style={{ width: `${100/12}%` }}
      >
        <span className="font-mono text-xs tracking-wider text-black/60">
          {monthLabelDate.toLocaleString('default', { month: 'short' }).toUpperCase()}
        </span>
      </div>
    );
    monthLabelDate.setMonth(monthLabelDate.getMonth() + 1);
  }
  
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
          
          {/* Refresh Button */}
          <button
            onClick={loadData}
            disabled={loading}
            className="mt-4 px-4 py-2 border border-black/20 bg-white text-black hover:border-black/40 transition-colors flex items-center gap-2 font-mono text-sm disabled:opacity-50"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : "🔄"}
            {loading ? "LOADING..." : "REFRESH DATA"}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-8 p-4 border border-red-300 bg-red-50 text-red-700 flex items-center gap-2">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

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
              <div className="text-3xl font-black text-black mb-2">
                {loading ? (
                  <Loader2 size={24} className="animate-spin mx-auto" />
                ) : (
                  stat.value
                )}
              </div>
              <div className="font-mono text-xs tracking-wider text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Activity Heatmap */}
        {(activeTab === "leetcode" || activeTab === "github") && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                    <Calendar size={12} />
                  </div>
                  <h3 className="text-xl font-black tracking-tight">
                    {activeTab === "github" ? "COMMIT ACTIVITY" : "PROBLEM SOLVING ACTIVITY"}
                  </h3>
                </div>
                <div className="text-sm text-black/60 font-mono">
                  {activeTab === "github" ? 
                    `${data.github?.commits?.length || 0} commits in the past year` :
                    `${Object.values(data.leetcode?.submissionCalendar || {}).reduce((a, b) => a + b, 0)} submissions in the past year`}
                </div>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <Loader2 size={32} className="animate-spin mx-auto mb-4" />
                  <p className="text-black/60">Loading activity data...</p>
                </div>
              ) : (
                // In your JSX, replace the heatmap section with this:

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
                </div>


              )}
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
                <h3 className="text-xl font-black tracking-tight">RECENT REPOSITORIES</h3>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <Loader2 size={32} className="animate-spin mx-auto mb-4" />
                  <p className="text-black/60">Loading repositories...</p>
                </div>
              ) : data.github?.repos ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {data.github.repos.map((repo, index) => (
                    <div key={index} className="border border-black/10 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-mono text-sm font-bold text-black">{repo.name}</h4>
                        <div className="flex items-center gap-2">
                          <Star size={12} className="text-black/60" />
                          <span className="font-mono text-xs text-black/60">{repo.stargazers_count}</span>
                        </div>
                      </div>
                      <p className="text-black/60 text-sm mb-3">{repo.description || "No description available"}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-black/60">{repo.language || "Unknown"}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-black/60">
                            Updated: {new Date(repo.updated_at).toLocaleDateString()}
                          </span>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-black/60">
                  No repository data available
                </div>
              )}
            </div>
          </div>
        )}

        {/* LeetCode Latest Problems */}
        {activeTab === "leetcode" && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                  <Code size={12} />
                </div>
                <h3 className="text-xl font-black tracking-tight">LATEST SOLVED PROBLEMS</h3>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <Loader2 size={32} className="animate-spin mx-auto mb-4" />
                  <p className="text-black/60">Loading LeetCode data...</p>
                </div>
              ) : data.leetcode?.recentSubmissions?.length > 0 ? (
                <div className="space-y-4">
                  {data.leetcode.recentSubmissions
                    .filter(sub => sub.statusDisplay === "Accepted")
                    .slice(0, 5)
                    .map((submission, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-black/10">
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                            <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                          </div>
                          <div>
                            <div className="font-mono text-sm font-bold text-black">
                              {submission.title || submission.problem || "Unknown Problem"}
                            </div>
                            <div className="font-mono text-xs text-black/60">
                              {submission.timestamp ? new Date(submission.timestamp * 1000).toLocaleDateString() : "Recent"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {submission.difficulty && (
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
                          )}
                          <span className="px-2 py-1 border border-green-600 text-green-600 font-mono text-xs">
                            SOLVED
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 border border-black/10">
                      <div className="text-2xl font-bold text-green-600">{data.leetcode?.easySolved || 0}</div>
                      <div className="text-xs text-black/60">Easy</div>
                    </div>
                    <div className="text-center p-4 border border-black/10">
                      <div className="text-2xl font-bold text-blue-600">{data.leetcode?.mediumSolved || 0}</div>
                      <div className="text-xs text-black/60">Medium</div>
                    </div>
                    <div className="text-center p-4 border border-black/10">
                      <div className="text-2xl font-bold text-red-600">{data.leetcode?.hardSolved || 0}</div>
                      <div className="text-xs text-black/60">Hard</div>
                    </div>
                    <div className="text-center p-4 border border-black/10">
                      <div className="text-2xl font-bold text-purple-600">{data.leetcode?.totalSolved || 0}</div>
                      <div className="text-xs text-black/60">Total</div>
                    </div>
                  </div>
                  <p className="text-black/60">Recent submissions not available from API</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Medium Recent Articles */}
        {activeTab === "medium" && (
          <div className="border border-black/10 bg-white mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 border border-black/20 flex items-center justify-center">
                  <BookOpen size={12} />
                </div>
                <h3 className="text-xl font-black tracking-tight">RECENT ARTICLES</h3>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <Loader2 size={32} className="animate-spin mx-auto mb-4" />
                  <p className="text-black/60">Loading Medium articles...</p>
                </div>
              ) : data.medium?.items?.length > 0 ? (
                <div className="space-y-6">
                  {data.medium.items.map((article, index) => (
                    <div key={index} className="border border-black/10 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-mono text-lg font-bold text-black mb-2">{article.title}</h4>
                          <div className="flex items-center gap-4 text-black/60 font-mono text-xs">
                            <span>{new Date(article.pubDate).toLocaleDateString()}</span>
                            <span>{article.categories?.[0] || "Article"}</span>
                          </div>
                        </div>
                        <a
                          href={article.link}
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
              ) : (
                <div className="text-center py-8 text-black/60">
                  No articles available
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}