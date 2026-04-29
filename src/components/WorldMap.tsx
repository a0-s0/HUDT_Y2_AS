"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fashionCapitals = [
  {
    id: "new-york",
    name: "New York",
    x: 280,
    y: 170,
    label: "USA",
    events: [
      { year: 1995, title: "Dot-Com Boom & Clueless", trend: "Minimalism vs. Preppy Revival" },
      { year: 1998, title: "Sex and the City Premieres", trend: "Birth of the 'It' Bag" },
      { year: 1999, title: "Y2K Paranoia & The Matrix", trend: "Cyber-Fashion & Utilitarianism" },
    ],
  },
  {
    id: "paris",
    name: "Paris",
    x: 468,
    y: 158,
    label: "France",
    events: [
      { year: 1996, title: "Galliano at Givenchy", trend: "Romantic Theatricality" },
      { year: 1997, title: "Galliano Takes Dior", trend: "Couture Spectacle" },
      { year: 1998, title: "Palais Garnier Show", trend: "Immersive Fashion Theater" },
      { year: 1999, title: "Dior Saddle Bag Launch", trend: "Logo Luxury Peak" },
    ],
  },
  {
    id: "london",
    name: "London",
    x: 455,
    y: 148,
    label: "UK",
    events: [
      { year: 1996, title: "Cool Britannia Wave", trend: "Britpop Meets Fashion" },
      { year: 1996, title: "McQueen at Givenchy", trend: "Dark Romanticism" },
    ],
  },
  {
    id: "milan",
    name: "Milan",
    x: 480,
    y: 165,
    label: "Italy",
    events: [
      { year: 1997, title: "Gianni Versace Assassination", trend: "End of an Era" },
      { year: 1998, title: "Fendi Baguette Launch", trend: "Accessory Obsession" },
    ],
  },
  {
    id: "tokyo",
    name: "Tokyo",
    x: 790,
    y: 175,
    label: "Japan",
    events: [
      { year: 1997, title: "Asian Financial Crisis", trend: "Stealth Wealth Response" },
      { year: 1999, title: "Y2K Tech Culture", trend: "Avant-Garde Futurism" },
    ],
  },
];

const connectionLines = [
  { from: "new-york", to: "paris" },
  { from: "paris", to: "london" },
  { from: "paris", to: "milan" },
  { from: "milan", to: "paris" },
  { from: "new-york", to: "tokyo" },
];

export function WorldMap() {
  const [selectedCapital, setSelectedCapital] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const activeCapital = fashionCapitals.find((c) => c.id === selectedCapital);
  const filteredEvents = activeCapital
    ? yearFilter
      ? activeCapital.events.filter((e) => e.year === yearFilter)
      : activeCapital.events
    : [];

  const getCapitalPos = (id: string) => {
    const capital = fashionCapitals.find((c) => c.id === id);
    return capital ? { x: capital.x, y: capital.y } : { x: 0, y: 0 };
  };

  return (
    <div className="bg-white border border-border rounded-sm p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-2xl text-charcoal">
          Fashion Capitals: 1995—1999
        </h3>
        <div className="flex gap-2">
          {[1995, 1996, 1997, 1998, 1999].map((year) => (
            <button
              key={year}
              onClick={() =>
                setYearFilter(yearFilter === year ? null : year)
              }
              className={`px-3 py-1 text-xs rounded-sm transition-all duration-300 font-body ${
                yearFilter === year
                  ? "bg-charcoal text-offwhite"
                  : "text-silver hover:text-charcoal border border-border"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <svg
          viewBox="0 0 900 300"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified world map outline */}
          <g stroke="#E0D5C5" strokeWidth="0.8" fill="none">
            {/* North America */}
            <path d="M120,80 L160,70 L200,75 L230,90 L250,85 L270,100 L260,120 L280,130 L270,150 L260,170 L240,180 L230,200 L200,190 L180,200 L160,180 L140,160 L120,140 L100,120 Z" />
            {/* South America */}
            <path d="M230,200 L250,210 L260,230 L255,260 L240,280 L220,285 L210,270 L215,240 Z" />
            {/* Europe */}
            <path d="M420,80 L440,75 L470,80 L490,85 L510,90 L520,100 L510,115 L500,130 L480,135 L460,140 L440,130 L430,110 L420,100 Z" />
            {/* Africa */}
            <path d="M460,140 L480,145 L500,155 L510,175 L500,200 L490,230 L470,250 L450,240 L440,210 L445,180 Z" />
            {/* Asia */}
            <path d="M520,80 L560,70 L620,75 L680,80 L730,90 L770,100 L790,120 L780,145 L760,160 L730,170 L700,165 L660,155 L620,145 L580,130 L560,120 L540,110 L520,100 Z" />
            {/* Australia */}
            <path d="M750,200 L780,195 L810,200 L820,220 L810,240 L790,250 L770,245 L755,230 Z" />
          </g>

          {/* Connection lines */}
          {connectionLines.map((line, i) => {
            const from = getCapitalPos(line.from);
            const to = getCapitalPos(line.to);
            const mx = (from.x + to.x) / 2;
            const my = Math.min(from.y, to.y) - 15;
            return (
              <motion.path
                key={`line-${i}`}
                d={`M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`}
                stroke="#C4B5A0"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="3 3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              />
            );
          })}

          {/* Capital pins */}
          {fashionCapitals.map((capital) => {
            const isActive = selectedCapital === capital.id;
            const hasMatchingEvent =
              yearFilter &&
              capital.events.some((e) => e.year === yearFilter);
            const dimmed =
              yearFilter !== null && !hasMatchingEvent;

            return (
              <g
                key={capital.id}
                className="cursor-pointer"
                onClick={() =>
                  setSelectedCapital(
                    selectedCapital === capital.id ? null : capital.id
                  )
                }
                opacity={dimmed ? 0.2 : 1}
              >
                {/* Pulse ring */}
                {isActive && (
                  <circle
                    cx={capital.x}
                    cy={capital.y}
                    r="8"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="12"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Dot */}
                <circle
                  cx={capital.x}
                  cy={capital.y}
                  r={isActive ? 4 : 3}
                  fill={isActive ? "#1A1A1A" : "#C4B5A0"}
                  stroke="#F5F0E8"
                  strokeWidth="1.5"
                />

                {/* Label */}
                <text
                  x={capital.x}
                  y={capital.y - 12}
                  textAnchor="middle"
                  fill="#1A1A1A"
                  fontSize="8"
                  fontFamily="var(--font-inter)"
                  fontWeight="500"
                >
                  {capital.name}
                </text>
                <text
                  x={capital.x}
                  y={capital.y + 18}
                  textAnchor="middle"
                  fill="#888888"
                  fontSize="6"
                  fontFamily="var(--font-inter)"
                >
                  {capital.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Info panel */}
        <AnimatePresence mode="wait">
          {activeCapital && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-light-gray border border-border rounded-sm p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading text-lg text-charcoal">
                  {activeCapital.name}
                </h4>
                <button
                  onClick={() => setSelectedCapital(null)}
                  className="text-silver hover:text-charcoal text-xs font-body"
                >
                  Close
                </button>
              </div>

              {filteredEvents.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {filteredEvents.map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-border rounded-sm p-3"
                    >
                      <span className="font-body text-xs text-silver">
                        {event.year}
                      </span>
                      <h5 className="font-heading text-sm text-charcoal mt-1">
                        {event.title}
                      </h5>
                      <p className="font-body text-xs text-beige-dark mt-1">
                        {event.trend}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="font-body text-silver text-sm">
                  {yearFilter
                    ? `No events in ${activeCapital.name} for ${yearFilter}`
                    : "No events recorded for this city"}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedCapital && (
          <p className="mt-4 font-body text-silver text-sm text-center">
            Click a fashion capital to explore its 1995—1999 events
          </p>
        )}
      </div>
    </div>
  );
}
