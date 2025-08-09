"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-[var(--border)]">
      <div className="container-base h-16 flex items-center justify-between">
        {/* Logo + nom */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/nails-assets/logo.png"
            alt="Yaphé"
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight">Yaphé</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--primary)] transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link href="/reservation" className="btn btn-primary h-9 px-4 text-sm">
            Réserver
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-md border border-[var(--border)]"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition ${open && "translate-y-2 rotate-45"}`} />
            <span className={`block h-0.5 bg-current transition ${open && "opacity-0"}`} />
            <span className={`block h-0.5 bg-current transition ${open && "-translate-y-2 -rotate-45"}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white">
          <div className="container-base py-4 flex flex-col gap-4">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/reservation" onClick={() => setOpen(false)} className="btn btn-primary h-10">
              Réserver
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}