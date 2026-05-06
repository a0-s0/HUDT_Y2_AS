"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

const fashionCapitals = [
  { id: "new-york", name: "New York", x: 280, y: 170, label: "USA" },
  { id: "paris", name: "Paris", x: 468, y: 158, label: "France" },
  { id: "london", name: "London", x: 455, y: 148, label: "UK" },
  { id: "milan", name: "Milan", x: 480, y: 165, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 790, y: 175, label: "Japan" },
];

// Year-to-color mapping for the bar chart overlay
const yearColors: Record<number, string> = {
  1995: "#3D2B1F",
  1996: "#C4B5A0",
  1997: "#888888",
  1998: "#A89880",
  1999: "#B8960C",
};

// Event themes mapping
const eventThemes: Record<string, string[]> = {
  "Rise of Supermodels": ["Supermodels", "Kate Moss", "Naomi Campbell", "Cindy Crawford", "Fashion Icons"],
  "Grunge to Minimalism": ["Marc Jacobs", "Grunge", "Minimalism", "Seattle", "Flannel"],
  "Gucci Revival": ["Tom Ford", "Gucci", "Sexy Minimalism", "Revival", "Luxury"],
  "Dior Saddle Bag Launch": ["John Galliano", "Dior", "Saddle Bag", "Logo Mania", "It Bag"],
  "Princess Diana's Death": ["Princess Diana", "Mourning Attire", "Fashion Impact", "1997", "Cultural Shock"],
  "Alexander McQueen's Rise": ["McQueen", "Givenchy", "British Fashion", "Dark Romanticism", "Innovation"],
  "Y2K Aesthetic Emerges": ["Y2K", "Futuristic", "Metallics", "Tech Fashion", "1998"],
  "Gianni Versace Assassination": ["Versace", "1998", "Fashion Legacy", "Tragedy", "Milan"],
  "Y2K Panic Fashion": ["Y2K", "Tech-wear", "Metallic Fabrics", "1999", "Digital Age"],
  "Logo Mania Peak": ["Logos", "Brand Visibility", "Dior", "Chanel", "Consumerism"],
};

export function WorldMap() {
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<CulturalEvent | null>(null);

  const filteredEvents = yearFilter
    ? culturalImpactData.filter((e) => e.year === yearFilter)
    : culturalImpactData;

  // Group events by year for the bar chart overlay
  const eventsByYear = culturalImpactData.reduce((acc, event) => {
    if (!acc[event.year]) acc[event.year] = 0;
    acc[event.year] += event.impact;
    return acc;
  }, {} as Record<number, number>);

  const yearChartData = Object.entries(eventsByYear).map(([year, value]) => ({
    year: parseInt(year),
    impact: Math.min(value, 100),
  })).sort((a, b) => a.year - b.year);

  return (
    <div>
      <div className="relative w-full overflow-hidden bg-white p-4 md:p-6 flex flex-col items-center">
        <h3 className="font-heading text-[28px] md:text-[40px] font-bold uppercase text-deep-brown mb-4 text-center">
          Cultural Impact
        </h3>
        <div className="flex gap-2 justify-center mb-4">
          {[1995, 1996, 1997, 1998, 1999].map((year) => (
            <button
              key={year}
              onClick={() =>
                setYearFilter(yearFilter === year ? null : year)
              }
              className={`px-3 py-1.5 text-xs rounded-sm transition-all duration-300 font-body ${
                yearFilter === year
                  ? "bg-deep-brown text-offwhite"
                  : "text-silver hover:text-deep-brown"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        <svg
          viewBox="0 0 1200 500"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified world map outline */}
          <g stroke="#E0D5C5" strokeWidth="0.8" fill="none">
            <path d="M120,80 L160,70 L200,75 L230,90 L250,85 L270,100 L260,120 L280,130 L270,150 L260,170 L240,180 L230,200 L200,190 L180,200 L160,180 L140,160 L120,140 L100,120 Z" />
            <path d="M230,200 L250,210 L260,230 L255,260 L240,280 L220,285 L210,270 L215,240 Z" />
            <path d="M420,80 L440,75 L470,80 L490,85 L510,90 L520,100 L510,115 L500,130 L480,135 L460,140 L440,130 L430,110 L420,100 Z" />
            <path d="M460,140 L480,145 L500,155 L510,175 L500,200 L490,230 L470,250 L450,240 L440,210 L445,180 Z" />
            <path d="M520,80 L560,70 L620,75 L680,80 L730,90 L770,100 L790,120 L780,145 L760,160 L730,170 L700,165 L660,155 L620,145 L580,130 L560,120 L540,110 L520,100 Z" />
            <path d="M750,200 L780,195 L810,200 L820,220 L810,240 L790,250 L770,245 L755,230 Z" />
          </g>

          {/* Cultural impact spots */}
          {filteredEvents.map((event, i) => {
            const isHovered = hoveredEvent?.year === event.year && hoveredEvent?.event === event.event;
            const radius = (event.impact / 100) * 10 + 3; // Smaller, cleaner spots

            return (
              <g key={`${event.year}-${i}`}>
                {/* Pulse animation for high impact */}
                {event.impact > 90 && (
                  <circle
                    cx={event.x}
                    cy={event.y}
                    r={radius}
                    fill="none"
                    stroke="#3D2B1F"
                    strokeWidth="0.5"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      from={radius.toString()}
                      to={(radius * 1.8).toString()}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.3"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Main spot */}
                <motion.circle
                  cx={event.x}
                  cy={event.y}
                  r={isHovered ? radius + 2 : radius}
                  fill="#3D2B1F"
                  opacity={isHovered ? 1 : 0.7}
                  stroke="#F5F0E8"
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0.7, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredEvent(event)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => setSelectedEvent(event)}
                />

                {/* Year label only - cleaner look 
                <text
                  x={event.x}
                  y={event.y - radius - 4}
                  textAnchor="middle"
                  fill="#3D2B1F"
                  fontSize="8"
                  fontFamily="var(--font-inter)"
                  fontWeight="600"
                >
                  {event.year}
                </text>
                */}
              </g>
            );
          })}

          {/* Capital labels */}
          {fashionCapitals.map((capital) => (
            <g key={capital.id}>
              <text
                x={capital.x}
                y={capital.y + 20}
                textAnchor="middle"
                fill="#888888"
                fontSize="7"
                fontFamily="var(--font-inter)"
              >
                {capital.name}
              </text>
            </g>
          ))}

          {/* Cultural Impact Bar Chart at bottom */}
          {/* Background */}
          <rect x="100" y="290" width="700" height="40" fill="#F5F0E8" rx="4" />

          {/* Bars */}
          {yearChartData.map((item, i) => {
            const barWidth = 120;
            const x = 120 + i * (barWidth + 15);
            const barHeight = (item.impact / 100) * 35;
            const barColor = yearColors[item.year as keyof typeof yearColors] || "#3D2B1F";

            return (
              <g key={item.year}>
                <rect
                  x={x}
                  y={290 + (35 - barHeight)}
                  width={barWidth}
                  height={barHeight}
                  fill={barColor}
                  opacity="0.7"
                  rx="2"
                />
                <text
                  x={x + barWidth / 2}
                  y="335"
                  textAnchor="middle"
                  fill="#3D2B1F"
                  fontSize="8"
                  fontFamily="var(--font-inter)"
                  fontWeight="500"
                >
                  {item.year}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover tooltip - show themes */}
        <AnimatePresence>
          {hoveredEvent && !selectedEvent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-4 left-4 right-4 bg-offwhite p-4 md:p-6 shadow-lg rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: yearColors[hoveredEvent.year as keyof typeof yearColors] || "#3D2B1F" }}
                />
                <p className="font-body text-xs text-silver uppercase tracking-widest">
                  {hoveredEvent.year}
                </p>
              </div>
              <h4 className="font-heading text-base md:text-lg font-bold text-deep-brown mb-2">
                {hoveredEvent.event}
              </h4>
              <p className="font-body text-sm text-deep-brown mb-3">
                {hoveredEvent.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(eventThemes[hoveredEvent.event] || []).map((theme) => (
                  <span
                    key={theme}
                    className="px-2 py-0.5 bg-light-gray text-[10px] text-silver rounded"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected event modal - show full details + themes */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-brown/90 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-2xl w-full bg-offwhite p-6 md:p-8 max-h-[90vh] overflow-y-auto rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-silver hover:text-deep-brown transition-colors text-xl"
                >
                  ✕
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: yearColors[selectedEvent.year as keyof typeof yearColors] || "#3D2B1F" }}
                  />
                  <p className="font-body text-xs text-silver uppercase tracking-widest">
                    {selectedEvent.year}
                  </p>
                </div>

                <h4 className="font-heading text-2xl md:text-3xl font-bold uppercase text-deep-brown mb-3">
                  {selectedEvent.event}
                </h4>

                <p className="font-body text-deep-brown text-base mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div className="mb-6">
                  <p className="font-body text-xs text-silver uppercase tracking-widest mb-3">
                    Cultural Themes & Trends
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(eventThemes[selectedEvent.event] || []).map((theme) => (
                      <span
                        key={theme}
                        className="px-3 py-1 bg-light-gray text-xs text-deep-brown rounded-lg"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-xs text-silver uppercase tracking-widest">
                      Impact Level
                    </span>
                    <span className="font-heading text-lg font-bold text-deep-brown">
                      {selectedEvent.impact}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-offwhite rounded-full overflow-hidden">
                    <div
                      className="h-full bg-deep-brown rounded-full transition-all duration-500"
                      style={{ width: `${selectedEvent.impact}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

        {!hoveredEvent && !selectedEvent && (
          <p className="mt-4 font-body text-silver text-sm text-center">
            &nbsp;
          </p>
        )}
    </div>
  );
}
