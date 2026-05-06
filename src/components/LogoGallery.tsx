"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollectionImage {
  brand: string;
  year: number;
  season: string;
  collection: string;
  imageUrl: string;
  description: string;
  logoProminence: number;
}

const brands = ["All", "Chanel", "Dior", "Yves Saint Laurent", "Calvin Klein", "Ralph Lauren"];
const years = [1995, 1996, 1997, 1998, 1999];

export function LogoGallery() {
  const [collections, setCollections] = useState<CollectionImage[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<CollectionImage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/scrape-firstview")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setCollections(data.data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  // Derive filtered from collections directly
  const getFilteredCollections = () => {
    let result = collections;

    if (selectedBrand !== "All") {
      result = result.filter((c) => c.brand === selectedBrand);
    }

    if (selectedYear) {
      result = result.filter((c) => c.year === selectedYear);
    }

    return result;
  };

  const filtered = getFilteredCollections();

  return (
    <div>
      <div className="mb-8">
        <h3 className="font-heading text-[28px] md:text-[40px] font-bold uppercase text-deep-brown mb-2">
          Logo Saturation Gallery
        </h3>
        <p className="font-body text-sm text-silver mb-6">
          FirstView.com archive collections (1995—1999)
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 text-xs rounded-sm transition-all duration-300 font-body ${
                selectedBrand === brand
                  ? "bg-deep-brown text-offwhite"
                  : "text-silver hover:text-deep-brown"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() =>
                setSelectedYear(selectedYear === year ? null : year)
              }
              className={`px-4 py-2 text-xs rounded-sm transition-all duration-300 font-body ${
                selectedYear === year
                  ? "bg-deep-brown text-offwhite"
                  : "text-silver hover:text-deep-brown"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-silver">Loading collections...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((item, index) => (
              <motion.div
                key={`${item.brand}-${item.year}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden bg-white aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-heading text-lg font-bold uppercase text-offwhite">
                        {item.brand}
                      </p>
                      <p className="font-body text-xs text-offwhite/80">
                        {item.year} • {item.season}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-heading text-sm font-bold uppercase text-deep-brown">
                    {item.collection}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 bg-light-gray rounded-full overflow-hidden">
                      <div
                        className="h-full bg-deep-brown rounded-full"
                        style={{ width: `${item.logoProminence}%` }}
                      />
                    </div>
                    <span className="font-body text-xs text-silver">
                      {item.logoProminence}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-20 text-silver">
              No collections found for the selected filters.
            </p>
          )}
        </>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-brown/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-offwhite p-6 md:p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-silver hover:text-deep-brown transition-colors"
              >
                ✕
              </button>

              <div
                className="w-full aspect-[3/4] bg-light-gray mb-6 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedImage.imageUrl})` }}
              />

              <p className="font-body text-silver tracking-widest uppercase text-xs mb-2">
                {selectedImage.brand} • {selectedImage.year}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-deep-brown mb-3">
                {selectedImage.collection}
              </h3>
              <p className="font-body text-sm text-silver mb-4">
                {selectedImage.season} Collection
              </p>
              <p className="font-body text-base text-deep-brown mb-6">
                {selectedImage.description}
              </p>

              <div className="bg-light-gray p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-xs text-silver uppercase tracking-widest">
                    Logo Prominence
                  </span>
                  <span className="font-heading text-lg font-bold text-deep-brown">
                    {selectedImage.logoProminence}%
                  </span>
                </div>
                <div className="w-full h-2 bg-offwhite rounded-full overflow-hidden">
                  <div
                    className="h-full bg-deep-brown rounded-full transition-all duration-500"
                    style={{ width: `${selectedImage.logoProminence}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
