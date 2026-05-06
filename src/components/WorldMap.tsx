"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

const fashionCapitals = [
  { id: "new-york", name: "New York", x: 200, y: 150, label: "USA" },
  { id: "paris", name: "Paris", x: 480, y: 130, label: "France" },
  { id: "london", name: "London", x: 460, y: 120, label: "UK" },
  { id: "milan", name: "Milan", x: 500, y: 140, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 780, y: 150, label: "Japan" },
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
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World map fills the entire SVG */}
            <g stroke="#E0D5C5" strokeWidth="1" fill="none">
              {/* North America */}
              <path d="M50,80 L150,60 L250,70 L320,90 L350,85 L380,100 L360,140 L400,160 L380,200 L340,220 L300,200 L260,220 L220,180 L180,200 L140,160 L100,130 L60,100 Z" />
              <path d="M340,220 L380,240 L400,280 L390,320 L360,340 L320,330 L300,280 Z" />
              {/* Central America */}
              <path d="M280,240 L300,250 L310,270 L300,290 L280,280 Z" />
              {/* South America */}
              <path d="M320,320 L360,310 L420,320 L480,340 L500,380 L480,420 L440,440 L380,430 L340,400 L320,360 Z" />
              {/* Europe */}
              <path d="M450,60 L500,50 L560,55 L620,60 L660,70 L680,90 L660,120 L640,140 L600,150 L560,140 L520,130 L480,120 L460,100 L450,80 Z" />
              {/* Africa */}
              <path d="M480,150 L520,140 L580,150 L640,160 L680,180 L700,220 L720,280 L700,340 L680,380 L640,400 L580,410 L520,400 L480,380 L460,340 L440,280 L460,220 Z" />
              {/* Asia */}
              <path d="M680,50 L760,40 L860,50 L960,60 L1000,80 L980,120 L960,160 L920,200 L860,240 L800,280 L740,300 L700,280 L680,240 L660,200 L640,160 L660,120 L680,80 Z" />
              {/* India */}
              <path d="M720,200 L760,190 L780,220 L770,260 L740,280 L720,250 Z" />
              {/* Southeast Asia */}
              <path d="M800,240 L840,230 L860,250 L850,270 L820,280 L800,260 Z" />
              {/* Japan */}
              <path d="M880,180 L900,170 L920,180 L910,200 L890,210 L880,190 Z" />
              {/* Australia */}
              <path d="M880,360 L940,350 L980,360 L960,380 L920,390 L880,380 Z" />
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
            <rect x="100" y="400" width="800" height="60" fill="#F5F0E8" rx="4" />
            
            {yearChartData.map((item, i) => {
              const barWidth = 140;
              const x = 120 + i * (barWidth + 20);
              const barHeight = (item.impact / 100) * 55;
              const barColor = yearColors[item.year as keyof typeof yearColors] || "#3D2B1F";

              return (
                <g key={item.year}>
                  <rect
                    x={x}
                    y={400 + (55 - barHeight)}
                    width={barWidth}
                    height={barHeight}
                    fill={barColor}
                    opacity="0.7"
                    rx="2"
                  />
                  <text
                    x={x + barWidth / 2}
                    y="475"
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
