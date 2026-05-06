"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import {
  parisVsNyData,
} from "@/data/designerData";
import { WorldMap } from "./WorldMap";

const trendData = [
  { year: 1995, minimalism: 75, glamour: 30, cyber: 5, street: 45 },
  { year: 1996, minimalism: 55, glamour: 65, cyber: 10, street: 55 },
  { year: 1997, minimalism: 40, glamour: 55, cyber: 20, street: 50 },
  { year: 1998, minimalism: 30, glamour: 60, cyber: 30, street: 65 },
  { year: 1999, minimalism: 15, glamour: 45, cyber: 90, street: 70 },
];

const trendColors = {
  minimalism: "#1A1A1A",
  glamour: "#C4B5A0",
  cyber: "#888888",
  street: "#A89880",
};

const capitalCoordinates: Record<string, { x: number; y: number }> = {
  "new-york": { x: 280, y: 170 },
  paris: { x: 468, y: 158 },
  london: { x: 455, y: 148 },
  milan: { x: 480, y: 165 },
  tokyo: { x: 790, y: 175 },
};

function CulturalImpactMap() {
  const [selectedYear, setSelectedYear] = useState<number>(1999);
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null);

  const currentData = trendData.find((d) => d.year === selectedYear);
  const trends = currentData
    ? Object.entries({
        minimalism: currentData.minimalism,
        glamour: currentData.glamour,
        cyber: currentData.cyber,
        street: currentData.street,
      })
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
    : [];

  const dominantTrend = trends[0];

  return (
    <div className="space-y-6">
      <div className="bg-light-gray border border-border rounded-sm p-4">
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

          {/* Spots for each capital showing dominant trend */}
          {Object.entries(capitalCoordinates).map(([cityId, coords]) => {
            const intensity = dominantTrend
              ? (currentData?.[dominantTrend.name as keyof typeof currentData] as number) / 100
              : 0.5;
            const color = dominantTrend
              ? trendColors[dominantTrend.name as keyof typeof trendColors]
              : "#C4B5A0";

            return (
              <g key={cityId}>
                {/* Outer glow */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={6 + intensity * 6}
                  fill={color}
                  opacity={0.15}
                />
                {/* Main spot */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={3 + intensity * 2}
                  fill={color}
                  stroke="#F5F0E8"
                  strokeWidth="1"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Year selector */}
      <div className="flex gap-2 justify-center flex-wrap">
        {trendData.map((data) => (
          <button
            key={data.year}
            onClick={() => setSelectedYear(data.year)}
            className={`px-4 py-2 rounded-sm transition-all duration-300 font-body text-sm ${
              selectedYear === data.year
                ? "bg-charcoal text-offwhite"
                : "bg-light-gray text-silver hover:text-charcoal border border-border"
            }`}
          >
            {data.year}
          </button>
        ))}
      </div>

      {/* Trend breakdown */}
      <div className="space-y-3">
        <h4 className="font-heading text-sm text-charcoal">
          Dominant Trends in {selectedYear}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {trends.map((trend) => (
            <motion.div
              key={trend.name}
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                setSelectedTrend(
                  selectedTrend === trend.name ? null : trend.name
                )
              }
              className={`p-3 rounded-sm cursor-pointer transition-all duration-300 border ${
                selectedTrend === trend.name
                  ? "border-charcoal bg-light-gray"
                  : "border-border bg-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      trendColors[trend.name as keyof typeof trendColors],
                  }}
                />
                <span className="font-heading text-xs text-charcoal capitalize">
                  {trend.name}
                </span>
              </div>
              <div className="w-full bg-light-gray h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${trend.value}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full"
                  style={{
                    backgroundColor:
                      trendColors[trend.name as keyof typeof trendColors],
                  }}
                />
              </div>
              <div className="text-xs text-silver mt-1">
                {trend.value}% influence
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-light-gray border border-border rounded-sm p-4">
        <p className="font-body text-xs text-silver uppercase tracking-widest mb-3">
          How to read this visualization
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="font-body text-xs text-charcoal font-bold">•</span>
            <p className="font-body text-xs text-charcoal">
              <strong>Map spots:</strong> Size and color indicate the dominant cultural trend across fashion capitals
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-body text-xs text-charcoal font-bold">•</span>
            <p className="font-body text-xs text-charcoal">
              <strong>Year buttons:</strong> Select a year to see how trends shifted globally
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-body text-xs text-charcoal font-bold">•</span>
            <p className="font-body text-xs text-charcoal">
              <strong>Trend cards:</strong> Click to highlight which regions were most influenced by each trend
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

const designers = [
  { name: "Chanel", slug: "chanel" },
  { name: "Dior", slug: "dior" },
  { name: "Yves Saint Laurent", slug: "ysl" },
  { name: "Calvin Klein", slug: "calvin-klein" },
  { name: "Ralph Lauren", slug: "ralph-lauren" },
];

const collectionYears = [1995, 1996, 1997, 1998, 1999];

interface CollectionImage {
  id: string;
  designer: string;
  year: number;
  season: string;
  title: string;
  logoSaturation: number;
  imageUrl: string;
  firstviewUrl: string;
}

const collectionImages: CollectionImage[] = [
  {
    id: "chanel-1995",
    designer: "Chanel",
    year: 1995,
    season: "Spring/Summer",
    title: "Minimalist Elegance",
    logoSaturation: 20,
    imageUrl: "https://images.firstview.com/looks/000000/0000002014_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Chanel",
  },
  {
    id: "dior-1995",
    designer: "Dior",
    year: 1995,
    season: "Spring/Summer",
    title: "Classic Simplicity",
    logoSaturation: 15,
    imageUrl: "https://images.firstview.com/looks/000000/0000001987_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Dior",
  },
  {
    id: "ysl-1995",
    designer: "Yves Saint Laurent",
    year: 1995,
    season: "Spring/Summer",
    title: "Understated Luxury",
    logoSaturation: 25,
    imageUrl: "https://images.firstview.com/looks/000000/0000001999_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Yves+Saint+Laurent",
  },
  {
    id: "ck-1995",
    designer: "Calvin Klein",
    year: 1995,
    season: "Spring/Summer",
    title: "Minimalist Pioneer",
    logoSaturation: 10,
    imageUrl: "https://images.firstview.com/looks/000000/0000002001_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Calvin+Klein",
  },
  {
    id: "rl-1995",
    designer: "Ralph Lauren",
    year: 1995,
    season: "Spring/Summer",
    title: "Classic Americana",
    logoSaturation: 30,
    imageUrl: "https://images.firstview.com/looks/000000/0000002003_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Ralph+Lauren",
  },
  {
    id: "chanel-1997",
    designer: "Chanel",
    year: 1997,
    season: "Fall/Winter",
    title: "Rising Logo Presence",
    logoSaturation: 45,
    imageUrl: "https://images.firstview.com/looks/000000/0000002014_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Chanel",
  },
  {
    id: "dior-1997",
    designer: "Dior",
    year: 1997,
    season: "Fall/Winter",
    title: "Saddle Bag Era",
    logoSaturation: 50,
    imageUrl: "https://images.firstview.com/looks/000000/0000001987_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Dior",
  },
  {
    id: "ysl-1997",
    designer: "Yves Saint Laurent",
    year: 1997,
    season: "Fall/Winter",
    title: "Muse Collection",
    logoSaturation: 40,
    imageUrl: "https://images.firstview.com/looks/000000/0000001999_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Yves+Saint+Laurent",
  },
  {
    id: "ck-1997",
    designer: "Calvin Klein",
    year: 1997,
    season: "Fall/Winter",
    title: "Minimalism Peak",
    logoSaturation: 35,
    imageUrl: "https://images.firstview.com/looks/000000/0000002001_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Calvin+Klein",
  },
  {
    id: "rl-1997",
    designer: "Ralph Lauren",
    year: 1997,
    season: "Fall/Winter",
    title: "Icon Visibility",
    logoSaturation: 60,
    imageUrl: "https://images.firstview.com/looks/000000/0000002003_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Ralph+Lauren",
  },
  {
    id: "chanel-1999",
    designer: "Chanel",
    year: 1999,
    season: "Fall/Winter",
    title: "Logo Dominance",
    logoSaturation: 75,
    imageUrl: "https://images.firstview.com/looks/000000/0000002014_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Chanel",
  },
  {
    id: "dior-1999",
    designer: "Dior",
    year: 1999,
    season: "Fall/Winter",
    title: "Peak Luxury",
    logoSaturation: 85,
    imageUrl: "https://images.firstview.com/looks/000000/0000001987_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Dior",
  },
  {
    id: "ysl-1999",
    designer: "Yves Saint Laurent",
    year: 1999,
    season: "Fall/Winter",
    title: "Heritage Logo",
    logoSaturation: 70,
    imageUrl: "https://images.firstview.com/looks/000000/0000001999_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Yves+Saint+Laurent",
  },
  {
    id: "ck-1999",
    designer: "Calvin Klein",
    year: 1999,
    season: "Fall/Winter",
    title: "Minimalism Fades",
    logoSaturation: 55,
    imageUrl: "https://images.firstview.com/looks/000000/0000002001_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Calvin+Klein",
  },
  {
    id: "rl-1999",
    designer: "Ralph Lauren",
    year: 1999,
    season: "Fall/Winter",
    title: "Y2K Power",
    logoSaturation: 90,
    imageUrl: "https://images.firstview.com/looks/000000/0000002003_Large.jpg?s=600&c=1",
    firstviewUrl: "https://www.firstview.com/alpha_list.php?type=designer&deslist=1&s=Ralph+Lauren",
  },
];

function LogoSaturationGallery() {
  const [selectedYear, setSelectedYear] = useState<number>(1999);
  const [selectedDesigner, setSelectedDesigner] = useState<string>("Chanel");
  const [selectedImage, setSelectedImage] = useState<CollectionImage | null>(null);

  const filteredImages = collectionImages.filter(
    (img) => img.year === selectedYear && img.designer === selectedDesigner
  );

  const currentImage = filteredImages[0] || null;

  const allDesignersInYear = Array.from(
    new Set(collectionImages.filter((img) => img.year === selectedYear).map((img) => img.designer))
  );

  return (
    <div className="space-y-6">
      {/* Year selector */}
      <div>
        <p className="font-body text-xs text-silver uppercase tracking-widest mb-3">
          Select Year
        </p>
        <div className="flex gap-2 flex-wrap">
          {collectionYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-sm transition-all duration-300 font-body text-sm ${
                selectedYear === year
                  ? "bg-charcoal text-offwhite"
                  : "bg-light-gray text-silver hover:text-charcoal border border-border"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Designer selector */}
      <div>
        <p className="font-body text-xs text-silver uppercase tracking-widest mb-3">
          Select Designer
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {designers.map((designer) => {
            const hasCollectionInYear = collectionImages.some(
              (img) => img.year === selectedYear && img.designer === designer.name
            );

            return (
              <button
                key={designer.name}
                onClick={() => setSelectedDesigner(designer.name)}
                disabled={!hasCollectionInYear}
                className={`px-3 py-2 rounded-sm transition-all duration-300 font-body text-xs font-medium ${
                  selectedDesigner === designer.name
                    ? "bg-charcoal text-offwhite"
                    : hasCollectionInYear
                      ? "bg-light-gray text-silver hover:text-charcoal border border-border"
                      : "bg-light-gray text-silver/40 border border-border/50 cursor-not-allowed opacity-50"
                }`}
              >
                {designer.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Image gallery */}
      {currentImage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {/* Main image */}
          <div className="relative w-full bg-light-gray rounded-sm overflow-hidden border border-border">
            <img
              src={currentImage.imageUrl}
              alt={currentImage.title}
              className="w-full h-auto object-cover max-h-96"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23E0D5C5' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-family='var(--font-inter)' font-size='16' fill='%23888888' text-anchor='middle' dominant-baseline='middle'%3EImage from FirstView%3C/text%3E%3C/svg%3E";
              }}
            />
            {/* Logo saturation badge */}
            <div className="absolute top-4 right-4 bg-charcoal text-offwhite px-3 py-1 rounded-sm">
              <p className="font-body text-xs font-bold">
                {currentImage.logoSaturation}% Logo
              </p>
            </div>
          </div>

          {/* Image details */}
          <div className="bg-light-gray rounded-sm p-4 border border-border space-y-3">
            <div>
              <h4 className="font-heading text-sm text-charcoal mb-1">
                {currentImage.title}
              </h4>
              <p className="font-body text-xs text-silver">
                {currentImage.designer} • {currentImage.season} {currentImage.year}
              </p>
            </div>

            {/* Logo saturation progress */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-body text-xs text-silver uppercase tracking-widest">
                  Logo Saturation
                </p>
                <p className="font-heading text-sm text-charcoal font-bold">
                  {currentImage.logoSaturation}%
                </p>
              </div>
              <div className="w-full bg-white h-2 rounded-full overflow-hidden border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${currentImage.logoSaturation}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-charcoal"
                />
              </div>
            </div>

            {/* View on FirstView link */}
            <a
              href={currentImage.firstviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-xs text-charcoal hover:text-beige-dark transition-colors duration-300 underline"
            >
              View on FirstView →
            </a>
          </div>
        </motion.div>
      )}

      {/* Info box */}
      <div className="bg-light-gray border border-border rounded-sm p-4">
        <p className="font-body text-xs text-silver uppercase tracking-widest mb-2">
          How to use
        </p>
        <ul className="space-y-1 text-xs font-body text-charcoal">
          <li>• Select a year to see fashion evolution (1995–1999)</li>
          <li>• Choose a designer to view their collection progression</li>
          <li>• Logo saturation % shows the prevalence of branding in each collection</li>
          <li>• Click "View on FirstView" to explore full collections on the archive</li>
        </ul>
      </div>
    </div>
  );
}

export function Infographics() {
  const [cityView, setCityView] = useState<"paris" | "newYork">("paris");
  const activeCity =
    cityView === "paris" ? parisVsNyData.paris : parisVsNyData.newYork;

  const gridColor = "#E0D5C5";
  const axisColor = "#888888";

  return (
    <section id="infographics" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-silver tracking-[0.3em] uppercase text-sm mb-4">
            Data Visualization
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal">
            Socio-Political Impact
          </h2>
          <p className="font-body text-silver max-w-xl mx-auto text-sm md:text-base">
            How global events shaped the aesthetics of 1995—1999.
          </p>
        </motion.div>

        <div className="mb-20">
          <WorldMap />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-sm p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-2xl text-charcoal">
                Paris vs New York
              </h3>
              <div className="flex bg-light-gray rounded-sm p-0.5">
                <button
                  onClick={() => setCityView("paris")}
                  className={`px-4 py-2 text-sm rounded-sm transition-all duration-300 ${
                    cityView === "paris"
                      ? "bg-charcoal text-offwhite"
                      : "text-silver hover:text-charcoal"
                  }`}
                >
                  Paris
                </button>
                <button
                  onClick={() => setCityView("newYork")}
                  className={`px-4 py-2 text-sm rounded-sm transition-all duration-300 ${
                    cityView === "newYork"
                      ? "bg-charcoal text-offwhite"
                      : "text-silver hover:text-charcoal"
                  }`}
                >
                  New York
                </button>
              </div>
            </div>

            <p className="text-silver text-sm mb-6">
              {activeCity.label}
            </p>

            <div className="h-72 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={activeCity.themes}>
                  <PolarGrid stroke={gridColor} />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: axisColor, fontSize: 10 }}
                  />
                  <Radar
                    name="Value"
                    dataKey="value"
                    stroke={activeCity.color}
                    fill={activeCity.color}
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeCity.designers.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 bg-light-gray border border-border rounded-sm text-xs text-silver"
                >
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-sm p-6 md:p-8"
          >
            <h3 className="font-heading text-2xl text-charcoal mb-2">
              Logo Saturation Index
            </h3>
            <p className="font-body text-silver text-sm mb-6">
              The rise of designer logos vs. the decline of minimalism (1995—1999)
            </p>

            <LogoSaturationGallery />

            <div className="bg-light-gray rounded-sm p-4 border border-border mt-6">
              <p className="font-body text-silver text-xs tracking-widest uppercase mb-1">
                Key Insight
              </p>
              <p className="font-body text-charcoal text-sm">
                By 1999, logo visibility had quadrupled from 1995 levels, while
                minimalist aesthetics declined by over 60%.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-border rounded-sm p-6 md:p-8"
        >
          <h3 className="font-heading text-2xl text-charcoal mb-2 text-center">
            Cultural Impact by Year
          </h3>
          <p className="font-body text-silver text-sm mb-6 text-center">
            Relative influence of cultural events on fashion trends across global capitals
          </p>

          <CulturalImpactMap />
        </motion.div>
      </div>
    </section>
  );
}
