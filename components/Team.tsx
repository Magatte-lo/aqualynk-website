"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Yacine Mbaye",
    role: "Responsable finance et gestion de projet",
    bio: "Conception,.",
    photo: "/team/membre1.jpg",
    email: "bmd@aqualynk.sn",
  },
  {
    name: "Fanta Diallo",
    role: "Backend IoT",
    bio: "API Django, integration ESP32 et capteurs.",
    photo: "/team/membre2.jpg",
    email: "membre2@aqualynk.sn",
  },
  {
    name: "Aissata Toure ",
    role: "UI UX Designer",
    bio: "Design d'interface et identite visuelle.",
    photo: "/team/membre3.jpg",
    email: "membre3@aqualynk.sn",
  },
  {
    name: "Adja Hawa Cisse",
    role: "Developpeur Mobile",
    bio: "Developpement Flutter et animations modernes.",
    photo: "/team/membre4.jpg",
    email: "membre4@aqualynk.sn",
  },
  {
    name: "Pape Magatte Lo",
    role: "Architecture systeme",
    bio: "Conception base de donnees et architecture API.",
    photo: "/team/membre5.jpg",
    email: "membre5@aqualynk.sn",
  },
  {
    name: "Rokhaya Diouf",
    role: "Tests et QA",
    bio: "Tests unitaires, integration et qualite logicielle.",
    photo: "/team/membre6.jpg",
    email: "membre6@aqualynk.sn",
  },
  {
    name: "Arame Gningue",
    role: "Documentation",
    bio: "Redaction technique, rapports et presentations.",
    photo: "/team/membre7.jpg",
    email: "membre7@aqualynk.sn",
  },
  {
    name: "Seydina Mouhamed Ndiaye",
    role: "Communication",
    bio: "Marketing, reseaux sociaux et relation client.",
    photo: "/team/membre8.jpg",
    email: "membre8@aqualynk.sn",
  },
];

export default function Team() {
  return (
    <section id="equipe" className="py-32 px-6">
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
              L'equipe Aqualynk
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5">
            Les{" "}
            <em className="text-leaf-primary italic font-normal">
              cerveaux
            </em>{" "}
            derriere le projet
          </h2>

          <p className="text-lg text-ink-soft">
            Une equipe pluridisciplinaire de 8 etudiants passionnes par
            l'innovation et l'agriculture durable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group bg-bone border border-line rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-leaf-mist to-leaf-soft">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-leaf-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-3 left-3 right-3 flex justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-leaf-deep hover:bg-leaf-primary hover:text-cream transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold text-ink mb-1 tracking-tight">
                  {member.name}
                </h3>

                <div className="text-[10px] font-semibold text-leaf-primary uppercase tracking-widest mb-3">
                  {member.role}
                </div>

                <p className="text-xs text-ink-soft leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}