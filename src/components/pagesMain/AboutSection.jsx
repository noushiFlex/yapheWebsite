import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-[var(--first)] text-[var(--third)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative w-max">
            {/* Bord autour de l'image */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-[var(--second)] rounded-lg -z-10"></div>

            {/* L'image */}
            <img
              src="/nails-assets/logo.png"
              alt="L'équipe Yaphé"
              className="rounded-lg shadow-lg w-24 h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
          <div className="w-20 h-1 bg-[var(--second)] mb-8 rounded-full"></div>
          <p className="text-lg mb-6">
            Fondé en 2015, Yaphé est né d'une passion pour la beauté et l'art
            de la décoration. Notre mission est d'offrir des services
            exceptionnels qui subliment chaque moment important de votre vie.
          </p>
          <p className="text-lg mb-8">
            Avec une équipe de professionnels qualifiés et passionnés, nous
            nous engageons à créer des expériences uniques et personnalisées
            pour chacun de nos clients, qu'il s'agisse de soins beauté ou de
            décoration d'événements.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-[var(--second)] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;