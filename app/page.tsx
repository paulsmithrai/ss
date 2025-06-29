import HeroSection from "./components/HeroSection"
import ServiceCard from "./components/ServiceCard"
import TestimonialCard from "./components/TestimonialCard"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const services = [
    {
      title: "Therapy Sessions",
      description: "Safe, guided spaces to explore emotions and process life experiences with trauma-informed support.",
      ctaLink: "/services#therapy",
    },
    {
      title: "Life Coaching",
      description: "Goal-focused sessions to build confidence, discover purpose, and create lasting positive change.",
      ctaLink: "/services#coaching",
    },
    {
      title: "Emotional Growth Packages",
      description:
        "Comprehensive programs combining therapy techniques with coaching strategies for deep transformation.",
      ctaLink: "/services#packages",
    },
  ]

  const testimonials = [
    {
      quote:
        "SoulSpring gave me more than clarity — it gave me hope. I finally feel like I understand myself and have the tools to move forward.",
      author: "A.S.",
      role: "Client",
    },
    {
      quote:
        "I never felt judged. Just deeply understood. The sessions helped me process years of anxiety in a safe, supportive environment.",
      author: "J.R.",
      role: "Client",
    },
  ]

  return (
    <>
      <HeroSection
        title="A Safe Space to Heal, Grow, and Transform"
        subtitle="At SoulSpring, we help you overcome anxiety, self-doubt, and emotional blocks through therapy-informed coaching."
      />

      {/* Intro/About Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Hi, I'm Paul</h2>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                I'm a trauma-informed coach and emotional wellness guide. I help individuals rediscover clarity, calm,
                and purpose through SoulSpring.
              </p>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                My approach blends therapeutic listening with goal-focused coaching to create a unique healing
                experience that honors both your emotional journey and your desire for growth.
              </p>
              <Link href="/about" className="btn-primary">
                Learn My Story
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile-logo.png"
                  alt="Paul - SoulSpring Founder"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">How I Can Support You</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Choose from therapy-focused sessions, life coaching, or our unique blend that combines both approaches for
              comprehensive healing and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Clients Say</h2>
            <p className="text-xl text-charcoal/70">Real stories from people who found their way back to themselves.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials" className="btn-secondary">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter/Resource Sign-up */}
      <section className="section-padding bg-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Start Your Healing Journey Today</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Get weekly insights, grounding tools, and gentle reminders delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-sage/20 focus:outline-none focus:ring-2 focus:ring-sage/30"
            />
            <button className="btn-primary">Subscribe</button>
          </div>

          <p className="text-charcoal/60 text-sm mt-4">Plus get our free PDF: "5 Grounding Tools for Anxiety Relief"</p>
        </div>
      </section>
    </>
  )
}
