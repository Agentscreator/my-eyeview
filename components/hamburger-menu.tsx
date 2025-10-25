"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ChevronRight, Phone, Mail } from "lucide-react"

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-40 p-3 bg-black/90 backdrop-blur-sm rounded-full shadow-2xl hover:bg-black transition-all group"
        aria-label="Open menu"
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-white transition-all group-hover:w-7"></span>
          <span className="block w-6 h-0.5 bg-white transition-all"></span>
          <span className="block w-6 h-0.5 bg-white transition-all group-hover:w-7"></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[420px] max-w-[90vw] bg-gradient-to-br from-gray-900 via-gray-900 to-black shadow-2xl z-50 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4d86ad]/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2.5 hover:bg-white/10 rounded-full transition-all group z-10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Menu Content */}
        <div className="h-full overflow-y-auto px-10 py-12">
          {/* Logo Section */}
          <div className="mb-12 pt-4">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/logo.png" alt="My Eye View" fill className="object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">MY EYE VIEW</h2>
            <p className="text-sm text-gray-400 mt-2">Experience the extraordinary</p>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">Menu</h3>
              <ul className="space-y-1">
                {[
                  { href: "/", label: "Home" },
                  { href: "/experiences", label: "Experiences" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between px-4 py-3.5 text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#4d86ad] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Section */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">About</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                  >
                    <span className="text-base font-medium">About Us</span>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#4d86ad] group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                  >
                    <span className="text-base font-medium">Get in Touch</span>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#4d86ad] group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">Legal</h3>
              <ul className="space-y-2">
                {[
                  { href: "/terms", label: "Terms of Use" },
                  { href: "/privacy", label: "Privacy Policy" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500 px-4">
              © {new Date().getFullYear()} My Eye View Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
