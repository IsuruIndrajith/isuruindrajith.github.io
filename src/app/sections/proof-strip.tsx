'use client';

import { motion } from 'framer-motion';

export default function ProofStrip() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-6 justify-center text-sm text-gray-600 dark:text-gray-400"
        >
          {/* Honest facts only from CVs */}
          <span>1 yr SE internship</span>
          <span>IEEE Xtreme global rank 1,248</span>
          <span>Yarl Xtreme winner</span>
          <span>6 independently deployable services</span>
          <span>3 CI/CD pipelines shipped</span>
          <span>AWS EKS production experience</span>
          <span>20+ modules enterprise system</span>
          <span>47+ Eloquent models wholesale system</span>
        </motion.div>
      </div>
    </section>
  );
}