import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Single Event",
    price: "$9.99",
    period: "per event",
    description: "Perfect for trying out the experience",
    features: [
      "Access to 1 live event",
      "Full VR experience",
      "HD streaming quality",
      "24-hour replay access",
    ],
  },
  {
    name: "7-Day Pass",
    price: "$24.99",
    period: "7 days",
    description: "Great for a week of adventure",
    features: [
      "Unlimited events for 7 days",
      "Full VR experience",
      "HD streaming quality",
      "Priority event selection",
      "48-hour replay access",
    ],
  },
  {
    name: "30-Day Pass",
    price: "$79.99",
    period: "30 days",
    description: "Best value for regular users",
    features: [
      "Unlimited events for 30 days",
      "Full VR experience",
      "4K streaming quality",
      "Priority event selection",
      "7-day replay access",
      "Exclusive events",
    ],
    popular: true,
  },
  {
    name: "Season Pass",
    price: "$199.99",
    period: "per season",
    description: "Follow your favorite sport all season",
    features: [
      "All events for one sport season",
      "Full VR experience",
      "4K streaming quality",
      "Priority access",
      "Unlimited replays",
      "Behind-the-scenes content",
      "Season highlights package",
    ],
  },
  {
    name: "Annual Pass",
    price: "$599.99",
    period: "per year",
    description: "Ultimate access for true enthusiasts",
    features: [
      "Unlimited events all year",
      "Full VR experience",
      "4K streaming quality",
      "VIP priority access",
      "Unlimited replays",
      "All exclusive events",
      "Behind-the-scenes content",
      "Early access to new sports",
      "Dedicated support",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#4d86ad] py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Choose Your Plan
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Flexible pricing for every adventure seeker
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 px-6 sm:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 space-y-6 transition-all hover:shadow-2xl ${
                  plan.popular
                    ? "border-4 border-[#4d86ad] shadow-xl scale-105"
                    : "border-2 border-gray-200 hover:border-[#4d86ad]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4d86ad] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-black">{plan.price}</span>
                  </div>
                  <p className="text-gray-600">{plan.period}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4d86ad] flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-[#4d86ad] text-white hover:bg-[#3d6a8d] shadow-lg"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-gray-600 text-lg">
              All plans include access to our VR platform and customer support
            </p>
            <p className="text-gray-500">
              Billing functionality will be available soon. Join our waitlist to be notified!
            </p>
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
