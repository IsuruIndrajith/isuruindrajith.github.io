'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center gap-8 px-6 pb-20">
      {/* Animated entrance */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Isuru Edirisinghe
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
          Backend & DevOps engineer who ships code from commit to production.
        </h2>
        <p className="text-lg max-w-xl">
          {/* One-line proof from CLAUDE.md */}
          6 microservices, 1 EKS cluster, 3 CI/CD pipelines, shipped
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Open to work badge */}
          <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
            Open to work
          </div>

          {/* Download CV buttons */}
          <div className="flex gap-2">
            <Link href="/resume/se" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Download SE CV
            </Link>
            <Link href="/resume/devops" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Download DevOps CV
            </Link>
          </div>

          {/* Social links */}
          <div className="flex gap-2">
            <Link
              href="https://github.com/IsuruIndrajith"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/isuru-edirisinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:isuruindrajith680@gmail.com"
              className="flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}