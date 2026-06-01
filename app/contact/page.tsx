"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowLeft,
  CheckCircle2,
  Droplets,
  Sparkles,
} from "lucide-react";
import { postContact } from "@/lib/api";

export default function ContactPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.first_name || !form.last_name || !form.email || !form.subject || !form.message) {
      setError("Merci de remplir tous les champs");
      return;
    }

    setSubmitting(true);
    const ok = await postContact(form);
    setSubmitting(false);

    if (ok) {
      setSuccess(true);
      setForm({ first_name: "", last_name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 8000);
    } else {
      setError("Une erreur est survenue. Verifiez que le serveur est lance.");
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* === NAVBAR SIMPLE === */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-cream/80 border-b border-line">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-leaf-medium to-leaf-deep flex items-center justify-center">
              <Droplets className="w-5 h-5 text-cream" />
            </div>
            <span className="font-display text-2xl font-bold text-leaf-deep">Aqualynk</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-leaf-deep hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
        </div>
      </nav>

      {/* === HERO === */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-leaf-soft/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-water/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-leaf-mist rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-leaf-primary" />
              <span className="text-xs font-semibold text-leaf-deep uppercase tracking-widest">
                Parlons de votre projet
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-ink mb-6">
              Une <em className="text-leaf-primary italic font-normal">question</em> ?
              <br />
              Parlons-en
            </h1>

            <p className="text-lg sm:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
              Que vous soyez agriculteur, partenaire potentiel ou simplement curieux,
              nous serons ravis d'echanger avec vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === CONTACT GRID === */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* COLONNE GAUCHE : INFOS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-leaf-deep text-cream rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-leaf-soft/15 rounded-full blur-3xl" />

              <h3 className="font-display text-2xl font-semibold mb-6 relative z-10">
                Restons en <em className="text-leaf-soft italic font-normal">contact</em>
              </h3>

              <div className="space-y-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-leaf-soft/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-leaf-soft" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 uppercase tracking-widest mb-1">
                      Email
                    </div>
                    <div className="font-semibold">contact@aqualynk.sn</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-leaf-soft/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-leaf-soft" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 uppercase tracking-widest mb-1">
                      Telephone
                    </div>
                    <div className="font-semibold">+221 77 677 27 08</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-leaf-soft/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-leaf-soft" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 uppercase tracking-widest mb-1">
                      Localisation
                    </div>
                    <div className="font-semibold">Dakar - Senegal</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-leaf-soft/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-leaf-soft" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/60 uppercase tracking-widest mb-1">
                      Disponibilite
                    </div>
                    <div className="font-semibold">Lun - Ven, 9h - 18h</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-line">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-leaf-mist flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-leaf-deep" />
                </div>
                <div className="font-display text-lg font-bold text-ink">
                  Reponse rapide
                </div>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">
                Notre equipe lit chaque message avec attention et repond sous 24 a 48 heures
                ouvrees. Pour les questions urgentes, privilegiez le telephone.
              </p>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-line shadow-xl space-y-5"
          >
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink mb-2 tracking-tight">
                Envoyez-nous un <em className="text-leaf-primary italic font-normal">message</em>
              </h2>
              <p className="text-sm text-ink-soft">
                Remplissez le formulaire ci-dessous, on vous repond rapidement.
              </p>
            </div>

            {success && (
              <div className="bg-leaf-mist border border-leaf-primary/30 text-leaf-deep p-4 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Message envoye !</div>
                  <div className="text-sm">Notre equipe vous repondra dans les plus brefs delais.</div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink-mute uppercase tracking-widest mb-2">
                  Prenom
                </label>
                <input
                  type="text"
                  value={form.first_name}
                  onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                  className="w-full bg-cream border border-line px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-mute uppercase tracking-widest mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  className="w-full bg-cream border border-line px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-mute uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-cream border border-line px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-mute uppercase tracking-widest mb-2">
                Sujet
              </label>
              <input
                type="text"
                placeholder="Ex: Demande de demonstration"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-cream border border-line px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-mute uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                placeholder="Decrivez votre demande en details..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full bg-cream border border-line px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-primary transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-leaf-deep text-cream py-4 rounded-xl font-bold text-sm hover:bg-leaf-primary hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </>
              )}
            </button>

            <p className="text-xs text-ink-mute text-center">
              Vos donnees sont confidentielles et ne seront jamais partagees.
            </p>
          </motion.form>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-ink text-cream py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-leaf-medium to-leaf-deep flex items-center justify-center">
              <Droplets className="w-5 h-5 text-cream" />
            </div>
            <span className="font-display text-2xl font-bold">Aqualynk</span>
          </Link>

          <div className="text-sm text-cream/60">
            (c) 2026 Aqualynk - Projet de fin d'etude
          </div>

          <div className="text-sm text-cream/60">
            Concu avec passion au Senegal
          </div>
        </div>
      </footer>
    </main>
  );
}