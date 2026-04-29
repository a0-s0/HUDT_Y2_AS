"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { designerData } from "@/data/designerData";

export function DesignerSpotlights() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="designers" className="py-20 md:py-32 px-4 bg-charcoal-light/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-beige tracking-[0.3em] uppercase text-sm mb-4">
            Archive Insights
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="chrome-text">Designer</span>{" "}
            <span className="text-stark-white">Spotlights</span>
          </h2>
          <p className="font-body text-silver-light max-w-2xl mx-auto text-sm md:text-base">
            Five visionaries who defined the decade. Hover to reveal archive
            insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {designerData.map((designer, index) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(designer.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative h-[480px] rounded-xl overflow-hidden border border-charcoal-light bg-charcoal-light/30">
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${designer.palette[0].hex}20, ${designer.palette[2].hex}10, transparent)`,
                  }}
                />

                {/* Header */}
                <div className="relative z-10 p-5">
                  <p className="text-beige tracking-widest uppercase text-xs mb-1">
                    {designer.nationality}
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-stark-white mb-1">
                    {designer.name}
                  </h3>
                  <p className="text-silver text-xs">{designer.period}</p>
                </div>

                {/* Content */}
                <div className="relative z-10 px-5 pb-5 flex-1">
                  <p className="text-beige-light text-sm font-medium mb-3">
                    {designer.title}
                  </p>
                  <p className="text-silver-light text-xs leading-relaxed mb-4 line-clamp-3">
                    {designer.description}
                  </p>

                  {/* Hover reveal */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: hoveredId === designer.id ? 1 : 0,
                      y: hoveredId === designer.id ? 0 : 10,
                    }}
                    className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm p-5 flex flex-col justify-center"
                  >
                    <p className="text-beige tracking-widest uppercase text-xs mb-3">
                      Archive Insights
                    </p>

                    <p className="text-stark-white text-xs mb-4 italic">
                      "{designer.mood}"
                    </p>

                    {/* Color palette */}
                    <div className="mb-4">
                      <p className="text-silver text-xs mb-2">Color Palette</p>
                      <div className="flex gap-1.5">
                        {designer.palette.map((color) => (
                          <div
                            key={color.name}
                            className="flex flex-col items-center gap-1"
                          >
                            <div
                              className="w-6 h-6 rounded-full border border-charcoal-light"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-[8px] text-silver/70">
                              {color.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fabrics */}
                    <div className="mb-4">
                      <p className="text-silver text-xs mb-2">Key Fabrics</p>
                      <div className="flex flex-wrap gap-1">
                        {designer.fabrics.map((fabric) => (
                          <span
                            key={fabric}
                            className="px-2 py-0.5 bg-charcoal-light rounded text-[10px] text-silver-light"
                          >
                            {fabric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Signature pieces */}
                    <div>
                      <p className="text-silver text-xs mb-2">Signature</p>
                      <ul className="space-y-1">
                        {designer.signature.slice(0, 3).map((sig) => (
                          <li
                            key={sig}
                            className="text-stark-white text-xs flex items-start gap-2"
                          >
                            <span className="text-beige mt-0.5">◆</span>
                            {sig}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Border glow on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === designer.id ? 1 : 0,
                  }}
                  className="absolute inset-0 rounded-xl border-2 border-beige/30 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
