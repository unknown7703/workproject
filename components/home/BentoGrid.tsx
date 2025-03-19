
"use client"
import {
    Calendar,
    Clock,
    Star,
    Shield,
    HeartPulse,
    Stethoscope,
    CheckCircle,
    Sparkles,
    Bell,
    FileText,
    Smartphone,
    Map,
    Award,
  } from "lucide-react"
  import Link from "next/link"

  /* eslint-disable react/no-unescaped-entities */

  
  export default function BentoGrid() {
    return (
      <section  id="benefits" className="bg-[#000e0f] text-white py-20 relative overflow-hidden">
        {/* Dot patterns */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
          <div className="grid grid-cols-8 gap-3">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-10">
          <div className="grid grid-cols-8 gap-3">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"></div>
            ))}
          </div>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
  
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-4 py-2 mb-6 inline-flex items-center gap-2">
              <div className="bg-white/10 rounded-full p-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-light">Explore our features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Everything you need in one place</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Discover how our platform makes healthcare more accessible, efficient, and personalized for everyone.
            </p>
          </div>
  
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Large Feature Card */}
            <div className="group md:col-span-2 md:row-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="text-[#99ffcc] w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-light mb-4">Virtual Consultations</h3>
                  <p className="text-gray-400 font-light mb-6">
                    Connect with doctors from the comfort of your home. Our platform offers secure video consultations
                    with specialists across all medical fields.
                  </p>
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-[#25262b] flex items-center justify-center">
                      <div className="w-full max-w-md p-4">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-[#2a2c31] flex items-center justify-center">
                            <HeartPulse className="w-6 h-6 text-[#99ffcc]" />
                          </div>
                          <div>
                            <h4 className="font-light">Dr. Sarah Johnson</h4>
                            <p className="text-xs text-gray-400">Cardiologist • Online now</p>
                          </div>
                          <div className="ml-auto">
                            <div className="bg-[#99ffcc] text-[#000e0f] px-3 py-1 rounded-full text-sm">Connect</div>
                          </div>
                        </div>
                        <div className="bg-[#1a1b20] rounded-lg p-4 mb-4">
                          <p className="text-sm font-light">
                            "I'm experiencing chest pain and shortness of breath when I exercise. Could this be related to
                            my heart condition?"
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-[#2a2c31] text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2">
                            <FileText className="w-4 h-4" /> Share records
                          </button>
                          <button className="bg-[#2a2c31] text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2">
                            <Smartphone className="w-4 h-4" /> Test vitals
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center flex-1">
                      <div className="text-2xl font-light text-[#99ffcc] mb-1">24/7</div>
                      <p className="text-xs font-light text-gray-400">Availability</p>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-2xl font-light text-[#99ffcc] mb-1">50+</div>
                      <p className="text-xs font-light text-gray-400">Specialties</p>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-2xl font-light text-[#99ffcc] mb-1">15min</div>
                      <p className="text-xs font-light text-gray-400">Avg. Wait Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Appointment Scheduling */}
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Smart Scheduling</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Book appointments instantly with our AI-powered scheduling system.
                  </p>
                  <div className="bg-[#25262b] rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2a2c31] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#99ffcc]" />
                    </div>
                    <div className="text-sm">
                      <p className="font-light">Next available: Today</p>
                      <p className="text-xs text-gray-400">3:30 PM with Dr. Chen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Health Records */}
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Health Records</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Access and share your medical history securely with healthcare providers.
                  </p>
                  <div className="flex gap-2">
                    <div className="bg-[#25262b] rounded-lg p-2 flex-1 text-center">
                      <p className="text-xs text-gray-400">Lab Results</p>
                      <p className="text-sm font-light">12 files</p>
                    </div>
                    <div className="bg-[#25262b] rounded-lg p-2 flex-1 text-center">
                      <p className="text-xs text-gray-400">Prescriptions</p>
                      <p className="text-sm font-light">8 active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Medication Reminders */}
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Bell className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Medication Reminders</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Never miss a dose with personalized medication reminders and refill alerts.
                  </p>
                  <div className="bg-[#25262b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-light">Lisinopril 10mg</p>
                      <span className="text-xs bg-[#99ffcc]/20 text-[#99ffcc] px-2 py-1 rounded-full">In 30 min</span>
                    </div>
                    <p className="text-xs text-gray-400">Take 1 tablet with food</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Doctor Reviews */}
            <div className="group md:col-span-2">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Star className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Verified Patient Reviews</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Read authentic reviews from real patients to find the right doctor for your needs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#25262b] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#2a2c31] flex items-center justify-center">
                          <span className="text-xs">JD</span>
                        </div>
                        <div>
                          <p className="text-sm font-light">John D.</p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#99ffcc] text-[#99ffcc]" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 font-light">
                        "Dr. Rodriguez was incredibly thorough and took the time to explain everything. The booking
                        process was seamless!"
                      </p>
                    </div>
                    <div className="bg-[#25262b] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#2a2c31] flex items-center justify-center">
                          <span className="text-xs">SM</span>
                        </div>
                        <div>
                          <p className="text-sm font-light">Sarah M.</p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#99ffcc] text-[#99ffcc]" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 font-light">
                        "I was able to find a specialist and book an appointment within minutes. The virtual consultation
                        saved me so much time!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Insurance Verification */}
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Insurance Verification</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Automatically check if doctors accept your insurance before booking.
                  </p>
                  <div className="bg-[#25262b] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-[#99ffcc]" />
                      <p className="text-sm font-light">Blue Cross Blue Shield</p>
                    </div>
                    <p className="text-xs text-gray-400">15 in-network providers nearby</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Find Nearby Doctors */}
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Map className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Find Nearby Doctors</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Locate healthcare providers near you with our interactive map.
                  </p>
                  <div className="bg-[#25262b] rounded-lg p-3 h-24 flex items-center justify-center">
                    <p className="text-sm text-gray-400 font-light">Interactive map preview</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Premium Care */}
            <div className="group">
              <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 h-full border border-[#2a2c31]/50 relative overflow-hidden group-hover:border-[#99ffcc]/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#99ffcc]/0 via-[#99ffcc]/5 to-[#99ffcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Award className="text-[#99ffcc] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">Premium Care</h3>
                  <p className="text-gray-400 font-light mb-4">
                    Upgrade to premium for priority appointments and exclusive benefits.
                  </p>
                  <Link
                    href="#"
                    className="bg-[#99ffcc] text-[#000e0f] font-light rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-[#8aa8a8] transition-colors"
                  >
                    Upgrade Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  