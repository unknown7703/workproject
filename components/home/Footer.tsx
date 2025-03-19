
"use client"
import Link from "next/link"
/* eslint-disable react/no-unescaped-entities */

import { Facebook, Twitter, Instagram, Linkedin, Heart, Stethoscope } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-[#000e0f] text-white border-t border-[#2a2c31]/50 relative overflow-hidden">
      {/* Dot patterns */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#99ffcc]"></div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                      <div className="bg-[#99ffcc] rounded-xl p-1 w-8 h-8 flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-[#000e0f]" />
                      </div>
                      <span className="text-lg font-light">MedConnect</span>
                    </div>    
               
              </div>
              <p className="text-gray-400 font-light text-sm">
                Connecting patients with qualified healthcare professionals, making healthcare accessible to everyone,
                everywhere.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-[#99ffcc] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#99ffcc] transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#99ffcc] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#99ffcc] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-light mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#explore" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-light mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-light mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    HIPAA Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 font-light hover:text-[#99ffcc] transition-colors">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2c31]/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-light text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Anubhav. All rights reserved.
            </p>
            <p className="text-gray-400 font-light text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-[#99ffcc] mx-1" /> by MVP Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
