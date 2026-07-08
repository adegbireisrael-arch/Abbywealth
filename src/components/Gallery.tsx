"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

// Placeholder images mimicking Pinterest masonry style
const galleryImages = [
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1632832962294-0d500473ce17?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop",
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#111111] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Our Gallery
          </h2>
          <p className="text-[#2D2D2D] text-lg font-light">
            A glimpse into the elegance and artistry we bring to every appointment.
          </p>
        </div>

        {/* Masonry Layout Approximation using Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
              onClick={() => setSelectedImg(src)}
            >
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={src}
                  alt={`Nail Art ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            >
              <Image
                src={selectedImg}
                alt="Enlarged nail art"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
