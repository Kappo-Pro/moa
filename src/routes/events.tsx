import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import moa_events from "@/assets/moa/moa14.jpg";
import moa_waterpark from "@/assets/moa/moa11.jpg";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <main className="relative bg-bg-deep text-foreground antialiased">
      <SmoothScroll />
      <Nav />
      
      <section className="relative h-[60svh] flex flex-col justify-end pb-24 px-8 md:px-16 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease }}
          className="absolute inset-0"
        >
          <img src={moa_events} alt="Events at MoA" className="size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-bg-deep/60 via-bg-deep/20 to-bg-deep" />
        </motion.div>
        
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
          >
            Events & Entertainment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-display text-6xl md:text-8xl tracking-tight"
          >
            A Global Platform <br />
            <span className="italic text-foreground/70">for Performance.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <img src={moa_waterpark} alt="Nickelodeon Universe" className="size-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
              400+ Annual Events. <br />Infinite Possibilities.
            </h2>
            <p className="text-foreground/70 leading-relaxed text-lg mb-12">
              From the Huntington Bank Rotunda to our massive ballrooms, we host everything from celebrity book signings and movie premieres to product launches and corporate galas. Our venues are designed to scale with your ambition.
            </p>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-foreground/80">
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent-primary rounded-full"/> Huntington Bank Rotunda</li>
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent-primary rounded-full"/> Diamond Ballroom (1,000+ Capacity)</li>
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent-primary rounded-full"/> Nickelodeon Universe Private Buyouts</li>
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent-primary rounded-full"/> Parkview Meeting & Event Center</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-white/10 p-10">
            <div className="text-[10px] uppercase tracking-luxury text-accent-primary mb-4">Venue Capacity</div>
            <div className="text-5xl font-display mb-6">2,000</div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Our largest dedicated meeting rooms can accommodate up to 2,000 guests for conventions and expos.
            </p>
          </div>
          <div className="border border-white/10 p-10">
            <div className="text-[10px] uppercase tracking-luxury text-accent-primary mb-4">Total Space</div>
            <div className="text-5xl font-display mb-6">83k</div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Over 83,000 square feet of dedicated meeting and event facilities across the complex.
            </p>
          </div>
          <div className="border border-white/10 p-10">
            <div className="text-[10px] uppercase tracking-luxury text-accent-primary mb-4">Entertainment</div>
            <div className="text-5xl font-display mb-6">8</div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              World-class attractions including FlyOver America and SEA LIFE Aquarium for unique off-sites.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
