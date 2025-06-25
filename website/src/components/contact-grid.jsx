import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, Calendar, Download, Send } from "lucide-react"
import {Button} from "@/components/ui/button"

export default function ContactGrid() {
  return (
    <section id="contact" className="py-32 px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm tracking-wider text-white/60">05</span>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">LET'S CONNECT</h2>
          <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
            Ready to build something extraordinary together? I'm always excited to discuss new opportunities and
            innovative projects.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-mono text-sm tracking-wider text-white/60 mb-6">DIRECT CONTACT</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Mail,
                    label: "EMAIL",
                    value: "sohampanchal1469@gmail.com",
                    href: "mailto:sohampanchal1469@gmail.com",
                    description: "Best for project inquiries",
                  },
                  {
                    icon: Phone,
                    label: "PHONE",
                    value: "+91-9511671955",
                    href: "tel:+919511671955",
                    description: "Available 9 AM - 6 PM IST",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="border border-white/20 p-6 bg-black hover:border-white/40 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border-2 border-white flex items-center justify-center flex-shrink-0">
                        <contact.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-xs tracking-wider text-white/60 mb-1">{contact.label}</div>
                        <div className="font-mono text-sm text-white mb-2">{contact.value}</div>
                        <div className="font-mono text-xs text-white/40">{contact.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div>
              <h3 className="font-mono text-sm tracking-wider text-white/60 mb-6">LOCATION & AVAILABILITY</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-white/20 p-6 bg-black">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="font-mono text-xs tracking-wider text-white/60 mb-1">LOCATION</div>
                      <div className="font-mono text-sm text-white mb-2">MUMBAI, INDIA</div>
                      <div className="font-mono text-xs text-white/40">UTC +5:30 TIMEZONE</div>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 p-6 bg-black">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border-2 border-green-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <div className="font-mono text-xs tracking-wider text-white/60 mb-1">STATUS</div>
                      <div className="font-mono text-sm text-white mb-2">AVAILABLE</div>
                      <div className="font-mono text-xs text-white/40">OPEN TO NEW OPPORTUNITIES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div>
              <h3 className="font-mono text-sm tracking-wider text-white/60 mb-6">SOCIAL NETWORKS</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Github, label: "GITHUB", username: "soham-panchal", followers: "150+" },
                  { icon: Linkedin, label: "LINKEDIN", username: "soham-panchal-430956255", followers: "500+" },
                  { icon: Twitter, label: "TWITTER", username: "@sohampanchal", followers: "320+" },
                ].map((social, index) => (
                  <div
                    key={index}
                    className="border border-white/20 p-4 bg-black text-center hover:border-white/40 transition-colors duration-300 cursor-pointer"
                  >
                    <social.icon size={24} className="mx-auto mb-3" />
                    <div className="font-mono text-xs tracking-wider text-white/60 mb-1">{social.label}</div>
                    <div className="font-mono text-xs text-white/40">{social.followers}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-sm tracking-wider text-white/60 mb-6">QUICK ACTIONS</h3>
              <div className="space-y-4">
                <Button className="w-full bg-white text-black hover:bg-white/90 font-mono tracking-wider py-4 text-sm">
                  <MessageCircle size={16} className="mr-3" />
                  SCHEDULE CALL
                </Button>

                <Button
                  className="w-full bg-white text-black hover:bg-white/90 font-mono tracking-wider py-4 text-sm"
                >
                  <Download size={16} className="mr-3" />
                  DOWNLOAD RESUME
                </Button>

                <Button
                  className="w-full bg-white text-black hover:bg-white/90 font-mono tracking-wider py-4 text-sm"
                >
                  <Github size={16} className="mr-3" />
                  VIEW GITHUB
                </Button>

                <Button
                  className="w-full bg-white text-black hover:bg-white/90 font-mono tracking-wider py-4 text-sm"
                >
                  <Send size={16} className="mr-3" />
                  SEND EMAIL
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="border border-white/20 p-6 bg-black">
              <div className="text-center">
                <div className="font-mono text-xs tracking-wider text-white/60 mb-2">RESPONSE TIME</div>
                <div className="text-2xl font-black text-white mb-2">&lt; 24 HRS</div>
                <div className="font-mono text-xs text-white/40">AVERAGE EMAIL RESPONSE</div>
              </div>
            </div>

            {/* Preferred Contact */}
            <div className="border border-blue-600/30 p-6 bg-black">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-blue-600 flex items-center justify-center mx-auto mb-3">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <div className="font-mono text-xs tracking-wider text-white/60 mb-2">PREFERRED</div>
                <div className="font-mono text-sm text-white mb-2">EMAIL FIRST</div>
                <div className="font-mono text-xs text-white/40">FOR DETAILED DISCUSSIONS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="border border-white/20 p-12 bg-black text-center">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">READY TO START YOUR PROJECT?</h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Whether you need a full-stack developer for your startup, want to discuss a freelance project, or explore
            collaboration opportunities, I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-white/90 font-mono tracking-wider px-8 py-3">
              <Calendar size={16} className="mr-2" />
              BOOK A MEETING
            </Button>
            <Button
              className="border-white/20 text-white hover:bg-white hover:text-black font-mono tracking-wider px-8 py-3"
            >
              <Mail size={16} className="mr-2" />
              SEND PROJECT BRIEF
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-mono text-sm tracking-wider text-white/60">
              © 2025 SOHAM PANCHAL. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <div className="font-mono text-sm tracking-wider text-white/60">DESIGNED WITH NOTHING OS INSPIRATION</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs tracking-wider text-white/60">ONLINE NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
