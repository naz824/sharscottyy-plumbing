"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: ReadonlyArray<{ src: string; alt: string; label?: string; labelColor?: string }>;
  className?: string;
}

export default function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  if (images.length === 0) return null;
  if (images.length === 1) return (
    <img src={images[0].src} alt={images[0].alt} className={`w-full h-full object-cover ${className}`} />
  );

  return (
    <div className={`relative w-full h-full group ${className}`}>
      <img src={images[current].src} alt={images[current].alt} className="w-full h-full object-cover transition-opacity duration-300" />
      {images[current].label && (
        <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white ${images[current].labelColor || "bg-blue-600"}`}>
          {images[current].label}
        </span>
      )}
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/50 w-2"}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button
        onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
