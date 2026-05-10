import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2.2, bounce: 0 });
  const text = useTransform(spring, (v) => v.toFixed(decimals) + suffix);
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);
  return (
    <motion.span ref={ref}>
      <motion.span>{text}</motion.span>
    </motion.span>
  );
}

const stats = [
  { value: 40, suffix: "M+", label: "Annual visitors", note: "More than Disney World, Graceland & the Grand Canyon — combined." },
  { value: 5.6, suffix: "M", decimals: 1, label: "Square feet", note: "The largest retail and entertainment complex in the Western Hemisphere." },
  { value: 520, suffix: "+", label: "Brands & flagships", note: "Anchors, ateliers, debut concepts and the next icons of retail." },
  { value: 60, suffix: "%", label: "Tourist traffic", note: "Drawing audiences from every U.S. state and 50+ countries each year." },
];

export function WhySection() {
  return (
    <section id="why" className="relative py-32 md:py-48 px-8 md:px-16 noise">

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
        >
          01 — Why this property
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2 }}
          className="font-display text-5xl md:text-7xl leading-[1] tracking-tight max-w-4xl text-balance"
        >
          A nation arrives,<br />
          <span className="italic text-foreground/70">every single day.</span>
        </motion.h2>


        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-deep p-10 md:p-14 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-accent-secondary opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700" />
              <div className="relative">
                <div className="font-display text-7xl md:text-8xl tracking-tight text-accent-primary leading-none">
                  <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-6 text-[11px] uppercase tracking-luxury text-foreground/60">{s.label}</div>
                <p className="mt-4 text-foreground/70 text-base max-w-md leading-relaxed">{s.note}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mt-24 grid md:grid-cols-3 gap-12 items-end"
        >
          <div className="md:col-span-2">
            <p className="font-display text-3xl md:text-5xl leading-tight tracking-tight text-pretty">
              Within a 2-hour flight: <span className="italic text-accent-secondary">75% of the U.S. population.</span>
            </p>
          </div>
          <div className="text-foreground/60 leading-relaxed text-sm">
            Direct connection to MSP International, the only U.S. mall with its own light-rail station to a major airport. The audience already commutes here.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
