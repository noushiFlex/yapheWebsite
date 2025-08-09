"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/app/data";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";

export default function ReservationPage() {
  const serviceOptions = (services || []).map((s) => s.title);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: serviceOptions[0] || "",
    date: "",
    time: "",
    people: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation minimale
    if (!form.name || !form.service || !form.date || !form.time) {
      alert("Veuillez renseigner Nom, Service, Date et Heure.");
      return;
    }

    setSending(true);

    const to = "2250757404996";
    const msg = [
      "Bonjour Yaphé 👋",
      "Je souhaite réserver :",
      `• Nom: ${form.name}`,
      form.phone ? `• Téléphone: ${form.phone}` : null,
      `• Service: ${form.service}`,
      `• Date & Heure: ${form.date} à ${form.time}`,
      form.people ? `• Nb personnes: ${form.people}` : null,
      form.message ? `• Détails: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${to}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSending(false), 800);
  };

  return (
    <div className="container-base py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-sm text-[var(--primary)] hover:underline">
            ← Retour
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Réserver un service</h1>
        <p className="text-sm sm:text-base text-[var(--text-soft)] mb-8">
          Remplissez le formulaire puis validez pour ouvrir WhatsApp avec votre demande.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Identité */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">Nom complet *</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full h-11 px-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Téléphone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="w-full h-11 px-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="+225 ..."
                inputMode="tel"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs font-medium mb-1">Service *</label>
            <select
              name="service"
              value={form.service}
              onChange={onChange}
              className="w-full h-11 px-3 border border-[var(--border)] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              required
            >
              {serviceOptions.length === 0 ? (
                <option value="">Aucun service disponible</option>
              ) : (
                serviceOptions.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Date / Heure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                className="w-full h-11 px-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Heure *</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={onChange}
                className="w-full h-11 px-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">Nb personnes</label>
              <input
                name="people"
                value={form.people}
                onChange={onChange}
                placeholder="Ex: 2"
                className="w-full h-11 px-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                inputMode="numeric"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={onChange}
              className="w-full p-3 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Précisions (ex: style, thème, contraintes horaires...)"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary h-11 px-6 text-sm w-full sm:w-auto disabled:opacity-60"
          >
            {sending ? "Redirection..." : "Valider et envoyer sur WhatsApp"}
          </button>
        </form>
      </div>

      <WhatsAppBubble />
    </div>
  );
}