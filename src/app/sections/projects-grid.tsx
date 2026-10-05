'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import projectsData from '@/content/projects.json';

export default function ProjectsGrid({
  featuredOnly = false
}: {
  featuredOnly?: boolean
}) {
  const projects = featuredOnly
    ? projectsData.filter(p => p.featured)
    : projectsData;

  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-center">
            Featured Projects
          </h2>
          {projects.length < projectsData.length && (
            <p className="mt-2 text-center text-gray-500">
              <Link href="/projects" className="text-blue-600 hover:underline">
                View all {projectsData.length} projects →
              </Link>
            </p>
          )}
        </header>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          {/* Responsive grid: 1col mobile, 2col tablet, 3col desktop */}
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group"
                passHref
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {project.role} • {new Date(project.duration.split(' - ')[0]).toLocaleString('default', { month: 'short', year: 'numeric' })} –
                      {project.duration.split(' - ')[1] === 'Present' ? 'Present' : new Date(project.duration.split(' - ')[1]).toLocaleString('default', { month: 'short', year: 'numeric' })}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stack.backend?.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs dark:bg-blue-200 dark:text-blue-800 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {project.stack.frontend?.length > 0 ?
                        'Fullstack' :
                        project.stack.backend?.length > 0 ?
                        'Backend' :
                        'DevOps'}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}