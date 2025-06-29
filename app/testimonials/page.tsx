import type { Metadata } from "next"
import TestimonialCard from "../components/TestimonialCard"

export const metadata: Metadata = {
  title: "Client Stories – SoulSpring Testimonials",
  description: "Read real stories from people who found healing and growth through SoulSpring.",
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoulSpring gave me more than clarity — it gave me hope. I finally feel like I understand myself and have the tools to move forward with confidence.",
      author: "A.S.",
      role: "Anxiety & Stress Relief Package",
    },
    {
      quote:
        "I never felt judged. Just deeply understood. The sessions helped me process years of anxiety in a safe, supportive environment.",
      author: "J.R.",
      role: "1:1 Emotional Clarity Sessions",
    },
    {
      quote:
        "The SoulSpring Blend approach was exactly what I needed. I got the emotional healing AND the practical tools to build the life I want.",
      author: "M.T.",
      role: "SoulSpring Blend Coaching",
    },
    {
      quote:
        "I was skeptical about online therapy, but this felt even more intimate and safe than in-person sessions. I could be completely myself.",
      author: "K.L.",
      role: "Trauma-Informed Healing Sessions",
    },
    {
      quote:
        "The confidence coaching helped me finally quit the job that was draining my soul and start my own business. I couldn't have done it without this support.",
      author: "D.W.",
      role: "Confidence & Purpose Coaching",
    },
    {
      quote:
        "After just three sessions, I had tools I still use daily for managing my anxiety. The investment in myself was worth every penny.",
      author: "R.H.",
      role: "Mindset Reset Package",
    },
    {
      quote:
        "I felt heard and seen in a way I hadn't experienced before. This work helped me reconnect with parts of myself I thought I'd lost forever.",
      author: "S.M.",
      role: "1:1 Emotional Clarity Sessions",
    },
    {
      quote:
        "The trauma-informed approach made all the difference. I finally felt safe enough to explore the deeper patterns that were keeping me stuck.",
      author: "L.P.",
      role: "Trauma-Informed Healing Sessions",
    },
    {
      quote:
        "I came for help with anxiety but left with so much more — self-compassion, boundaries, and a clear vision for my future.",
      author: "T.K.",
      role: "SoulSpring Blend Coaching",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Client Stories</h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Real stories from people who found their way back to themselves through SoulSpring. Each journey is unique,
            but the transformation is real.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">The SoulSpring Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">95%</div>
              <p className="text-charcoal/70">
                of clients report feeling more confident and clear about their direction after just 3 sessions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">200+</div>
              <p className="text-charcoal/70">individuals supported on their healing and growth journey</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">4.9★</div>
              <p className="text-charcoal/70">average rating from client feedback surveys</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">What Makes SoulSpring Different?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Trauma-Informed Approach</h3>
              <p className="text-charcoal/70">
                "I felt safe to explore difficult emotions without being pushed or judged. The pace was always right for
                me." — Client feedback
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Practical + Emotional</h3>
              <p className="text-charcoal/70">
                "I didn't just process my feelings — I left with actual tools and strategies I could use in my daily
                life." — Client feedback
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Personalized Care</h3>
              <p className="text-charcoal/70">
                "Every session felt tailored to exactly what I needed that day. No cookie-cutter approaches." — Client
                feedback
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Lasting Change</h3>
              <p className="text-charcoal/70">
                "The changes I made in our sessions have stuck. I still use the tools we developed together months
                later." — Client feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Join the hundreds of people who have found healing, clarity, and confidence through SoulSpring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-primary text-lg px-8 py-4">
              Book Your Free Clarity Call
            </a>
            <a href="/contact" className="btn-secondary text-lg px-8 py-4">
              Ask a Question First
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
