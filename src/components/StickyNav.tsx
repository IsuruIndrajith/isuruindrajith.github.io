'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function StickyNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Proof', href: '#proof-strip', id: 'proof-strip' },
    { label: 'Projects', href: '#projects-grid', id: 'projects-grid' },
    { label: 'Experience', href: '#experience-timeline', id: 'experience-timeline' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'DevOps', href: '#devops-showcase', id: 'devops-showcase' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Writing', href: '#writing', id: 'writing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  function handleNavigate(href: string): boolean {
    if (href.startsWith('#')) {
      router.push(href);
      return false;
    }
    return true;
  }


  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between h-16">
          {/* Logo / Name */}
          <motion.div
            key="logo"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:no-underline">
              Isuru Edirisinghe
            </Link>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            key="menu"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden md:flex items-center space-x-6"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href.split('#')[0]) && item.href.startsWith('#');
              const baseClasses = "text-sm font-medium text-gray-600 dark:text-gray-300";
              const activeClasses = "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400";
              const inactiveClasses = "hover:text-gray-800 dark:hover:text-gray-200 transition-colors";

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                  onClick={(e) => {
                    if (!handleNavigate(item.href)) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            key="cta"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center space-x-3"
          >
            {/* Open to work badge */}
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              Open to work
            </div>

            {/* Resume button */}
            <Link
              href="/resume/se"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Download SE Resume
            </Link>
            </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            key="mobile-menu"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:hidden"
          >
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}