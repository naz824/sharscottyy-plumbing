import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmergencyTicker from "@/components/EmergencyTicker";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { generateLocalBusinessJsonLd } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} — Miami's Trusted Plumber | Free Visits, No Dispatch Fees`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `${BUSINESS.experienceYears} years of experience. Free visits, no dispatch fees. 24/7 emergency plumbing in Miami-Dade. Water heaters, leak detection, drain cleaning. Hablamos Español. Call ${BUSINESS.phone}`,
  keywords: [
    "plumber Miami",
    "plumber Liberty City",
    "emergency plumber Miami",
    "plomero Miami",
    "free plumbing estimate Miami",
    "water heater repair Miami",
    "leak detection Miami",
    "drain cleaning Miami",
    "24/7 plumber Miami-Dade",
    "no dispatch fee plumber",
    "bilingual plumber Miami",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  metadataBase: new URL("https://sharscottyyplumbing.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — Miami's Trusted Plumber`,
    description: `Free visits. No dispatch fees. ${BUSINESS.experienceYears}+ years experience. 5.0★ rated. Hablamos Español.`,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {
    /* TODO: Add Google Search Console verification */
    /* google: "YOUR_VERIFICATION_CODE" */
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessJsonLd();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a1628" />
        {/* TODO: Add Google Analytics 4 */}
        {/* TODO: Add Tawk.to live chat script */}
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
        <EmergencyTicker />
        <Navigation />
        <main >{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
