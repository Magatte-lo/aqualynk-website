"use client";

import { motion } from "framer-motion";
import { Droplets, Settings2, Bell, BarChart3, Sliders, Lock } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Surveillance temps reel",
    desc: "Mesurez l'humidite du sol et la temperature a la seconde pres grace au capteur ESP32 connecte en WiFi.",
  },
  {
    icon: Settings2,
    title: "Arrosage automatique",
    desc: "Definissez votre seuil d'humidite : Aqualynk active la pompe automatiquement quand le sol devient trop sec.",
  },
  {
    icon: Bell,
    title: "Alertes intelligentes",
    desc: "Notifications push pour sol trop sec, pompe activee/arretee, ou perte de connexion. Anti-spam integre.",
  },
  {
    icon: BarChart3,
    title: "Tableau de bord visuel",
    desc: "Jauge circulaire, statistiques temps reel et indicateurs colores. Visualisez l'etat d'un coup d'oeil.",
  },
  {
    icon: Sliders,
    title: "Mode manuel ou auto",
    desc: "Basculez entre controle automatique (par seuil) ou manuel (depuis l'app) selon vos besoins.",
  },
  {
    icon: Lock,
    title: "Securite JWT",
    desc: "Authentification par jeton JSON Web Token, stockage local securise et communications chiffrees.",
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-32 px-6 bg-bone">
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
              Fonctionnalites
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5">
            Tout ce dont vous avez besoin,
            <br />
            dans <em className="text-leaf-primary italic font-normal">une seule app</em>
          </h2>
          <p className="text-lg text-ink-soft">
            Une suite complete d'outils pour gerer votre systeme d'irrigation a distance, en temps reel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-3xl p-9 border border-line hover:border-transparent hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-leaf-primary to-leaf-medium scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 rounded-2xl bg-leaf-mist text-leaf-deep flex items-center justify-center mb-6 group-hover:bg-leaf-primary group-hover:text-cream group-hover:rotate-[-5deg] group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>

                <h3 className="font-display text-2xl font-semibold text-ink mb-3 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}