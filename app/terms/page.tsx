import Link from "next/link"
import Image from "next/image"

export default function TermsOfUse() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-800">
            <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing and using My Eye View's services, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">2. Description of Service</h2>
              <p>
                My Eye View provides real-time VR streaming services that allow users to experience first-person 
                perspectives of extreme sports and activities. Our service requires a VR headset and an active 
                subscription.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to 
                accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">4. Subscription and Payment</h2>
              <p>
                Access to our VR streaming content requires a paid subscription. Subscription fees are billed in 
                advance on a recurring basis. You may cancel your subscription at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">5. Content Usage</h2>
              <p>
                All content provided through My Eye View is for personal, non-commercial use only. You may not 
                reproduce, distribute, or create derivative works from our content without express written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">6. Health and Safety</h2>
              <p>
                VR experiences may cause motion sickness or discomfort in some users. Please take regular breaks 
                and discontinue use if you experience any discomfort. Consult with a physician before use if you 
                have any pre-existing medical conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">7. Limitation of Liability</h2>
              <p>
                My Eye View C Corp shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through our service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">9. Contact Information</h2>
              <p>
                For questions about these Terms of Use, please contact us at{" "}
                <a href="tel:+13024055540" className="text-[#4d86ad] hover:underline">
                  +1 (302) 405-5540
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link 
              href="/" 
              className="inline-block bg-[#4d86ad] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3d6a8d] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 px-6 sm:px-8 mt-16">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-white text-lg font-semibold">MY EYE VIEW C CORP</p>
          <p className="text-white/70 text-sm mt-2">
            © {new Date().getFullYear()} My Eye View. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
