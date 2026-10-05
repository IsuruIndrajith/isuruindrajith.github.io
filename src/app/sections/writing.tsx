'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import writingData from '@/content/writing.json';

export default function WritingSection() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Writing & Technical Blog</h2>
          <p className="mt-2 text-gray-500">
            Technical articles, tutorials, and industry insights
          </p>
        </header>

        {writingData.blogPlaceholder ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center border border-gray-100 dark:border-gray-700"
          >
            <p className="text-gray-500 dark:text-gray-400">
              Writing section placeholder - technical blog available at{' '}
              <a href="https://medium.com/@isuruindrajith680" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                medium.com/@isuruindrajith680
              </a>
            </p>
          </motion.div>
        ) : (
          <>
            {/* Writing content would go here when blog is active */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {writingData.medium.latestPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {post.date} • {post.topic}
                  </p>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                  >
                    Read article
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}