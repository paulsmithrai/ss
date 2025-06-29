import Link from "next/link"
import { Instagram, Mail, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SoulSpring</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A safe space to heal, grow, and transform. Professional therapy-informed coaching for clarity, confidence,
              and emotional wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sage transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:paulamithrai@gmail.com" className="text-gray-300 hover:text-sage transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sage transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-sage transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-sage transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-sage transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-sage transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li>paulamithrai@gmail.com</li>
              <li>Free 20-min clarity call</li>
              <li>
                <Link href="/contact" className="hover:text-sage transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SoulSpring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
