import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Overview" },
  { to: "/leasing", label: "Leasing" },
  { to: "/events", label: "Events" },
  { to: "/partnerships", label: "Partnerships" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white">
      <Link to="/" className="font-display text-lg tracking-tight">
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
      <Link
        to="/contact"
        className="text-[11px] uppercase tracking-luxury opacity-80 hover:opacity-100 transition-opacity"
      >
        Inquire →
      </Link>
    </header>
  );
}
