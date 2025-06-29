import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meet Your Guide – SoulSpring Story",
  description: "Learn about the founder of SoulSpring and her healing philosophy.",
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Meet Your Guide</h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            My journey to creating SoulSpring — a space where healing meets growth, and where you're never alone in your
            transformation.
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile-logo.png"
                  alt="Paul - SoulSpring Founder"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">My Story</h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  I'm Paul, founder of SoulSpring. I've created this space for anyone who feels lost, overwhelmed, or
                  emotionally stuck — because I've been there too.
                </p>
                <p>
                  My own journey through anxiety, self-doubt, and life transitions taught me that healing isn't linear,
                  and growth doesn't happen in isolation. It happens in relationship, in safe spaces, and with gentle
                  guidance that honors both where you've been and where you're going.
                </p>
                <p>
                  After years of my own therapy and personal development work, I realized I wanted to create something
                  different — a space that bridges the gap between traditional therapy and life coaching, offering the
                  depth of emotional healing with the forward momentum of goal-focused growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">My Healing Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Trauma-Informed</h3>
              <p className="text-charcoal/70">
                Every session is grounded in understanding how our past experiences shape our present. We work with your
                nervous system, not against it.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Holistic Approach</h3>
              <p className="text-charcoal/70">
                True healing happens when we address the mind, body, and spirit. We explore thoughts, emotions, and
                somatic experiences together.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Strengths-Based</h3>
              <p className="text-charcoal/70">
                You already have everything you need within you. My role is to help you reconnect with your inner wisdom
                and inherent resilience.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Growth-Oriented</h3>
              <p className="text-charcoal/70">
                While we honor your healing process, we also focus on building the life you want — with practical tools
                and actionable steps forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What SoulSpring Represents */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-8">What SoulSpring Represents</h2>

          <div className="text-lg text-charcoal/80 leading-relaxed space-y-6">
            <p>
              SoulSpring represents the natural wellspring of wisdom, resilience, and healing that exists within each of
              us. Sometimes life's challenges can make us feel disconnected from this inner source, but it's always
              there, waiting to be rediscovered.
            </p>
            <p>
              In our work together, we create the conditions for your own inner spring to flow freely again — clearing
              away the debris of old patterns, limiting beliefs, and unprocessed emotions that may be blocking your
              natural vitality and joy.
            </p>
            <p>This is sacred work, and I'm honored to witness and support your journey back to yourself.</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-sage/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Training & Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Formal Training</h3>
              <ul className="space-y-3 text-charcoal/70">
                <li>• [Certification/Degree in relevant field]</li>
                <li>• Trauma-Informed Coaching Certification</li>
                <li>• [Additional relevant training]</li>
                <li>• Ongoing supervision and continuing education</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Specializations</h3>
              <ul className="space-y-3 text-charcoal/70">
                <li>• Anxiety and stress management</li>
                <li>• Emotional regulation and nervous system healing</li>
                <li>• Life transitions and identity exploration</li>
                <li>• Confidence building and self-worth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Begin?</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            I'd love to learn more about your story and explore how we might work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-lg px-8 py-4">
              Book a Free Clarity Call
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
