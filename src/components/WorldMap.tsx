"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { culturalImpactData, CulturalEvent } from "@/data/culturalImpactData";

// City coordinates for 3024x1964 Mercator projection - simplified map
const fashionCapitals = [
  { id: "new-york", name: "New York", x: 900, y: 600, label: "USA" },
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
        <h3 className="font-heading text-[20px] md:text-[28px] font-bold uppercase text-deep-brown mb-2 text-center mt-4">
          Cultural Impact
        </h3>
        <div className="flex gap-2 justify-center mb-3">
          {[1995, 1996, 1997, 1998, 1999].map((year) => (
            <button
              key={year}
              onClick={() =>
                setYearFilter(yearFilter === year ? null : year)
              }
              className={`px-2 py-1 text-xs rounded-md transition-all duration-300 font-body ${
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
          className="w-full"
          style={{ height: 'auto', maxHeight: '800px' }}
          xmlns="http://www.w3.org/2000/svg"
        >
           {/* Simplified world map outline - 9px stroke */}
           <g stroke="#C4A882" strokeWidth="9" fill="none">
             {/* North America - New York on East coast */}
             <path d="M200,300 L400,280 L600,300 L800,400 L900,500 L920,600 L880,700 L800,780 L700,800 L600,780 L500,720 L400,640 L320,540 L280,440 Z" />
             {/* Central America */}
             <path d="M600,820 L640,850 L670,900 L660,950 L620,960 L580,930 L570,890 Z" />
             {/* South America */}
             <path d="M650,960 L750,940 L850,1000 L920,1150 L900,1350 L840,1500 L750,1580 L660,1520 L600,1400 L580,1250 L600,1100 Z" />
             {/* Europe */}
             <path d="M1400,280 L1500,260 L1580,280 L1620,350 L1600,420 L1560,460 L1520,470 L1480,440 L1450,380 L1430,320 Z" />
             {/* UK */}
             <path d="M1470,340 L1500,320 L1520,340 L1520,380 L1500,390 L1480,370 Z" />
             {/* Africa */}
             <path d="M1480,500 L1560,520 L1660,600 L1720,750 L1700,950 L1640,1100 L1560,1150 L1480,1120 L1420,1040 L1380,900 L1360,750 L1360,600 L1380,520 Z" />
             {/* Russia/Asia */}
             <path d="M1580,180 L1750,160 L1950,150 L2200,160 L2400,200 L2580,280 L2600,350 L2580,400 L2500,420 L2350,400 L2150,370 L1950,340 L1780,310 L1650,280 Z" />
             {/* India */}
             <path d="M1900,620 L2000,650 L2060,730 L2040,800 L2000,830 L1950,810 L1920,750 L1900,690 Z" />
             {/* East Asia/China */}
             <path d="M2180,300 L2350,280 L2520,340 L2580,420 L2600,500 L2560,560 L2500,580 L2440,560 L2380,500 L2340,440 L2300,380 Z" />
             {/* Southeast Asia */}
             <path d="M2380,600 L2460,640 L2500,700 L2480,740 L2440,730 L2400,690 Z" />
             {/* Japan */}
             <path d="M2580,380 L2660,420 L2700,500 L2680,550 L2640,530 Z" />
             {/* Australia */}
             <path d="M2440,1200 L2600,1150 L2720,1180 L2780,1240 L2800,1320 L2780,1400 L2720,1440 L2640,1430 L2560,1380 L2520,1300 L2480,1240 Z" />
             {/* New Zealand */}
             <path d="M2800,1480 L2840,1520 L2830,1560 L2800,1540 Z" />
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
