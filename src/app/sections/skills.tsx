'use client';

import { motion } from 'framer-motion';
import skillsData from '@/content/skills.json';

export default function SkillsSection() {
  return (
    <section className="px-6 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <p className="mt-2 text-gray-500">
            Grouped by domain with project context
          </p>
        </header>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          {/* Skills categories grid */}
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {skillsData.categories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.items.map((skill, idx) => (
                    <motion.div
                      key={`${category.name}-${idx}`}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-blue-500 rounded dark:bg-blue-400"></span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </p>
                        {skill.usedIn && skill.usedIn.length > 0 && (
                          <p className="text-xs text-blue-600 dark:text-blue-400 italic">
                            Used in: {skill.usedIn.length} projects
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}