import { Check, ImageIcon, Headset } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8">
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

      <section className="bg-gray-100 py-16 sm:py-20 md:py-24 px-6 sm:px-8">
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

      <footer className="bg-black py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="text-white/80 hover:text-white transition-colors">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+13024055540" className="text-white/80 hover:text-white transition-colors">
                    +1 (302) 405-5540
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center space-y-2">
            <p className="text-white text-xl font-semibold">MY EYE VIEW CORP</p>
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} My Eye View. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
