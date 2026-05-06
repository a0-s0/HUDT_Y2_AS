"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

// City coordinates for 3024x1964 Mercator projection - aligned with map paths
const fashionCapitals = [
  { id: "new-york", name: "New York", x: 750, y: 650, label: "USA" },
  { id: "paris", name: "Paris", x: 1520, y: 480, label: "France" },
  { id: "london", name: "London", x: 1480, y: 460, label: "UK" },
  { id: "milan", name: "Milan", x: 1560, y: 510, label: "Italy" },
  { id: "tokyo", name: "Tokyo", x: 2620, y: 560, label: "Japan" },
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
          {/* World map - fills full 3024x1964 viewBox with thick deep brown strokes */}
          <g stroke="#3D2B1F" strokeWidth="20" fill="none">
            {/* North America - spans left side */}
            <path d="M200,280 L350,250 L500,240 L650,280 L780,350 L860,450 L880,550 L850,650 L800,750 L720,800 L620,820 L520,800 L440,740 L370,670 L320,600 L280,520 L240,440 Z" />
            {/* Central America */}
            <path d="M580,830 L620,860 L650,900 L660,950 L640,980 L580,960 L560,920 Z" />
            {/* South America - large, right side */}
            <path d="M620,950 L700,920 L800,950 L920,1050 L1000,1200 L1020,1400 L960,1550 L860,1620 L740,1580 L650,1480 L590,1350 L560,1200 L540,1050 Z" />
            {/* Europe - centered */}
            <path d="M1420,280 L1480,250 L1540,260 L1600,300 L1620,360 L1610,420 L1580,460 L1550,480 L1510,470 L1480,440 L1460,400 L1450,360 Z" />
            {/* UK/Ireland */}
            <path d="M1470,340 L1490,320 L1510,340 L1510,380 L1490,390 L1470,370 Z" />
            {/* Africa - large continent */}
            <path d="M1480,500 L1540,520 L1620,580 L1680,680 L1700,800 L1680,1000 L1620,1150 L1540,1200 L1460,1180 L1400,1100 L1360,980 L1340,850 L1340,720 L1360,620 Z" />
            {/* Russia/Northern Asia - spans across top */}
            <path d="M1550,180 L1700,160 L1900,150 L2100,160 L2300,180 L2480,220 L2580,280 L2600,340 L2580,380 L2520,400 L2420,390 L2280,370 L2100,350 L1900,330 L1750,310 L1650,280 Z" />
            {/* Middle East */}
            <path d="M1680,600 L1760,640 L1800,700 L1780,750 L1720,730 Z" />
            {/* South Asia / India */}
            <path d="M1900,620 L1980,650 L2050,720 L2040,800 L2000,840 L1950,820 L1920,760 L1900,700 Z" />
            {/* East Asia / China */}
            <path d="M2180,320 L2300,300 L2440,340 L2520,400 L2540,480 L2500,540 L2440,560 L2380,540 L2340,500 L2300,440 L2260,380 L2220,340 Z" />
            {/* Southeast Asia */}
            <path d="M2380,600 L2440,640 L2480,700 L2460,750 L2420,740 Z" />
            {/* Japan */}
            <path d="M2580,400 L2640,440 L2680,500 L2660,550 L2620,530 Z" />
            {/* Australia - bottom right */}
            <path d="M2440,1200 L2560,1150 L2680,1180 L2740,1240 L2760,1320 L2720,1400 L2660,1440 L2580,1430 L2500,1380 L2460,1300 L2440,1240 Z" />
            {/* New Zealand */}
            <path d="M2780,1480 L2810,1520 L2800,1560 L2770,1540 Z" />
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
