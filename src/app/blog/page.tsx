import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { generatePageMetadata, generateBreadcrumbJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Plumbing Tips & Blog",
  description: "Miami plumbing tips, hurricane prep guides, and expert advice from Sharscottyy Plumbing. Learn how to protect your home and save money.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-orange-400 font-black tracking-widest uppercase text-sm mb-3">Plumbing Tips</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
            Expert Advice for Miami Homeowners
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">
            Practical guides to protect your plumbing, save money, and prepare for hurricane season.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 pt-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </time>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium flex-1">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
