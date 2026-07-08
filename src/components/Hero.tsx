"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay (using a solid elegant color or placeholder image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Nail Salon"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#F5E9E2] uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
        >
          Welcome to Abbywealth
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-6 leading-tight"
        >
          Luxury Nail Care <br className="hidden md:block" />
          Designed For Elegant Women
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl"
        >
          Beautiful nails. Premium experience. Professional care tailored to your style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-white text-[#111111] font-semibold rounded-full hover:bg-[#F5E9E2] transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Book Appointment
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto text-center"
          >
            View Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
