'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16 overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Ambient glow orb */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(252, 196, 56, 0.06) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ y: titleY, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl"
      >
        {/* Status badge */}
        <motion.div variants={childVariants} className="mb-8">
          <div className="accent-tag">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Full Time Opportunities
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={childVariants}
          className="font-display text-display mb-6"
        >
          <span className="block text-cream-light">Backend &</span>
          <span className="block text-gradient">DevOps Engineer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            variants={childVariants}
            className="text-body-lg text-cream/60 max-w-xl mb-10 leading-relaxed"
          >
            I ship code from commit to production. Building scalable microservices, 
            orchestrating Kubernetes clusters, and automating everything in between.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <Link href="#projects" className="cta-button">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
          <Link href="#contact" className="outline-button">
            Get in Touch
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-6 mt-12"
        >
          <a
            href="https://github.com/IsuruIndrajith"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-cream/50 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/isuru-edirisinghe-387ab7278"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-cream/50 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:isuruindrajith680@gmail.com"
            className="link-underline text-sm text-cream/50 hover:text-accent"
          >
            Email
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 border border-cream/20 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 bg-accent rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}