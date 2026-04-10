import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, PhoneCall } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${BUSINESS.name}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: BUSINESS.name },
    publisher: { "@type": "Organization", name: BUSINESS.name },
  };

  /* Parse markdown-like content into React elements */
  const contentBlocks = post.content.split("\n\n").map((para, idx) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return <h2 key={idx} className="text-xl font-black text-slate-900 mt-8 mb-3">{para.replace(/\*\*/g, "")}</h2>;
    }
    const parts = para.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={idx} className="text-slate-700 leading-relaxed font-medium mb-4">
        {parts.map((part, pIdx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={pIdx} className="font-bold text-slate-900">{part.replace(/\*\*/g, "")}</strong>;
          }
          return <span key={pIdx}>{part}</span>;
        })}
      </p>
    );
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-900/80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <div className="flex items-center gap-3 text-blue-300 text-sm font-medium mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1]">{post.title}</h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>{contentBlocks}</div>

          {/* CTA Box */}
          <div className="mt-12 bg-blue-950 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Need Help With Your Plumbing?</h3>
            <p className="text-blue-200 font-medium mb-6">Free visit. No dispatch fee. Serving all of Miami-Dade.</p>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_40px_rgba(234,88,12,0.3)] hover:bg-orange-500 active:scale-95 transition-all">
              <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
