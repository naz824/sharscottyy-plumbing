"use client";

import { BUSINESS } from "@/lib/constants";

export default function EmergencyTicker() {
  return (
    <a
      href={`tel:${BUSINESS.phoneRaw}`}
      className="block bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2.5 px-4 text-center text-xs md:text-sm font-bold flex items-center justify-center gap-2 shadow-md relative z-50 hover:from-red-800 hover:via-red-700 hover:to-red-800 transition-colors"
      aria-label="Call for 24/7 emergency plumbing service"
    >
      <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <span className="tracking-wide">
        24/7 EMERGENCY RESPONSE • FREE VISIT • NO DISPATCH FEES • HABLAMOS ESPAÑOL
      </span>
    </a>
  );
}
