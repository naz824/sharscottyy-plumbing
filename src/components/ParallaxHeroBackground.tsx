"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
}

export default function ParallaxHeroBackground({ src }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        src={src}
        alt=""
        className="w-full h-full object-cover opacity-25 will-change-transform"
        aria-hidden="true"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/40" />
    </>
  );
}
