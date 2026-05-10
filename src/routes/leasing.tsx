import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import moa_retail from "@/assets/moa/moa4.jpg";
import moa_luxury from "@/assets/moa/moa8.jpg";

export const Route = createFileRoute("/leasing")({
  component: LeasingPage,
});

function LeasingPage() {
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
          <img src={moa_retail} alt="Retail at MoA" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-bg-deep/20 to-bg-deep" />
        </motion.div>
        
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
          >
            Leasing & Retail
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-display text-6xl md:text-8xl tracking-tight"
          >
            Where Brands <br />
            <span className="italic text-foreground/70">Become Icons.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
            The World&apos;s Largest <br />Laboratory of Retail.
          </h2>
          <p className="text-foreground/70 leading-relaxed text-lg mb-12">
            With 5.6 million square feet of space and over 520 world-class brands, Mall of America is more than a shopping center—it&apos;s a global stage. From debut U.S. concepts to luxury flagships, we provide the visibility and foot traffic that converts visitors into lifelong advocates.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-display text-accent-primary">40M+</div>
              <div className="text-[10px] uppercase tracking-luxury text-foreground/50 mt-2">Annual Guests</div>
            </div>
            <div>
              <div className="text-3xl font-display text-accent-primary">520+</div>
              <div className="text-[10px] uppercase tracking-luxury text-foreground/50 mt-2">Retail Partners</div>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <img src={moa_luxury} alt="Luxury at MoA" className="size-full object-cover" />
        </div>
      </section>

      <section className="py-32 px-8 md:px-16 bg-white/5 noise">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-20 text-center">Dining & Lifestyle</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="glass p-8 rounded-sm">
              <h3 className="font-display text-2xl mb-4">Culinary on North</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                An elevated fast-casual experience featuring Shake Shack, Naf Naf Grill, and floor-to-ceiling airport views.
              </p>
            </div>
            <div className="glass p-8 rounded-sm">
              <h3 className="font-display text-2xl mb-4">Themed Excellence</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Iconic destinations like Rainforest Cafe and Margaritaville that drive massive dwell time.
              </p>
            </div>
            <div className="glass p-8 rounded-sm">
              <h3 className="font-display text-2xl mb-4">Fine Dining</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Upscale concepts including Twin City Grill and Cedar + Stone, Urban Table for the sophisticated palate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
