import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919821914642?text=Namaste%2C%20I%27d%20like%20to%20know%20more%20about%20Swastha%20NavJeevan."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      data-testid="whatsapp-float-button"
      aria-label="Chat with Swastha NavJeevan on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-black/10 blur-xl group-hover:bg-black/20 transition-colors" />
      <div className="relative w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
        <MessageCircle className="w-6 h-6\" strokeWidth={1.6} />
      </div>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-[12px] tracking-wide bg-black text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Join the community
      </span>
    </a>
  );
};

export default WhatsAppFloat;
