"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Scissors, Droplets, Paintbrush, Hammer } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Acrylic Nails",
    description: "Flawless extensions tailored to your desired length and shape.",
    icon: <Sparkles className="w-6 h-6 text-[#111111]" />,
  },
  {
    id: 2,
    title: "Gel Polish",
    description: "Long-lasting, chip-resistant polish for a perfectly glossy finish.",
    icon: <Droplets className="w-6 h-6 text-[#111111]" />,
  },
  {
    id: 3,
    title: "Pedicure",
    description: "Relaxing foot care that leaves your toes looking pristine and elegant.",
    icon: <Scissors className="w-6 h-6 text-[#111111]" />,
  },
  {
    id: 4,
    title: "Manicure",
    description: "Classic nail care emphasizing cuticle health and clean styling.",
    icon: <Palette className="w-6 h-6 text-[#111111]" />,
  },
  {
    id: 5,
    title: "Nail Art",
    description: "Intricate, custom designs that showcase your personal style.",
    icon: <Paintbrush className="w-6 h-6 text-[#111111]" />,
  },
  {
    id: 6,
    title: "Nail Fix",
    description: "Quick and seamless repairs to keep your nails looking flawless.",
    icon: <Hammer className="w-6 h-6 text-[#111111]" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#111111] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Luxury Treatments
          </h2>
          <p className="text-[#2D2D2D] text-lg font-light">
            Indulge in our premium nail care services designed to elevate your style and provide a relaxing experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md"
            >
              <div className="w-14 h-14 bg-[#F5E9E2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                {service.title}
              </h3>
              <p className="text-[#2D2D2D] font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
