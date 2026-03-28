"use client";

import { HTMLMotionProps, motion } from "motion/react";

export function AnimatedSection({ delay = 0, ...props }: HTMLMotionProps<"section"> & { delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      {...props}
    />
  );
}

export function AnimatedDiv({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      {...props}
    />
  );
}

export function AnimatedArticle({ delay = 0, ...props }: HTMLMotionProps<"article"> & { delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      {...props}
    />
  );
}

export function AnimatedHeader({ delay = 0, ...props }: HTMLMotionProps<"header"> & { delay?: number }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      {...props}
    />
  );
}
