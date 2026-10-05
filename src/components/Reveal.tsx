'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

const getVariants = (direction: string) => {
  const hidden: Record<string, Variant> = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none: { opacity: 0 },
  };

  return {
    hidden: hidden[direction] || hidden.up,
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-80px 0px',
  });

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
