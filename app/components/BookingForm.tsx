"use client"

import type React from "react"

import { useState } from "react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you! We'll be in touch soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-charcoal mb-6">Book Your Session</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-charcoal font-medium mb-2">
            Full Name *
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

        <div>
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
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-charcoal font-medium mb-2">
          Choose Service *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage"
        >
          <option value="">Select a service...</option>
          <option value="clarity-call">Free 20-min Clarity Call</option>
          <option value="emotional-clarity">1:1 Emotional Clarity Session</option>
          <option value="anxiety-package">Anxiety & Stress Relief Package</option>
          <option value="trauma-healing">Trauma-Informed Healing Sessions</option>
          <option value="confidence-coaching">Confidence & Purpose Coaching</option>
          <option value="mindset-reset">Mindset Reset Package</option>
          <option value="soulspring-blend">SoulSpring Blend Coaching</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-charcoal font-medium mb-2">
          Message / Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me a bit about what you're looking for or any questions you have..."
          className="w-full px-4 py-3 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage resize-none"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full text-lg py-4">
        Submit Booking Request
      </button>

      <p className="text-charcoal/60 text-sm mt-4 text-center">
        You'll receive a confirmation email with next steps within 24 hours.
      </p>
    </form>
  )
}
