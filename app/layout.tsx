import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoulSpring – Therapy-Informed Coaching & Healing",
  description: "Online therapy and life coaching for clarity, confidence, and calm.",
  keywords: "therapy, life coaching, mental health, emotional wellness, anxiety relief, personal growth",
  authors: [{ name: "SoulSpring" }],
  openGraph: {
    title: "SoulSpring – Therapy-Informed Coaching & Healing",
    description: "Online therapy and life coaching for clarity, confidence, and calm.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream text-charcoal`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
