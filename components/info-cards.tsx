"use client"

import { useEffect, useRef } from "react"
import { Calendar, CheckCircle, BarChart3, Globe } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    title: "November 20-22, 2025",
    subtitle: "Date",
    icon: Calendar,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "RV College of Engineering",
    subtitle: "Venue",
    icon: CheckCircle,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "8 successful editions of CSITSS",
    subtitle: "Track Record",
    icon: BarChart3,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Global Participation",
    subtitle: "Researchers from Around the World",
    icon: Globe,
    color: "bg-yellow-500/10 text-yellow-500",
  },
]

export default function InfoCards() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="reveal glass-card rounded-xl p-6 hover-scale"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

