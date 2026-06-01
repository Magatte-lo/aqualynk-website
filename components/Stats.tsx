"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50",
    suffix: "%",
    label: "d'economies d'eau\nen moyenne",
  },
  {
    value: "24",
    suffix: "/7",
    label: "surveillance\ncontinue temps reel",
  },
  {
    value: "5",
    suffix: "s",
    label: "rafraichissement\ndes donnees",
  },
  {
    value: "0",
    suffix: "F",
    label: "cout supplementaire\npour l'utilisateur",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-leaf-deep text-cream py-20 px-6 overflow-hidden">
      <div className="absolute -top-1/2 -right-10 w-[600px] h-[600px] bg-leaf-soft/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-1/2 -left-10 w-[500px] h-[500px] bg-water/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-6xl lg:text-7xl font-bold text-leaf-soft leading-none mb-3 tracking-tight">
              {stat.value}
              <span className="text-4xl lg:text-5xl">{stat.suffix}</span>
            </div>
            <div className="text-sm text-cream/80 leading-relaxed whitespace-pre-line">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}