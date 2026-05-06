"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

// Realistic city coordinates for 1200x600 Mercator projection
const fashionCapitals = [
  { id: "new-york", name: "New York", x: 340, y: 210, label: "USA" },
  { id: "paris", name: "Paris", x: 560, y: 185, label: "France" },
  { id: "london", name: "London", x: 545, y: 175, label: "UK" },
  { id: "milan", name: "Milan", x: 575, y: 195, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 940, y: 210, label: "Japan" },
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
            {/* Realistic world map - Mercator projection with accurate geography */}
            <g stroke="#E0D5C5" strokeWidth="1" fill="none">
              {/* North America - NYC at x=340, y=210 (east coast) */}
              <path d="M150,150 L200,140 L260,145 L320,155 L340,170 L345,190 L340,210 L330,230 L310,250 L280,260 L250,255 L220,240 L190,220 L170,200 L155,180 Z" />
              {/* Central America */}
              <path d="M240,270 L260,280 L270,295 L265,310 L250,305 Z" />
              {/* South America */}
              <path d="M280,330 L320,320 L360,330 L400,350 L420,380 L410,410 L380,430 L340,425 L310,400 L290,370 Z" />
              {/* Europe - London at x=545, y=175, Paris at x=560, y=185 */}
              <path d="M510,140 L530,135 L560,138 L580,140 L600,145 L610,155 L605,170 L590,178 L575,185 L560,187 L545,175 L535,165 L525,155 Z" />
              {/* UK/Ireland */}
              <path d="M520,160 L530,155 L535,165 L530,170 L520,165 Z" />
              {/* Africa */}
              <path d="M535,190 L560,185 L590,190 L620,195 L650,210 L660,240 L650,280 L630,320 L600,340 L570,350 L540,340 L520,310 L510,275 L515,240 Z" />
              {/* Russia/Northern Asia */}
              <path d="M615,100 L660,95 L720,93 L780,95 L840,98 L900,102 L950,106 L1000,110 L1030,115 L1040,125 L1020,130 L960,128 L900,125 L840,122 L780,120 L720,118 L660,115 L620,110 Z" />
              {/* Middle East */}
              <path d="M630,185 L660,182 L680,190 L685,205 L670,215 L650,218 L635,210 Z" />
              {/* South Asia / India */}
              <path d="M720,220 L740,215 L755,230 L750,255 L735,265 L720,260 Z" />
              {/* East Asia / China */}
              <path d="M800,160 L830,155 L860,158 L880,165 L890,180 L885,200 L870,210 L850,215 L830,210 L815,195 Z" />
              {/* Southeast Asia */}
              <path d="M820,240 L840,235 L855,245 L850,260 L835,265 L820,258 Z" />
              {/* Japan / Tokyo at x=940, y=210 */}
              <path d="M920,185 L935,180 L940,190 L945,200 L940,210 L935,215 L925,210 Z" />
              {/* Australia */}
              <path d="M880,380 L910,375 L940,378 L960,385 L955,400 L940,408 L915,405 Z" />
              {/* New Zealand */}
              <path d="M980,420 L985,415 L990,425 L985,432 Z" />
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
