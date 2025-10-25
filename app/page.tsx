import { WaitlistForm } from "@/components/waitlist-form"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { Check, ImageIcon, Headset } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HamburgerMenu />
      <section className="relative bg-gradient-to-br from-[#4d86ad] via-[#5a95bd] to-[#4d86ad] py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-5xl mx-auto text-center space-y-10 sm:space-y-12 relative z-10">
          <div className="flex flex-col items-center gap-8 sm:gap-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 drop-shadow-2xl">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
              <Image src="/logo.png" alt="My Eye View" fill className="object-contain relative z-10" priority />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight drop-shadow-sm">
                MY EYE VIEW
              </h1>
              <div className="h-1 w-24 bg-white/40 mx-auto rounded-full"></div>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] px-4 drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Experience Real Adventures in Real Time
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed px-4 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Immerse yourself in live, first-person action from the comfort of your home using VR.
          </p>

          <div className="pt-8 sm:pt-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <WaitlistForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
            <Link href="/pricing">
              <button className="group px-10 py-5 text-lg font-bold bg-white text-[#4d86ad] rounded-2xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  View Pricing
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </Link>
            <Link href="/experiences">
              <button className="group px-10 py-5 text-lg font-bold bg-black/30 backdrop-blur-sm text-white border-2 border-white/50 rounded-2xl hover:bg-black/40 hover:border-white transition-all shadow-xl hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  See Experiences
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 md:py-32 px-6 sm:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-[#4d86ad] uppercase tracking-wider px-4 py-2 bg-[#4d86ad]/10 rounded-full">
                About Us
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-6">
              Redefining Adventure
            </h2>
            <div className="h-1 w-20 bg-[#4d86ad] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
            <div className="group relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#4d86ad]/20 hover:-translate-y-2">
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#4d86ad]/5 rounded-2xl group-hover:scale-110 transition-transform"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">?</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">The Problem</h3>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Many people desire to experience thrilling adventures but lack the opportunity or ability to do so.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#4d86ad]/20 hover:-translate-y-2">
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#4d86ad]/5 rounded-2xl group-hover:scale-110 transition-transform"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">The Solution</h3>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  We provide real-time VR streams of extreme sports and activities, giving you a first-person perspective of action.
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-[2.5rem] p-10 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            <div className="flex-1 text-center md:text-left relative z-10">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                See the World Through Their Eyes
              </h3>
              <p className="text-lg text-white/90">
                Experience adventures like never before with immersive VR technology
              </p>
            </div>
            <div className="relative w-full max-w-md md:w-80 h-64 md:h-80 flex-shrink-0 z-10">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              <Image src="/vr-headset-person.png" alt="VR Experience" fill className="object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 md:py-32 px-6 sm:px-8 overflow-hidden">
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-[#4d86ad] uppercase tracking-wider px-4 py-2 bg-[#4d86ad]/10 rounded-full">
                Simple Process
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#4d86ad]/20 rounded-full blur-xl"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Check className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-[#4d86ad] text-lg">
                    1
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Subscribe to a plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose the perfect plan that fits your adventure needs
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#4d86ad]/20 rounded-full blur-xl"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <ImageIcon className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-[#4d86ad] text-lg">
                    2
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Select a live event</h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse our catalog of thrilling real-time experiences
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#4d86ad]/20 rounded-full blur-xl"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Headset className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-[#4d86ad] text-lg">
                    3
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Watch in VR</h3>
                <p className="text-gray-600 leading-relaxed">
                  Immerse yourself in the action with your VR headset
                </p>
              </div>
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
