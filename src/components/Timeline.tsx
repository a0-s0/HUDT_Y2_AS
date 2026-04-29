"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/data/timelineData";

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-4">
            1995 — 1999
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal">
            Timeline
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-sm md:text-base">
            Click a year to reveal the cultural events and fashion movements
            that defined it.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 md:gap-4 mb-16">
          {timelineData.map((item) => (
            <motion.button
              key={item.year}
              onClick={() =>
                setSelectedYear(
                  selectedYear === item.year ? null : item.year
                )
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 md:px-8 py-3 md:py-4 rounded-sm transition-all duration-300 font-heading text-xl md:text-3xl ${
                selectedYear === item.year
                  ? "bg-charcoal text-offwhite"
                  : "bg-white text-silver hover:text-charcoal border border-border"
              }`}
            >
              {item.year}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedYear && (
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              {(() => {
                const data = timelineData.find((d) => d.year === selectedYear)!;
                return (
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white border border-border rounded-sm p-6 md:p-8"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-beige" />
                        <p className="font-body text-silver tracking-widest uppercase text-xs">
                          Global Event
                        </p>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3">
                        {data.event.title}
                      </h3>
                      <p className="font-body text-silver text-sm leading-relaxed">
                        {data.event.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white border border-border rounded-sm p-6 md:p-8"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-beige" />
                        <p className="font-body text-silver tracking-widest uppercase text-xs">
                          Fashion Trend
                        </p>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3">
                        {data.fashion.title}
                      </h3>
                      <p className="font-body text-silver text-sm leading-relaxed mb-4">
                        {data.fashion.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.fashion.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-3 py-1 bg-light-gray border border-border rounded-sm text-xs text-silver"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedYear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-silver text-sm"
          >
            Select a year above to explore
          </motion.div>
        )}
      </div>
    </section>
  );
}
