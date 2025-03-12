"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About <span className="gradient-text">CSITSS</span>
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
            The International Conference on Computational Systems and Information Technology for Sustainable Solutions
            (CSITSS) brings together researchers, practitioners, and industry experts to share cutting-edge research and
            innovations in computational systems and information technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="reveal"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur-xl -z-10"></div>
              <div className="glass-card rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="CSITSS Conference"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Removed the "9th Edition Since 2016" box */}
            </div>
          </motion.div>

          <motion.div
            className="reveal"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Why Attend CSITSS-2025?</h3>
            <div className="space-y-4 mb-8">
              {[
                "Present your research to a global audience",
                "Network with leading researchers and industry experts",
                "Explore the latest trends in computational systems",
                "Publish your work in prestigious indexed journals",
                "Participate in workshops and panel discussions",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-bold mb-2">Organized by</h4>
              <p className="text-muted-foreground mb-4">
                RV College of Engineering, one of India's premier engineering institutions, in collaboration with IEEE.
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="RVCE Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold">RV College of Engineering</p>
                  <p className="text-xs text-muted-foreground">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

