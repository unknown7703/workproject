"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { Stethoscope } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { useSession } from "next-auth/react";
import AuthBar from "../auth/AuthBar";

export default function Hero() {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen bg-[#000e0f] text-white overflow-hidden relative">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="absolute  left-[40%] w-[15px] h-[200px] bg-white/50 blur-[40px] rotate-40" />
        <div className="absolute  left-[45%] w-[10px] h-[150px] bg-white/50 blur-[35px] rotate-30" />
        <div className="absolute  left-[50%] w-[10px] h-[150px] bg-white/50 blur-[35px] rotate-15" />
        <div className="absolute  right-[50%] w-[10px] h-[150px] bg-white/50 blur-[35px] -rotate-10" />
        <div className="absolute  right-[45%] w-[10px] h-[150px] bg-white/50 blur-[35px] -rotate-30" />
        <div className="absolute  right-[40%] w-[15px] h-[200px] bg-white/50 blur-[40px] -rotate-40" />

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#99ffcc] rounded-xl p-1 w-8 h-8 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-[#000e0f]" />
            </div>
            <span className="text-lg font-light">MedConnect</span>
          </div>
        </div>

        <nav className="hidden md:block">
          <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-4 py-2">
            <ul className="flex space-x-6">
              <li>
                <Link href="#home" className="text-white text-sm font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 text-sm font-light hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-gray-400 text-sm font-light hover:text-white transition-colors"
                >
                  Benefits
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 text-sm font-light hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div>
          <Link
            href="/sign-up"
            className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm font-light hover:bg-[#1a1b20]/50 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className="bg-[#99FFCC] backdrop-blur-md rounded-full px-6 py-2 text-black text-sm font-light hover:bg-[#1a1b20]/50 hover:text-white transition-colors"
          >
            Log In
          </Link>
        </div> */}
        <AuthBar/>
      </header>

      <main className="container mx-auto px-4 pt-16 pb-8 flex flex-col items-center relative">
        {/* Dot pattern - top right */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="grid grid-cols-10 gap-4">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"
              ></div>
            ))}
          </div>
        </div>

        {/* Dot pattern - bottom left */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <div className="grid grid-cols-10 gap-4">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Manage projects pill */}
          <div className="bg-[#1a1b20]/30 backdrop-blur-md rounded-full px-4 py-2 mb-6 inline-flex items-center gap-2">
            <div className="bg-white/10 rounded-full p-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7L9 13L13 9L21 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-light">
              Manage Healthcare end-to-end
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
            Book Trusted Doctors Online <br /> Anytime, Anywhere!
          </h1>

          {/* Subheading */}
          <p className="text-md text-gray-400 font-light mb-6 max-w-2xl">
            Find and book top-rated doctors instantly. Browse specialists, check
            availability, and schedule appointments with ease. Get quality
            healthcare at your convenience!
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="bg-[#99ffcc] text-black font-light rounded-full px-8 py-4 flex items-center gap-2 hover:bg-[#8aa8a8] transition-colors mb-4"
          >
            Get Started For Free
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* No credit card required */}
          <div className="flex items-center gap-2 text-gray-400 text-sm font-light">
            <Info className="w-4 h-4" />
            <span>No credit card required</span>
          </div>
        </div>

        {/* App Screenshot */}
        <div className="relative w-full max-w-5xl mx-auto mt-16">
          {/* Dot pattern - top left of screenshot */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10">
            <div className="grid grid-cols-12 gap-4">
              {[...Array(128)].map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"
                ></div>
              ))}
            </div>
          </div>

          {/* Dot pattern - bottom right of screenshot */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
            <div className="grid grid-cols-8 gap-3">
              {[...Array(64)].map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"
                ></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-lg overflow-hidden  shadow-2xl">
            <Image
              src="/suprema.svg"
              alt="Maxter App Interface"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#99ffcc]/5 rounded-full blur-3xl"></div>

      {/* Dot patterns */}
      <div className="absolute top-20 left-20 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 right-20 w-40 h-40 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-[2px] rounded-full bg-[#99ffcc]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
