"use client";
import { TESTIMONIALS } from "@/lib/constants";
export default function ReviewTicker() {
  const items = TESTIMONIALS.slice(0, 8);
  const doubled = [...items, ...items];
  return (
    <div className="bg-blue-950 py-3 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm text-blue-100 shrink-0">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">&ldquo;{t.quote.substring(0, 60)}...&rdquo;</span>
            <span className="text-blue-300">— {t.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
