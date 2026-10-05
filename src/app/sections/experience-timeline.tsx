'use client';

import { motion } from 'framer-motion';
import experiencesData from '@/content/experience.json';

export default function ExperienceTimeline() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Experience Timeline</h2>
          <p className="mt-2 text-gray-500">
            Professional experience in Software Engineering and DevOps roles
          </p>
        </header>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {experiencesData.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`flex ${index % 2 === 0 ? 'lg:row-reverse' : ''} gap-8`}
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2.5 dark:bg-blue-400"></div>

              {/* Experience content */}
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start space-x-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {experience.position}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {experience.duration.start} – {experience.duration.end === 'Present' ? 'Present' : experience.duration.end}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>

                {experience.achievements && experience.achievements.length > 0 && (
                  <ul className="list-disc list-space pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <span className="font-medium">{achievement.action}</span>{' '}
                        <span>{achievement.what}</span>{' '}
                        <span className="italic">{achievement.how}</span>{' '}
                        {/* Only show outcome if it's meaningful and not from unverified LinkedIn metrics */}
                        {achievement.outcome && !achievement.outcome.includes('%') && !achievement.outcome.includes('20 number') && !achievement.outcome.includes('25 number') && !achievement.outcome.includes('10+') && (
                          <span>{' '}{achievement.outcome}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {experience.technologies.slice(0, 6).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs dark:bg-gray-700 dark:text-gray-200 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}