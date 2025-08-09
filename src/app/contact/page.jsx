"use client";

import Link from "next/link";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";

export default function ContactPage() {
  const phone = "+225 07 57 40 4996";
  const wa = "https://wa.me/2250757404996?text=Bonjour%20Yaph%C3%A9%20!%20J%E2%80%99aimerais%20des%20informations.";

  return (
    <div className="container-base py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-sm text-[var(--primary)] hover:underline">
            ← Retour
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Contact</h1>
        <p className="text-sm sm:text-base text-[var(--text-soft)] mb-8">
          Contactez-nous pour toute question, disponibilité ou information.
        </p>

        {/* Actions rapides */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-4 rounded-md bg-[var(--primary)] text-white text-sm font-medium flex items-center justify-center hover:bg-[var(--primary-hover)] transition"
          >
            Écrire sur WhatsApp
          </a>

          <a
            href="tel:+2250757404996"
            className="h-12 px-4 rounded-md border border-[var(--border)] hover:border-[var(--text)] text-sm flex items-center justify-center transition"
          >
            Appeler: {phone}
          </a>
        </div>

        {/* Localisation & Horaires */}
        <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-4">Localisation & Horaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map responsive */}
          <div className="relative w-full overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm">
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6444113235225!2d-5.2530684999999995!3d6.813033400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb891b69e3c146f%3A0xe6c0816a01490b40!2sYaph%C3%A9%20spa!5e0!3m2!1sfr!2sci!4v1754698179639!5m2!1sfr!2sci"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Yaphé Spa - Localisation"
            />
          </div>

          {/* Horaires */}
          <div className="p-4 rounded-lg border border-[var(--border)] bg-white">
            <div className="mb-3">
              <div className="text-sm font-semibold">Yaphé Spa</div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Yaph%C3%A9%20spa&destination_place_id=0xfb891b69e3c146f:0xe6c0816a01490b40"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--primary)] hover:underline"
              >
                Itinéraire Google Maps →
              </a>
            </div>
            <h3 className="text-sm font-medium mb-2">Horaires d’ouverture</h3>
            <ul className="text-xs text-[var(--text-soft)] space-y-1">
              <li className="flex justify-between"><span>Samedi</span><span>08:30–19:00</span></li>
              <li className="flex justify-between"><span>Dimanche</span><span>14:00–19:00</span></li>
              <li className="flex justify-between"><span>Lundi</span><span>08:30–19:00</span></li>
              <li className="flex justify-between"><span>Mardi</span><span>08:30–19:00</span></li>
              <li className="flex justify-between"><span>Mercredi</span><span>08:30–19:00</span></li>
              <li className="flex justify-between"><span>Jeudi</span><span>08:30–19:00</span></li>
              <li className="flex justify-between"><span>Vendredi</span><span>08:30–19:00</span></li>
            </ul>
          </div>
        </div>

        {/* Infos additionnelles */}
        <div className="p-4 rounded-md border border-[var(--border)] bg-white mt-6">
          <h2 className="font-semibold mb-2 text-sm">Autres moyens</h2>
          <ul className="text-xs text-[var(--text-soft)] space-y-1">
            <li>Email: prochainement</li>
            <li>
              Réservation en ligne:{" "}
              <Link href="/reservation" className="text-[var(--primary)] hover:underline">
                Page Réservation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <WhatsAppBubble />
    </div>
  );
}