import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import moa_contact from "@/assets/moa/moa10.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <main className="relative bg-bg-deep text-foreground antialiased">
      <SmoothScroll />
      <Nav />
      
      <section className="relative min-h-svh flex flex-col justify-center items-center px-8 md:px-16 overflow-hidden py-32">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2, ease }}
          className="absolute inset-0"
        >
          <img src={moa_contact} alt="Contact MoA" className="size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-bg-deep/80 via-bg-deep/40 to-bg-deep" />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] uppercase tracking-luxury text-accent-primary mb-6"
          >
            Concierge & Inquiries
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-display text-5xl md:text-8xl tracking-tight mb-12"
          >
            Start the <br />
            <span className="italic text-foreground/70">Conversation.</span>
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Leasing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass p-10 text-left border-l border-accent-primary"
            >
              <h3 className="font-display text-2xl mb-6">Retail Leasing</h3>
              <div className="space-y-4 text-[11px] uppercase tracking-luxury text-foreground/70">
                <div className="flex flex-col gap-1">
                  <span className="text-accent-primary/50">Direct Line</span>
                  <a href="tel:952.883.8699" className="hover:text-accent-primary transition-colors text-base tracking-normal normal-case font-medium">952.883.8699</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-accent-primary/50">Inquiry Email</span>
                  <a href="mailto:lease.inquiry@moa.net" className="hover:text-accent-primary transition-colors text-base tracking-normal normal-case font-medium">lease.inquiry@moa.net</a>
                </div>
              </div>
            </motion.div>

            {/* Partnerships Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="glass p-10 text-left border-l border-accent-secondary"
            >
              <h3 className="font-display text-2xl mb-6">Partnerships</h3>
              <div className="space-y-4 text-[11px] uppercase tracking-luxury text-foreground/70">
                <div className="flex flex-col gap-1">
                  <span className="text-accent-secondary/50">Natasha Freimark</span>
                  <a href="tel:952.456.1104" className="hover:text-accent-secondary transition-colors text-base tracking-normal normal-case font-medium">952.456.1104</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-accent-secondary/50">VP Partnership Sales</span>
                  <a href="mailto:natasha.freimark@moa.net" className="hover:text-accent-secondary transition-colors text-base tracking-normal normal-case font-medium">natasha.freimark@moa.net</a>
                </div>
              </div>
            </motion.div>

            {/* Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="glass p-10 text-left border-l border-white/20"
            >
              <h3 className="font-display text-2xl mb-6">Event Production</h3>
              <div className="space-y-4 text-[11px] uppercase tracking-luxury text-foreground/70">
                <div className="flex flex-col gap-1">
                  <span className="text-white/30">Group Sales</span>
                  <a href="tel:952.883.8809" className="hover:text-white transition-colors text-base tracking-normal normal-case font-medium">952.883.8809</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white/30">Venue Booking</span>
                  <a href="mailto:groupsales@mallofamerica.com" className="hover:text-white transition-colors text-base tracking-normal normal-case font-medium">groupsales@moa.net</a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="mt-20 pt-20 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] uppercase tracking-luxury text-foreground/40"
          >
            <div>
              <div className="text-foreground/60 mb-2">Location</div>
              Bloomington, MN
            </div>
            <div>
              <div className="text-foreground/60 mb-2">Phone</div>
              952.883.8800
            </div>
            <div>
              <div className="text-foreground/60 mb-2">Press</div>
              press@moa.net
            </div>
            <div>
              <div className="text-foreground/60 mb-2">Social</div>
              @mallofamerica
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
