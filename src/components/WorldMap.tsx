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

// Convert lat/lng to SVG coordinates (simplified Mercator)
const latLngToSvg = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * 900;
  const y = ((90 - lat) / 180) * 300;
  return { x, y };
};

export function WorldMap() {
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<CulturalEvent | null>(null);

  const filteredEvents = yearFilter
    ? culturalImpactData.filter((e) => e.year === yearFilter)
    : culturalImpactData;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-heading text-[28px] md:text-[40px] font-bold uppercase text-deep-brown mb-2">
            Cultural Impact Map
          </h3>
          <p className="font-body text-sm text-silver">1995—1999 Global Events</p>
        </div>
        <div className="flex gap-2">
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
      </div>

      <div className="relative w-full overflow-hidden bg-white p-6 md:p-8">
        <svg
          viewBox="0 0 900 300"
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
            const pos = latLngToSvg(event.lat, event.lng);
            const isHovered = hoveredEvent?.year === event.year && hoveredEvent?.event === event.event;
            const radius = (event.impact / 100) * 12 + 4;

            return (
              <g key={`${event.year}-${i}`}>
                {/* Pulse animation for high impact */}
                {event.impact > 90 && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={radius}
                    fill="none"
                    stroke="#3D2B1F"
                    strokeWidth="0.5"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      from={radius.toString()}
                      to={(radius * 2).toString()}
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
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? radius + 2 : radius}
                  fill="#3D2B1F"
                  opacity={isHovered ? 0.9 : 0.6}
                  stroke="#F5F0E8"
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isHovered ? 0.9 : 0.6, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredEvent(event)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => setSelectedEvent(event)}
                />

                {/* Year label */}
                <text
                  x={pos.x}
                  y={pos.y - radius - 5}
                  textAnchor="middle"
                  fill="#3D2B1F"
                  fontSize="7"
                  fontFamily="var(--font-inter)"
                  fontWeight="600"
                >
                  {event.year}
                </text>
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
        </svg>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoveredEvent && !selectedEvent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-4 right-4 bg-offwhite p-4 md:p-6"
            >
              <p className="font-body text-silver tracking-widest uppercase text-xs mb-2">
                {hoveredEvent.year} — Impact: {hoveredEvent.impact}%
              </p>
              <h4 className="font-heading text-lg md:text-xl font-bold uppercase text-deep-brown mb-2">
                {hoveredEvent.event}
              </h4>
              <p className="font-body text-sm text-silver">
                {hoveredEvent.description}
              </p>
              <p className="font-body text-xs text-silver/50 mt-2">
                Click for details
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected event modal */}
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
                className="relative max-w-lg w-full bg-offwhite p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-silver hover:text-deep-brown transition-colors"
                >
                  ✕
                </button>

                <p className="font-body text-silver tracking-widest uppercase text-xs mb-2">
                  {selectedEvent.year} — Impact: {selectedEvent.impact}%
                </p>
                <h4 className="font-heading text-2xl md:text-3xl font-bold uppercase text-deep-brown mb-3">
                  {selectedEvent.event}
                </h4>
                <p className="font-body text-base text-deep-brown mb-4">
                  {selectedEvent.description}
                </p>

                <div className="bg-light-gray p-4">
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
          Click on the spots to explore cultural events
        </p>
      )}
    </div>
  );
}
