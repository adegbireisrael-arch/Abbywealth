"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-[#F5E9E2] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl">
          <div className="text-center mb-12">
            <span className="text-[#111111] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Reservation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111]">
              Book Appointment
            </h2>
          </div>

          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">
                Appointment request sent successfully.
              </h3>
              <p className="text-[#2D2D2D] text-lg">
                We&apos;ll contact you shortly to confirm your booking.
              </p>
              <button 
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 px-8 py-3 bg-[#111111] text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Full Name</label>
                  <input required name="name" type="text" className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Phone Number</label>
                  <input required name="phone" type="tel" className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Email Address</label>
                  <input required name="email" type="email" className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Service</label>
                  <select required name="service" className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors appearance-none">
                    <option value="">Select a service</option>
                    <option value="Acrylic Nails">Acrylic Nails</option>
                    <option value="Gel Polish">Gel Polish</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Nail Art">Nail Art</option>
                    <option value="Nail Fix">Nail Fix</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Preferred Date</label>
                  <input required name="date" type="date" className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Preferred Time</label>
                  <input required name="time" type="time" className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Message (Optional)</label>
                <textarea name="message" rows={4} className="w-full bg-[#FCFCFC] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors resize-none" placeholder="Any special requests or details?"></textarea>
              </div>

              {submitStatus === "error" && (
                <div className="text-red-500 text-sm font-medium">
                  Oops! Something went wrong. Please try again or contact us directly on WhatsApp.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#111111] text-white font-semibold rounded-lg px-6 py-4 hover:bg-gray-800 transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  "Book Appointment"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
