import { notFound } from "next/navigation";
import Link from "next/link";
import { PhoneCall, MessageCircle, CheckCircle2, ArrowLeft, Star } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Miami | ${BUSINESS.name}`,
    description: `${service.fullDesc.slice(0, 155)}... Free visit, no dispatch fee. Call ${BUSINESS.phone}`,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDesc,
    provider: {
      "@type": "Plumber",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: { "@type": "City", name: "Miami" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free visit and estimate",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero — red accent for emergency page */}
      <section className={`relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden ${service.slug === "emergency" ? "bg-red-950" : "bg-blue-950"}`}>
        <div className="absolute inset-0 z-0">
          <img src={service.images[0]} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
          <div className={`absolute inset-0 ${service.slug === "emergency" ? "bg-gradient-to-r from-red-950 via-red-950/95 to-red-900/80" : "bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-900/80"}`} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">{service.title}</h1>
          <div className="flex items-center gap-2 text-orange-400 font-bold">
            <Star className="w-5 h-5 fill-orange-400" aria-hidden="true" />
            Free Visit · No Dispatch Fee · Miami-Dade
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">{service.fullDesc}</p>

            <h2 className="text-2xl font-black text-slate-900 mb-6">What&apos;s Included</h2>
            <ul className="space-y-4 mb-12">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700 font-medium">{f}</span>
                </li>
              ))}
            </ul>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={service.images[0]} alt={`${service.title} work by ${BUSINESS.name} in Miami`} className="w-full h-72 object-cover" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(234,88,12,0.3)] hover:bg-orange-500 active:scale-95 transition-all">
                <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call Now — Free Visit
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex-1 bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-400 active:scale-95 transition-all">
                <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <LeadCaptureForm variant="page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
