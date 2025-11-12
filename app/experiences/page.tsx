"use client"

import { Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const experiences = [
  {
    title: "Race Car POV",
    embedUrl: "https://www.youtube.com/embed/S8b55wS7ax8",
    videoId: "S8b55wS7ax8",
    type: "youtube" as const,
  },
  {
    title: "Horse Riding POV",
    localPath: "/Horse_riding POV.mp4",
    type: "local" as const,
  },
  {
    title: "Sky Diving",
    embedUrl: "https://www.youtube.com/embed/gCjqB_kB_qM",
    videoId: "gCjqB_kB_qM",
    type: "youtube" as const,
  },
  {
    title: "Basketball POV",
    localPath: "/basketball POV.mp4",
    type: "local" as const,
  },
  {
    title: "Soccer POV",
    localPath: "/Soccer POV.mp4",
    type: "local" as const,
  },
  {
    title: "Golf POV",
    localPath: "/Golf POV.mp4",
    type: "local" as const,
  },
  {
    title: "Boxer POV",
    embedUrl: "https://www.youtube.com/embed/pZOl8xMwWXY",
    videoId: "pZOl8xMwWXY",
    type: "youtube" as const,
  },
]

const availableSports = [
  "Surfing",
  "Mountain Climbing",
  "American Football",
  "Snowboarding",
  "Scuba Diving",
  "Mountain Biking",
  "Rugby",
  "Bungee Jumping",
  "Tennis",
  "Baseball",
  "Ice Hockey",
  "Skateboarding",
  "Paragliding",
  "Motocross",
  "Sailing",
  "Wrestling",
  "Volleyball",
  "Cricket",
]

export default function ExperiencesPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <section className="bg-[#4d86ad] py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            What to Expect
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Real people, real experiences, real excitement
          </p>
        </div>
      </section>

      {experiences.map((experience, index) => (
        <div key={index}>
          {/* Video Section */}
          <section className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
            <div className="container max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 sm:mb-12">
                {experience.title}
              </h2>
              
              <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl">
                {playingIndex === index ? (
                  experience.type === "youtube" ? (
                    <iframe
                      src={`${experience.embedUrl}?autoplay=1`}
                      title={experience.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <video
                      src={experience.localPath}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <>
                    {experience.type === "youtube" ? (
                      <img
                        src={`https://img.youtube.com/vi/${experience.videoId}/maxresdefault.jpg`}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={experience.localPath}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <button
                      onClick={() => setPlayingIndex(index)}
                      className="absolute inset-0 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-90"
                      aria-label={`Play ${experience.title}`}
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-white/50 ring-4 ring-white/20 hover:ring-white/30 transition-all hover:scale-110">
                        <Play className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#4d86ad] ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </section>


        </div>
      ))}

      {/* Available Sports Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Available Sports
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience these sports and many more in immersive VR
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {availableSports.map((sport, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#4d86ad] to-[#3a6a8a] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl transition-all hover:scale-105"
              >
                <p className="text-white font-bold text-sm sm:text-base md:text-lg">
                  {sport}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-4">
              And many more sports coming soon!
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              From extreme sports to professional leagues - experience them all in VR
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#4d86ad] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="container max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 leading-tight">
            Ready to Start Your Adventure?
          </h2>
          <Link href="/pricing">
            <button className="px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold bg-white text-[#4d86ad] rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95">
              View Pricing Plans
            </button>
          </Link>
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
