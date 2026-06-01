"use client";

import { useEffect, useState } from "react";
import { Droplets, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#apropos", label: "A propos" },
  { href: "/#fonctionnalites", label: "Fonctionnalites" },
  { href: "/#equipe", label: "L'equipe" },
  { href: "/#temoignages", label: "Temoignages" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl transition-all ${scrolled ? "bg-cream/80 border-b border-line" : "bg-cream/60"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-leaf-medium to-leaf-deep flex items-center justify-center">
            <Droplets className="w-5 h-5 text-cream" />
          </div>
          <span className="font-display text-2xl font-bold text-leaf-deep">Aqualynk</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-ink-soft hover:text-leaf-deep transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/contact" className="hidden lg:inline-flex px-5 py-2.5 bg-leaf-deep text-cream rounded-full text-sm font-semibold hover:bg-leaf-primary transition-all">
          Nous contacter
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-leaf-mist">
          {mobileOpen ? <X className="w-5 h-5 text-leaf-deep" /> : <Menu className="w-5 h-5 text-leaf-deep" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden">
            <ul className="flex flex-col gap-1 pt-6 pb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-ink-soft hover:bg-leaf-mist">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 bg-leaf-deep text-cream rounded-xl text-base font-semibold text-center">
                  Nous contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}