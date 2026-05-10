import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ClientOnly } from "../ClientOnly";
import { VenueScene } from "../three/VenueScene";

const opportunities = [
  { kpi: "1.2M", label: "Atrium impressions / month", note: "Naming rights on the Rotunda — the most filmed indoor space in Minnesota." },
  { kpi: "320+", label: "Annual events", note: "Concerts, premieres, brand activations and televised moments." },
  { kpi: "9", label: "Activation zones", note: "From the North Atrium runway to the Nickelodeon Universe stage." },
];

export function SponsorshipSection() {
  return (
    <section id="sponsorship" className="relative py-32 md:py-48 px-8 md:px-16 noise overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-0 opacity-80">
        <ClientOnly>
          <VenueScene />
        </ClientOnly>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-deep/40 to-bg-deep -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
        >
          03 — Sponsorship & events
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2 }}
          className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-5xl text-balance"
        >
          Own the spotlight.<br />
          <span className="italic text-accent-secondary">Light up the country.</span>
        </motion.h2>

        <p className="mt-8 max-w-xl text-foreground/70 leading-relaxed">
          Nine programmable activation zones. Year-round programming.
          One audience that already shows up — wired, charged and ready to share.
        </p>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-border">
          {opportunities.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.12 }}
              className="bg-bg-deep/80 backdrop-blur-md p-10 md:p-12 relative group"
            >
              <div className="font-display text-6xl md:text-7xl text-accent-primary tracking-tight">{o.kpi}</div>
              <div className="mt-4 text-[11px] uppercase tracking-luxury text-foreground/60">{o.label}</div>
              <p className="mt-4 text-foreground/70 leading-relaxed">{o.note}</p>
              <div className="absolute bottom-0 left-0 h-px bg-accent-primary w-0 group-hover:w-full transition-[width] duration-700 ease-cinematic" />
            </motion.div>
          ))}
        </div>


        <div id="cta" className="mt-32 md:mt-48 grid md:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.4 }}
            className="md:col-span-8"
          >
            <p className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6">Partner with us</p>
            <h3 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight text-balance">
              Let&apos;s build the<br />
              <span className="italic shimmer-text">next chapter.</span>
            </h3>
            <p className="mt-8 max-w-lg text-foreground/70 leading-relaxed">
              Leasing, sponsorship, brand experiences and event production —
              one team, one address, infinite possibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-3"
          >
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-accent-primary text-primary-foreground px-8 py-5 text-[11px] uppercase tracking-luxury flex items-center justify-between"
            >
              <span className="relative z-10">Leasing inquiry</span>
              <span className="relative z-10">→</span>
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-cinematic" />
            </Link>
            <Link
              to="/contact"
              className="group glass px-8 py-5 text-[11px] uppercase tracking-luxury flex items-center justify-between text-foreground/90 hover:text-accent-primary transition-colors"
            >
              Sponsorship & events <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="group glass px-8 py-5 text-[11px] uppercase tracking-luxury flex items-center justify-between text-foreground/90 hover:text-accent-primary transition-colors"
            >
              Production booking <span>→</span>
            </Link>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
