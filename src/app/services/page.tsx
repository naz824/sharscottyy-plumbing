import Link from "next/link";
import { Flame, Droplet, Wrench, Home, AlertTriangle, Paintbrush, ArrowRight, PhoneCall } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { generatePageMetadata, generateBreadcrumbJsonLd } from "@/lib/metadata";
import ImageCarousel from "@/components/ImageCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plumbing Services",
  description: `Full-service plumbing in Miami-Dade: water heaters, leak detection, drain cleaning, toilet repair, bathroom remodels, and 24/7 emergencies. Free visits, no dispatch fees. Call ${BUSINESS.phone}`,
  path: "/services",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame, Droplet, Wrench, Home, AlertTriangle, Paintbrush,
};

export default function ServicesPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-orange-400 font-black tracking-widest uppercase text-sm mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
            Full-Service Plumbing for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Miami</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">
            From routine repairs to 24/7 emergencies, we handle it all with free visits and honest pricing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComp = iconMap[service.icon] || Wrench;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <article className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                    <div className="h-56 overflow-hidden relative">
                      <ImageCarousel
                        images={service.images}
                        alt={`${service.title} service in Miami`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                      <div className={`absolute bottom-4 left-6 ${service.color} text-white p-3 rounded-2xl shadow-lg`}>
                        <IconComp className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="p-8 pt-6 flex-1 flex flex-col">
                      <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h2>
                      <p className="text-slate-600 mb-4 leading-relaxed font-medium flex-1">{service.shortDesc}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm group-hover:gap-2 transition-all mt-auto">
                        Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Not sure what you need?</h2>
          <p className="text-blue-200 text-lg mb-8 font-medium">Call us or send a message — we&apos;ll come out for free and tell you exactly what&apos;s going on.</p>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_40px_rgba(234,88,12,0.3)] hover:bg-orange-500 active:scale-95 transition-all">
            <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
