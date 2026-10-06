'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import writingData from '@/content/writing.json';

/* Platform icon helpers */
function MediumIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

const platformMeta: Record<string, { label: string; color: string; Icon: () => React.ReactElement }> = {
  Medium: {
    label: 'Medium',
    color: 'text-cream/60 border-cream/10 bg-cream/5',
    Icon: MediumIcon,
  },
  LinkedIn: {
    label: 'LinkedIn',
    color: 'text-[#0A66C2]/80 border-[#0A66C2]/20 bg-[#0A66C2]/10',
    Icon: LinkedInIcon,
  },
};

export default function WritingSection() {
  const featured = writingData.articles.filter((a) => a.featured);
  const rest = writingData.articles.filter((a) => !a.featured);

  return (
    <section id="writing" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Technical Writing</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Articles & Posts
          </h2>
          <p className="text-cream/50 max-w-lg">
            I write about backend engineering, distributed systems, and the decisions that
            shaped my projects. Published on Medium and LinkedIn.
          </p>
        </Reveal>

        {/* Featured articles — large cards */}
        <div className="grid gap-5 md:grid-cols-2 mb-5">
          {featured.map((article, index) => {
            const meta = platformMeta[article.platform] ?? platformMeta.Medium;
            return (
              <Reveal key={article.url} delay={index * 0.08}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block glass-card p-6 md:p-8 h-full hover:border-accent/25 transition-all duration-300"
                >
                  {/* Platform badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${meta.color}`}
                    >
                      <meta.Icon />
                      {meta.label}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                      <ArrowUpRight />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-cream-light group-hover:text-accent transition-colors duration-300 mb-3 leading-snug">
                    {article.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-cream/50 leading-relaxed mb-5 line-clamp-3">
                    {article.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {article.tags.map((tag) => (
                      <span key={tag} className="skill-pill text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Remaining articles — compact list rows */}
        <div className="space-y-3">
          {rest.map((article, index) => {
            const meta = platformMeta[article.platform] ?? platformMeta.Medium;
            return (
              <Reveal key={article.url} delay={0.16 + index * 0.06}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass-card px-5 py-4 hover:border-accent/20 transition-all duration-300"
                >
                  {/* Platform icon bubble */}
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border ${meta.color}`}
                  >
                    <meta.Icon />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-cream-light group-hover:text-accent transition-colors duration-300 truncate">
                      {article.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-cream/35">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="flex-shrink-0 text-cream/20 group-hover:text-accent transition-colors">
                    <ArrowUpRight />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Footer links to profiles */}
        <Reveal delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={writingData.profiles.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button text-sm py-2 px-5 gap-2"
          >
            <MediumIcon />
            All Medium Articles
          </a>
          <a
            href={writingData.profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button text-sm py-2 px-5 gap-2"
          >
            <LinkedInIcon />
            LinkedIn Profile
          </a>
        </Reveal>

      </div>
    </section>
  );
}