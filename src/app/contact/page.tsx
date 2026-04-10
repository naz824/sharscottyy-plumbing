import { PhoneCall, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { generatePageMetadata, generateBreadcrumbJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: `Contact ${BUSINESS.name} for free plumbing estimates in Miami-Dade. Call ${BUSINESS.phone}, WhatsApp, or fill out our form. No dispatch fees. Hablamos Español.`,
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-orange-400 font-black tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
            Contact Us
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">
            Call, message, or fill out the form. We respond fast — and the visit is always free.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info + Map */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-8">Reach Us Directly</h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-2xl p-5 hover:bg-orange-100 transition-colors group">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <PhoneCall className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 group-hover:text-orange-600 transition-colors">Call Us</p>
                    <p className="text-orange-600 font-bold text-lg">{BUSINESS.phone}</p>
                  </div>
                </a>

                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 hover:bg-emerald-100 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 group-hover:text-emerald-600 transition-colors">WhatsApp</p>
                    <p className="text-emerald-600 font-bold">Send us a message anytime</p>
                  </div>
                </a>

                {/* Email only shown if Carlos provides one */}
                {BUSINESS.email && (
                  <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="w-12 h-12 bg-blue-950 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">Email</p>
                      <a href={`mailto:${BUSINESS.email}`} className="text-blue-600 font-bold hover:underline">{BUSINESS.email}</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Hours + Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-orange-600" aria-hidden="true" />
                    <h3 className="font-black text-slate-900">Hours</h3>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600 font-medium">
                    <p>Mon–Fri: {BUSINESS.hours.weekdays}</p>
                    <p>Saturday: {BUSINESS.hours.saturday}</p>
                    <p>Sunday: {BUSINESS.hours.sunday}</p>
                    <p className="text-orange-600 font-bold mt-2">24/7 for emergencies</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-orange-600" aria-hidden="true" />
                    <h3 className="font-black text-slate-900">Location</h3>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">{BUSINESS.address.full}</p>
                  <p className="text-sm text-slate-500 mt-1">Serving all of Miami-Dade County</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.62938775!2d-80.29494!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sharscottyy Plumbing location in Miami"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <LeadCaptureForm variant="page" />

              {/* Cal.com Booking Placeholder */}
              <div className="mt-8 rounded-3xl border-2 border-dashed border-slate-300 p-8 text-center bg-slate-50">
                <h3 className="font-black text-slate-900 mb-2">Book a Time Slot</h3>
                <p className="text-slate-500 text-sm font-medium mb-4">
                  Prefer to schedule online? Pick a time that works for you.
                </p>
                {/* TODO: Replace with Cal.com embed after Carlos creates account */}
                {/* Instructions: Go to cal.com, create free account, set availability */}
                {/* Then embed: <Cal calLink="carlos-sharscottyy/plumbing-visit" /> */}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-400 text-sm italic">
                    Online booking widget will appear here once configured.
                    <br />
                    For now, call or WhatsApp for fastest scheduling.
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-black text-slate-900 mb-2 text-sm uppercase tracking-widest">Payment Methods</h3>
                <p className="text-slate-600 font-medium">Cash · Check · Zelle</p>
                <p className="text-slate-500 text-sm mt-1">No hidden fees or surprise surcharges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
