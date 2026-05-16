"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
};

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: FadeInSectionProps) {
  const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay };
  const motionProps = immediate
    ? {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition,
      }
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition,
      };

  return (
    <motion.section className={className} {...motionProps}>
      {children}
    </motion.section>
  );
}
