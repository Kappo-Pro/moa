import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import moa_exterior from "@/assets/moa/moa2.jpg";
import moa_partnership from "@/assets/moa/moa10.jpg";

export const Route = createFileRoute("/partnerships")({
  component: PartnershipsPage,
});

function PartnershipsPage() {
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
          <img src={moa_partnership} alt="Partnerships at MoA" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-bg-deep/20 to-bg-deep" />
        </motion.div>
        
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
          >
            Sponsorship & Partnerships
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-display text-6xl md:text-8xl tracking-tight"
          >
            Collaborate With <br />
            <span className="italic text-foreground/70">The Extraordinary.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
              An Ecosystem <br />of Influence.
            </h2>
            <p className="text-foreground/70 leading-relaxed text-lg mb-12">
              Align your brand with the most visited destination in the United States. Our partnership ecosystem includes integrated digital signage, naming rights, experiential activations, and direct access to 40 million annual guests.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="size-12 shrink-0 border border-accent-primary/30 flex items-center justify-center font-display text-accent-primary">01</div>
                <div>
                  <h3 className="font-display text-xl mb-2">Hospitality Excellence</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Directly connected to JW Marriott and Radisson Blu, offering 842 luxury rooms and seamless stay-and-play packages.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="size-12 shrink-0 border border-accent-primary/30 flex items-center justify-center font-display text-accent-primary">02</div>
                <div>
                  <h3 className="font-display text-xl mb-2">Digital Dominance</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    A property-wide digital network that delivers high-impact impressions at every touchpoint of the guest journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={moa_exterior} alt="MoA Exterior" className="size-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-8">Join the Elite.</h2>
          <p className="text-foreground/70 text-lg mb-12">
            We work with global leaders to create moments that matter. Inquire today to explore our partnership tiers.
          </p>
          <button className="px-12 py-5 bg-accent-primary text-bg-deep uppercase tracking-luxury text-[11px] hover:scale-105 transition-transform duration-300">
            Inquire Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
