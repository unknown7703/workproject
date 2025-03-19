"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Routes } from "@/routes/Routes";
export default function MainNavbar() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
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
          {isAuthenticated && (
            <li>
              <Link
                href={Routes.dashboard}
                className="text-gray-400 text-sm font-light hover:text-white transition-colors"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
