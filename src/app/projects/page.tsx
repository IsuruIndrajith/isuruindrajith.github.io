'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import projectsData from '@/content/projects.json';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Page header — matches homepage section style */}
        <Reveal className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/40 hover:text-accent transition-colors mb-8 group"
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
            Back to Home
          </Link>

          <span className="section-label mb-4 block">Portfolio</span>
          <h1 className="font-display text-heading text-cream-light mb-4">
            All Projects
          </h1>
          <p className="text-cream/50 max-w-lg">
            Every project I&apos;ve shipped — from distributed microservices to cloud-native
            CI/CD pipelines.
          </p>
        </Reveal>

        {/* Projects list */}
        <div className="space-y-4">
          {projectsData.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <Link href={`/projects/${project.slug}`} className="block group">
                <div className="project-card glass-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    {/* Project number */}
                    <div className="flex-shrink-0">
                      <span className="project-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Project info */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-semibold text-cream-light group-hover:text-accent transition-colors duration-300 mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-cream/40 mb-3">
                        {project.role}&nbsp;•&nbsp;
                        {new Date(project.duration.split(' - ')[0]).toLocaleString('default', {
                          month: 'short',
                          year: 'numeric',
                        })}{' '}
                        –{' '}
                        {project.duration.split(' - ')[1] === 'Present'
                          ? 'Present'
                          : new Date(project.duration.split(' - ')[1]).toLocaleString('default', {
                              month: 'short',
                              year: 'numeric',
                            })}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(project.stack.backend || []).slice(0, 4).map((tech) => (
                          <span key={tech} className="skill-pill text-xs">
                            {tech}
                          </span>
                        ))}
                        {(project.stack.infrastructure || project.stack.gitops || [])
                          .slice(0, 2)
                          .map((tech) => (
                            <span key={tech} className="skill-pill text-xs">
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}