"use client";

import { motion } from "framer-motion";
import { WorldMap } from "./WorldMap";
import { LogoGallery } from "./LogoGallery";

export function Infographics() {
  return (
    <section id="infographics" className="py-32 md:py-48 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-6">
            Data Visualization
          </p>
          <h2 className="font-heading text-[50px] md:text-[70px] lg:text-[80px] font-bold uppercase mb-8 text-deep-brown">
            Socio-Political Impact
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-base md:text-lg">
            How global events shaped the aesthetics of 1995—1999.
          </p>
        </motion.div>

        <div className="mb-20">
          <WorldMap />
        </div>

        <LogoGallery />
      </div>
    </section>
  );
}
