import type { Metadata } from "next"
import BookingForm from "../components/BookingForm"

export const metadata: Metadata = {
  title: "Book a Session – SoulSpring",
  description: "Reserve your clarity call or first coaching session now.",
}

export default function Booking() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Book Your Session</h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Take the first step toward healing and growth. Book a free 20-minute clarity call or secure your first
            session today.
          </p>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Free Clarity Call</h3>
              <p className="text-charcoal/70 mb-4">
                A 20-minute conversation to explore what you're looking for and determine the best approach for your
                unique situation.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li>• No commitment required</li>
                <li>• Get your questions answered</li>
                <li>• Discuss which service fits best</li>
                <li>• Feel the energy of our connection</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">What to Expect</h3>
              <p className="text-charcoal/70 mb-4">
                All sessions are conducted via secure video call from the comfort of your own space.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Confirmation email within 24 hours</li>
                <li>• Secure video link provided</li>
                <li>• Pre-session intake form (optional)</li>
                <li>• Follow-up resources and notes</li>
              </ul>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Alternative Booking Options */}
      <section className="section-padding bg-cream/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Prefer to Schedule Directly?</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            You can also book directly through my calendar or send me an email with your preferred times.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary text-lg px-8 py-4" target="_blank" rel="noopener noreferrer">
              View Calendar
            </a>
            <a href="mailto:hello@soulspring.com" className="btn-secondary text-lg px-8 py-4">
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Session Policies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Cancellation Policy</h3>
              <p className="text-charcoal/70">
                Please provide at least 24 hours notice for cancellations. Sessions cancelled with less than 24 hours
                notice will be charged 50% of the session fee.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Payment & Refunds</h3>
              <p className="text-charcoal/70">
                Payment is due at the time of booking. Refunds are available up to 48 hours before your scheduled
                session. Package deals are non-refundable but transferable.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Confidentiality</h3>
              <p className="text-charcoal/70">
                All sessions are completely confidential. I adhere to strict privacy standards and will never share your
                information without your explicit consent.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Requirements</h3>
              <p className="text-charcoal/70">
                You'll need a stable internet connection, a device with camera and microphone, and a private space where
                you feel comfortable speaking openly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
