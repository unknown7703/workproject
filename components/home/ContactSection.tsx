"use client"
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
/* eslint-disable react/no-unescaped-entities */

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#000e0f] text-white py-20 relative overflow-hidden">
      {/* Dot patterns */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#99ffcc]"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#99ffcc]"></div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-60 h-60 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-4 py-2 mb-6 inline-flex items-center gap-2">
            <div className="bg-white/10 rounded-full p-1">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm font-light">Get in touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Contact us</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Have questions about our platform? Want to schedule a demo? Our team is here to help you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="group">
            <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-8 border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-light mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-light text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-[#25262b] border border-[#2a2c31] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#99ffcc] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-light text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-[#25262b] border border-[#2a2c31] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#99ffcc] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-light text-gray-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-[#25262b] border border-[#2a2c31] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#99ffcc] transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-light text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-[#25262b] border border-[#2a2c31] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#99ffcc] transition-colors"
                      placeholder="Tell us what you need..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#99ffcc] text-black font-light rounded-full px-6 py-3 flex items-center gap-2 hover:bg-[#8aa8a8] transition-colors w-full justify-center"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-light mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="text-[#99ffcc] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-1">Email</h4>
                        <p className="text-gray-400 font-light">support@medconnect.com</p>
                        <p className="text-gray-400 font-light">info@medconnect.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="text-[#99ffcc] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-1">Phone</h4>
                        <p className="text-gray-400 font-light">+1 (800) 123-4567</p>
                        <p className="text-gray-400 font-light">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="text-[#99ffcc] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-1">Location</h4>
                        <p className="text-gray-400 font-light">123 Health Avenue</p>
                        <p className="text-gray-400 font-light">San Francisco, CA 94103</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-light mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="bg-[#25262b] hover:bg-[#99ffcc]/20 transition-colors p-3 rounded-full">
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="bg-[#25262b] hover:bg-[#99ffcc]/20 transition-colors p-3 rounded-full">
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="bg-[#25262b] hover:bg-[#99ffcc]/20 transition-colors p-3 rounded-full">
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="bg-[#25262b] hover:bg-[#99ffcc]/20 transition-colors p-3 rounded-full">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-light mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-light">Monday - Friday:</span>
                      <span className="font-light">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-light">Saturday:</span>
                      <span className="font-light">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-light">Sunday:</span>
                      <span className="font-light">Closed</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-400 font-light">* Customer support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
