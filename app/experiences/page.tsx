"use client"

import { Star, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const experiences = [
  {
    title: "Race Car POV",
    embedUrl: "https://www.youtube.com/embed/S8b55wS7ax8",
    videoId: "S8b55wS7ax8",
    type: "youtube" as const,
    testimonial: {
      name: "Sarah M.",
      review: "Absolutely incredible! I felt like I was actually in the driver's seat. The adrenaline rush was real, and I didn't have to leave my living room. Can't wait for the next race!",
      rating: 5,
    },
  },
  {
    title: "Horse Riding POV",
    localPath: "/Horse_riding POV.mp4",
    type: "local" as const,
    testimonial: {
      name: "David R.",
      review: "The connection you feel with the horse and the beautiful scenery was breathtaking. This is the future of entertainment. Highly recommend!",
      rating: 5,
    },
  },
  {
    title: "Sky Diving",
    embedUrl: "https://www.youtube.com/embed/gCjqB_kB_qM",
    videoId: "gCjqB_kB_qM",
    type: "youtube" as const,
    testimonial: {
      name: "Mike T.",
      review: "As someone who's terrified of heights, this was the perfect way to experience skydiving. The immersion was mind-blowing. I felt every moment of the free fall!",
      rating: 5,
    },
  },
  {
    title: "Basketball POV",
    localPath: "/basketball POV.mp4",
    type: "local" as const,
    testimonial: {
      name: "Jessica L.",
      review: "Being on the court with professional players was a dream come true. The perspective made me feel like I was part of the team. So much fun!",
      rating: 5,
    },
  },
  {
    title: "Soccer POV",
    localPath: "/Soccer POV.mp4",
    type: "local" as const,
    testimonial: {
      name: "Emily K.",
      review: "I've watched soccer my whole life, but never like this. Being in the player's shoes during a match was exhilarating. The crowd, the action - everything felt real!",
      rating: 5,
    },
  },
  {
    title: "Golf POV",
    localPath: "/Golf POV.mp4",
    type: "local" as const,
    testimonial: {
      name: "James P.",
      review: "Perfect for a relaxing evening. The precision and focus required was fascinating to experience firsthand. Great way to unwind and feel like a pro golfer.",
      rating: 5,
    },
  },
  {
    title: "Boxer POV",
    embedUrl: "https://www.youtube.com/embed/pZOl8xMwWXY",
    videoId: "pZOl8xMwWXY",
    type: "youtube" as const,
    testimonial: {
      name: "Marcus T.",
      review: "The intensity and focus required in boxing came through perfectly. I could feel the energy of the ring. An absolutely thrilling experience!",
      rating: 5,
    },
  },
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

          {/* Review Section */}
          <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-[#4d86ad]/10 to-[#4d86ad]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#4d86ad]/20 shadow-lg">
                <div className="flex gap-1 mb-4 sm:mb-5">
                  {[...Array(experience.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 text-lg sm:text-xl md:text-2xl leading-relaxed italic mb-6 sm:mb-8">
                  "{experience.testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#4d86ad] flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {experience.testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-black text-base sm:text-lg">{experience.testimonial.name}</p>
                    <p className="text-sm sm:text-base text-gray-600">{experience.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

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
