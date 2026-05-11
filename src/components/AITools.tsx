import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BarChart3, ArrowRight, Loader2, Search, ChevronDown } from "lucide-react";
import { matchBrandToZone, predictROI } from "../lib/gemini";

function CustomSelect({ 
  value, 
  onChange, 
  options, 
  label,
  accentColor = "secondary" // "primary" or "secondary"
}: { 
  value: string; 
  onChange: (val: string) => void; 
  options: string[]; 
  label: string;
  accentColor?: "primary" | "secondary";
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const colors = {
    primary: {
      text: "text-accent-primary",
      border: "focus:border-accent-primary/50",
      bg: "bg-accent-primary/5"
    },
    secondary: {
      text: "text-accent-secondary",
      border: "focus:border-accent-secondary/50",
      bg: "bg-accent-secondary/5"
    }
  };

  const activeColor = colors[accentColor];

  return (
    <div className="relative space-y-2">
      <label className="text-[10px] uppercase tracking-luxury text-white/40 ml-1">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex items-center justify-between text-white hover:bg-white/10 transition-all focus:outline-none ${activeColor.border}`}
      >
        <span className="truncate mr-2">{value}</span>
        <ChevronDown 
          size={16} 
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} opacity-50`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-30" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-2 z-40 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl"
            >
              <div className="py-2 max-h-[240px] overflow-y-auto scrollbar-hide">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-white/10 ${
                      value === opt ? `${activeColor.text} ${activeColor.bg}` : "text-white/70"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BrandMatcher() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMatch = async () => {
    if (!input.trim() || isLoading) return;
    setIsLoading(true);
    const response = await matchBrandToZone(input);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <div className="glass p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-full bg-accent-primary/20 flex items-center justify-center border border-accent-primary/30">
          <Search size={20} className="text-accent-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display tracking-tight text-white">Smart Brand Matcher</h3>
          <p className="text-[10px] uppercase tracking-luxury text-accent-primary opacity-80">AI Classification</p>
        </div>
      </div>

      <p className="text-foreground/60 text-sm mb-8 leading-relaxed">
        Describe your brand concept or target audience, and our AI will identify the most strategic "Theatre" within MoA for your flagship.
      </p>

      <div className="flex-1 space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. A high-end sustainable footwear brand focusing on tech-savvy Gen Z..."
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-accent-primary/50 transition-colors text-white placeholder:text-white/20 min-h-[120px] resize-none"
        />

        <button
          onClick={handleMatch}
          disabled={!input.trim() || isLoading}
          className="w-full h-14 rounded-xl bg-accent-primary flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale font-medium text-sm"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Find My Zone
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-white/5 border border-accent-primary/20 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-accent-primary" />
                <span className="text-[10px] uppercase tracking-luxury text-accent-primary">AI Suggestion</span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed italic">
                "{result}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ROIPredictor() {
  const [category, setCategory] = useState("Luxury Retail");
  const [size, setSize] = useState("Flagship");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await predictROI(category, size);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <div className="glass p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-full bg-accent-secondary/20 flex items-center justify-center border border-accent-secondary/30">
          <BarChart3 size={20} className="text-accent-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-display tracking-tight text-white">Dynamic ROI Predictor</h3>
          <p className="text-[10px] uppercase tracking-luxury text-accent-secondary opacity-80">Visionary Analytics</p>
        </div>
      </div>

      <p className="text-foreground/60 text-sm mb-8 leading-relaxed">
        Leverage MoA's 40 million annual guests. Select your category and scale to see your brand's potential impact.
      </p>

      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <CustomSelect
            label="Category"
            value={category}
            onChange={setCategory}
            options={["Luxury Retail", "Tech & Innovation", "Fine Dining", "Entertainment", "Boutique Concept"]}
          />
          <CustomSelect
            label="Business Scale"
            value={size}
            onChange={setSize}
            options={["Flagship (5k+ sq ft)", "Boutique (1k-5k sq ft)", "Pop-up / Concept", "Kiosk / Mini"]}
          />
        </div>

        <button
          onClick={handlePredict}
          disabled={isLoading}
          className="w-full h-14 rounded-xl bg-accent-secondary flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale font-medium text-sm text-bg-deep"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Predict Brand Impact
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-white/5 border border-accent-secondary/20 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-accent-secondary" />
                <span className="text-[10px] uppercase tracking-luxury text-accent-secondary">Visionary Prediction</span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed italic">
                "{result}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AIToolsSection() {
  return (
    <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6">Interactive Insights</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl mx-auto">
          Visionary Tools for <br />
          <span className="italic text-foreground/70">Modern Partners.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <BrandMatcher />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <ROIPredictor />
        </motion.div>
      </div>
    </section>
  );
}
