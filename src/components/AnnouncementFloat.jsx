import React from "react";
import { Megaphone } from "lucide-react";

export const AnnouncementFloat = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 z-50 group"
      data-testid="announcement-float-button"
      aria-label="View latest announcement (1 new)"
    >
      <div className="absolute inset-0 rounded-full bg-black/10 blur-xl group-hover:bg-black/20 transition-colors" />
      <div className="relative w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
        <Megaphone className="w-6 h-6" strokeWidth={1.6} />
        <span
          className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[11px] font-semibold flex items-center justify-center border-2 border-white z-10"
          aria-hidden="true"
        >
          1
        </span>
      </div>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-[12px] tracking-wide bg-black text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        View announcement
      </span>
    </button>
  );
};

export default AnnouncementFloat;