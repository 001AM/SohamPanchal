import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Build Something
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Ready to turn your ideas into reality? Let's talk.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                project in mind or just want to chat about tech, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "sohampanchal1469@gmail.com",
                  href: "mailto:sohampanchal1469@gmail.com",
                },
                { icon: Phone, label: "Phone", value: "+91-9511671955", href: "tel:+919511671955" },
                { icon: MapPin, label: "Location", value: "Mumbai, India", href: "#" },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                      <contact.icon size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-semibold">{contact.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/001AM", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/soham-panchal-430956255/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/Soham0001AM", label: "Twitter" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 transition-opacity">
                <MessageCircle size={16} className="mr-2" />
                Schedule a Call
              </Button>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                <Github size={16} className="mr-2" />
                View My GitHub
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 transition-opacity">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">© 2025 Soham Panchal. Crafted with ❤️ using Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
