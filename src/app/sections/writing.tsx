'use client';

import Reveal from '@/components/Reveal';
import Link from 'next/link';
import writingData from '@/content/writing.json';

export default function WritingSection() {
  return (
    <section id="writing" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="mb-16">
          <span className="section-label mb-4 block">Writing</span>
          <h2 className="font-display text-heading text-cream-light mb-4">
            Technical Writing
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {writingData.blogPlaceholder ? (
            <Reveal delay={0.1}>
              <div className="glass-card p-6 md:p-8 h-full">
                <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M12 4l-2 8h9l-3-5 2-8H9l3 5H3z" />
                  </svg>
                  Writing & Technical Blog
                </h3>
                <p className="text-cream/60">
                  Professional writing and technical blog posts available at{' '}
                  <a href="https://medium.com/@isuruindrajith680" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                    medium.com/@isuruindrajith680
                  </a>
                </p>
                <p className="mt-4 text-xs text-cream/50 italic">
                  {writingData.message}
                </p>
              </div>
            </Reveal>
          ) : (
            <>
              {/* Writing content would go here when blog is active */}
              <Reveal delay={0.1}>
                <div className="glass-card p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-cream-light mb-6 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <path d="M12 4l-2 8h9l-3-5 2-8H9l3 5H3z" />
                    </svg>
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {writingData.medium.latestPosts.map((post, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded flex items-center justify-center text-accent">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 4l-2 8h9l-3-5 2-8H9l3 5H3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cream">{post.title}</h4>
                          <p className="text-sm text-cream/60">
                            {post.date} • {post.topic}
                          </p>
                          <Link
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 px-3 py-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                          >
                            Read article
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </>
          )}
        </div>
      </div>
    </section>
  );
}