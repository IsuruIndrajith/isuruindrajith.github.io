'use client';

import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import skillsData from '@/content/skills.json';
import educationData from '@/content/education.json';

export default function DevOpsShowcaseSection() {
  // Extract DevOps-related skills from the skills data
  const devopsSkills = skillsData.categories.find(
    category => category.name === 'Cloud & DevOps'
  )?.items || [];

  return (
    <section id="devops-showcase" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Expertise</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            DevOps & Cloud Engineering
          </h2>
        </Reveal>

        {/* Skills Overview */}
        <Reveal delay={0.1} className="mb-16">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              DevOps Toolchain
            </h3>

            {/* Skills Grid */}
            <div className="grid gap-4 md:grid-cols-3">
              {devopsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="skill-pill-container"
                >
                  <span className="skill-pill text-[0.875rem]">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={0.2} className="mb-16">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l2 3h4l2-3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
              </svg>
              Certifications & Training
            </h3>
            <div className="space-y-4">
              {educationData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                  <div>
                    <p className="text-sm font-medium text-cream/80">{cert.name}</p>
                    <p className="text-xs text-cream/40">{cert.issuer} · {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Experience Highlights */}
        <Reveal delay={0.3}>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Professional Experience
            </h3>
            <div className="space-y-4">
              {/* We'll show brief highlights from experience - focusing on DevOps aspects */}
              <motion.div
                key="exp1"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                <div>
                  <p className="text-sm font-medium text-cream/80">CI/CD Pipeline Development</p>
                  <p className="text-xs text-cream/40">DI 11 Soft · 2025-2026</p>
                </div>
              </motion.div>

              <motion.div
                key="exp2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                <div>
                  <p className="text-sm font-medium text-cream/80">Kubernetes & AWS EKS</p>
                  <p className="text-xs text-cream/40">Three-tier App Project · 2025-2026</p>
                </div>
              </motion.div>

              <motion.div
                key="exp3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                <div>
                  <p className="text-sm font-medium text-cream/80">Infrastructure as Code</p>
                  <p className="text-xs text-cream/40">Certifications · 2026</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}