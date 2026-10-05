'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import projectsData from '@/content/projects.json';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Project Header */}
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-cream-light dark:text-cream/90">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-cream/40 dark:text-cream/30">
                {project.role} • {new Date(project.duration.split(' - ')[0]).toLocaleString('default', { month: 'short', year: 'numeric' })} –
                {project.duration.split(' - ')[1] === 'Present' ? 'Present' : new Date(project.duration.split(' - ')[1]).toLocaleString('default', { month: 'short', year: 'numeric' })}
              </p>
            </header>

            {/* Problem Statement */}
            <motion.div
              key="problem"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-semibold text-cream-light dark:text-cream/90 mb-3">
                Problem
              </h2>
              <p className="text-cream/80 dark:text-cream/60 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Architecture */}
            <motion.div
              key="architecture"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-semibold text-cream-light dark:text-cream/90 mb-3">
                Architecture
              </h2>
              {project.architecture.diagram && (
                <div className="mb-4">
                  <img
                    src={project.architecture.diagram}
                    alt={`${project.title} architecture diagram`}
                    className="w-full h-auto rounded-lg shadow-md mb-2"
                    loading="lazy"
                  >
                  </img>
                </div>
              )}
              <p className="text-cream/80 dark:text-cream/60 leading-relaxed">
                {project.architecture.description}
              </p>
            </motion.div>

            {/* Decisions & Trade-offs */}
            {project.decisions && project.decisions.length > 0 && (
              <motion.div
                key="decisions"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-semibold text-cream-light dark:text-cream/90 mb-3">
                  Key Decisions & Trade-offs
                </h2>
                <div className="space-y-4">
                  {project.decisions.map((decision, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-medium text-cream-light dark:text-cream/90">
                        {decision.decision}
                      </h3>
                      {decision.alternatives && decision.alternatives.length > 0 && (
                        <p className="text-sm text-cream/50 dark:text-cream/40 italic">
                          Alternatives: {decision.alternatives.join(', ')}
                        </p>
                      )}
                      {decision.tradeOffs && (
                        <p className="text-sm text-cream/60 dark:text-cream/50">
                          Trade-offs: {decision.tradeOffs}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech Stack */}
            {project.stack && (
              <motion.div
                key="stack"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-semibold text-cream-light dark:text-cream/90 mb-3">
                  Technology Stack
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(project.stack).map(([category, technologies]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="text-lg font-medium text-cream-light dark:text-cream/90">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <ul className="list-disc list-inside text-sm text-cream/80 dark:text-cream/60 space-y-1">
                        {technologies.map((tech, idx) => (
                          <li key={idx}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Improvements */}
            {project.improvements && project.improvements.length > 0 && (
              <motion.div
                key="improvements"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-semibold text-cream-light dark:text-cream/90 mb-3">
                  What I'd Improve Next
                </h2>
                <ul className="list-disc list-inside text-cream/80 dark:text-cream/60 space-y-2">
                  {project.improvements.map((improvement, index) => (
                    <li key={index} className="leading-relaxed">
                      {improvement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Links */}
            {project.links && (
              <motion.div
                key="links"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-semibold text-cream-light dark:text-cream/90 mb-3">
                  Links
                </h2>
                <div className="space-y-2">
                  {Object.entries(project.links).map(([key, url]) => (
                    <div key={key} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-cream/50 dark:bg-accent/20 rounded"></span>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <p className="text-sm font-medium text-cream/80 dark:text-cream/60">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                        >
                          {url}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Status */}
            {project.status && (
              <motion.div
                key="status"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="glass-card p-6 text-center"
              >
                <span className="px-3 py-1 rounded-full text-sm font-medium
                  {project.status === 'completed' ? 'bg-accent/20 text-accent dark:bg-accent/30 dark:text-accent' :
                    project.status === 'in progress' ? 'bg-cream/20 text-cream dark:bg-cream/30 dark:text-cream/90' :
                    'bg-cream/20 text-cream dark:bg-cream/30 dark:text-cream/90'}"
                >
                  {project.status}
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Back to Projects Link */}
          <motion.div
            key="back-link"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Link href="/projects" className="link-underline text-sm text-cream/50">
              ← Back to all projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}