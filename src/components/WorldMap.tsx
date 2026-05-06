"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

// City coordinates for 3024x1964 Mercator projection - geographically aligned
const fashionCapitals = [
  { id: "new-york", name: "New York", x: 890, y: 620, label: "USA" },
  { id: "paris", name: "Paris", x: 1520, y: 480, label: "France" },
  { id: "london", name: "London", x: 1480, y: 440, label: "UK" },
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
          {/* World map - geographically accurate simplified outlines */}
          <g stroke="#3D2B1F" strokeWidth="20" fill="none">
            {/* North America - correct shape with Alaska, Canada, USA */}
            <path d="M280,200 L380,180 L480,190 L580,220 L680,260 L760,320 L820,400 L850,480 L860,560 L840,620 L890,650 L920,680 L900,720 L840,740 L780,760 L720,780 L660,800 L600,820 L540,800 L480,760 L420,700 L370,640 L320,570 L280,500 L250,420 L230,340 Z" />
            {/* Central America */}
            <path d="M560,820 L600,850 L630,890 L640,940 L620,970 L580,960 L560,930 L550,890 Z" />
            {/* South America - better shape */}
            <path d="M600,960 L680,940 L760,960 L840,1020 L900,1120 L920,1240 L900,1360 L860,1460 L800,1540 L730,1580 L660,1560 L600,1500 L560,1400 L530,1280 L520,1160 L540,1040 Z" />
            {/* Europe - more accurate */}
            <path d="M1440,260 L1500,240 L1560,250 L1600,280 L1620,340 L1610,400 L1580,440 L1550,460 L1510,450 L1480,420 L1460,380 L1450,340 L1430,300 Z" />
            {/* UK/Ireland */}
            <path d="M1460,320 L1490,300 L1510,320 L1510,360 L1490,370 L1470,350 Z" />
            {/* Africa - better shape */}
            <path d="M1500,480 L1560,500 L1640,560 L1700,660 L1720,780 L1700,900 L1660,1000 L1600,1080 L1540,1120 L1460,1100 L1400,1040 L1360,940 L1340,820 L1340,700 L1360,600 L1400,520 Z" />
            {/* Russia/Northern Asia */}
            <path d="M1580,160 L1720,140 L1900,130 L2100,140 L2300,160 L2500,200 L2600,260 L2620,320 L2600,360 L2540,380 L2440,370 L2280,350 L2100,330 L1900,310 L1750,290 L1650,260 Z" />
            {/* Middle East */}
            <path d="M1700,580 L1780,620 L1820,680 L1800,730 L1740,710 L1700,670 Z" />
            {/* South Asia / India */}
            <path d="M1920,600 L2000,630 L2060,700 L2050,780 L2010,820 L1960,800 L1930,740 L1910,680 Z" />
            {/* East Asia / China */}
            <path d="M2200,300 L2320,280 L2460,320 L2540,380 L2560,460 L2520,520 L2460,540 L2400,520 L2360,480 L2320,420 L2280,360 L2240,320 Z" />
            {/* Southeast Asia */}
            <path d="M2400,580 L2460,620 L2500,680 L2480,730 L2440,720 L2400,680 Z" />
            {/* Japan */}
            <path d="M2600,380 L2660,420 L2700,480 L2680,530 L2640,510 Z" />
            {/* Australia */}
            <path d="M2460,1180 L2580,1140 L2700,1160 L2760,1220 L2780,1300 L2760,1380 L2700,1420 L2620,1410 L2540,1360 L2500,1280 L2460,1220 Z" />
            {/* New Zealand */}
            <path d="M2800,1460 L2840,1500 L2830,1540 L2800,1520 Z" />
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
