import { motion } from "framer-motion";
import hero_video from "@/assets/moa/moa_hero_crop.mp4";
import { ClientOnly } from "../ClientOnly";
import { HeroScene } from "../three/HeroScene";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="hero" className="relative h-svh w-full overflow-hidden noise">

      <motion.div
        initial={{ scale: 1.18, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 3, ease }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-screen h-full object-fill"
        >
          <source src={hero_video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-bg-deep/60 via-bg-deep/20 to-bg-deep" />
      </motion.div>


      <div className="absolute inset-0 mix-blend-screen">
        <ClientOnly>
          <HeroScene />
        </ClientOnly>
      </div>


      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease }}
          className="text-[11px] uppercase tracking-luxury text-accent-primary/90 mb-8"
        >
          A sales experience · Bloomington, MN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.6, ease }}
          className="font-display text-[14vw] md:text-[10vw] leading-[0.88] tracking-[-0.04em] text-balance"
        >
          The Mall<br />
          <span className="italic shimmer-text">of America.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.4 }}
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-6xl"
        >
          <p className="text-pretty text-foreground/70 text-base md:text-lg max-w-md leading-relaxed">
            5.6 million square feet. 40 million annual guests.
            The world's most iconic stage where brands become legends.
          </p>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-luxury text-foreground/60">
            <span className="size-1.5 rounded-full bg-accent-primary pulse-soft" />
            Scroll to enter
          </div>
        </motion.div>
      </div>


      <div className="absolute inset-x-0 bottom-0 h-40 bg-fade-bottom z-10 pointer-events-none" />
    </section>
  );
}
