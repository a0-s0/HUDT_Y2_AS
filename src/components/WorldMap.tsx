"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

const fashionCapitals = [
  { id: "new-york", name: "New York", x: 720, y: 180, label: "USA" },
  { id: "paris", name: "Paris", x: 480, y: 130, label: "France" },
  { id: "london", name: "London", x: 460, y: 120, label: "UK" },
  { id: "milan", name: "Milan", x: 500, y: 145, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 850, y: 160, label: "Japan" },
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

  // Event handlers
  const handleEventClick = (event: CulturalEvent) => {
    setSelectedEvent(event);
  };

  const handleEventHover = (event: CulturalEvent) => {
    setHoveredEvent(event);
  };

  const handleEventLeave = () => {
    setHoveredEvent(null);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-none">
        <div className="relative w-full overflow-hidden bg-white rounded-2xl">
          <h3 className="font-heading text-[28px] md:text-[40px] font-bold uppercase text-deep-brown mb-6 text-center mt-8">
            Cultural Impact
          </h3>
          <div className="flex gap-3 justify-center mb-6">
            {[1995, 1996, 1997, 1998, 1999].map((year) => (
              <button
                key={year}
                onClick={() =>
                  setYearFilter(yearFilter === year ? null : year)
                }
                className={`px-4 py-2 text-sm rounded-md transition-all duration-300 font-body ${
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
            viewBox="0 0 1200 600"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Realistic world map outline - Mercator projection style */}
            <g stroke="#E0D5C5" strokeWidth="1" fill="none">
              {/* North America */}
              <path d="M200,80 L260,70 L320,75 L380,85 L440,90 L500,100 L540,110 L560,130 L550,150 L520,170 L500,200 L460,220 L420,240 L380,250 L340,240 L300,220 L260,200 L240,180 L220,160 L200,140 L190,120 Z" />
              {/* Central America */}
              <path d="M460,250 L480,260 L490,280 L480,300 L460,290 Z" />
              {/* South America */}
              <path d="M480,300 L520,290 L580,300 L640,320 L700,360 L720,400 L700,440 L660,460 L600,450 L560,420 L520,380 L490,340 Z" />
              {/* Europe */}
              <path d="M520,80 L540,75 L580,70 L620,75 L650,85 L660,100 L655,120 L640,140 L620,150 L600,145 L580,135 L560,130 L540,120 L530,105 L520,90 Z" />
              {/* UK/Ireland */}
              <path d="M500,95 L510,90 L515,100 L510,108 L500,102 Z" />
              {/* Africa */}
              <path d="M540,150 L580,145 L640,150 L700,160 L740,180 L760,220 L750,280 L720,340 L680,380 L640,390 L600,380 L560,360 L530,330 L510,300 L520,270 L530,240 Z" />
              {/* Middle East */}
              <path d="M650,160 L690,155 L720,165 L730,180 L720,195 L700,200 L680,195 L660,185 Z" />
              {/* Russia/Northern Asia */}
              <path d="M660,60 L720,55 L800,50 L880,55 L960,60 L1040,65 L1100,70 L1150,80 L1160,95 L1150,110 L1100,120 L1040,115 L960,110 L880,105 L800,100 L720,95 L660,85 Z" />
              {/* South Asia / India */}
              <path d="M800,180 L830,170 L850,190 L845,220 L820,240 L800,230 Z" />
              {/* East Asia / China */}
              <path d="M920,120 L960,110 L1000,115 L1040,125 L1060,140 L1050,160 L1020,170 L980,165 L940,155 L920,140 Z" />
              {/* Southeast Asia */}
              <path d="M960,170 L980,165 L1000,175 L1010,195 L995,210 L975,205 Z" />
              {/* Japan */}
              <path d="M1080,140 L1100,135 L1110,145 L1105,160 L1090,165 L1080,155 Z" />
              {/* Australia */}
              <path d="M1000,350 L1040,340 L1080,345 L1100,360 L1090,380 L1060,390 L1020,385 L1000,370 Z" />
              {/* New Zealand */}
              <path d="M1120,400 L1130,395 L1135,410 L1125,420 L1120,415 Z" />
            </g>

            {/* Cultural impact spots */}
            {filteredEvents.map((event, i) => {
              const isHovered = hoveredEvent?.year === event.year && hoveredEvent?.event === event.event;
              const radius = (event.impact / 100) * 12 + 4;

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
                    r={isHovered ? radius * 1.3 : radius}
                    fill="#3D2B1F"
                    opacity={isHovered ? 0.9 : 0.6}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEventClick(event)}
                    onMouseEnter={() => handleEventHover(event)}
                    onMouseLeave={handleEventLeave}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Year label */}
                  <text
                    x={event.x}
                    y={event.y - radius - 5}
                    textAnchor="middle"
                    fill="#3D2B1F"
                    fontSize="14"
                    fontFamily="Helvetica Neue, Arial, sans-serif"
                    opacity={isHovered ? 1 : 0.7}
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
                  fontSize="12"
                  fontFamily="Helvetica Neue, Arial, sans-serif"
                >
                  {capital.name}
                </text>
              </g>
            ))}

            {/* Cultural Impact Bar Chart at bottom */}
            <rect x="100" y="500" width="1000" height="70" fill="#F5F0E8" rx="4" />
            
            {yearChartData.map((item, i) => {
              const barWidth = 180;
              const x = 140 + i * (barWidth + 25);
              const barHeight = (item.impact / 100) * 65;
              const barColor = yearColors[item.year as keyof typeof yearColors] || "#3D2B1F";

              return (
                <g key={item.year}>
                  <rect
                    x={x}
                    y={500 + (65 - barHeight)}
                    width={barWidth}
                    height={barHeight}
                    fill={barColor}
                    opacity="0.7"
                    rx="2"
                  />
                  <text
                    x={x + barWidth / 2}
                    y="585"
                    textAnchor="middle"
                    fill="#3D2B1F"
                    fontSize="12"
                    fontFamily="Helvetica Neue, Arial, sans-serif"
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
      </div>
    </div>
  );
}
