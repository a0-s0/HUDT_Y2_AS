"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  BarChart,
  Bar,
} from "recharts";
import {
  logoSaturationData,
  parisVsNyData,
} from "@/data/designerData";

export function Infographics() {
  const [cityView, setCityView] = useState<"paris" | "newYork">("paris");
  const activeCity =
    cityView === "paris" ? parisVsNyData.paris : parisVsNyData.newYork;

  return (
    <section id="infographics" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-beige tracking-[0.3em] uppercase text-sm mb-4">
            Data Visualization
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="chrome-text">Socio-Political</span>{" "}
            <span className="text-stark-white">Impact</span>
          </h2>
          <p className="font-body text-silver-light max-w-2xl mx-auto text-sm md:text-base">
            How global events shaped the aesthetics of 1995–1999.
          </p>
        </motion.div>

        {/* City Toggle */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Paris vs New York Toggle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal-light/30 border border-charcoal-light rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-2xl text-stark-white">
                Paris vs New York
              </h3>
              <div className="flex bg-charcoal rounded-lg p-1">
                <button
                  onClick={() => setCityView("paris")}
                  className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    cityView === "paris"
                      ? "bg-beige/20 text-beige"
                      : "text-silver hover:text-stark-white"
                  }`}
                >
                  Paris
                </button>
                <button
                  onClick={() => setCityView("newYork")}
                  className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    cityView === "newYork"
                      ? "bg-silver/20 text-silver-light"
                      : "text-silver hover:text-stark-white"
                  }`}
                >
                  New York
                </button>
              </div>
            </div>

            <p className="text-beige-light text-sm mb-6">
              {activeCity.label}
            </p>

            <div className="h-72 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={activeCity.themes}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: "#C0C0C0", fontSize: 10 }}
                  />
                  <Radar
                    name="Value"
                    dataKey="value"
                    stroke={activeCity.color}
                    fill={activeCity.color}
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeCity.designers.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 bg-charcoal/60 border border-charcoal-light rounded-full text-xs text-silver"
                >
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Logo Saturation Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal-light/30 border border-charcoal-light rounded-xl p-6 md:p-8"
          >
            <h3 className="font-heading text-2xl text-stark-white mb-2">
              Logo Saturation Index
            </h3>
            <p className="text-silver-light text-sm mb-6">
              The rise of designer logos vs. the decline of minimalism (1995–1999)
            </p>

            <div className="h-72 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={logoSaturationData}>
                  <defs>
                    <linearGradient id="saturationGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="minimalismGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C0C0C0" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#C0C0C0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#C0C0C0", fontSize: 12 }}
                    axisLine={{ stroke: "#333" }}
                  />
                  <YAxis
                    tick={{ fill: "#C0C0C0", fontSize: 10 }}
                    axisLine={{ stroke: "#333" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#2C2C2C",
                      border: "1px solid #444",
                      borderRadius: "8px",
                      color: "#FAFAFA",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="saturation"
                    name="Logo Saturation"
                    stroke="#D4AF37"
                    fill="url(#saturationGrad)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="minimalism"
                    name="Minimalism"
                    stroke="#C0C0C0"
                    fill="url(#minimalismGrad)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Key insight */}
            <div className="bg-charcoal/40 rounded-lg p-4 border border-charcoal-light">
              <p className="text-beige text-xs tracking-widest uppercase mb-1">
                Key Insight
              </p>
              <p className="text-silver-light text-sm">
                By 1999, logo visibility had quadrupled from 1995 levels, while
                minimalist aesthetics declined by over 60%.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar chart - Cultural Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal-light/30 border border-charcoal-light rounded-xl p-6 md:p-8"
        >
          <h3 className="font-heading text-2xl text-stark-white mb-2 text-center">
            Cultural Impact by Year
          </h3>
          <p className="text-silver-light text-sm mb-6 text-center">
            Relative influence of cultural events on fashion trends
          </p>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { year: "1995", minimalism: 75, glamour: 30, cyber: 5, street: 45 },
                  { year: "1996", minimalism: 55, glamour: 65, cyber: 10, street: 55 },
                  { year: "1997", minimalism: 40, glamour: 55, cyber: 20, street: 50 },
                  { year: "1998", minimalism: 30, glamour: 60, cyber: 30, street: 65 },
                  { year: "1999", minimalism: 15, glamour: 45, cyber: 90, street: 70 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#C0C0C0", fontSize: 12 }}
                  axisLine={{ stroke: "#333" }}
                />
                <YAxis
                  tick={{ fill: "#C0C0C0", fontSize: 10 }}
                  axisLine={{ stroke: "#333" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2C2C2C",
                    border: "1px solid #444",
                    borderRadius: "8px",
                    color: "#FAFAFA",
                  }}
                />
                <Bar dataKey="minimalism" name="Minimalism" fill="#C0C0C0" radius={[4, 4, 0, 0]} />
                <Bar dataKey="glamour" name="Glamour" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cyber" name="Cyber" fill="#4A90D9" radius={[4, 4, 0, 0]} />
                <Bar dataKey="street" name="Street" fill="#C4B5A0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
