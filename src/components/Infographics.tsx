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
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-6">
            Data Visualization
          </p>
          <h2 className="font-heading text-[40px] md:text-[50px] lg:text-[60px] font-bold uppercase mb-8 text-deep-brown">
            Socio-Political Impact
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-base md:text-lg">
            How global events shaped the aesthetics of 1995—1999.
          </p>
        </motion.div>

        <div className="mb-20">
          <WorldMap />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-[28px] md:text-[32px] font-bold uppercase text-deep-brown">
                {activeCity.label}
              </h3>
              <div className="flex bg-light-gray rounded-lg p-0.5">
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

            <p className="text-silver text-sm mb-6">
              {activeCity.label === "Paris: Theatricality & Conglomeration"
                ? "Parisian fashion: theatricality meets luxury conglomeration"
                : "New York fashion: minimalism meets commercial appeal"}
            </p>

            <div className="h-72 mb-6">
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

            <div className="flex flex-wrap gap-2">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 md:p-8"
          >
            <h3 className="font-heading text-[28px] md:text-[32px] font-bold uppercase text-deep-brown mb-2">
              Logo Saturation Index
            </h3>
            <p className="font-body text-silver text-sm mb-6">
              The rise of designer logos vs. the decline of minimalism (1995—1999)
            </p>

            <div className="h-72 mb-6">
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

            <div className="bg-light-gray rounded-lg p-4">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 md:p-8"
        >
          <h3 className="font-heading text-[28px] md:text-[32px] font-bold uppercase text-deep-brown mb-2 text-center">
            Cultural Impact by Year
          </h3>
          <p className="font-body text-silver text-sm mb-6 text-center">
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
                <Bar dataKey="minimalism" name="Minimalism" fill="#3D2B1F" radius={[3, 3, 0, 0]} />
                <Bar dataKey="glamour" name="Glamour" fill="#C4B5A0" radius={[3, 3, 0, 0]} />
                <Bar dataKey="cyber" name="Cyber" fill="#888888" radius={[3, 3, 0, 0]} />
                <Bar dataKey="street" name="Street" fill="#A89880" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
