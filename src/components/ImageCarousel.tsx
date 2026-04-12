"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselImage = {
  readonly url: string;
  readonly alt: string;
  readonly label?: string;
};

export default function ImageCarousel({
  images,
  className = "",
}: {
  images: readonly CarouselImage[];
  className?: string;
}) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const img = images[current];
  const count = images.length;

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? count - 1 : c - 1));
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === count - 1 ? 0 : c + 1));
  }

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <img
        src={img.url}
        alt={img.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        loading="lazy"
      />

      {img.label && (
        <span className="absolute top-3 right-3 bg-black/75 text-white text-xs font-black px-2.5 py-1 rounded uppercase tracking-wider z-20">
          {img.label}
        </span>
      )}

      {count > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-4 bg-white" : "w-1.5 bg-white/55"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
