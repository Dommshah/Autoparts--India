"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, MessageCircle, Sparkles } from "lucide-react";
import { products, formatPrice } from "@/lib/products";
import { ChatMessage } from "@/types";

const AI_RESPONSES: Record<string, string> = {
  greeting:
    "Hello! I'm AutoGuru, your AI auto parts assistant. I can help you find the right parts for your vehicle. Tell me your car model or what part you need!",
  brake:
    "Looking for brake parts? Here are our top picks:\n\n• **Ceramic Brake Pad Set** - ₹2,499 (Best Seller)\n• **Disc Rotors** - Starting ₹3,999\n\nWhich vehicle do you drive? I can check compatibility.",
  oil:
    "For engine oil, I recommend:\n\n• **Mobil Synthetic 5W-40** - ₹3,299 (Top Rated)\n• **Castrol GTX** - ₹2,199\n\nWhat's your vehicle type and last oil change date?",
  battery:
    "Here are our best batteries:\n\n• **Exide AMG 72Ah** - ₹5,499 (48-month warranty)\n• **Amaron** - ₹4,999\n\nWhat's your car model? I'll find the right fit.",
  default:
    "I can help with that! Here's what I found in our catalog:\n\n• Engine Parts - Pistons, Gaskets, Oil Filters\n• Brake System - Pads, Rotors, Fluids\n• Electrical - Batteries, Spark Plugs\n• Suspension - Shocks, Springs\n• Accessories - Seat Covers, Dash Cams\n\nWhat specific part or vehicle are you looking for?",
};

function getAIResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.match(/hello|hi|hey|namaste/)) return AI_RESPONSES.greeting;
  if (q.match(/brake|pad|disc|rotor/)) return AI_RESPONSES.brake;
  if (q.match(/oil|lubricant|engine oil/)) return AI_RESPONSES.oil;
  if (q.match(/battery|batt/)) return AI_RESPONSES.battery;

  const matched = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  if (matched.length > 0) {
    const list = matched
      .slice(0, 3)
      .map((p) => `• **${p.name}** - ${formatPrice(p.price)} (⭐ ${p.rating})`)
      .join("\n");
    return `I found ${matched.length} matching product${matched.length > 1 ? "s" : ""}:\n\n${list}\n\nWould you like details on any of these?`;
  }

  return AI_RESPONSES.default;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: AI_RESPONSES.greeting,
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const idCounter = useRef(1);

  const sendMessage = () => {
    if (!input.trim()) return;

    idCounter.current += 1;
    const userMsg: ChatMessage = {
      id: `user-${idCounter.current}`,
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      idCounter.current += 1;
      const aiMsg: ChatMessage = {
        id: `ai-${idCounter.current}`,
        role: "assistant",
        content: getAIResponse(userMsg.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-2xl gradient-primary text-white shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="gradient-primary p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">AutoGuru AI</h3>
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                      Online &bull; Powered by AI
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "gradient-primary text-white rounded-br-md"
                        : "bg-surface text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content.split("\n").map((line, i) => (
                      <span key={i}>
                        {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j}>{part.slice(2, -2)}</strong>
                          ) : (
                            part
                          )
                        )}
                        {i < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-surface px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-2"
                  >
                    <Sparkles size={14} className="text-primary animate-pulse" />
                    <span className="text-sm text-muted">Thinking...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about parts, compatibility..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-surface border border-border text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl gradient-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
