import { WaitlistForm } from "@/components/waitlist-form"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { Check, ImageIcon, Headset } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HamburgerMenu />
      <section className="bg-[#4d86ad] py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-8">
        <div className="container max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
              <Image src="/logo.png" alt="My Eye View" fill className="object-contain" priority />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">MY EYE VIEW</h1>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4">
            Experience Real Adventures in Real Time
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed px-4">
            Immerse yourself in live, first-person action from the comfort of your home using VR.
          </p>

          <div className="pt-6 sm:pt-8">
            <WaitlistForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/pricing">
              <button className="px-8 py-4 text-lg font-bold bg-white text-[#4d86ad] rounded-2xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105">
                View Pricing
              </button>
            </Link>
            <Link href="/experiences">
              <button className="px-8 py-4 text-lg font-bold bg-black/20 text-white border-2 border-white rounded-2xl hover:bg-black/30 transition-all">
                See Experiences
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-10 sm:mb-14 md:mb-16">About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-14">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">The Problem</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                Many people desire to experience thrilling adventures but lack the opportunity or ability to do so.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">The Solution</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                We provide real-time VR streams of extreme sports and activities, giving you a first-person perspective
                of action.
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                See the World Through Their Eyes
              </h3>
            </div>
            <div className="relative w-full max-w-sm md:w-72 h-56 md:h-72 flex-shrink-0">
              <Image src="/vr-headset-person.png" alt="VR Experience" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black text-center mb-12 sm:mb-16 md:mb-20">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-10 md:gap-14">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-black flex items-center justify-center">
                <Check className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black" strokeWidth={2.5} />
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-black leading-snug">Subscribe to a plan</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-black flex items-center justify-center">
                <ImageIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black" strokeWidth={2.5} />
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-black leading-snug">Select a live event</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-black flex items-center justify-center">
                <Headset className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black" strokeWidth={2.5} />
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-black leading-snug">Watch in VR</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 sm:py-24 md:py-28 px-6 sm:px-8 overflow-hidden">
        {/* Decorative gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4d86ad]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4d86ad]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4d86ad]/5 rounded-full blur-3xl"></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Top Section with Logo and CTA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 pb-16 border-b border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image src="/logo.png" alt="My Eye View" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">MY EYE VIEW</h3>
                  <p className="text-sm text-gray-400">Experience the extraordinary</p>
                </div>
              </div>
            </div>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-[#4d86ad] to-[#3a6a8a] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#4d86ad]/20 transition-all hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            <div className="space-y-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pages</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+13024055540" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    +1 (302) 405-5540
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#4d86ad] transition-all"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-white text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-white text-sm">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-white text-sm">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} My Eye View Corp. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Designed with precision. Built for adventure.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
