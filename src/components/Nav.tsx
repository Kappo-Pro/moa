import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Overview" },
  { to: "/leasing", label: "Leasing" },
  { to: "/events", label: "Events" },
  { to: "/partnerships", label: "Partnerships" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-8 py-6 flex items-center justify-between mix-blend-difference text-white">
        <Link
          to="/"
          className="font-display text-lg md:text-xl tracking-tight z-50"
          onClick={() => setIsOpen(false)}
        >
          Mall of America<span className="text-accent-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-luxury">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="opacity-70 hover:opacity-100 transition-opacity ease-cinematic [&.active]:opacity-100 [&.active]:text-accent-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="hidden md:block text-[11px] uppercase tracking-luxury opacity-80 hover:opacity-100 transition-opacity"
          >
            Inquire →
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 z-50 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden glass flex flex-col justify-center px-8 pt-20"
          >
            <nav className="flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display tracking-tight opacity-70 hover:opacity-100 hover:text-accent-primary transition-all [&.active]:opacity-100 [&.active]:text-accent-primary"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.1, duration: 0.4 }}
                className="mt-4 pt-8 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-luxury text-accent-primary font-medium"
                >
                  Inquire →
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-8 right-8 text-[10px] uppercase tracking-[0.3em] font-medium"
            >
              The Mall of America Experience
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
