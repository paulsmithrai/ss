"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Instagram, Youtube, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! I'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Get in Touch</h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Have questions about working together? Want to share something on your heart? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="card">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send a Message</h2>

                <div className="mb-6">
                  <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me what's on your mind..."
                    className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Send Message
                </button>

                <p className="text-charcoal/60 text-sm mt-4 text-center">I typically respond within 24 hours.</p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-charcoal mb-4">Let's Connect</h3>
                <p className="text-charcoal/70 mb-6">
                  Whether you're ready to book a session or just want to ask a question, I'm here to support you. Every
                  message matters.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-sage mr-3" size={20} />
                    <a href="mailto:paulamithrai@gmail.com" className="text-charcoal hover:text-sage transition-colors">
                      paulamithrai@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Clock className="text-sage mr-3" size={20} />
                    <span className="text-charcoal">Response time: Within 24 hours</span>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="text-sage mr-3" size={20} />
                    <span className="text-charcoal">Online sessions worldwide</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-charcoal mb-4">Follow Along</h3>
                <p className="text-charcoal/70 mb-6">
                  Join me on social media for daily inspiration, healing tools, and behind-the-scenes glimpses of this
                  work.
                </p>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="mailto:paulamithrai@gmail.com"
                    className="flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-charcoal mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">How quickly can I get started?</h4>
                    <p className="text-charcoal/70 text-sm">
                      Usually within a few days! I keep some flexibility in my schedule for new clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Do you offer sliding scale pricing?</h4>
                    <p className="text-charcoal/70 text-sm">
                      Yes, I have limited sliding scale spots available. Just mention it in your message.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">What if I'm not sure which service I need?</h4>
                    <p className="text-charcoal/70 text-sm">
                      That's what the free clarity call is for! We'll figure it out together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-cream/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Session Availability</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Current Openings</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Tuesday - Thursday: 10am - 6pm EST</li>
                <li>• Friday: 10am - 3pm EST</li>
                <li>• Limited weekend availability</li>
                <li>• Evening sessions by request</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-charcoal mb-4">Time Zones Welcome</h3>
              <p className="text-charcoal/70">
                I work with clients across different time zones. If you don't see a time that works, let me know your
                availability and I'll do my best to accommodate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
