'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import experiencesData from '@/content/experience.json';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Career</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Experience
          </h2>
          <p className="text-cream/50 max-w-lg">
            Professional experience building Fullstack applications and DevOps infrastructure.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-16">
            {experiencesData.map((experience, index) => (
              <Reveal key={experience.company} delay={index * 0.15}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="timeline-dot" />

                  {/* Content card */}
                  <div className="glass-card p-6 md:p-8 ml-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-cream-light">
                          {experience.position}
                        </h3>
                        <p className="text-accent text-sm font-medium">
                          {experience.company}
                        </p>
                        <p className="text-xs text-cream/40 mt-1">
                          {experience.location}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="accent-tag text-[0.65rem]">
                          {experience.duration.start} – {experience.duration.end}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-cream/60 mb-5 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="space-y-3 mb-5">
                        {experience.achievements.slice(0, 4).map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: idx * 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex items-start gap-3"
                          >
                            <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                            <p className="text-sm text-cream/50 leading-relaxed">
                              <span className="text-cream/80 font-medium">
                                {achievement.action}
                              </span>{' '}
                              {achievement.what}{' '}
                              <span className="text-cream/40 italic">
                                {achievement.how}
                              </span>
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.slice(0, 8).map((tech) => (
                          <span key={tech} className="skill-pill text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}