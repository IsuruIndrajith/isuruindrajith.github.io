'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="mt-4 cta-button">
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}