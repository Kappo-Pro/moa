import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Loader2 } from "lucide-react";
import { getGeminiResponse } from "../lib/gemini";

interface Message {
  role: "user" | "model";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "Why choose MoA for my brand?",
  "Tell me about leasing demographics.",
  "What entertainment venues are available?",
  "How many guests visit annually?",
];

export function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const history = messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

    const response = await getGeminiResponse(text, history);
    
    const modelMessage: Message = { role: "model", content: response };
    setMessages((prev) => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[550px] glass rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-accent-primary/20 flex items-center justify-center border border-accent-primary/30">
                  <Sparkles size={16} className="text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-display tracking-tight text-white">The MoA Visionary</h3>
                  <p className="text-[10px] uppercase tracking-luxury text-accent-primary opacity-80">AI Consultant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 rotate-3">
                    <MessageSquare size={32} className="text-white/20" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground/60 max-w-[200px] leading-relaxed">
                      Transform your brand's presence at the world's most iconic destination.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 w-full">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleSend(prompt)}
                        className="text-left p-3 text-[11px] uppercase tracking-luxury bg-white/5 border border-white/10 rounded-lg hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all text-white/70 hover:text-white"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user" 
                        ? "bg-accent-primary text-white font-medium" 
                        : "glass border border-white/10 text-foreground/90"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass border border-white/10 p-4 rounded-2xl">
                    <Loader2 size={16} className="animate-spin text-accent-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-5 bg-white/5 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Visionary..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-accent-primary/50 transition-colors text-white placeholder:text-white/20"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="size-11 rounded-full bg-accent-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:scale-100"
                >
                  <Send size={18} className="text-white ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative size-14 md:size-16 rounded-full bg-accent-primary shadow-lg shadow-accent-primary/20 flex items-center justify-center overflow-hidden group"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageSquare size={24} className="text-white" />
          )}
        </motion.div>
        
        {/* Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
