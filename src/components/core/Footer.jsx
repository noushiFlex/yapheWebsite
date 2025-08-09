import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      <div className="container-base py-10 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Yaphé</h4>
          <p className="text-[var(--text-soft)] leading-relaxed">
            Beauté & décoration d’événements. Simplicité, modernité, élégance.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-[var(--primary)]">Services</Link></li>
            <li><Link href="/about" className="hover:text-[var(--primary)]">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--primary)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Réseaux</h4>
          <ul className="space-y-2">
            <li><a href="https://wa.me/2250757404996" target="_blank" className="hover:text-[var(--primary)]">WhatsApp</a></li>
            <li><a href="https://www.tiktok.com/@yaphe_spa_home" target="_blank" className="hover:text-[var(--primary)]">TikTok</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full border border-[var(--border)] rounded-md px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <button className="btn btn-primary w-full h-10 text-sm">S'abonner</button>
          </form>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-6 text-center text-xs text-[var(--text-soft)]">
        © {new Date().getFullYear()} Yaphé. Tous droits réservés.
      </div>
    </footer>
  );
}