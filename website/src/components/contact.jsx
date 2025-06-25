import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import  {Button} from "@/components/ui/button"
import  {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import  {Input} from "@/components/ui/input"
import  {Textarea} from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">sohampanchal1469@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91-9511671955</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-slate-800/50 border-purple-500/30 hover:bg-purple-500/20"
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-slate-800/50 border-purple-500/30 hover:bg-purple-500/20"
                >
                  <Linkedin size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-slate-800/50 border-purple-500/30 hover:bg-purple-500/20"
                >
                  <Twitter size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                <Input
                  placeholder="What's this about?"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400">© 2025 Soham Panchal. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
