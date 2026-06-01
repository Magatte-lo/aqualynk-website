"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Droplets, Thermometer, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-leaf-soft/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-water/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche : Texte */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-leaf-mist rounded-full mb-8">
            <span className="w-2 h-2 bg-leaf-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-leaf-deep uppercase tracking-widest">
              Systeme IoT - Made in Senegal
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-ink mb-7">
            L'irrigation <em className="text-leaf-primary font-normal italic">reinventee</em>
            <br />
            pour une agriculture <span className="text-leaf-primary">intelligente</span>
          </h1>

          <p className="text-lg text-ink-soft max-w-xl mb-10 leading-relaxed">
            Aqualynk surveille en temps reel l'humidite de vos cultures et declenche
            automatiquement l'arrosage au bon moment. Economisez jusqu'a 50% d'eau, sans effort.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#fonctionnalites" className="inline-flex items-center gap-2 px-7 py-4 bg-leaf-deep text-cream rounded-full text-base font-semibold hover:bg-leaf-primary transition-all">
              Decouvrir le systeme
              <ArrowRight className="w-5 h-5" />
            </a>

            <a href="#equipe" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-leaf-deep border-b-2 border-leaf-deep transition-all">
              <Play className="w-4 h-4" />
              Voir notre equipe
            </a>
          </div>
        </motion.div>

        {/* Colonne droite : Capture + cartes flottantes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center min-h-[600px]"
        >
          {/* Glow vert derrière la capture */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-leaf-primary/20 rounded-full scale-75" />

          {/* Carte flottante 1 - Humidité 0% */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-8 right-0 lg:-right-4 z-20 bg-white rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-leaf-mist flex items-center justify-center">
              <Droplets className="w-4 h-4 text-leaf-deep" />
            </div>
            <div>
              <div className="text-xs text-ink-mute font-medium">Humidite</div>
              <div className="font-display text-base font-bold text-ink">0%</div>
            </div>
          </motion.div>

          {/* Carte flottante 2 - Température 0°C */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-20 left-0 lg:-left-4 z-20 bg-white rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-sun/15 flex items-center justify-center">
              <Thermometer className="w-4 h-4 text-sun" />
            </div>
            <div>
              <div className="text-xs text-ink-mute font-medium">Temperature</div>
              <div className="font-display text-base font-bold text-ink">0 C</div>
            </div>
          </motion.div>

          {/* Carte flottante 3 - Pompe ACTIVE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 0.8 }}
            className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-8 z-20 bg-leaf-deep text-cream rounded-2xl px-4 py-3 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-leaf-soft rounded-full animate-pulse" />
              <div className="text-[10px] uppercase tracking-widest opacity-80">Pompe</div>
            </div>
            <div className="font-display text-base font-bold">ACTIVE</div>
          </motion.div>

          {/* Capture seule (sans mockup iPhone) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative w-[280px] h-[580px] rounded-[40px] overflow-hidden shadow-2xl shadow-leaf-deep/40"
          >
            <Image
              src="/screens/dashboard1.jpg"
              alt="Application Aqualynk - Tableau de bord"
              fill
              className="object-cover object-top"
              priority
              sizes="280px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}