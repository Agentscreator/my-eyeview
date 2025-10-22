import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-800">
            <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">1. Information We Collect</h2>
              <p>
                My Eye View Corp collects information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Payment and billing information</li>
                <li>Account credentials</li>
                <li>Usage data and preferences</li>
                <li>Device information and VR headset specifications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our VR streaming services</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information only in the following 
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your consent</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities and to remember your preferences. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">7. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">8. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black mt-8">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
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
          <p className="text-white text-lg font-semibold">MY EYE VIEW CORP</p>
          <p className="text-white/70 text-sm mt-2">
            © {new Date().getFullYear()} My Eye View. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
