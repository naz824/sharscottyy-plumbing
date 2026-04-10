import Link from "next/link";
import { Home, PhoneCall, ArrowLeft } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-slate-50 pt-32">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-8xl font-black text-slate-200 mb-4">404</div>
        <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-600 font-medium mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 active:scale-95 transition-all"
          >
            <Home className="w-5 h-5" aria-hidden="true" /> Go Home
          </Link>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-[0_10px_40px_rgba(234,88,12,0.3)] hover:bg-orange-500 active:scale-95 transition-all"
          >
            <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call {BUSINESS.phone}
          </a>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-slate-500 font-medium mt-6 hover:text-orange-600 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> View Our Services
        </Link>
      </div>
    </section>
  );
}
