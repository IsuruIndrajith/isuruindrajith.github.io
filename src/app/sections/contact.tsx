'use client';

import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import Link from 'next/link';
import contactData from '@/content/contact.json';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Connect</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Get in Touch
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <Reveal delay={0.1}>
            <div className="glass-card p-6 md:p-8 h-full">
              <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.div
                  key="email"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-cream/80">Email</p>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-cream hover:text-accent/80 break-all"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  key="linkedin"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-cream/80">LinkedIn</p>
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream hover:text-accent/80 break-all"
                    >
                      linkedin.com/in/isuru-edirisinghe-387ab7278
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  key="github"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-cream/80">GitHub</p>
                    <a
                      href={contactData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream hover:text-accent/80 break-all"
                    >
                      github.com/IsuruIndrajith
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  key="availability"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-cream/80">Availability</p>
                    <p className="text-xs text-cream/50">{contactData.availability}</p>
                  </div>
                </motion.div>

                <motion.div
                  key="location"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-cream/80">Location</p>
                    <p className="text-xs text-cream/50">{contactData.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={0.2}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Let's Connect
              </h3>
              <p className="text-sm text-cream/60 mb-6">
                I'm interested in backend engineering, DevOps, and cloud infrastructure roles where I can contribute to scalable, reliable systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/docs/Isuru_Edirisinghe_SE_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-accent/20 text-cream rounded-lg hover:bg-accent/30 transition-colors font-medium text-center"
                >
                  View SE Resume
                </a>
                <a
                  href="/docs/Isuru_Edirisinghe_DevOps_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-accent/20 text-cream rounded-lg hover:bg-accent/30 transition-colors font-medium text-center"
                >
                  View DevOps Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}