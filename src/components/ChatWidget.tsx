"use client";

import { useState } from "react";
import { MessageCircle, X, PhoneCall, Send } from "lucide-react";
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
  "Schedule Free Visit": `I'd love to help! I offer free visits with no dispatch fee anywhere in Miami-Dade. Call or text me at ${BUSINESS.phone}, or message on WhatsApp.`,
  "What Services?":
    "I handle water heater repair & install, leak detection, drain cleaning, toilet repair, bathroom remodel plumbing, and 24/7 emergencies. All visits and estimates are free!",
  "Your Prices": `I use honest flat-rate pricing — no hourly billing, no hidden fees, no dispatch charge. I give you a clear estimate before starting. I work with every budget. Call ${BUSINESS.phone} for a free quote.`,
  "Emergency 24/7": `For emergencies, call me NOW at ${BUSINESS.phone}. I respond 24/7 — burst pipes, flooding, no hot water. No dispatch fee, even at 2 AM.`,
  "Hablamos Español": `¡Sí! Soy Carlos Matute. Puede llamarme al ${BUSINESS.phone} o por WhatsApp. Visitas gratis, sin cargo. ¡Estoy listo para ayudarle!`,
  "Payment Methods": `I accept Cash, Check, and Zelle. No hidden fees or surprise surcharges.`,
};

const DEFAULT_RESPONSE = `Thanks for reaching out! For the fastest response, call or text me at ${BUSINESS.phone}. I respond within 30 minutes during business hours. All visits are free!`;

function getKeywordResponse(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("schedule") || t.includes("free visit"))
    return RESPONSES["Schedule Free Visit"];
  if (t.includes("service"))
    return RESPONSES["What Services?"];
  if (t.includes("price") || t.includes("cost") || t.includes("how much"))
    return RESPONSES["Your Prices"];
  if (t.includes("emergency") || t.includes("urgent") || t.includes("flood"))
    return RESPONSES["Emergency 24/7"];
  if (t.includes("español") || t.includes("spanish"))
    return RESPONSES["Hablamos Español"];
  if (t.includes("payment") || t.includes("pay") || t.includes("zelle"))
    return RESPONSES["Payment Methods"];
  return DEFAULT_RESPONSE;
}

const INITIAL_MESSAGE =
  "Hi! I'm Carlos from Sharscottyy Plumbing. I've been fixing Miami's plumbing for over 20 years. How can I help you today? 🔧";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: INITIAL_MESSAGE },
  ]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [input, setInput] = useState("");

  function handleQuickReply(reply: (typeof QUICK_REPLIES)[number]) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: reply },
      { from: "bot", text: RESPONSES[reply] },
    ]);
    setShowQuickReplies(false);
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: getKeywordResponse(trimmed) },
    ]);
    setInput("");
    setShowQuickReplies(false);
  }

  function handleReset() {
    setMessages([{ from: "bot", text: INITIAL_MESSAGE }]);
    setShowQuickReplies(true);
    setInput("");
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

          {/* Text input */}
          <div className="px-4 pt-3 pb-2 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a question…"
              className="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-orange-400 font-medium text-slate-700 placeholder:text-slate-400"
            />
            <button
              onClick={handleSend}
              className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl px-3 py-2 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Call CTA */}
          <div className="px-4 pb-4 bg-white">
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
