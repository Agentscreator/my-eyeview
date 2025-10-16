import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-7 sm:p-8 lg:p-9 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-5 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-110">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-base sm:text-lg">{description}</p>
      </div>
    </div>
  )
}
