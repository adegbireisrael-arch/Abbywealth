"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Premium Products",
  "Experienced Nail Technician",
  "Hygienic Environment",
  "Personalized Service",
  "Affordable Luxury",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[600px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop"
              alt="Professional nail care"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#111111] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              The Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-8 leading-tight">
              Why Choose <br /> Abbywealth?
            </h2>
            <p className="text-[#2D2D2D] text-lg font-light mb-10 leading-relaxed">
              We believe that your nails are a canvas, and our treatments are a blend of art and precision. Experience top-tier nail care in an environment designed for your comfort and style.
            </p>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 text-lg font-medium text-[#111111]"
                >
                  <span className="w-8 h-8 rounded-full bg-[#F5E9E2] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-[#111111]" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
