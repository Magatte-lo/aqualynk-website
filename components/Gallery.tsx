"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  {
    label: "Tableau de bord",
    description: "Vue d'ensemble en temps réel",
    image: "/screens/dashboard.jpg",
  },
  {
    label: "Controle pompe",
    description: "Activation et seuils",
    image: "/screens/control.jpg",
  },
  {
    label: "Notifications",
    description: "Alertes intelligentes",
    image: "/screens/notifications.jpg",
  },
  {
    label: "Parametres",
    description: "Personnalisation",
    image: "/screens/settings.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="py-32 px-6 bg-bone">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 bg-leaf-mist rounded-full mb-5">
            <span className="text-xs font-semibold text-leaf-primary uppercase tracking-widest">
              Galerie de l'application
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5">
            Decouvrez
            <br />
            l'<em className="text-leaf-primary italic font-normal">interface</em>
          </h2>
          <p className="text-lg text-ink-soft">
            Un design moderne et intuitif, pense pour une utilisation quotidienne sur le terrain.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Mockup iPhone */}
              <div className="relative mb-5 transition-all duration-500 group-hover:-translate-y-3">
                <div className="relative bg-ink rounded-[2.5rem] p-2.5 shadow-2xl mx-auto max-w-[240px]">
                  {/* Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink rounded-b-2xl z-10" />

                  {/* Screen */}
                  <div className="relative aspect-[9/19.5] bg-leaf-mist rounded-[2rem] overflow-hidden">
                    <Image
                      src={screen.image}
                      alt={screen.label}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 pointer-events-none" />
                  </div>
                </div>

                {/* Glow effet au hover */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-leaf-primary/30 rounded-full" />
              </div>

              {/* Légende */}
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-ink mb-1 tracking-tight">
                  {screen.label}
                </h3>
                <p className="text-sm text-ink-soft">
                  {screen.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note en bas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-ink-mute italic">
            Captures d'ecran de l'application Flutter Aqualynk en cours de developpement
          </p>
        </motion.div>
      </div>
    </section>
  );
}