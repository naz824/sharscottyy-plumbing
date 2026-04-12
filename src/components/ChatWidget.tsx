"use client";

import { useState } from "react";
import { MessageCircle, X, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

type Message = {
  from: "bot" | "user";
  text: string;
};

const QUICK_REPLIES = [
  "Schedule Free Visit",
  "What Services?",
  "Your Prices",
  "Emergency 24/7",
  "Hablamos Español",
  "Payment Methods",
] as const;

const RESPONSES: Record<(typeof QUICK_REPLIES)[number], string> = {
  "Schedule Free Visit": `Great! Carlos offers completely FREE visits — no dispatch fee, ever. Just call ${BUSINESS.phone} or message on WhatsApp and we'll come to you. Same-day appointments available throughout Miami-Dade.`,
  "What Services?":
    "We handle everything: water heaters, leak detection, drain cleaning, toilet repair, gas lines, bathroom remodels, and 24/7 emergency plumbing. Over 20 years serving Miami-Dade!",
  "Your Prices": `We charge flat-rate pricing — no surprise hourly fees. Your visit and quote are always FREE. You only pay when you approve the work. We accept Cash, Check, or Zelle. Call ${BUSINESS.phone} for a free quote.`,
  "Emergency 24/7": `Yes — we're available 24/7 for burst pipes, flooding, sewage backups, and any plumbing emergency. No after-hours surcharge. Call now: ${BUSINESS.phone}`,
  "Hablamos Español": `¡Sí! Somos completamente bilingüe. Carlos puede atenderle en español desde la primera llamada hasta el final del trabajo. ¡Llámenos al ${BUSINESS.phone}!`,
  "Payment Methods": `We accept Cash, Check, and Zelle — no credit card fees, no hidden charges. We give you a clear flat-rate quote before starting any work. Questions? Call ${BUSINESS.phone}.`,
};

const INITIAL_MESSAGE =
  "Hi! I'm Carlos from Sharscottyy Plumbing. I've been fixing Miami's plumbing for over 20 years. How can I help you today?";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: INITIAL_MESSAGE },
  ]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);

  function handleQuickReply(reply: (typeof QUICK_REPLIES)[number]) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: reply },
      { from: "bot", text: RESPONSES[reply] },
    ]);
    setShowQuickReplies(false);
  }

  function handleReset() {
    setMessages([{ from: "bot", text: INITIAL_MESSAGE }]);
    setShowQuickReplies(true);
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-96 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-slate-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-950 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://s3-media0.fl.yelpcdn.com/bphoto/DY7KT-3WFaZUpsY5qE3yFw/o.jpg"
                alt="Carlos from Sharscottyy Plumbing"
                className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
              />
              <div>
                <p className="text-white font-black text-sm leading-tight">
                  Carlos — Sharscottyy Plumbing
                </p>
                <p className="text-blue-300 text-xs font-medium">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-blue-300 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.from === "user"
                      ? "bg-orange-600 text-white rounded-br-sm"
                      : "bg-white text-slate-700 border border-slate-100 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((r) => (
                  <button
                    key={r}
                    onClick={() => handleQuickReply(r)}
                    className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-full font-bold hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-all shadow-sm"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}

            {!showQuickReplies && (
              <div className="pt-1">
                <button
                  onClick={handleReset}
                  className="text-xs bg-white border border-slate-200 text-slate-500 px-3 py-2 rounded-full font-medium hover:bg-slate-100 transition-all"
                >
                  ↩ Ask another question
                </button>
              </div>
            )}
          </div>

          {/* Call CTA */}
          <div className="p-4 bg-white border-t border-slate-100">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-orange-500 transition-colors shadow-[0_4px_20px_rgba(234,88,12,0.25)]"
              aria-label="Call Carlos for a free visit"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              Call Carlos — Free Visit
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 bg-orange-600 hover:bg-orange-500 text-white rounded-full shadow-[0_10px_40px_rgba(234,88,12,0.4)] flex items-center justify-center transition-all active:scale-95"
        aria-label={open ? "Close chat" : "Chat with Carlos"}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
