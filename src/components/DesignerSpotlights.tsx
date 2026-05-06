"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { designerData } from "@/data/designerData";

export function DesignerSpotlights() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="designers" className="py-32 md:py-48 px-4 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-6">
            Archive Insights
          </p>
          <h2 className="font-heading text-[50px] md:text-[70px] lg:text-[80px] font-bold uppercase mb-8 text-deep-brown">
            Designer Spotlights
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-base md:text-lg">
            Five visionaries who defined the decade. Hover to reveal archive
            insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
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
              <div className="relative h-[480px] overflow-hidden bg-white">
                <div className="relative z-10 p-6">
                  <p className="font-body text-silver tracking-widest uppercase text-xs mb-2">
                    {designer.nationality}
                  </p>
                  <h3 className="font-heading text-[28px] md:text-[32px] font-bold uppercase text-deep-brown mb-2">
                    {designer.name}
                  </h3>
                  <p className="font-body text-silver text-xs">{designer.period}</p>
                </div>

                <div className="relative z-10 px-6 pb-6 flex-1">
                  <p className="text-beige-dark text-sm font-medium mb-4">
                    {designer.title}
                  </p>
                  <p className="font-body text-silver text-sm leading-relaxed mb-6 line-clamp-3">
                    {designer.description}
                  </p>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === designer.id ? 1 : 0,
                    y: hoveredId === designer.id ? 0 : 10,
                  }}
                  className="absolute inset-0 bg-offwhite/97 backdrop-blur-sm p-6 flex flex-col justify-center"
                >
                  <p className="font-body text-silver tracking-widest uppercase text-xs mb-4">
                    Archive Insights
                  </p>

                  <p className="text-deep-brown text-sm mb-6 italic">
                    &quot;{designer.mood}&quot;
                  </p>

                  <div className="mb-6">
                    <p className="font-body text-silver text-xs mb-3">Color Palette</p>
                    <div className="flex gap-2">
                      {designer.palette.map((color) => (
                        <div
                          key={color.name}
                          className="flex flex-col items-center gap-1"
                        >
                          <div
                            className="w-8 h-8 rounded-full"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-[8px] text-silver">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-body text-silver text-xs mb-3">Key Fabrics</p>
                    <div className="flex flex-wrap gap-2">
                      {designer.fabrics.map((fabric) => (
                        <span
                          key={fabric}
                          className="px-3 py-1 bg-light-gray text-[10px] text-silver"
                        >
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-silver text-xs mb-3">Signature</p>
                    <ul className="space-y-2">
                      {designer.signature.slice(0, 3).map((sig) => (
                        <li
                          key={sig}
                          className="text-deep-brown text-xs flex items-start gap-2"
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
