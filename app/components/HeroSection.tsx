import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Book a Free Clarity Call",
  ctaLink = "/booking",
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-cream to-sage/10 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl text-charcoal/80 mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaLink} className="btn-primary text-lg px-8 py-4">
              {ctaText}
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sage/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-sage/5 rounded-full blur-2xl"></div>
    </section>
  )
}
