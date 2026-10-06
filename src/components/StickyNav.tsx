'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home',       href: '#hero',               id: 'hero' },
  { label: 'Projects',   href: '#projects-grid',      id: 'projects-grid' },
  { label: 'Experience', href: '#experience-timeline',id: 'experience-timeline' },
  { label: 'Skills',     href: '#skills',             id: 'skills' },
  { label: 'DevOps',     href: '#devops-showcase',    id: 'devops-showcase' },
  { label: 'Education',  href: '#education',          id: 'education' },
  { label: 'Writing',    href: '#writing',            id: 'writing' },
  { label: 'Contact',    href: '#contact',            id: 'contact' },
];

export default function StickyNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  /**
   * Resolve nav link href:
   * - On the homepage → use the bare `#anchor` so it scrolls in-page.
   * - On any other page → navigate to `/#anchor` which loads home + scrolls.
   */
  function resolveHref(anchor: string): string {
    if (isHome) return anchor;
    return `/${anchor}`;
  }

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-[rgba(208,197,171,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo / Name */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-xl font-bold text-cream/90 hover:text-accent transition-colors hover:no-underline">
              Isuru Edirisinghe
            </Link>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden lg:flex items-center gap-5 overflow-x-auto"
          >
            {navItems.map((item) => {
              const href = resolveHref(item.href);
              // Highlight active: if on a project page, highlight Projects
              const isProjectsActive =
                (pathname.startsWith('/projects')) && item.id === 'projects-grid';
              const isActive = isHome
                ? false /* scroll-based — don't mark active statically */
                : isProjectsActive;

              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-accent border-b border-accent/40 pb-0.5'
                      : 'text-cream/55 hover:text-cream/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>

          {/* Right: badge + CTA */}
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            {/* Open-to-work badge */}
            <div className="hidden sm:block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              Open to work
            </div>

            {/* Resume button */}
            <Link href="/resume/se" className="cta-button text-sm py-2 px-5">
              Resume
            </Link>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-cream/10 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>
    </motion.nav>
  );
}