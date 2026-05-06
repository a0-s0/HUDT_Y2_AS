"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

// Realistic city coordinates for 1600x800 Mercator projection
const fashionCapitals = [
  { id: "new-york", name: "New York", x: 480, y: 280, label: "USA" },
  { id: "paris", name: "Paris", x: 750, y: 245, label: "France" },
  { id: "london", name: "London", x: 730, y: 235, label: "UK" },
  { id: "milan", name: "Milan", x: 770, y: 260, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 1250, y: 280, label: "Japan" },
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
            viewBox="0 0 1600 800"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Realistic world map - Mercator projection with accurate geography */}
            <g stroke="#E0D5C5" strokeWidth="1.2" fill="none">
              {/* North America - NYC at x=450, y=280 (east coast) */}
              <path d="M200,200 L280,185 L370,195 L440,210 L480,225 L490,255 L475,285 L450,310 L420,340 L380,350 L330,340 L290,310 L260,285 L240,260 L220,235 Z" />
              {/* Central America */}
              <path d="M320,365 L350,380 L365,400 L355,420 L330,410 Z" />
              {/* South America */}
              <path d="M370,440 L425,425 L500,440 L570,470 L600,520 L575,560 L530,580 L470,565 L430,530 L405,495 Z" />
              {/* Europe - London at x=730, y=235, Paris at x=750, y=245 */}
              <path d="M680,190 L710,185 L755,190 L790,195 L810,210 L805,230 L790,245 L770,250 L750,247 L735,235 L720,220 L705,205 Z" />
              {/* UK/Ireland */}
              <path d="M695,210 L710,205 L715,218 L705,225 L695,215 Z" />
              {/* Africa */}
              <path d="M715,260 L755,255 L815,265 L870,285 L890,335 L875,385 L845,440 L800,465 L745,450 L705,420 L680,375 L665,325 L670,290 Z" />
              {/* Russia/Northern Asia */}
              <path d="M815,140 L880,135 L950,140 L1020,145 L1100,150 L1180,155 L1200,165 L1195,180 L1170,195 L1100,205 L1020,200 L950,195 L880,190 L815,185 Z" />
              {/* Middle East */}
              <path d="M835,260 L875,255 L905,270 L910,290 L895,305 L870,300 Z" />
              {/* South Asia / India */}
              <path d="M960,300 L995,290 L1025,315 L1015,345 L985,355 L960,340 Z" />
              {/* East Asia / China */}
              <path d="M1100,215 L1140,210 L1180,220 L1200,240 L1195,265 L1170,280 L1130,275 L1100,255 Z" />
              {/* Southeast Asia */}
              <path d="M1120,320 L1155,310 L1175,330 L1165,355 L1140,350 Z" />
              {/* Japan / Tokyo at x=1250, y=280 */}
              <path d="M1230,260 L1250,250 L1265,265 L1255,285 L1240,295 L1230,280 Z" />
              {/* Australia */}
              <path d="M1180,480 L1230,470 L1270,480 L1260,505 L1220,515 L1180,500 Z" />
              {/* New Zealand */}
              <path d="M1320,530 L1330,525 L1335,540 L1325,550 Z" />
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
            <rect x="150" y="680" width="1300" height="90" fill="#F5F0E8" rx="4" />
            
            {yearChartData.map((item, i) => {
              const barWidth = 240;
              const x = 200 + i * (barWidth + 30);
              const barHeight = (item.impact / 100) * 85;
              const barColor = yearColors[item.year as keyof typeof yearColors] || "#3D2B1F";

              return (
                <g key={item.year}>
                  <rect
                    x={x}
                    y={680 + (85 - barHeight)}
                    width={barWidth}
                    height={barHeight}
                    fill={barColor}
                    opacity="0.7"
                    rx="2"
                  />
                  <text
                    x={x + barWidth / 2}
                    y="785"
                    textAnchor="middle"
                    fill="#3D2B1F"
                    fontSize="14"
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
