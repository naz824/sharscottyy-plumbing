import { DollarSign, Info } from "lucide-react";

const ESTIMATES = [
  {
    service: "Water Heater Replacement",
    range: "$800 – $2,500",
    note: "Tank or tankless, labor included",
  },
  {
    service: "Drain Cleaning",
    range: "$150 – $400",
    note: "Kitchen, bathroom, or main sewer line",
  },
  {
    service: "Toilet Repair or Replacement",
    range: "$150 – $450",
    note: "Repair, rebuild, or new installation",
  },
  {
    service: "Leak Detection & Repair",
    range: "$200 – $800",
    note: "Hidden, wall, or slab leaks",
  },
  {
    service: "Gas Line Work",
    range: "$300 – $1,200",
    note: "New line, removal, or repair",
  },
  {
    service: "Bathroom Plumbing Remodel",
    range: "$1,500 – $8,000",
    note: "Rough-in, fixtures, and connections",
  },
];

const MARKET_NOTE = "Miami-Dade market average";

export default function CostEstimator() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-orange-600 font-black tracking-widest uppercase mb-3 text-sm">
            Pricing Guide
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.05]">
            What Does Plumbing Cost in Miami?
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Market averages to help you plan. Carlos gives you a free visit and
            flat-rate quote — no guesswork, no dispatch fee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ESTIMATES.map((item) => (
            <div
              key={item.service}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-black text-slate-900 leading-tight">
                  {item.service}
                </h3>
                <DollarSign
                  className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="text-2xl font-black text-orange-600">{item.range}</p>
              <p className="text-sm text-slate-500 font-medium">{item.note}</p>
              <div className="mt-auto pt-3 border-t border-slate-200 flex items-start gap-2">
                <Info
                  className="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-xs text-blue-700 font-semibold leading-snug">
                  {MARKET_NOTE}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-950 rounded-2xl px-8 py-6 text-center">
          <p className="text-white font-bold text-lg leading-relaxed">
            Carlos offers: Free visit + flat-rate quote. No dispatch fee. No hourly billing.
          </p>
          <p className="text-orange-400 font-black text-base mt-2">
            &ldquo;I work with every budget.&rdquo; — Carlos M.
          </p>
        </div>

        <p className="text-center text-sm text-slate-400 font-medium mt-6">
          * Ranges reflect typical Miami market rates. Your actual cost depends
          on the specific job. Carlos provides a free, no-obligation estimate
          after inspection.
        </p>
      </div>
    </section>
  );
}
