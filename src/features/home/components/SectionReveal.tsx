'use client';

import type { ReactNode } from 'react';
import { MotionConfig, motion } from 'framer-motion';

type SectionRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  return (
    <MotionConfig reducedMotion='user'>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{
          duration: 0.72,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
