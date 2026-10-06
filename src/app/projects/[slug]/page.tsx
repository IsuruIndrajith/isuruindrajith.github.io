'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import projectsData from '@/content/projects.json';

const sectionVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  if (!project) {
    notFound();
  }

  const allTech = [
    ...(project.stack.backend || []),
    ...(project.stack.frontend || []),
    ...(project.stack.infrastructure || []),
    ...(project.stack.gitops || []),
    ...(project.stack.monitoring || []),
    ...(project.stack.testing || []),
  ];

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        {/* Back navigation */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-cream/40 hover:text-accent transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
            All Projects
          </Link>
          <span className="text-cream/20">/</span>
          <span className="text-sm text-cream/30 truncate">{project.title}</span>
        </motion.div>

        {/* Hero header */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label mb-4 block">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
          </span>
          <h1 className="font-display text-heading text-cream-light mb-4">
            {project.title}
          </h1>
          <p className="text-cream/50 mb-6">
            {project.role}&nbsp;•&nbsp;
            {new Date(project.duration.split(' - ')[0]).toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}{' '}
            –{' '}
            {project.duration.split(' - ')[1] === 'Present'
              ? 'Present'
              : new Date(project.duration.split(' - ')[1]).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
          </p>

          {/* Status badge */}
          {project.status && (
            <span
              className={`accent-tag ${
                project.status === 'completed'
                  ? 'bg-accent/10 text-accent border-accent/20'
                  : 'bg-cream/10 text-cream border-cream/20'
              }`}
            >
              {project.status === 'completed' ? '✓ Completed' : '⟳ ' + project.status}
            </span>
          )}
        </motion.div>

        {/* Content sections */}
        <div className="space-y-6">

          {/* Problem */}
          <motion.div
            custom={0.1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="glass-card p-6 md:p-8"
          >
            <h2 className="section-label mb-4 block">Problem</h2>
            <p className="text-cream/70 leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          {/* Architecture */}
          <motion.div
            custom={0.18}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="glass-card p-6 md:p-8"
          >
            <h2 className="section-label mb-4 block">Architecture</h2>
            {project.architecture.diagram && (
              <div className="mb-6 rounded-xl overflow-hidden border border-cream/5">
                <img
                  src={project.architecture.diagram}
                  alt={`${project.title} architecture diagram`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            )}
            <p className="text-cream/70 leading-relaxed">
              {project.architecture.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          {project.stack && (
            <motion.div
              custom={0.26}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-8"
            >
              <h2 className="section-label mb-6 block">Technology Stack</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(project.stack).map(([category, technologies]) =>
                  technologies && technologies.length > 0 ? (
                    <div key={category}>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/30 mb-3">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech: string) => (
                          <span key={tech} className="skill-pill text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </motion.div>
          )}

          {/* Key Decisions */}
          {project.decisions && project.decisions.length > 0 && (
            <motion.div
              custom={0.34}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-8"
            >
              <h2 className="section-label mb-6 block">Key Decisions & Trade-offs</h2>
              <div className="space-y-6">
                {project.decisions.map((decision, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l border-cream/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />
                    <h3 className="text-base font-semibold text-cream-light mb-2">
                      {decision.decision}
                    </h3>
                    {decision.alternatives && decision.alternatives.length > 0 && (
                      <p className="text-sm text-cream/40 italic mb-1">
                        Alternatives considered: {decision.alternatives.join(', ')}
                      </p>
                    )}
                    {decision.tradeOffs && (
                      <p className="text-sm text-cream/60 leading-relaxed">
                        {decision.tradeOffs}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* What I'd Improve */}
          {project.improvements && project.improvements.length > 0 && (
            <motion.div
              custom={0.42}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-8"
            >
              <h2 className="section-label mb-6 block">What I&apos;d Improve Next</h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3 text-cream/70">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span className="leading-relaxed">{improvement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <motion.div
              custom={0.5}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-8"
            >
              <h2 className="section-label mb-6 block">Links</h2>
              <div className="flex flex-wrap gap-3">
                {Object.entries(project.links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button text-sm py-2 px-4"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Prev / Next navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 pt-8 border-t border-cream/5 flex flex-col sm:flex-row gap-4 justify-between"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 glass-card p-4 hover:border-accent/20 transition-colors flex-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/30 group-hover:text-accent transition-colors flex-shrink-0"
              >
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-cream/30 mb-0.5">Previous</p>
                <p className="text-sm font-medium text-cream-light group-hover:text-accent transition-colors truncate">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 glass-card p-4 hover:border-accent/20 transition-colors flex-1 flex-row-reverse sm:flex-row-reverse text-right sm:text-right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/30 group-hover:text-accent transition-colors flex-shrink-0 rotate-180"
              >
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-cream/30 mb-0.5">Next</p>
                <p className="text-sm font-medium text-cream-light group-hover:text-accent transition-colors truncate">
                  {nextProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </motion.div>

      </div>
    </main>
  );
}