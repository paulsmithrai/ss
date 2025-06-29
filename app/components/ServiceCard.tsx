import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  price?: string
  duration?: string
  features?: string[]
  ctaText?: string
  ctaLink?: string
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  features,
  ctaText = "Learn More",
  ctaLink = "/services",
}: ServiceCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
        <p className="text-charcoal/70 mb-4">{description}</p>

        {(price || duration) && (
          <div className="flex items-center gap-2 mb-4">
            {duration && <span className="text-sage font-medium">{duration}</span>}
            {price && duration && <span className="text-charcoal/40">·</span>}
            {price && <span className="text-sage font-bold">{price}</span>}
          </div>
        )}

        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sage mr-2">•</span>
                <span className="text-charcoal/70">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link href={ctaLink} className="btn-primary text-center">
        {ctaText}
      </Link>
    </div>
  )
}
