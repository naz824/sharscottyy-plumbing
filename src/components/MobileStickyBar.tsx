"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-200 z-50 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-3"
      aria-label="Mobile quick contact"
    >
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="bg-orange-600 text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-[0_10px_40px_rgba(234,88,12,0.3)] active:scale-95 transition-transform"
        style={{ flex: "0 0 65%" }}
        aria-label="Call Now"
      >
        <PhoneCall className="w-5 h-5" aria-hidden="true" />
        <span className="text-base">(786) 678-8138</span>
      </a>
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="bg-emerald-500 text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg active:scale-95 transition-transform"
        style={{ flex: "0 0 35%" }}
        aria-label="Message on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
      </a>
    </nav>
  );
}
