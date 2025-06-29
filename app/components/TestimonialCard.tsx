import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="card">
      <Quote className="text-sage mb-4" size={24} />
      <blockquote className="text-charcoal/80 mb-4 italic text-lg leading-relaxed">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-sage font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-charcoal">{author}</p>
          {role && <p className="text-charcoal/60 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  )
}
