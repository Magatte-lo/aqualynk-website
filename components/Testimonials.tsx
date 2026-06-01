"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { fetchComments, postComment, type Comment } from "@/lib/api";

const fallbackTestimonials: Comment[] = [
  {
    id: 1,
    name: "Aliou Diop",
    role: "Maraicher - Thies",
    message: "Une vraie revolution pour mon maraichage. Je n'ai plus besoin de me lever a 5h pour verifier l'arrosage de mes tomates !",
    rate: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Fatou Mbaye",
    role: "Productrice - Dakar",
    message: "L'application est tres simple a utiliser, meme pour quelqu'un qui n'est pas technicien. Les alertes me sauvent du temps.",
    rate: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Modou Sarr",
    role: "Agriculteur bio - Saint-Louis",
    message: "J'economise vraiment beaucoup d'eau et mes cultures sont plus saines. Hate de voir l'evolution du projet !",
    rate: 4,
    created_at: new Date().toISOString(),
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Comment[]>(fallbackTestimonials);
  const [form, setForm] = useState({ name: "", role: "", email: "", message: "" });
  const [rate, setRate] = useState(5);
  const [hoverRate, setHoverRate] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchComments().then((data) => {
      if (data.length > 0) setTestimonials(data);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.message || !form.email) {
      setError("Merci de remplir tous les champs obligatoires");
      return;
    }

    setSubmitting(true);
    const ok = await postComment({ ...form, rate });
    setSubmitting(false);

    if (ok) {
      setSuccess(true);
      setForm({ name: "", role: "", email: "", message: "" });
      setRate(5);
      setTimeout(() => setSuccess(false), 6000);
    } else {
      setError("Une erreur est survenue. Verifiez que le serveur est lance.");
    }
  }

  return (
    <section id="temoignages" className="py-32 px-6">
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
              Avis des agriculteurs
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-ink leading-tight tracking-tight mb-5">
            Ce que pensent ceux qui<br />
            ont <em className="text-leaf-primary italic font-normal">teste Aqualynk</em>
          </h2>
          <p className="text-lg text-ink-soft">
            Des retours sinceres d'agriculteurs et de maraichers qui ont experimente notre prototype.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => {
            const initials = t.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-bone border border-line rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="font-display text-6xl text-leaf-soft leading-none -mb-3">&quot;</div>
                <div className="flex gap-1 mb-4 text-sun">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`w-4 h-4 ${idx < t.rate ? "fill-current" : "fill-transparent"}`} />
                  ))}
                </div>
                <p className="font-display italic text-ink leading-relaxed mb-6">{t.message}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-line">
                  <div className="w-12 h-12 rounded-full bg-leaf-primary flex items-center justify-center font-display font-bold text-cream">
                    {initials}
                  </div>
                  <div>
                    <div className="font-bold text-ink">{t.name}</div>
                    <div className="text-xs text-ink-mute">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-leaf-deep text-cream rounded-3xl p-10 lg:p-14 grid lg:grid-cols-2 gap-12 items-center overflow-hidden"
        >
          <div className="absolute -bottom-1/2 -left-10 w-[500px] h-[500px] bg-leaf-soft/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Partagez votre <em className="text-leaf-soft italic font-normal">experience</em>
            </h3>
            <p className="text-cream/80 leading-relaxed mb-4">
              Votre commentaire sera examine par notre equipe avant publication.
              Cela garantit la qualite des temoignages affiches sur le site.
            </p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Tous les commentaires sont lus avec attention par l'equipe Aqualynk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
            {success && (
              <div className="bg-leaf-soft text-leaf-deep p-4 rounded-xl text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Merci ! Votre commentaire sera publie apres validation.</span>
              </div>
            )}
            {error && (
              <div className="bg-red-500/20 border border-red-300/30 text-red-100 p-3 rounded-xl text-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Votre prenom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-soft" required />
              <input type="text" placeholder="Votre metier" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-soft" />
            </div>
            <input type="email" placeholder="Votre email (ne sera pas affiche)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-soft" required />
            <textarea placeholder="Votre commentaire..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-leaf-soft resize-none" required />

            <div className="flex items-center justify-between text-sm">
              <span>Votre note :</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setRate(star)} onMouseEnter={() => setHoverRate(star)} onMouseLeave={() => setHoverRate(0)} className="transition-colors">
                    <Star className={`w-6 h-6 ${star <= (hoverRate || rate) ? "fill-sun text-sun" : "fill-transparent text-cream/30"}`} />
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-leaf-soft text-leaf-deep py-4 rounded-xl font-bold text-sm hover:bg-cream hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "Envoi en cours..." : "Envoyer mon commentaire"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}