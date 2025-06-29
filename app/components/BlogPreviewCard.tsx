import Link from "next/link"
import Image from "next/image"

interface BlogPreviewCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readTime?: string
  image?: string
}

export default function BlogPreviewCard({
  title,
  excerpt,
  slug,
  date,
  readTime = "5 min read",
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center",
}: BlogPreviewCardProps) {
  return (
    <article className="card group hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="aspect-video mb-4 overflow-hidden rounded-xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center text-sm text-charcoal/60 mb-2">
          <time>{date}</time>
          <span className="mx-2">·</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-sage transition-colors">{title}</h3>
        <p className="text-charcoal/70 leading-relaxed">{excerpt}</p>
      </Link>
    </article>
  )
}
