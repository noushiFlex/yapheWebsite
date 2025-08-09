import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const valeurs = [
    { t: "Excellence", d: "Des prestations soignées, des produits sélectionnés et une exigence constante." },
    { t: "Personnalisation", d: "Chaque cliente, chaque événement, une approche unique et adaptée." },
    { t: "Confiance", d: "Accueil, transparence et suivi avant / après prestation." },
  ];

  const etapes = [
    { y: "2015", t: "Fondation", d: "Naissance de Yaphé : premiers services beauté & fidélisation locale." },
    { y: "2018", t: "Expansion", d: "Ajout de la décoration d’événements et montée en gamme." },
    { y: "2022", t: "Optimisation", d: "Structuration des offres & amélioration de l’expérience client." },
    { y: "2025", t: "Nouvelle version", d: "Plateforme unifiée : réservation simple & identité moderne." },
  ];

  const stats = [
    { n: "10+", l: "Années d’expérience" },
    { n: "500+", l: "Événements décorés" },
    { n: "2k+", l: "Clientes satisfaites" },
    { n: "95%", l: "Taux de rétention" },
  ];

  return (
    <div className="container-base py-16 md:py-24">
      {/* Hero */}
      <header className="max-w-3xl">
        <span className="inline-block text-xs tracking-wide font-medium uppercase bg-[var(--bg-soft)] px-3 py-1 rounded-full mb-5">
          À propos
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Une vision moderne de la beauté & de la décoration événementielle
        </h1>
        <p className="text-[var(--text-soft)] leading-relaxed text-base md:text-lg">
          Nous combinons savoir-faire, sens du détail et expérience client fluide pour
          sublimer votre image, vos moments et vos espaces. Notre approche : élégance,
          simplicité, personnalisation.
        </p>
      </header>

      {/* Mission */}
      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <div className="bg-white shadow rounded-xl p-6 md:p-7">
          <h2 className="text-xl font-semibold mb-4">Notre mission</h2>
          <p className="text-sm md:text-base text-[var(--text-soft)] leading-relaxed">
            Offrir des prestations cohérentes et qualitatives (onglerie, maquillage,
            coiffure, soins, décoration) avec une expérience unifiée : moins de friction,
            plus de clarté, un accompagnement humain à chaque étape.
          </p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 md:p-7">
          <h2 className="text-xl font-semibold mb-4">Notre différence</h2>
          <ul className="space-y-3 text-sm md:text-base text-[var(--text-soft)]">
            <li>• Process de réservation simple & réactif</li>
            <li>• Palette visuelle maîtrisée : constance & identité</li>
            <li>• Mix expertise beauté + scénographie événementielle</li>
            <li>• Suivi avant / pendant / après la prestation</li>
          </ul>
        </div>
      </section>

      {/* Valeurs */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Nos valeurs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valeurs.map(v => (
            <div key={v.t} className="card hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">{v.t}</h3>
              <p className="text-sm text-[var(--text-soft)] leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Étapes clés</h2>
        <ol className="relative border-l border-[var(--border)] space-y-8">
          {etapes.map(e => (
            <li key={e.y} className="pl-6">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[var(--primary)]" />
              <span className="text-xs font-medium tracking-wide uppercase text-[var(--primary)]">
                {e.y}
              </span>
              <h3 className="font-semibold mt-1">{e.t}</h3>
              <p className="text-sm text-[var(--text-soft)] mt-1 leading-relaxed">{e.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Stats */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Impact</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.l} className="bg-white shadow rounded-lg p-5 text-center">
              <div className="text-2xl font-bold mb-1">{s.n}</div>
              <div className="text-xs text-[var(--text-soft)] uppercase tracking-wide">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 bg-[var(--bg-alt)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Prêt(e) à démarrer votre expérience Yaphé ?
          </h2>
          <p className="text-sm md:text-base text-[var(--text-soft)] leading-relaxed">
            Réservez un soin, demandez un devis événement ou échangez avec nous pour
            une recommandation personnalisée.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Link href="/services" className="btn btn-primary h-11 px-6 text-sm flex-1 md:flex-none">
            Services
          </Link>
          <Link
            href="/contact"
            className="h-11 px-6 text-sm rounded-md border border-[var(--border)] hover:border-[var(--text)] transition flex items-center justify-center flex-1 md:flex-none"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}