"use client";
import { useState } from "react";
import { PhoneCall, Calendar, AlertTriangle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
export default function EmergencyChecker() {
  const [step, setStep] = useState(0);
  return (
    <section className="py-16 bg-blue-950">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <AlertTriangle className="w-10 h-10 text-orange-400 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-white mb-6">Plumbing Emergency?</h2>
        {step === 0 && (
          <div>
            <p className="text-blue-200 mb-6">Is water actively flowing or flooding?</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setStep(1)} className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-500">Yes — Water is flowing!</button>
              <button onClick={() => setStep(2)} className="bg-slate-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-500">No</button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <p className="text-red-300 font-bold text-lg mb-4">Call us RIGHT NOW</p>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-red-600 text-white px-10 py-4 rounded-xl font-black text-2xl animate-pulse"><PhoneCall className="w-6 h-6" /> {BUSINESS.phone}</a>
            <p className="text-blue-300 text-sm mt-4">We respond 24/7. No dispatch fee.</p>
          </div>
        )}
        {step === 2 && (
          <div>
            <p className="text-blue-200 mb-6">Is it urgent? (No hot water, toilet won&apos;t flush, sewage smell)</p>
            <div className="flex gap-4 justify-center">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-xl font-bold"><PhoneCall className="w-5 h-5" /> Same-Day Service</a>
              <a href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold"><Calendar className="w-5 h-5" /> Schedule Free Visit</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
