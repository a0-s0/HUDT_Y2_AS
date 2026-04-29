"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/data/timelineData";

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-beige tracking-[0.3em] uppercase text-sm mb-4">
            1995 — 1999
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="chrome-text">Timeline</span>
          </h2>
          <p className="font-body text-silver-light max-w-2xl mx-auto text-sm md:text-base">
            Click a year to reveal the cultural events and fashion movements
            that defined it.
          </p>
        </motion.div>

        {/* Year selector */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
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
              className={`relative px-4 md:px-6 py-3 md:py-4 rounded-lg border transition-all duration-300 ${
                selectedYear === item.year
                  ? "border-beige bg-beige/10 text-beige"
                  : "border-charcoal-light bg-charcoal-light/50 text-silver hover:border-silver hover:text-stark-white"
              }`}
            >
              <span className="font-heading text-xl md:text-3xl font-bold">
                {item.year}
              </span>
              {selectedYear === item.year && (
                <motion.div
                  layoutId="timelineIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-beige"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content card */}
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
                    {/* Global Event */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-charcoal-light/40 border border-charcoal-light rounded-xl p-6 md:p-8"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{data.event.icon}</span>
                        <p className="text-beige tracking-widest uppercase text-xs">
                          Global Event
                        </p>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-stark-white mb-3">
                        {data.event.title}
                      </h3>
                      <p className="font-body text-silver-light text-sm leading-relaxed">
                        {data.event.description}
                      </p>
                    </motion.div>

                    {/* Fashion Trend */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-charcoal-light/40 border border-charcoal-light rounded-xl p-6 md:p-8 relative overflow-hidden"
                    >
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                        style={{ backgroundColor: data.fashion.colorAccent }}
                      />
                      <p className="text-beige tracking-widest uppercase text-xs mb-4">
                        Fashion Trend
                      </p>
                      <h3 className="font-heading text-xl md:text-2xl text-stark-white mb-3">
                        {data.fashion.title}
                      </h3>
                      <p className="font-body text-silver-light text-sm leading-relaxed mb-4">
                        {data.fashion.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.fashion.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-3 py-1 bg-charcoal/60 border border-charcoal-light rounded-full text-xs text-silver"
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

        {/* Empty state */}
        {!selectedYear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-silver/50 text-sm"
          >
            Select a year above to explore
          </motion.div>
        )}
      </div>
    </section>
  );
}
