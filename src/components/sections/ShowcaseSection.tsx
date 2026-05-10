import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import moa_retail from "@/assets/moa/moa1.jpg";
import moa_lifestyle from "@/assets/moa/moa5.jpg";
import moa_entertainment from "@/assets/moa/moa6.jpg";

const tiles = [
  {
    img: moa_retail,
    eyebrow: "Retail",
    title: "Where flagships become icons.",
    body: "From debut U.S. concepts to global luxury houses. MoA stages a platform that converts massive foot traffic into cultural relevance.",
    tag: "520+ brands",
    link: "/leasing",
  },
  {
    img: moa_lifestyle,
    eyebrow: "Lifestyle & Dining",
    title: "An appetite for the extraordinary.",
    body: "50+ restaurants, from 'Culinary on North' fast-casual to upscale full-service dining. Dwell time that redefines the guest experience.",
    tag: "50+ venues",
    link: "/leasing",
  },
  {
    img: moa_entertainment,
    eyebrow: "Entertainment",
    title: "The heartbeat of the destination.",
    body: "400+ annual events in the Rotunda, Nickelodeon Universe, and SEA LIFE. Differentiators that no competitor can replicate.",
    tag: "8 attractions",
    link: "/events",
  },
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-32 md:py-48 px-8 md:px-16 noise overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
        >
          02 — The showcase
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2 }}
          className="font-display text-5xl md:text-7xl leading-[1] tracking-tight max-w-4xl text-balance mb-20"
        >
          Three theatres,<br />
          <span className="italic text-foreground/70">one address.</span>
        </motion.h2>

        <div className="space-y-32 md:space-y-48">
          {tiles.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="md:col-span-7 [direction:ltr]">
                <div className="relative group overflow-hidden rounded-sm">
                  <motion.img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    className="w-full aspect-[4/5] md:aspect-[16/11] object-cover"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-bg-deep/30 pointer-events-none" />
                  <div className="absolute top-6 left-6 text-[10px] uppercase tracking-luxury glass px-3 py-1.5 rounded-full">
                    {t.tag}
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 [direction:ltr]">
                <p className="text-[11px] uppercase tracking-luxury text-accent-secondary mb-4">{t.eyebrow}</p>
                <h3 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
                  {t.title}
                </h3>
                <p className="mt-6 text-foreground/70 leading-relaxed text-base max-w-md text-pretty">
                  {t.body}
                </p>
                <Link 
                  to={t.link}
                  className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-luxury text-foreground/60 group cursor-pointer"
                >
                  <span className="h-px w-10 bg-accent-primary transition-all group-hover:w-16" />
                  Explore
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
