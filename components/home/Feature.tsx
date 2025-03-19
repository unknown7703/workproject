"use client"
/* eslint-disable react/no-unescaped-entities */


import Image from "next/image"
import { Calendar, Clock, Search, Star, Shield, HeartPulse, Users, Stethoscope, CheckCircle } from "lucide-react"

export default function FeaturesBenefits() {
  return (
    <section id="features" className="bg-[#000e0f] text-white py-20 relative overflow-hidden">
      {/* Dot patterns */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"></div>
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
              <HeartPulse className="w-4 h-4" />
            </div>
            <span className="text-sm font-light">Healthcare made simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Find the right doctor in seconds</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Our platform connects patients with qualified healthcare professionals, making healthcare accessible to
            everyone, everywhere.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-light mb-10 text-center">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 border border-[#2a2c31]/50">
              <div className="bg-[#99ffcc]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="text-[#99ffcc] w-6 h-6" />
              </div>
              <h4 className="text-xl font-light mb-3">Smart Doctor Search</h4>
              <p className="text-gray-400 font-light">
                Find specialists based on symptoms, location, insurance, and availability with our AI-powered search.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 border border-[#2a2c31]/50">
              <div className="bg-[#99ffcc]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-[#99ffcc] w-6 h-6" />
              </div>
              <h4 className="text-xl font-light mb-3">Instant Scheduling</h4>
              <p className="text-gray-400 font-light">
                Book appointments in real-time with our synchronized calendar system. No more waiting on hold.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl p-6 border border-[#2a2c31]/50">
              <div className="bg-[#99ffcc]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Star className="text-[#99ffcc] w-6 h-6" />
              </div>
              <h4 className="text-xl font-light mb-3">Verified Reviews</h4>
              <p className="text-gray-400 font-light">
                Read authentic patient experiences and ratings to choose the best healthcare provider for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-light mb-6">Why Patients Love Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#99ffcc] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-light mb-2">Save Time</h4>
                  <p className="text-gray-400 font-light">
                    Reduce wait times by up to 70% with our streamlined booking process and digital check-in.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#99ffcc] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-light mb-2">Privacy Protected</h4>
                  <p className="text-gray-400 font-light">
                    HIPAA-compliant platform ensures your medical information remains secure and confidential.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#99ffcc] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-light mb-2">Family Management</h4>
                  <p className="text-gray-400 font-light">
                    Manage appointments for your entire family from a single dashboard with our family accounts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#99ffcc]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-[#99ffcc] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-light mb-2">Insurance Verification</h4>
                  <p className="text-gray-400 font-light">
                    Automatically check if doctors accept your insurance before booking to avoid surprise bills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
            <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-xl overflow-hidden border border-[#2a2c31]/50 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Doctor appointment app interface"
                width={500}
                height={400}
                className="w-full"
              />

              {/* App interface overlay */}
              <div className="absolute inset-0 bg-[#1a1b20]">
                <div className="p-4">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#99ffcc] rounded-xl p-1 w-8 h-8 flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-[#000e0f]" />
                      </div>
                      <span className="text-lg font-light">MedConnect</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#25262b] flex items-center justify-center">
                      <span className="text-sm">JD</span>
                    </div>
                  </div>

                  {/* Search bar */}
                  <div className="bg-[#25262b] rounded-full px-4 py-3 flex items-center gap-2 mb-6">
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">Find doctors, specialties...</span>
                  </div>

                  {/* Upcoming appointment */}
                  <div className="bg-[#25262b] rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-sm font-light">Upcoming Appointment</h4>
                      <span className="text-xs bg-[#99ffcc]/20 text-[#99ffcc] px-2 py-1 rounded-full">Tomorrow</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#2a2c31] flex items-center justify-center">
                        <HeartPulse className="w-6 h-6 text-[#99ffcc]" />
                      </div>
                      <div>
                        <h5 className="font-light">Dr. Sarah Johnson</h5>
                        <p className="text-xs text-gray-400">Cardiologist • 10:30 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Recommended doctors */}
                  <h4 className="text-sm font-light mb-4">Recommended Specialists</h4>
                  <div className="space-y-4">
                    {/* Doctor 1 */}
                    <div className="bg-[#25262b] rounded-xl p-3 flex gap-3">
                      <div className="w-14 h-14 rounded-lg bg-[#2a2c31] flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#99ffcc]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h5 className="font-light">Dr. Michael Chen</h5>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 fill-[#99ffcc] text-[#99ffcc]" />
                            <span className="text-xs ml-1">4.9</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400">Neurologist • 2.3 miles away</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs bg-[#2a2c31] px-2 py-1 rounded-full">Next: Today</span>
                          <span className="text-xs bg-[#2a2c31] px-2 py-1 rounded-full">In-network</span>
                        </div>
                      </div>
                    </div>

                    {/* Doctor 2 */}
                    <div className="bg-[#25262b] rounded-xl p-3 flex gap-3">
                      <div className="w-14 h-14 rounded-lg bg-[#2a2c31] flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#99ffcc]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h5 className="font-light">Dr. Emily Rodriguez</h5>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 fill-[#99ffcc] text-[#99ffcc]" />
                            <span className="text-xs ml-1">4.8</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400">Dermatologist • 1.5 miles away</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs bg-[#2a2c31] px-2 py-1 rounded-full">Next: Tomorrow</span>
                          <span className="text-xs bg-[#2a2c31] px-2 py-1 rounded-full">In-network</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-[#99ffcc] mb-2">10k+</div>
            <p className="text-sm font-light text-gray-400">Verified Doctors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-[#99ffcc] mb-2">500k+</div>
            <p className="text-sm font-light text-gray-400">Monthly Appointments</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-[#99ffcc] mb-2">98%</div>
            <p className="text-sm font-light text-gray-400">Patient Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-[#99ffcc] mb-2">30+</div>
            <p className="text-sm font-light text-gray-400">Medical Specialties</p>
          </div>
        </div>
      </div>
    </section>
  )
}
