"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, 200]);
  const subtitleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal-light" />

      {/* Decorative chrome line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-silver to-transparent"
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-beige tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-body"
        >
          Fashion Culture & History
        </motion.p>

        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none mb-8"
        >
          <span className="chrome-text">The Paradigm</span>
          <br />
          <span className="text-stark-white">Shift</span>
        </motion.h1>

        <motion.h2
          style={{ opacity: subtitleOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-heading text-xl md:text-2xl lg:text-3xl text-silver-light font-light max-w-3xl mx-auto mb-6"
        >
          Fashion 1995—1999
        </motion.h2>

        <motion.p
          style={{ opacity: subtitleOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-sm md:text-base text-beige-light max-w-2xl mx-auto leading-relaxed"
        >
          The transition from stark mid-90s minimalism to the dawn of Y2K
          futurism, "It" bags, and pop-culture dominance.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-silver text-xs tracking-widest uppercase">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-beige" />
        </motion.div>
      </motion.div>

      {/* Decorative chrome line bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-silver via-transparent to-transparent"
      />
    </section>
  );
}
