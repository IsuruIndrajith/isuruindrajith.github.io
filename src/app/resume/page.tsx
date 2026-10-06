'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        {/* Back navigation */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/40 hover:text-accent transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label mb-4 block">Download</span>
          <h1 className="font-display text-heading text-cream-light mb-4">Resume</h1>
          <p className="text-cream/50 max-w-lg">
            Choose the version tailored to the role you&apos;re hiring for.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* SE Resume */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 flex flex-col"
          >
            <span className="section-label mb-4 block text-xs">Backend / Software Engineering</span>
            <h2 className="text-xl font-semibold text-cream-light mb-3">
              SE Resume
            </h2>
            <p className="text-cream/50 text-sm leading-relaxed mb-8 flex-1">
              Focused on backend development, Java/Spring Boot microservices, APIs, and distributed systems.
            </p>
            <a
              href="/docs/Isuru_Edirisinghe_SE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button justify-center"
            >
              View SE Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </motion.div>

          {/* DevOps Resume */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="glass-card p-8 flex flex-col"
          >
            <span className="section-label mb-4 block text-xs">DevOps / Cloud Engineering</span>
            <h2 className="text-xl font-semibold text-cream-light mb-3">
              DevOps Resume
            </h2>
            <p className="text-cream/50 text-sm leading-relaxed mb-8 flex-1">
              Focused on Kubernetes, CI/CD pipelines, GitOps, AWS EKS, and cloud-native infrastructure.
            </p>
            <a
              href="/docs/Isuru_Edirisinghe_DevOps_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button justify-center"
            >
              View DevOps Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-xs text-cream/25 text-center"
        >
          PDFs open directly in your browser. Right-click → Save As to download.
        </motion.p>
      </div>
    </main>
  );
}