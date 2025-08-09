"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  services,
  popularServices,
  testimonials,
  stats,
  faqs
} from "@/app/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";

// Petit composant compteur animé
function AnimatedNumber({ value, duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const target = parseInt(value.replace(/\D/g, "")) || 0;
    const stepTime = Math.max(16, duration / (target || 1));
    const id = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        start = target;
        clearInterval(id);
      }
      setDisplay(start);
    }, stepTime);
    return () => clearInterval(id);
  }, [value, duration]);
  return (
    <span>
      {display}
      {value.includes("+") && "+"}
      {/[^\d+]/.test(value) && value.replace(/[\d+]/g, "")}
    </span>
  );
}

export default function HomePage() {
  // Onglets services
  const tabs = [
    { key: "all", label: "Tous" },
    { key: "beaute", label: "Beauté" },
    { key: "deco", label: "Décoration" },
    { key: "special", label: "Spécial" },
  ];
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = services.filter(s => {
    if (activeTab === "all") return true;
    if (activeTab === "beaute")
      return /(ongle|manucure|pédicure|maquillage|coiffure|soin|capillaire)/i.test(
        s.title + s.content
      );
    if (activeTab === "deco") return /d[ée]cor/i.test(s.title + s.content);
    if (activeTab === "special")
      return /(mariage|professionnel|extérieur|intérieure)/i.test(
        s.title + s.content
      );
    return true;
  });

  const topPopular = popularServices.slice(0, 3);
  const topTestimonials = testimonials.slice(0, 6);
  const miniFaq = faqs.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a5f47] via-[#2f6b52] to-[#3a7f63] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative container-base text-white flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-[10px] sm:text-[11px] tracking-wide font-medium mb-6">
              Nouvelle plateforme • 2025
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              L’expérience unifiée Beauté & Décoration
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8">
              Réservez un soin, construisez une ambiance, centralisez vos demandes.
              Rapidité, cohérence, esthétique moderne : Yaphé réinvente votre parcours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/services"
                className="btn btn-primary h-11 px-6 sm:px-7 text-sm shadow-md shadow-black/20"
              >
                Explorer les services
              </Link>
              {/* Remplace “Demander un devis” par “Réserver” */}
              <Link
                href="/reservation"
                className="h-11 px-6 sm:px-7 text-sm rounded-md bg-white/15 hover:bg-white/25 backdrop-blur border border-white/30 flex items-center justify-center transition"
              >
                Réserver
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 mt-10 text-[10px] sm:text-[11px] uppercase tracking-wide text-white/70">
              <span>Réservation rapide</span>
              <span>Équipe experte</span>
              <span>Suivi personnalisé</span>
              <span>Esthétique soignée</span>
            </div>
          </div>
          <div className="flex-1 min-h-[260px] sm:min-h-[300px] relative">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/25 shadow-xl">
              <img
                src="https://img.freepik.com/free-photo/african-girl-woman-couch-lady-beautician_1157-48232.jpg?uid=R181480029&ga=GA1.1.498683337.1748689813&semt=ais_hybrid&w=740&q=80"
                alt="Soin beauté Yaphé Spa"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-48 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-xs font-semibold mb-1 text-[var(--text)]">
                Instant booking
              </div>
              <p className="text-[11px] text-[var(--text-soft)]">
                Choisissez un créneau, recevez la confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANDE LOGOS (horizontal scroll mobile) */}
      <section className="py-6 sm:py-8 border-b border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="container-base">
          <div className="flex gap-8 sm:gap-10 overflow-x-auto scrollbar-none py-1 text-[11px] sm:text-xs font-medium tracking-wide opacity-70">
            {["Partenaires", "Mode", "Événementiel", "Beauté", "Prestige", "Marques"].map(l => (
              <span key={l} className="shrink-0">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES + ONGLET */}
      <section className="py-16 sm:py-20">
        <div className="container-base">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Nos services
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-soft)] max-w-md">
                  Filtrez par domaine et découvrez une palette de prestations adaptées.
                </p>
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-1 px-1">
                {tabs.map(t => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`px-4 h-9 shrink-0 rounded-full text-xs font-medium border transition ${
                      activeTab === t.key
                        ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                        : "bg-[var(--bg-soft)] hover:bg-[var(--bg-alt)] border-[var(--border)]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.slice(0, 8).map(s => (
              <div
                key={s.title}
                className="group rounded-xl border border-[var(--border)] bg-white p-5 flex flex-col hover:shadow hover:-translate-y-0.5 transition"
              >
                <div className="h-36 w-full rounded-lg overflow-hidden mb-4 bg-[var(--bg-soft)]">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-[var(--text)] text-sm sm:text-base">
                  {s.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[var(--text-soft)] leading-relaxed flex-1">
                  {s.content}
                </p>
                <Link
                  href="/services"
                  className="mt-4 text-[11px] font-medium text-[var(--primary)] hover:underline"
                >
                  Voir plus →
                </Link>
              </div>
            ))}
          </div>

          {filteredServices.length > 8 && (
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline"
              >
                Tous les services
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* POPULAIRES */}
      <section className="py-16 sm:py-20 bg-[var(--bg-alt)]">
        <div className="container-base">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
            Services populaires
          </h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topPopular.map(p => (
              <div
                key={p.title}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="h-44 sm:h-48 bg-[var(--bg-soft)] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed mb-3 flex-1">
                    {p.description}
                  </p>
                  <div className="text-[11px] font-medium text-[var(--primary)] mb-4">
                    {p.price}
                  </div>
                  <Link
                    href={p.link}
                    className="h-10 rounded-md bg-[var(--primary)] text-white text-xs sm:text-sm font-medium flex items-center justify-center hover:bg-[var(--primary-hover)] transition"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + MISSION */}
      <section className="py-16 sm:py-20">
        <div className="container-base grid gap-10 lg:gap-14 lg:grid-cols-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Impact & Engagement
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed">
              Des réalisations concrètes et une confiance croissante :
              chaque prestation reflète votre style et crée une expérience durable.
            </p>
            <Link
              href="/about"
              className="inline-flex mt-5 text-xs sm:text-sm font-medium text-[var(--primary)] hover:underline"
            >
              Découvrir notre vision →
            </Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.slice(0, 4).map(s => (
              <div
                key={s.label}
                className="text-center p-4 sm:p-5 rounded-xl bg-[var(--bg-soft)]"
              >
                <div className="text-lg sm:text-2xl font-bold">
                  <AnimatedNumber value={s.number} />
                </div>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-wide text-[var(--text-soft)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES CAROUSEL */}
      <section className="py-16 sm:py-20 bg-[var(--bg-alt)]">
        <div className="container-base">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold">Témoignages</h2>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-medium text-[var(--primary)] hover:underline"
            >
              Plus d’avis →
            </Link>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }} aria-label="Témoignages">
            <CarouselContent className="-ml-3 sm:-ml-4">
              {topTestimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition flex flex-col">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <img
                        src={t.image}
                        alt={t.role}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-xs sm:text-sm font-medium">{t.role}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed break-words">
                      “{t.text}”
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Masquer les flèches en mobile pour éviter le décalage/overflow */}
            <div className="flex gap-2 justify-end mt-5 sm:mt-6">
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ APERCU */}
      <section className="py-16 sm:py-20">
        <div className="container-base">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
            <div className="md:w-1/3">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed mb-6">
                Quelques réponses rapides. Consultez la page dédiée
                pour la liste complète.
              </p>
              <Link
                href="/faq"
                className="inline-flex text-xs sm:text-sm font-medium text-[var(--primary)] hover:underline"
              >
                Voir toutes les questions →
              </Link>
            </div>
            <div className="md:flex-1 space-y-5">
              {miniFaq.map(f => (
                <div
                  key={f.question}
                  className="rounded-lg border border-[var(--border)] bg-white p-4 sm:p-5 hover:shadow transition"
                >
                  <h3 className="font-medium mb-2 text-sm sm:text-base">
                    {f.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed line-clamp-3">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-16 sm:py-20">
        <div className="container-base max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Passez à l’action
          </h2>
          <p className="text-[var(--text-soft)] mb-8 text-xs sm:text-sm md:text-base leading-relaxed">
            Réservation rapide, devis clair, accompagnement réel.
            Votre transformation commence maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn btn-primary h-11 px-8 text-sm"
            >
              Réserver
            </Link>
            <Link
              href="/contact"
              className="h-11 px-8 text-sm rounded-md border border-[var(--border)] hover:border-[var(--text)] transition flex items-center justify-center"
            >
              Contacter
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppBubble />
    </>
  );
}
