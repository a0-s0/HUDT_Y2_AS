"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/data/timelineData";

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-32 md:py-48 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-6">
            1995 — 1999
          </p>
          <h2 className="font-heading text-[40px] md:text-[50px] lg:text-[60px] font-bold uppercase mb-8 text-deep-brown text-center">
            Timeline
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-base md:text-lg text-center">
            Click a year to reveal the cultural events and fashion movements
            that defined it.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-8 mb-20">
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
              className={`relative px-6 md:px-10 py-4 md:py-5 rounded-sm transition-all duration-300 font-heading text-2xl md:text-4xl ${
                selectedYear === item.year
                  ? "bg-deep-brown text-offwhite"
                  : "bg-white text-silver hover:text-deep-brown"
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
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white p-8 md:p-12 rounded-xl text-center"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-beige" />
                        <p className="font-body text-silver tracking-widest uppercase text-xs">
                          Global Event
                        </p>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-deep-brown mb-4">
                        {data.event.title}
                      </h3>
                      <p className="font-body text-silver text-base leading-relaxed">
                        {data.event.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white p-8 md:p-12 rounded-xl text-center"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-beige" />
                        <p className="font-body text-silver tracking-widest uppercase text-xs">
                          Fashion Trend
                        </p>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-deep-brown mb-4">
                        {data.fashion.title}
                      </h3>
                      <p className="font-body text-silver text-base leading-relaxed mb-6">
                        {data.fashion.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {data.fashion.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-4 py-2 bg-light-gray text-xs text-silver"
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
            className="text-center text-silver text-base"
          >
            Select a year above to explore
          </motion.div>
        )}
      </div>
    </section>
  );
}
