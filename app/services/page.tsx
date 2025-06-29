import type { Metadata } from "next"
import ServiceCard from "../components/ServiceCard"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SoulSpring Services – Coaching & Emotional Wellness",
  description: "Explore SoulSpring's therapy-based and coaching-based sessions.",
}

export default function Services() {
  const therapyServices = [
    {
      title: "1:1 Emotional Clarity Session",
      description:
        "A guided space to explore thoughts, emotions, and inner blocks with compassionate, trauma-informed support.",
      duration: "60 min",
      price: "$65",
      features: [
        "Safe, non-judgmental environment",
        "Trauma-informed approach",
        "Emotional processing and validation",
        "Practical coping strategies",
      ],
      ctaText: "Book Session",
      ctaLink: "/booking",
    },
    {
      title: "Anxiety & Stress Relief Package",
      description: "Tools for nervous system calm, reframing anxious thoughts, and building emotional resilience.",
      duration: "3 sessions",
      price: "$180",
      features: [
        "Nervous system regulation techniques",
        "Cognitive reframing strategies",
        "Grounding and breathing exercises",
        "Personalized anxiety toolkit",
      ],
      ctaText: "Book Package",
      ctaLink: "/booking",
    },
    {
      title: "Trauma-Informed Healing Sessions",
      description: "Safe space to process life experiences with grounded support and gentle guidance.",
      duration: "60 min",
      price: "Sliding scale available",
      features: [
        "Trauma-sensitive approach",
        "Body-based healing techniques",
        "EMDR-informed processing",
        "Integration and meaning-making",
      ],
      ctaText: "Learn More",
      ctaLink: "/contact",
    },
  ]

  const coachingServices = [
    {
      title: "Confidence & Purpose Coaching",
      description:
        "Discover your authentic goals, build unshakeable self-trust, and release inner resistance to success.",
      duration: "60 min",
      price: "$70",
      features: [
        "Values and purpose exploration",
        "Confidence-building exercises",
        "Goal setting and action planning",
        "Limiting belief transformation",
      ],
      ctaText: "Book Session",
      ctaLink: "/booking",
    },
    {
      title: "Mindset Reset Package",
      description: "Reframe limiting beliefs, gain self-trust, and learn healthy boundary skills for lasting change.",
      duration: "3 sessions",
      price: "$200",
      features: [
        "Mindset assessment and reset",
        "Boundary setting strategies",
        "Self-trust building exercises",
        "Accountability and support",
      ],
      ctaText: "Book Package",
      ctaLink: "/booking",
    },
    {
      title: "SoulSpring Blend Coaching",
      description:
        "Fully personalized sessions combining therapy-style reflection with goal-driven coaching for comprehensive growth.",
      duration: "60-90 min",
      price: "Custom pricing",
      features: [
        "Integrated therapy + coaching approach",
        "Customized to your unique needs",
        "Emotional healing + forward momentum",
        "Flexible session structure",
      ],
      ctaText: "Discuss Options",
      ctaLink: "/contact",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Services & Offerings</h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Choose from therapy-focused sessions for emotional healing or coaching-focused sessions for growth and goal
            achievement — or blend both approaches for comprehensive transformation.
          </p>
        </div>
      </section>

      {/* Mental Health Therapy Sessions */}
      <section id="therapy" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">🧠 Mental Health Therapy Sessions</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Trauma-informed, emotionally-focused sessions designed to help you process, heal, and find relief from
              anxiety, stress, and emotional overwhelm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Life Coaching / Self-Development */}
      <section id="coaching" className="section-padding bg-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">🌱 Life Coaching / Self-Development</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Goal-focused, action-oriented sessions to help you build confidence, discover your purpose, and create the
              life you truly want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sage font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Book Your Session</h3>
              <p className="text-charcoal/70">
                Choose your service and schedule a time that works for you. All sessions are conducted via secure video
                call.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sage font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Connect & Explore</h3>
              <p className="text-charcoal/70">
                We'll create a safe space to explore what's on your heart and mind, with no judgment or pressure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sage font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Integrate & Grow</h3>
              <p className="text-charcoal/70">
                Leave with practical tools, new insights, and a clear sense of your next steps forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-sage/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                What's the difference between therapy and coaching sessions?
              </h3>
              <p className="text-charcoal/70">
                Therapy sessions focus on emotional processing, healing past wounds, and developing coping strategies.
                Coaching sessions are more goal-oriented, focusing on building confidence, clarifying purpose, and
                taking action. Our SoulSpring Blend combines both approaches.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-3">Do you accept insurance?</h3>
              <p className="text-charcoal/70">
                Currently, I operate as a private practice and do not accept insurance. However, I offer sliding scale
                options for those who need financial assistance, and you may be able to use HSA/FSA funds for sessions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-3">How do I know which service is right for me?</h3>
              <p className="text-charcoal/70">
                Book a free 20-minute clarity call! We'll discuss what you're looking for and I'll help you choose the
                approach that feels most aligned with your needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Book a free clarity call to discuss which approach feels right for you, or dive right in with your first
            session.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-lg px-8 py-4">
              Book Free Clarity Call
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
