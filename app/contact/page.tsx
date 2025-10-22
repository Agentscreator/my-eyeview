import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#4d86ad] py-8 px-6 sm:px-8">
        <div className="container max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="relative w-16 h-16">
              <Image src="/logo.png" alt="My Eye View" fill className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-black">MY EYE VIEW</h1>
          </Link>
        </div>
      </header>

      <main className="py-16 px-6 sm:px-8">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">Contact Us</h1>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-800">
              Have questions about My Eye View? We'd love to hear from you.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
                <p className="text-gray-700">
                  Our team is here to help answer any questions you may have about our VR streaming service.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4d86ad] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg">Phone</h3>
                    <a href="tel:+13024055540" className="text-[#4d86ad] hover:underline text-lg">
                      +1 (302) 405-5540
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4d86ad] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-black">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-black text-lg mb-2">What VR headsets are compatible?</h3>
                  <p className="text-gray-700">
                    My Eye View is compatible with most major VR headsets including Meta Quest, PlayStation VR, 
                    and PC-based VR systems.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-black text-lg mb-2">How do I cancel my subscription?</h3>
                  <p className="text-gray-700">
                    You can cancel your subscription at any time through your account settings. Your access will 
                    continue until the end of your current billing period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-black text-lg mb-2">Is there a free trial?</h3>
                  <p className="text-gray-700">
                    Join our waitlist to be notified about free trial opportunities and special launch offers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-black text-lg mb-2">What types of experiences are available?</h3>
                  <p className="text-gray-700">
                    We offer live streams of extreme sports including skydiving, mountain biking, surfing, rock 
                    climbing, and many other thrilling activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#4d86ad] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience the Adventure?</h2>
              <p className="text-white/90 mb-6">
                Join our waitlist today and be among the first to experience real-time VR adventures.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-[#4d86ad] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 px-6 sm:px-8 mt-16">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-white text-lg font-semibold">MY EYE VIEW CORP</p>
          <p className="text-white/70 text-sm mt-2">
            © {new Date().getFullYear()} My Eye View. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
