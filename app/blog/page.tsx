import type { Metadata } from "next"
import BlogPreviewCard from "../components/BlogPreviewCard"

export const metadata: Metadata = {
  title: "SoulSpring Blog – Tools for Healing & Growth",
  description: "Read guides, tools, and reflections for your emotional journey.",
}

export default function Blog() {
  const blogPosts = [
    {
      title: "Why You Feel Stuck — And How to Start Moving Again",
      excerpt:
        "Feeling stuck is often a sign that you're ready for growth, but old patterns are keeping you safe. Here's how to gently move forward without overwhelming your nervous system.",
      slug: "why-you-feel-stuck",
      date: "March 15, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop&crop=center",
    },
    {
      title: "5 Grounding Tools for Anxiety Relief",
      excerpt:
        "Simple, science-backed techniques you can use anywhere to calm your nervous system and find your center when anxiety strikes.",
      slug: "grounding-tools-anxiety",
      date: "March 8, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center",
    },
    {
      title: "Creating Boundaries with Love",
      excerpt:
        "Boundaries aren't walls — they're bridges to healthier relationships. Learn how to set limits that honor both your needs and your connections with others.",
      slug: "boundaries-with-love",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop&crop=center",
    },
    {
      title: "The Difference Between Healing and Fixing",
      excerpt:
        "You don't need to be fixed — you need to be witnessed, understood, and supported. Here's why this distinction matters for your healing journey.",
      slug: "healing-vs-fixing",
      date: "February 20, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop&crop=center",
    },
    {
      title: "When Self-Care Isn't Enough",
      excerpt:
        "Sometimes bubble baths and meditation aren't the answer. Here's how to recognize when you need deeper support and what to do about it.",
      slug: "when-self-care-isnt-enough",
      date: "February 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&crop=center",
    },
    {
      title: "Reparenting Your Inner Child",
      excerpt:
        "The wounded parts of you deserve compassion, not criticism. Learn how to become the loving parent your inner child always needed.",
      slug: "reparenting-inner-child",
      date: "February 5, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=400&h=200&fit=crop&crop=center",
    },
  ]

  const categories = [
    "All Posts",
    "Anxiety & Stress",
    "Emotional Healing",
    "Personal Growth",
    "Relationships",
    "Self-Compassion",
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">SoulSpring Blog</h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Tools, insights, and gentle guidance for your healing and growth journey. Real talk about the messy,
            beautiful process of becoming who you're meant to be.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0 ? "bg-sage text-white" : "bg-sage/10 text-charcoal hover:bg-sage/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="card lg:flex lg:items-center lg:gap-8">
              <div className="lg:w-1/2">
                <div className="aspect-video mb-4 lg:mb-0 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500&h=300&fit=crop&crop=center"
                    alt="Featured post"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center text-sm text-charcoal/60 mb-2">
                  <span className="bg-sage/20 text-sage px-2 py-1 rounded-full text-xs font-medium mr-3">Featured</span>
                  <time>March 15, 2024</time>
                  <span className="mx-2">·</span>
                  <span>7 min read</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                  Why You Feel Stuck — And How to Start Moving Again
                </h2>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Feeling stuck is often a sign that you're ready for growth, but old patterns are keeping you safe.
                  Here's how to gently move forward without overwhelming your nervous system.
                </p>
                <a href="/blog/why-you-feel-stuck" className="btn-primary">
                  Read Full Article
                </a>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogPreviewCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Never Miss a Post</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Get weekly insights, tools, and gentle reminders delivered to your inbox. Plus, receive our free guide: "5
            Grounding Tools for Anxiety Relief"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-sage/20 focus:outline-none focus:ring-2 focus:ring-sage/30"
            />
            <button className="btn-primary">Subscribe</button>
          </div>

          <p className="text-charcoal/60 text-sm mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
