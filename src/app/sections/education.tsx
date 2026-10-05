'use client';

import Reveal from '@/components/Reveal';
import educationData from '@/content/education.json';

export default function EducationSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Background</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Education & Achievements
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <Reveal delay={0.1}>
            <div className="glass-card p-6 md:p-8 h-full">
              <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Education
              </h3>
              {educationData.education.map((edu) => (
                <div key={edu.institution} className="mb-6">
                  <h4 className="text-base font-semibold text-cream-light">{edu.degree}</h4>
                  <p className="text-accent text-sm font-medium">{edu.institution}</p>
                  <p className="text-xs text-cream/40 mt-1">{edu.duration} · {edu.location}</p>
                  <p className="text-xs text-cream/50 mt-2 italic">{edu.status}</p>
                  {edu.relevantCoursework && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {edu.relevantCoursework.map((course) => (
                        <span key={course} className="skill-pill text-[0.65rem]">{course}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Certifications + Competitions */}
          <div className="space-y-8">
            {/* Certifications */}
            <Reveal delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold text-cream-light mb-5 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M12 15l-2 5 2-1 2 1-2-5z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="6" />
                  </svg>
                  Certifications
                </h3>
                <div className="space-y-4">
                  {educationData.certifications.map((cert) => (
                    <div key={cert.name} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                      <div>
                        <p className="text-sm font-medium text-cream/80">{cert.name}</p>
                        <p className="text-xs text-cream/40">{cert.issuer} · {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Competitions */}
            <Reveal delay={0.3}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold text-cream-light mb-5 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M6 9H4a2 2 0 0 1-2-2V4h4M18 9h2a2 2 0 0 0 2-2V4h-4M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 20h10c0-.76-.85-1.25-2.03-1.79C14.47 17.98 14 17.55 14 17v-2.34" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Competitions
                </h3>
                <div className="space-y-4">
                  {educationData.competitions.map((comp) => (
                    <div key={comp.name} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                      <div>
                        <p className="text-sm font-medium text-cream/80">{comp.name}</p>
                        <p className="text-xs text-cream/40">
                          {comp.achievement} · {comp.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Volunteering */}
        <Reveal delay={0.4} className="mt-8">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-cream-light mb-5 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Community Involvement
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {educationData.volunteering.map((vol) => (
                <div key={vol.organization} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60" />
                  <div>
                    <p className="text-sm font-medium text-cream/80">{vol.role}</p>
                    <p className="text-xs text-accent">{vol.organization}</p>
                    <p className="text-xs text-cream/40">{vol.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}