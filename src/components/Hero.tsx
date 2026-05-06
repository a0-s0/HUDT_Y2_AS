"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32"
    >
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm md:text-base tracking-[0.25em] uppercase mb-12 text-silver"
        >
          Fashion Culture & History
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-heading text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-bold uppercase tracking-tight leading-none mb-12 text-deep-brown"
        >
          THE FASHION
          <br />
          PARADIGM SHIFT
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase max-w-3xl mx-auto mb-8 text-deep-brown/80"
        >
          Fashion 1995—1999
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-base md:text-lg text-silver max-w-2xl mx-auto leading-relaxed"
        >
          The transition from stark mid-90s minimalism to the dawn of Y2K
          futurism, &quot;It&quot; bags, and pop-culture dominance.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-beige to-transparent" />
      </motion.div>
    </section>
  );
}
