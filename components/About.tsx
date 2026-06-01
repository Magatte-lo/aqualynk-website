"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Economique et accessible",
    desc: "Materiel a moins de 15 000 FCFA pour un prototype complet",
  },
  {
    title: "Open source et personnalisable",
    desc: "Adaptable a toute exploitation, de la jardiniere aux grandes cultures",
  },
  {
    title: "Securise par design",
    desc: "Authentification JWT, donnees chiffrees, controle d'acces strict",
  },
];

export default function About() {
  return (
    <section id="apropos" className="py-32 px-6">
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
              A propos d'Aqualynk
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5">
            Une solution pensee
            <br />
            pour <em className="text-leaf-primary italic font-normal">l'agriculteur moderne</em>
          </h2>
          <p className="text-lg text-ink-soft">
            Ne d'un projet etudiant ambitieux, Aqualynk combine innovation IoT et expertise
            agronomique pour transformer votre quotidien.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-leaf-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-cream/95 backdrop-blur-md p-6 rounded-2xl">
              <div className="font-display text-4xl font-bold text-leaf-deep leading-none mb-1">
                2026
              </div>
              <div className="text-sm text-ink-soft">
                Projet de fin d'etude
                <br />
                en cours de validation
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-4xl font-semibold text-ink mb-6 tracking-tight">
              Notre <em className="text-leaf-primary italic font-normal">mission</em>
            </h3>
            <p className="text-lg text-ink-soft mb-5 leading-relaxed">
              L'agriculture represente <strong className="text-ink">70% de la consommation d'eau mondiale</strong>,
              dont une grande partie est gaspillee par un arrosage mal calibre. Nous croyons
              qu'il est temps de changer ca.
            </p>
            <p className="text-lg text-ink-soft mb-10 leading-relaxed">
              Aqualynk combine une <strong className="text-ink">application mobile intuitive</strong>,
              un <strong className="text-ink">capteur IoT autonome</strong> et un{" "}
              <strong className="text-ink">serveur intelligent</strong> pour offrir aux
              agriculteurs un controle total sur leur irrigation.
            </p>

            <ul className="space-y-4">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-4 pb-4 border-b border-line last:border-0">
                  <div className="w-8 h-8 rounded-lg bg-leaf-mist text-leaf-deep flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold text-ink mb-1">{feat.title}</div>
                    <div className="text-sm text-ink-mute">{feat.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}