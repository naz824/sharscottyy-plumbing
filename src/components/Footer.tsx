import Link from "next/link";
import { Wrench, PhoneCall, MessageCircle, MapPin, Clock, Mail, Star } from "lucide-react";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Band */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 rounded-3xl p-8 md:p-12 -mt-32 mb-16 shadow-[0_20px_50px_rgba(234,88,12,0.4)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative inline-flex items-center justify-center">
                  <span className="absolute w-8 h-8 rounded-full bg-white/30 animate-ping" aria-hidden="true" />
                  <PhoneCall className="relative w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Need a Plumber Right Now?
                </h3>
              </div>
              <p className="text-orange-100 font-medium">
                Free visit. No dispatch fee. Available 24/7 for emergencies.
              </p>
              <p className="text-white/80 text-sm font-semibold mt-1">
                We respond in under 30 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg hover:bg-orange-50 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <PhoneCall className="w-5 h-5" aria-hidden="true" /> {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-emerald-400 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-900">
                <Wrench className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xl font-black text-white tracking-tighter">
                  SHARSCOTTYY
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  Plumbing
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Miami&apos;s trusted plumbing experts. {BUSINESS.experienceYears} years of experience
              with free visits, honest pricing, and bilingual service throughout Miami-Dade.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-bold text-white">
                {BUSINESS.reviews.averageRating} ({BUSINESS.reviews.total}+ reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (NAP) */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              {BUSINESS.email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                    {BUSINESS.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p>Mon–Fri: {BUSINESS.hours.weekdays}</p>
                  <p>Sat: {BUSINESS.hours.saturday}</p>
                  <p>Sun: {BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.slice(0, 12).map((area) => (
                <span
                  key={area}
                  className="text-xs bg-slate-800 px-3 py-1.5 rounded-full hover:bg-slate-700 transition-colors"
                >
                  {area}
                </span>
              ))}
              <span className="text-xs text-orange-400 font-bold px-3 py-1.5">
                + all Miami-Dade
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {currentYear} {BUSINESS.legalName} All rights reserved. Miami, FL.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
            <span className="text-slate-600">Corp. Doc #{BUSINESS.corporation.docNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
