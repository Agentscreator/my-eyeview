import { VideoShowcase } from "@/components/video-showcase"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah M.",
    experience: "Race Car POV",
    review: "Absolutely incredible! I felt like I was actually in the driver's seat. The adrenaline rush was real, and I didn't have to leave my living room. Can't wait for the next race!",
    rating: 5,
  },
  {
    name: "Mike T.",
    experience: "Sky Diving",
    review: "As someone who's terrified of heights, this was the perfect way to experience skydiving. The immersion was mind-blowing. I felt every moment of the free fall!",
    rating: 5,
  },
  {
    name: "Jessica L.",
    experience: "Basketball POV",
    review: "Being on the court with professional players was a dream come true. The perspective made me feel like I was part of the team. So much fun!",
    rating: 5,
  },
  {
    name: "David R.",
    experience: "Horse Riding",
    review: "The connection you feel with the horse and the beautiful scenery was breathtaking. This is the future of entertainment. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily K.",
    experience: "Soccer POV",
    review: "I've watched soccer my whole life, but never like this. Being in the player's shoes during a match was exhilarating. The crowd, the action - everything felt real!",
    rating: 5,
  },
  {
    name: "James P.",
    experience: "Golf POV",
    review: "Perfect for a relaxing evening. The precision and focus required was fascinating to experience firsthand. Great way to unwind and feel like a pro golfer.",
    rating: 5,
  },
]

export default function ExperiencesPage() {
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

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-10 sm:mb-12 md:mb-16 px-4">
            Customer Reviews
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow border-2 border-gray-200 flex flex-col"
              >
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic flex-grow">
                  "{testimonial.review}"
                </p>
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="font-bold text-black text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">Experience Examples</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              Watch real first-person adventures
            </p>
          </div>

          <VideoShowcase />
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
