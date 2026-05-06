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
import { WorldMap } from "./WorldMap";

const gridColor = "#E0D5C5";
const axisColor = "#888888";

export function Infographics() {
  const [cityView, setCityView] = useState<"paris" | "newYork">("paris");
  const activeCity =
    cityView === "paris" ? parisVsNyData.paris : parisVsNyData.newYork;

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
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[48px] font-bold uppercase mb-6 text-deep-brown text-center">
            Socio-Political Impact
          </h2>
        </motion.div>

        <div className="mb-20">
          <WorldMap />
        </div>

        <div className="flex flex-col items-center justify-center gap-8 mb-20 max-w-4xl mx-auto">
          {/* Paris vs New York - Smaller centered box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 md:p-8 w-full max-w-xl mx-auto text-center"
          >
            <div className="mb-6">
              <h3 className="font-heading text-[24px] md:text-[28px] font-bold uppercase text-deep-brown mb-4">
                {activeCity.label}
              </h3>
              <div className="flex bg-light-gray rounded-lg p-0.5 justify-center mx-auto inline-flex">
                <button
                  onClick={() => setCityView("paris")}
                  className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    cityView === "paris"
                      ? "bg-deep-brown text-offwhite"
                      : "text-silver hover:text-deep-brown"
                  }`}
                >
                  Paris
                </button>
                <button
                  onClick={() => setCityView("newYork")}
                  className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    cityView === "newYork"
                      ? "bg-deep-brown text-offwhite"
                      : "text-silver hover:text-deep-brown"
                  }`}
                >
                  New York
                </button>
              </div>
            </div>

            <p className="text-silver text-sm mb-6 max-w-lg mx-auto">
              {activeCity.label === "Paris: Theatricality & Conglomeration"
                ? "Parisian fashion: theatricality meets luxury conglomeration"
                : "New York fashion: minimalism meets commercial appeal"}
            </p>

            <div className="h-72 mb-6 max-w-2xl mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={activeCity.themes}>
                  <PolarGrid stroke={gridColor} />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: axisColor, fontSize: 10 }}
                  />
                  <Radar
                    name="Value"
                    dataKey="value"
                    stroke={activeCity.color}
                    fill={activeCity.color}
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {activeCity.designers.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 bg-light-gray text-xs text-silver rounded-lg"
                >
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Logo Saturation Index - Smaller centered box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 md:p-8 w-full max-w-xl mx-auto"
          >
            <h3 className="font-heading text-[24px] md:text-[28px] font-bold uppercase text-deep-brown mb-2 text-center">
              Logo Saturation Index
            </h3>
            <p className="font-body text-silver text-sm mb-6 max-w-md mx-auto text-center">
              The rise of designer logos vs. the decline of minimalism (1995—1999)
            </p>

            <div className="h-56 mb-6 max-w-lg mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={logoSaturationData}>
                  <defs>
                    <linearGradient id="satGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3D2B1F" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#3D2B1F" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="minGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C4B5A0" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#C4B5A0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: axisColor, fontSize: 12 }}
                    axisLine={{ stroke: gridColor }}
                  />
                  <YAxis
                    tick={{ fill: axisColor, fontSize: 10 }}
                    axisLine={{ stroke: gridColor }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#F5F0E8",
                      border: "none",
                      borderRadius: "8px",
                      color: "#3D2B1F",
                      fontFamily: "var(--font-inter)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="saturation"
                    name="Logo Saturation"
                    stroke="#3D2B1F"
                    fill="url(#satGrad)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="minimalism"
                    name="Minimalism"
                    stroke="#C4B5A0"
                    fill="url(#minGrad)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-light-gray rounded-lg p-4 max-w-sm mx-auto">
              <p className="font-body text-silver text-xs tracking-widest uppercase mb-1">
                Key Insight
              </p>
              <p className="font-body text-deep-brown text-sm">
                By 1999, logo visibility had quadrupled from 1995 levels, while
                minimalist aesthetics declined by over 60%.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
