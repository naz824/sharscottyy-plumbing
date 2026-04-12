import Link from "next/link";
import {
  Star, Award, ShieldCheck, Clock, MapPin, PhoneCall, MessageCircle,
  Flame, Droplet, Wrench, Home, AlertTriangle, ChevronRight, Users,
  BadgeDollarSign, Paintbrush, CheckCircle2, ArrowRight,
  ClipboardCheck, X, Check,
} from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FaqAccordion from "@/components/FaqAccordion";
import BackToTop from "@/components/BackToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CostEstimator from "@/components/CostEstimator";
import ImageCarousel from "@/components/ImageCarousel";
import { BUSINESS, SERVICES, TESTIMONIALS, FAQS } from "@/lib/constants";
import { generateFaqJsonLd } from "@/lib/metadata";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame, Droplet, Wrench, Home, AlertTriangle, Paintbrush,
};

export default function HomePage() {
  const faqJsonLd = generateFaqJsonLd(FAQS.slice(0, 4).map(f => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://s3-media0.fl.yelpcdn.com/bphoto/a8PW0eKssQ8U9ZDjPlY5yg/o.jpg"
            alt=""
            className="w-full h-full object-cover opacity-25"
            aria-hidden="true"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left pt-10 md:pt-0">
            {/* FIX 9: Added platform names to review badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/60 backdrop-blur-md text-blue-50 rounded-full font-bold text-sm mb-6 border border-blue-500/30 shadow-lg">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              {BUSINESS.reviews.averageRating} Stars · {BUSINESS.reviews.total}+ Verified Reviews
              <span className="text-blue-300 font-normal">on Google, Yelp &amp; Porch</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Miami&apos;s Honest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Plumbing Expert
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {BUSINESS.experienceYears} years of experience. Zero dispatch fees. Stop paying corporate
              franchises $99–$150 just to diagnose your problem — our visit and quote are{" "}
              <strong className="text-white">completely free</strong>.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {[
                { icon: BadgeDollarSign, label: "$0 Dispatch Fee" },
                { icon: Clock, label: "24/7 Emergency" },
                { icon: Users, label: "Hablamos Español" },
                { icon: ShieldCheck, label: "Insured & Established" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-white border border-white/10"
                >
                  <badge.icon className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  {badge.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(234,88,12,0.3)] active:scale-95 transition-transform"
                aria-label="Call now for a free visit"
              >
                <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call Now — Free Visit
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0 hidden lg:block">
            <LeadCaptureForm variant="hero" />
          </div>
        </div>
      </section>

      {/* TRUST BAR — FIX 5: Carlos headshot as first item */}
      <section className="bg-white py-6 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div className="flex items-center gap-3">
              <img
                src="https://s3-media0.fl.yelpcdn.com/bphoto/DY7KT-3WFaZUpsY5qE3yFw/o.jpg"
                alt="Carlos M., Owner of Sharscottyy Plumbing"
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
              />
              <div>
                <p className="font-black text-slate-900">Carlos M. — Owner</p>
                <p className="text-sm text-slate-500">20 Years Experience</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" aria-hidden="true" />
              </div>
              <div>
                <p className="font-black text-slate-900">Free Visit</p>
                <p className="text-sm text-slate-500">No dispatch fee ever</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <p className="font-black text-slate-900">Honest Pricing</p>
                <p className="text-sm text-slate-500">Pay only for approved work</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-orange-600 fill-orange-600" aria-hidden="true" />
              </div>
              <div>
                <p className="font-black text-slate-900">{BUSINESS.reviews.total}+ Reviews</p>
                <p className="text-sm text-slate-500">5.0 star average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — FIX 4 */}
      <AnimateOnScroll>
        <section className="py-24 bg-blue-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-orange-400 font-black tracking-widest uppercase mb-3 text-sm">Simple Process</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                How It Works
              </h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Connecting lines on desktop */}
              <div
                className="hidden md:block absolute h-0.5 bg-white/20 z-0"
                style={{ top: "6.75rem", left: "20%", right: "20%" }}
                aria-hidden="true"
              />
              {[
                {
                  num: "01",
                  icon: PhoneCall,
                  title: "Call or Text",
                  desc: `Reach us anytime at ${BUSINESS.phone} or message on WhatsApp.`,
                },
                {
                  num: "02",
                  icon: ClipboardCheck,
                  title: "Free Visit & Quote",
                  desc: "We come to you for free, diagnose the issue, and give you an honest quote.",
                },
                {
                  num: "03",
                  icon: CheckCircle2,
                  title: "We Fix It Right",
                  desc: "Approve the work and we handle the rest. Same-day service available.",
                },
              ].map((step) => (
                <div key={step.num} className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-6xl font-black text-white/10 mb-2 leading-none">{step.num}</div>
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-5 shadow-[0_10px_40px_rgba(234,88,12,0.3)]">
                    <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                  <p className="text-blue-200 font-medium leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* SERVICES */}
      <AnimateOnScroll>
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-orange-600 font-black tracking-widest uppercase mb-3 text-sm">
                Full-Service Plumbing
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05]">
                Everything your home needs,
                <br className="hidden md:block" />
                done right the first time.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => {
                const IconComp = iconMap[service.icon] || Wrench;
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                    <article className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:-translate-y-1 transition-all duration-500">
                      <div className="h-56 overflow-hidden relative">
                        <ImageCarousel images={service.images} className="absolute inset-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
                        <div className={`absolute bottom-4 left-6 ${service.color} text-white p-3 rounded-2xl shadow-lg z-30`}>
                          <IconComp className="w-6 h-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="p-8 pt-6">
                        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed font-medium">{service.shortDesc}</p>
                        <span className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm group-hover:gap-2 transition-all">
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
      </AnimateOnScroll>

      {/* CARLOS PROMISE */}
      <AnimateOnScroll>
        <section className="py-20 bg-blue-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img
              src="https://s3-media0.fl.yelpcdn.com/bphoto/DY7KT-3WFaZUpsY5qE3yFw/o.jpg"
              alt="Carlos Matute, Owner of Sharscottyy Plumbing"
              className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 mx-auto mb-7 shadow-xl"
            />
            <blockquote>
              <p className="text-xl md:text-2xl italic font-medium leading-relaxed text-blue-100 mb-6">
                &ldquo;I work with every budget. Before I charge you anything, I come to your home, look at the problem, and tell you exactly what it will cost. No surprises. That&rsquo;s the way plumbing should be done.&rdquo;
              </p>
              <footer className="text-orange-400 font-black text-lg not-italic">
                — Carlos Matute, Owner &amp; Master Plumber
              </footer>
            </blockquote>
          </div>
        </section>
      </AnimateOnScroll>

      {/* COST ESTIMATOR */}
      <AnimateOnScroll>
        <CostEstimator />
      </AnimateOnScroll>

      {/* THE HONEST DIFFERENCE — FIX 2 + FIX 7: Combined trust cards + Us vs. Them */}
      <AnimateOnScroll>
        <section id="comparison" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-orange-600 font-black tracking-widest uppercase mb-3 text-sm">The Honest Difference</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05]">
                Why pay just to get a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">diagnosis</span>?
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Most Miami plumbing companies charge $75–$250 before they even look at your pipes.
                We show up for free, give you an honest quote, and you only pay when you say yes.
              </p>
            </div>

            {/* Trust Cards (moved from Why Us) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Award, title: `${BUSINESS.experienceYears} Years Experience`, desc: "Experienced, insured plumber with two decades of honest service across Miami-Dade." },
                { icon: ShieldCheck, title: "Free Visit & Quote", desc: "No dispatch fees, no obligations. You only pay for work you approve. Period." },
                { icon: Clock, title: "24/7 Emergency", desc: "Storm or burst pipe at 2 AM? We respond day and night with no after-hours surcharge." },
                { icon: MapPin, title: "Miami Specialists", desc: "We know the codes, hard-water corrosion, and hurricane prep unique to South Florida." },
              ].map((feature) => (
                <div key={feature.title} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:-translate-y-1 transition-all duration-500 p-8 text-center border border-slate-100">
                  <div className="flex items-center justify-center w-14 h-14 mb-5 mx-auto rounded-2xl bg-orange-50 text-orange-600">
                    <feature.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Us vs. Them */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Other Miami Plumbers */}
              <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
                <h3 className="text-xl font-black text-red-700 mb-6 text-center">Other Miami Plumbers</h3>
                <ul className="space-y-4">
                  {[
                    "Charge $75–$250 just to visit",
                    "Long wait times",
                    "Hidden fees and surprise charges",
                    "Language barriers",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                        <X className="w-4 h-4 text-red-600" aria-hidden="true" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Sharscottyy Plumbing */}
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-black text-green-700 mb-6 text-center">Sharscottyy Plumbing</h3>
                <ul className="space-y-4">
                  {[
                    "$0 dispatch fee — always free",
                    "Same-day response",
                    "Upfront honest pricing",
                    "Fully bilingual (English & Spanish)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* TESTIMONIALS */}
      <AnimateOnScroll>
        <section id="reviews" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-orange-600 font-black tracking-widest uppercase mb-3 text-sm">{BUSINESS.reviews.total}+ Five-Star Reviews</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05]">What Our Neighbors Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.slice(0, 3).map((t, i) => (
                <blockquote key={i} className="rounded-3xl border border-slate-100 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center mb-4 gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="flex items-center justify-between">
                    <cite className="not-italic text-sm font-bold text-slate-800">{t.name}</cite>
                    <span className="text-xs text-slate-400 font-medium">{t.platform} · {t.date}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/reviews" className="inline-flex items-center gap-2 bg-blue-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 active:scale-95 transition-all shadow-lg">
                See All Reviews <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ */}
      <AnimateOnScroll>
        <section id="faqs" className="py-24 bg-slate-50 pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-orange-600 font-black tracking-widest uppercase mb-3 text-sm">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05]">Common Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={FAQS.slice(0, 4).map(f => ({ question: f.question, answer: f.answer }))} />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* MOBILE LEAD FORM */}
      <section className="py-16 bg-slate-50 lg:hidden">
        <div className="max-w-md mx-auto px-4">
          <LeadCaptureForm variant="page" />
        </div>
      </section>

      <BackToTop />
    </>
  );
}
