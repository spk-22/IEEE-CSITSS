"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock } from "lucide-react"

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)

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

  const timelineEvents = [
    {
      date: "May 15, 2025",
      title: "Paper Submission Opens",
      description: "Start submitting your research papers for review.",
    },
    {
      date: "August 30, 2025",
      title: "Paper Submission Deadline",
      description: "Last date to submit your papers for consideration.",
    },
    {
      date: "September 30, 2025",
      title: "Notification of Acceptance",
      description: "Authors will be notified about the acceptance of their papers.",
    },
    {
      date: "October 15, 2025",
      title: "Camera-ready Submission",
      description: "Deadline for submitting the final version of accepted papers.",
    },
    {
      date: "November 20-22, 2025",
      title: "Conference Dates",
      description: "The main conference event at RV College of Engineering.",
    },
  ]

  return (
    <section id="timeline" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Important <span className="gradient-text">Dates</span>
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mb-6 reveal"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-muted-foreground reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Mark your calendar with these key dates for CSITSS-2025
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8 reveal`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                  <div className="glass-card p-6 rounded-xl hover-scale">
                    <div className="flex items-center gap-2 mb-2 text-primary text-sm font-medium">
                      <CalendarDays className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg">
            <Clock className="mr-2 h-4 w-4" />
            View Full Timeline
          </Button>
        </div>
      </div>
    </section>
  )
}

