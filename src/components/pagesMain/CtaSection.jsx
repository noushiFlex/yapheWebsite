import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-16 px-6 bg-[var(--second)] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à sublimer votre beauté ou votre événement ?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et
          obtenir un devis personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/2250757404996?text=Bonjour%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services"
            target="_blank"
            className="px-8 py-3 bg-[var(--first)] text-[var(--second)] font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 transition"
          >
            Nous contacter / Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;