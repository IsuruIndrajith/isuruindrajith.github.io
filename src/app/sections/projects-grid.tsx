'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import projectsData from '@/content/projects.json';

export default function ProjectsGrid({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const projects = featuredOnly
    ? projectsData.filter((p) => p.featured)
    : projectsData;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Selected Work</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Projects I&apos;ve Built
          </h2>
          <p className="text-cream/50 max-w-lg">
            From distributed microservices to cloud-native CI/CD pipelines —
            each project solves a real engineering challenge.
          </p>
        </Reveal>

        {/* Projects list */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
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
                      <h3 className="text-xl md:text-2xl font-semibold text-cream-light group-hover:text-accent transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cream/40 mb-3">{project.role}</p>
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
                        className="text-accent"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* View all link */}
        {featuredOnly && projects.length < projectsData.length && (
          <Reveal delay={0.4} className="mt-8 text-center">
            <Link href="/projects" className="link-underline text-sm text-cream/50">
              View all {projectsData.length} projects →
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}