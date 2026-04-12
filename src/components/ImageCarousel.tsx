"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: readonly string[];
  alt: string;
  labels?: readonly string[];
}

export default function ImageCarousel({ images, alt, labels }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next, images.length]);

  if (images.length === 1) {
    return (
      <div className="relative w-full h-full">
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        {labels?.[0] && (
          <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded tracking-wider z-10">
            {labels[0]}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images */}
      <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-in-out">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i !== current}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}
      </div>

      {/* BEFORE/AFTER label */}
      {labels?.[current] && (
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded tracking-wider z-10">
          {labels[current]}
        </span>
      )}

      {/* Prev / Next arrows — visible on group-hover */}
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/40 hover:bg-black/65 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
        type="button"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/40 hover:bg-black/65 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
        type="button"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
            type="button"
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
