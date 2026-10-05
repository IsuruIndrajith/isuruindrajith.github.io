import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Download Resume
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Choose your preferred version of my resume:
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <motion.div
            key="se"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Software Engineering Resume
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Focused on backend development, APIs, and distributed systems
            </p>
            {/* In a real app, this would link to an actual PDF file */}
            <a
              href="/docs/CV_SE.md"
              download="Isuru_Edirisinghe_SE_Resume.md"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
            >
              Download SE Resume (Markdown)
            </a>
          </motion.div>

          <motion.div
            key="devops"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              DevOps/Cloud Engineering Resume
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Focused on CI/CD, Kubernetes, and cloud infrastructure
            </p>
            {/* In a real app, this would link to an actual PDF file */}
            <a
              href="/docs/CV_DevOps.md"
              download="Isuru_Edirisinghe_DevOps_Resume.md"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
            >
              Download DevOps Resume (Markdown)
            </a>
          </motion.div>
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Note: These are markdown versions. PDF versions would be generated from these sources.
          <br />
          <span className="text-xs">
            For the most current versions, please refer to the source files in /docs/
          </span>
        </p>
      </motion.div>
    </div>
  );
}