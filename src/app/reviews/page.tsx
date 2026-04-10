import { Star, ExternalLink } from "lucide-react";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";
import { generatePageMetadata, generateBreadcrumbJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Reviews & Testimonials",
  description: `${BUSINESS.reviews.total}+ five-star reviews. See what Miami homeowners say about ${BUSINESS.name}. Rated 5.0 on Google, Yelp, and Porch.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ]);

  const reviewAggregateJsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.reviews.averageRating,
      reviewCount: BUSINESS.reviews.total,
      bestRating: 5,
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating },
      reviewBody: t.quote,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewAggregateJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
            {BUSINESS.reviews.total}+ Five-Star Reviews
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">
            Real feedback from real Miami homeowners. Zero negative reviews across all platforms.
          </p>
        </div>
      </section>

      {/* Review Platform Summary */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { platform: "Google", rating: BUSINESS.reviews.google.rating, count: BUSINESS.reviews.google.count, url: BUSINESS.social.google },
              { platform: "Yelp", rating: BUSINESS.reviews.yelp.rating, count: BUSINESS.reviews.yelp.count, url: BUSINESS.social.yelp },
              { platform: "Porch", rating: BUSINESS.reviews.porch.rating, count: BUSINESS.reviews.porch.count, url: "https://pro.porch.com/miami-fl/plumbers/sharscottyy-plumbing/pp" },
            ].map((p) => (
              <a key={p.platform} href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-200 hover:border-orange-200 hover:bg-orange-50 transition-all group">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="font-black text-slate-900">{p.rating}</span>
                <span className="text-slate-500 text-sm font-medium">({p.count} on {p.platform})</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="rounded-3xl border border-slate-100 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center mb-4 gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed font-medium text-lg">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic font-bold text-slate-800 block">{t.name}</cite>
                    <span className="text-xs text-slate-400 font-medium">{t.platform} · {t.date}</span>
                  </div>
                  {t.verified && (
                    <span className="text-xs bg-green-50 text-green-700 font-bold px-3 py-1 rounded-full border border-green-200">
                      Verified
                    </span>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Leave a Review CTA */}
          <div className="text-center mt-16 bg-white rounded-3xl p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Had a Great Experience?</h2>
            <p className="text-slate-600 font-medium mb-6">Your review helps other Miami homeowners find honest plumbing. It takes 30 seconds.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={BUSINESS.social.google} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-950 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors">
                Review on Google <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href={BUSINESS.social.yelp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-500 transition-colors">
                Review on Yelp <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
