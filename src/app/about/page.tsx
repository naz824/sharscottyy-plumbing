import { Award, ShieldCheck, Clock, MapPin, Star, Users, Heart, PhoneCall, MessageCircle } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { generatePageMetadata, generateBreadcrumbJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us — Meet Carlos",
  description: `Meet Carlos Matute Alvarado Sr., owner of ${BUSINESS.name}. ${BUSINESS.experienceYears}+ years experience serving Miami-Dade with honest plumbing, free visits, and bilingual service.`,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-orange-400 font-black tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Carlos</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">
            The man behind {BUSINESS.name}. {BUSINESS.experienceYears}+ years of honest work in Miami-Dade.
          </p>
        </div>
      </section>

      {/* Meet Carlos — Split Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/5]">
                {/* REAL: Sharscottyy family portrait from Yelp */}
                <img
                  src="https://s3-media0.fl.yelpcdn.com/bphoto/DY7KT-3WFaZUpsY5qE3yFw/o.jpg"
                  alt="Professional water heater installation by Carlos at Sharscottyy Plumbing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(234,88,12,0.3)]">
                <p className="text-3xl font-black">{BUSINESS.experienceYears}+</p>
                <p className="text-sm font-bold opacity-90">Years Experience</p>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <p className="text-orange-600 font-black tracking-widest uppercase text-sm mb-3">The Owner</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                Carlos Matute Alvarado Sr.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                <p>
                  For over {BUSINESS.experienceYears} years, Carlos has been fixing pipes, installing water heaters, and solving plumbing emergencies across Miami-Dade County. What started as a passion for honest, hands-on work has grown into one of Liberty City&apos;s most trusted plumbing businesses.
                </p>
                <p>
                  Carlos founded {BUSINESS.name} with a simple philosophy: show up on time, be honest about the problem, and never charge someone just to walk through their door. That&apos;s why every visit and estimate is completely free — no dispatch fees, ever.
                </p>
                <p>
                  As a proud member of Miami&apos;s Latino community, Carlos provides fully bilingual service in English and Spanish. He treats every home like it&apos;s his own, and his {BUSINESS.reviews.total}+ five-star reviews across Google, Yelp, and Porch speak for themselves.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Star, label: `${BUSINESS.reviews.total}+ Reviews`, sub: "5.0 star average" },
                  { icon: Award, label: `${BUSINESS.experienceYears}+ Years`, sub: "Serving Miami-Dade" },
                  { icon: Users, label: "Bilingual", sub: "English & Español" },
                  { icon: Heart, label: "Family-Owned", sub: "Liberty City based" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <stat.icon className="w-5 h-5 text-orange-600 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-black text-slate-900 text-sm">{stat.label}</p>
                      <p className="text-xs text-slate-500">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(234,88,12,0.3)] active:scale-95 transition-all">
                  <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call Carlos
                </a>
                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex-1 bg-emerald-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Promise to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Honest Pricing", desc: "We give you a clear estimate before starting. No hidden fees, no surprise charges, no dispatch fee." },
              { icon: Clock, title: "Reliable & On Time", desc: "We show up when we say we will. No vague 4-hour windows. Your time matters to us." },
              { icon: Heart, title: "Community First", desc: "We're your neighbors in Liberty City. We treat your home with the same care we treat our own." },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <value.icon className="w-10 h-10 text-orange-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-black text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-orange-600 font-black tracking-widest uppercase text-sm mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">Our Work</h2>
            <p className="text-slate-600 font-medium text-lg">Real photos from real jobs across Miami-Dade.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: "a8PW0eKssQ8U9ZDjPlY5yg", alt: "Rheem water heater installation with vent pipe by Sharscottyy Plumbing" },
              { id: "IDNXW0e0wruvlEX5x0YQtg", alt: "Rheem Performance water heater replacement Miami" },
              { id: "H5gTNr3KWRBAugiODSSK2w", alt: "Roman tub faucet replacement by Carlos" },
              { id: "mWR8RUqNgqQSdndPZPqP3A", alt: "Germany tankless water heater installation" },
              { id: "DCMDSC2TgUQ3Il944jSTog", alt: "Under-sink plumbing with garbage disposal installation" },
              { id: "DdLg_dDXz6DGqvrhLZk6Vw", alt: "Service sink replacement with faucet" },
              { id: "1OgBf04VDJ9RYErf2onhlg", alt: "Tankless water heater wall mount installation" },
              { id: "pazKEFforTXOE49nQe9JDg", alt: "Outdoor pipe repair completed — Miami-Dade" },
            ].map((photo) => (
              <div key={photo.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 aspect-square">
                <img
                  src={`https://s3-media0.fl.yelpcdn.com/bphoto/${photo.id}/o.jpg`}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-orange-600 font-black tracking-widest uppercase text-sm mb-3">Service Area</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Serving All of Miami-Dade</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.62938775!2d-80.29494!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharscottyy Plumbing service area — Miami-Dade County"
              />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span key={area} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm font-bold text-slate-700">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-4 font-medium">
                Based in Liberty City, serving all of Miami-Dade County and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
