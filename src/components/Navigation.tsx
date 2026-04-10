"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Wrench, PhoneCall, MessageCircle, Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change / resize */
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3 top-0 border-b border-slate-100/60"
          : "bg-transparent py-5 top-[42px] md:top-[42px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Sharscottyy Plumbing Home">
          <div
            className={`p-2.5 rounded-xl transition-colors duration-300 ${
              isScrolled ? "bg-blue-950" : "bg-blue-900 shadow-lg"
            }`}
          >
            <Wrench className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
          </div>
          <div>
            <span
              className={`block text-2xl md:text-3xl font-black leading-none tracking-tighter ${
                isScrolled ? "text-blue-950" : "text-white drop-shadow-md"
              }`}
            >
              SHARSCOTTYY
            </span>
            <span
              className={`block text-xs md:text-sm font-bold uppercase tracking-[0.2em] ${
                isScrolled ? "text-orange-600" : "text-orange-400 drop-shadow-md"
              }`}
            >
              Plumbing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex items-center space-x-8 font-bold text-sm tracking-wide ${
            isScrolled ? "text-slate-700" : "text-white drop-shadow-md"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-500 transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 font-bold px-4 py-2 rounded-full transition-all ${
              isScrolled
                ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100"
                : "text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            }`}
            aria-label="Message us on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_10px_40px_rgba(234,88,12,0.3)] hover:bg-orange-500 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2 ring-2 ring-orange-600 ring-offset-2 ring-offset-transparent"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <PhoneCall className="w-5 h-5" aria-hidden="true" /> {BUSINESS.phone}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-blue-950 bg-slate-100" : "text-white bg-white/20"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-slate-800 py-2 border-b border-slate-100"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center justify-center gap-2 bg-orange-600 text-white py-3.5 rounded-xl font-bold mt-2 shadow-lg active:scale-95 transition-transform"
            aria-label="Call Now"
          >
            <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            aria-label="Message on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" /> Message on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
