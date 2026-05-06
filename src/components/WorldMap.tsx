"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

// City coordinates for 3024x1964 Mercator projection - updated for new map
const fashionCapitals = [
  { id: "new-york", name: "New York", x: 560, y: 686, label: "USA" },
  { id: "paris", name: "Paris", x: 1420, y: 520, label: "France" },
  { id: "london", name: "London", x: 1380, y: 500, label: "UK" },
  { id: "milan", name: "Milan", x: 1460, y: 540, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 2330, y: 620, label: "Japan" },
];

// Year-to-color mapping
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
    <div className="w-full">
      <div className="relative w-full overflow-hidden bg-white rounded-2xl">
        <h3 className="font-heading text-[28px] md:text-[40px] font-bold uppercase text-deep-brown mb-6 text-center mt-12">
          Cultural Impact
        </h3>
        <div className="flex gap-3 justify-center mb-8">
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
          viewBox="0 0 3024 1964"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* World map - 3024x1964 viewBox - thick deep brown strokes */}
          <g stroke="#3D2B1F" strokeWidth="12" fill="none">
            {/* North America - detailed outline */}
            <path d="M380,420 L450,400 L520,390 L600,410 L680,430 L750,480 L800,540 L820,600 L810,660 L780,720 L740,770 L690,800 L640,810 L590,790 L550,760 L520,720 L490,680 L470,640 L450,600 L440,560 L420,520 Z" />
            {/* Central America */}
            <path d="M590,820 L620,850 L640,880 L650,920 L640,960 L610,980 L590,950 Z" />
            {/* South America - detailed */}
            <path d="M690,1000 L750,980 L820,1000 L900,1050 L960,1120 L980,1200 L940,1280 L880,1320 L810,1300 L760,1250 L720,1180 L700,1100 L690,1040 Z" />
            {/* Europe - detailed */}
            <path d="M1380,400 L1410,390 L1440,400 L1470,420 L1490,460 L1480,500 L1460,530 L1440,560 L1420,580 L1400,570 L1380,550 L1360,520 L1350,490 L1350,460 Z" />
            {/* UK/Ireland */}
            <path d="M1360,440 L1370,430 L1380,440 L1380,460 L1370,470 L1360,460 Z" />
            {/*Africa - detailed */}
            <path d="M1380,560 L1420,580 L1460,620 L1500,680 L1520,750 L1510,830 L1480,900 L1440,960 L1390,1000 L1340,1010 L1290,980 L1260,930 L1240,860 L1230,790 L1240,720 L1270,660 L1310,610 Z" />
            {/* Russia/Northern Asia - detailed */}
            <path d="M1480,300 L1540,290 L1620,300 L1700,310 L1780,320 L1860,330 L1940,340 L2020,350 L2100,370 L2150,400 L2160,440 L2130,470 L2080,480 L2000,470 L1920,460 L1840,450 L1760,440 L1680,430 L1600,420 L1520,400 Z" />
            {/* Middle East */}
            <path d="M1520,620 L1550,640 L1560,670 L1540,690 L1520,680 Z" />
            {/* South Asia / India */}
            <path d="M1800,680 L1860,700 L1900,740 L1890,790 L1850,820 L1810,800 L1790,760 L1780,720 Z" />
            {/* East Asia / China */}
            <path d="M2040,450 L2100,440 L2160,460 L2200,500 L2190,540 L2150,570 L2100,580 L2060,560 L2040,530 L2030,490 Z" />
            {/* Southeast Asia */}
            <path d="M2080,700 L2120,720 L2140,750 L2120,780 L2090,770 Z" />
            {/* Japan */}
            <path d="M2300,580 L2340,600 L2360,630 L2350,660 L2320,650 L2300,630 Z" />
            {/* Australia */}
            <path d="M2220,1520 L2280,1500 L2340,1520 L2360,1560 L2340,1600 L2300,1620 L2260,1600 L2240,1560 Z" />
            {/* New Zealand */}
            <path d="M2480,1680 L2500,1700 L2490,1730 L2470,1720 Z" />
          </g>

          {/* Cultural impact spots */}
          {filteredEvents.map((event, i) => {
            const isHovered = hoveredEvent?.year === event.year && hoveredEvent?.event === event.event;
            const radius = (event.impact / 100) * 30 + 8;

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
                    strokeWidth="2"
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
                y={capital.y + 40}
                textAnchor="middle"
                fill="#888888"
                fontSize="24"
                fontFamily="Helvetica Neue, Arial, sans-serif"
              >
                {capital.name}
              </text>
            </g>
          ))}
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
  );
}
