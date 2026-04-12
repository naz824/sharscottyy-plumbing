"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-200 ${
              isOpen
                ? "border-orange-200 border-l-4 border-l-orange-500"
                : "border-slate-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center text-left font-bold text-slate-800 p-5 hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="pr-4">{faq.question}</span>
              {isOpen ? (
                <Minus
                  className="w-5 h-5 text-orange-600 shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <Plus
                  className="w-5 h-5 text-orange-600 shrink-0"
                  aria-hidden="true"
                />
              )}
            </button>
            <div
              id={`faq-panel-${idx}`}
              role="region"
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="text-slate-600 px-5 pb-5 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
