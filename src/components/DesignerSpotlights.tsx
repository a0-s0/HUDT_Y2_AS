"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { designerData } from "@/data/designerData";

export function DesignerSpotlights() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="designers" className="py-20 md:py-32 px-4 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-4">
            Archive Insights
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal">
            Designer Spotlights
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-sm md:text-base">
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
              <div className="relative h-[480px] rounded-sm overflow-hidden border border-border bg-white shadow-sm">
                <div className="relative z-10 p-5">
                  <p className="font-body text-silver tracking-widest uppercase text-xs mb-1">
                    {designer.nationality}
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-1">
                    {designer.name}
                  </h3>
                  <p className="font-body text-silver text-xs">{designer.period}</p>
                </div>

                <div className="relative z-10 px-5 pb-5 flex-1">
                  <p className="text-beige-dark text-sm font-medium mb-3">
                    {designer.title}
                  </p>
                  <p className="font-body text-silver text-xs leading-relaxed mb-4 line-clamp-3">
                    {designer.description}
                  </p>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === designer.id ? 1 : 0,
                    y: hoveredId === designer.id ? 0 : 10,
                  }}
                  className="absolute inset-0 bg-offwhite/97 backdrop-blur-sm p-5 flex flex-col justify-center"
                >
                  <p className="font-body text-silver tracking-widest uppercase text-xs mb-3">
                    Archive Insights
                  </p>

                  <p className="text-charcoal text-xs mb-4 italic">
                    "{designer.mood}"
                  </p>

                  <div className="mb-4">
                    <p className="font-body text-silver text-xs mb-2">Color Palette</p>
                    <div className="flex gap-1.5">
                      {designer.palette.map((color) => (
                        <div
                          key={color.name}
                          className="flex flex-col items-center gap-1"
                        >
                          <div
                            className="w-6 h-6 rounded-full border border-border"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-[8px] text-silver">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-body text-silver text-xs mb-2">Key Fabrics</p>
                    <div className="flex flex-wrap gap-1">
                      {designer.fabrics.map((fabric) => (
                        <span
                          key={fabric}
                          className="px-2 py-0.5 bg-light-gray border border-border rounded-sm text-[10px] text-silver"
                        >
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-silver text-xs mb-2">Signature</p>
                    <ul className="space-y-1">
                      {designer.signature.slice(0, 3).map((sig) => (
                        <li
                          key={sig}
                          className="text-charcoal text-xs flex items-start gap-2"
                        >
                          <span className="text-beige mt-0.5">◆</span>
                          {sig}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
