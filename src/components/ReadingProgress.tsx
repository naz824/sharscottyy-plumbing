"use client";
import { useState, useEffect } from "react";
export default function ReadingProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed top-0 left-0 h-0.5 bg-orange-500 z-[60] transition-all duration-100" style={{ width: `${width}%` }} />;
}
