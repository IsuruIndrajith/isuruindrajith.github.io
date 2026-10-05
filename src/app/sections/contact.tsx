'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import contactData from '@/content/contact.json';

export default function ContactSection() {
  return (
    <section className="px-6 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-gray-500">
            Open to new-grad Software Engineer or DevOps Engineer roles from November 2026
          </p>
        </header>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8"
        >
          <div className="grid-cols-1 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Contact Information
              </p>
              <div className="space-y-3">
                <motion.div
                  key="email"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-blue-500 rounded dark:bg-blue-400"></span>
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-blue-600 hover:underline dark:text-blue-400 break-all"
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
                    <span className="w-2 h-2 bg-blue-500 rounded dark:bg-blue-400"></span>
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      LinkedIn
                    </p>
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400 break-all"
                    >
                      linkedin.com/in/isuru-edirisinghe
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
                    <span className="w-2 h-2 bg-blue-500 rounded dark:bg-blue-400"></span>
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      GitHub
                    </p>
                    <a
                      href={contactData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400 break-all"
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
                    <span className="w-2 h-2 bg-blue-500 rounded dark:bg-blue-400"></span>
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Availability
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {contactData.availability}
                    </p>
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
                    <span className="w-2 h-2 bg-blue-500 rounded dark:bg-blue-400"></span>
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Location
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {contactData.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              key="cta"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center border border-gray-100 dark:border-gray-700"
            >
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Ready to discuss opportunities?
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm interested in backend engineering, DevOps, and cloud infrastructure roles where I can contribute to scalable, reliable systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/resume/se"
                  className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Download SE Resume
                </Link>
                <Link
                  href="/resume/devops"
                  className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Download DevOps Resume
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}