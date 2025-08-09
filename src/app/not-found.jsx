import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-base py-20 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Page introuvable</h1>
      <p className="text-sm sm:text-base text-[var(--text-soft)] mb-8">
        Désolé, la page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="h-11 px-6 rounded-md border border-[var(--border)] hover:border-[var(--text)] flex items-center justify-center text-sm transition">
          Retour à l’accueil
        </Link>
        <Link href="/reservation" className="h-11 px-6 rounded-md bg-[var(--primary)] text-white text-sm font-medium flex items-center justify-center hover:bg-[var(--primary-hover)] transition">
          Faire une réservation
        </Link>
      </div>
    </div>
  );
}