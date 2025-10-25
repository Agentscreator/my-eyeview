"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-40 p-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        {/* Menu Content */}
        <div className="p-8 pt-20">
          <h2 className="text-2xl font-bold text-black mb-8">MY EYE VIEW</h2>

          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-black hover:text-[#4d86ad] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiences"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-black hover:text-[#4d86ad] transition-colors"
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-black hover:text-[#4d86ad] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-black hover:text-[#4d86ad] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">About</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Experience real-time VR streams of extreme sports and activities from the comfort of your home.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-700 hover:text-[#4d86ad] transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-700 hover:text-[#4d86ad] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Contact</h3>
              <a
                href="tel:+13024055540"
                className="block text-sm text-gray-700 hover:text-[#4d86ad] transition-colors"
              >
                +1 (302) 405-5540
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
