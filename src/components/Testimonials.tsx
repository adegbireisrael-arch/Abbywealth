"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    review: "The most luxurious nail experience I've ever had. The attention to detail is unmatched, and the ambiance is so relaxing. My go-to spot forever.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Chen",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    review: "Abbywealth completely transformed my nails! The gel polish lasted for weeks without a single chip. Highly recommend their services to anyone who values quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Alarie",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    review: "Incredible nail art and such a hygienic environment. I always feel like royalty when I walk in. 10/10 experience.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#111111] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111]">
            Words of Love
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#111111]" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#111111]" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden px-4 md:px-12 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#FCFCFC] rounded-3xl p-8 md:p-12 text-center border border-gray-100 relative"
              >
                <Quote className="w-12 h-12 text-[#F5E9E2] mx-auto mb-6" />
                
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#111111] text-[#111111]" />
                  ))}
                </div>

                <p className="textxl md:text-2xl text-[#2D2D2D] font-medium leading-relaxed mb-10 italic">
                  &quot;{testimonials[currentIndex].review}&quot;
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[currentIndex].photo}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-[#111111] text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-[#111111] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
