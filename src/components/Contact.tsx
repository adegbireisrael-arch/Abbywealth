import { MapPin, Phone, Mail, AtSign } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#F5E9E2] rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-[#111111]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-2">Visit Us</h3>
            <p className="text-[#2D2D2D] font-light">
              123 Luxury Avenue,<br />
              Lagos, Nigeria
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#F5E9E2] rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-[#111111]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-2">WhatsApp Us</h3>
            <a 
              href="https://wa.me/2347048073803" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D2D2D] font-light hover:text-black transition-colors"
            >
              +234 704 807 3803
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#F5E9E2] rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-[#111111]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-2">Email Us</h3>
            <a 
              href="mailto:abigailaremu432@gmail.com" 
              className="text-[#2D2D2D] font-light hover:text-black transition-colors"
            >
              abigailaremu432@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#F5E9E2] rounded-full flex items-center justify-center mb-6">
              <AtSign className="w-6 h-6 text-[#111111]" />
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-2">Follow Us</h3>
            <a 
              href="#" 
              className="text-[#2D2D2D] font-light hover:text-black transition-colors"
            >
              @abbywealth
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
