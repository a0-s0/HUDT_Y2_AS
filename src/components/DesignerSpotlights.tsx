"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { designerData } from "@/data/designerData";

export function DesignerSpotlights() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedDesigner, setSelectedDesigner] = useState<typeof designerData[0] | null>(null);

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
            <h2 className="font-heading text-[40px] md:text-[50px] lg:text-[60px] font-bold uppercase mb-8 text-deep-brown text-center">
              Designer Spotlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 justify-center">
            {designerData.map((designer, index) => (
              <motion.div
                key={designer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedDesigner(designer)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-[240px] overflow-hidden bg-white rounded-xl">
                  <div className="relative z-10 p-10">
                    <p className="font-body text-silver tracking-widest uppercase text-[10px] mb-6">
                      {designer.nationality}
                    </p>
                    <h3 className="font-heading text-[11px] md:text-[12px] font-bold uppercase text-deep-brown mb-6 whitespace-nowrap overflow-hidden text-ellipsis px-10">
                      {designer.name}
                    </h3>
                    <p className="font-body text-silver text-[10px] px-10">{designer.period}</p>
                  </div>

                  <div className="relative z-10 px-10 pb-10 flex-1">
                    <p className="text-beige-dark text-[10px] font-medium mb-6">
                      {designer.title}
                    </p>
                    <p className="font-body text-silver text-[10px] leading-relaxed mb-4 line-clamp-3">
                      {designer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Pop-out Modal for Designer Details */}
      <AnimatePresence>
        {selectedDesigner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-brown/90 backdrop-blur-sm"
            onClick={() => setSelectedDesigner(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-offwhite p-6 md:p-8 max-h-[90vh] overflow-y-auto rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDesigner(null)}
                className="absolute top-4 right-4 text-silver hover:text-deep-brown transition-colors text-xl"
              >
                ✕
              </button>

              <p className="font-body text-silver tracking-widest uppercase text-xs mb-2">
                {selectedDesigner.nationality}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-deep-brown mb-2">
                {selectedDesigner.name}
              </h3>
              <p className="font-body text-silver text-xs mb-4">{selectedDesigner.period}</p>
              <p className="text-beige-dark text-sm font-medium mb-4">
                {selectedDesigner.title}
              </p>
              <p className="font-body text-deep-brown text-sm leading-relaxed mb-6">
                {selectedDesigner.description}
              </p>

              <div className="mb-6">
                <p className="font-body text-silver text-xs mb-3 uppercase tracking-widest">Mood</p>
                <p className="text-deep-brown text-base mb-6 italic">
                  &quot;{selectedDesigner.mood}&quot;
                </p>
              </div>

              <div className="mb-6">
                <p className="font-body text-silver text-xs mb-3 uppercase tracking-widest">Color Palette</p>
                <div className="flex gap-3">
                  {selectedDesigner.palette.map((color) => (
                    <div
                      key={color.name}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-10 h-10 rounded-full"
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
                <p className="font-body text-silver text-xs mb-3 uppercase tracking-widest">Key Fabrics</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDesigner.fabrics.map((fabric) => (
                    <span
                      key={fabric}
                      className="px-3 py-1 bg-light-gray text-xs text-silver rounded-lg"
                    >
                      {fabric}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-body text-silver text-xs mb-3 uppercase tracking-widest">Signature</p>
                <ul className="space-y-2">
                  {selectedDesigner.signature.slice(0, 3).map((sig) => (
                    <li
                      key={sig}
                      className="text-deep-brown text-sm flex items-start gap-2"
                    >
                      <span className="text-beige mt-0.5">◆</span>
                      {sig}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
