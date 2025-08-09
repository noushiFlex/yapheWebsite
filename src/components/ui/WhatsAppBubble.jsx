"use client";

export default function WhatsAppBubble() {
  const href =
    "https://wa.me/2250757404996?text=Bonjour%20!%20J'aimerais%20plus%20d'informations%20sur%20vos%20services.";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[var(--primary)] text-white shadow-lg shadow-black/20 flex items-center justify-center hover:scale-105 transition-transform"
    >
      {/* Icône WhatsApp (SVG) */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19.1 17.5c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.7-3.4-.3-.4.3-.4.8-1.4.1-.2.1-.3 0-.5l-.9-2.2c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1.1 1.6-1.1 2.5 0 1 .4 1.9 1.1 2.8 1.3 1.8 3.1 3.3 5.3 4.2 2.6 1.1 3.2 1 3.8.9.9-.1 1.7-.8 2-1.4.2-.5.2-1 .1-1.2-.1-.1-.3-.2-.5-.3Z"
          fill="white"
        />
        <path
          d="M26.7 5.3C24.1 2.7 20.7 1.3 17 1.3 9.6 1.3 3.5 7.4 3.5 14.8c0 2.4.6 4.6 1.8 6.6L3 29.2l7.9-2.1c1.9 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-3.6-1.4-7-4-9.6Zm-9.7 21.9c-2 0-4-.5-5.7-1.5l-.4-.2-4.7 1.3 1.3-4.5-.2-.4c-1.1-1.7-1.6-3.7-1.6-5.7 0-5.9 4.8-10.7 10.7-10.7 2.8 0 5.6 1.1 7.6 3.2 2 2 3.1 4.8 3.1 7.6 0 5.9-4.8 10.7-10.6 10.7Z"
          fill="white"
        />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}