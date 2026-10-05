'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import skillsData from '@/content/skills.json';

// Map category names to accent colors for visual variety
const categoryAccents: Record<string, string> = {
  Languages: 'from-[rgba(252,196,56,0.2)] to-[rgba(208,197,171,0.05)]',
  Backend: 'from-[rgba(252,196,56,0.2)] to-[rgba(208,197,171,0.05)]',
  'Cloud & DevOps': 'from-[rgba(252,196,56,0.2)] to-[rgba(208,197,171,0.05)]',
  Data: 'from-[rgba(252,196,56,0.2)] to-[rgba(208,197,171,0.05)]',
  'Observability & Testing': 'from-[rgba(252,196,56,0.2)] to-[rgba(208,197,171,0.05)]',
  Security: 'from-[rgba(252,196,56,0.2)] to-[rgba(208,197,171,0.05)]',
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Toolkit</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Skills & Technologies
          </h2>
          <p className="text-cream/50 max-w-lg">
            Technologies I work with daily, grouped by domain with real project context.
          </p>
        </Reveal>

        {/* Skills categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.categories.map((category, catIndex) => (
            <Reveal key={category.name} delay={catIndex * 0.1}>
              <div className="glass-card p-6 h-full relative overflow-hidden group">
                {/* Gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                    categoryAccents[category.name]
                  }`}
                />

                <h3 className="text-lg font-semibold text-cream-light mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <motion.span
                      key={`${category.name}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="skill-pill text-xs group-hover:border-cream/15"
                      title={`${skill.level} · Used in ${skill.usedIn?.length || 0} projects`}
                    >
                      {skill.name}
                      {skill.level === 'Advanced' && (
                        <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      )}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Legend */}
      <Reveal delay={0.5} className="mt-8 flex items-center gap-4 justify-end">
        <span className="flex items-center gap-1.5 text-xs text-cream/30">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Advanced
        </span>
        <span className="flex items-center gap-1.5 text-xs text-cream/30">
          <span className="w-1.5 h-1.5 rounded-full bg-cream/30" />
          Intermediate
        </span>
      </Reveal>
    </div>
  </section>
  );
}