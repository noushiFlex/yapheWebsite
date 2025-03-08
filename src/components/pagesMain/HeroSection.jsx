import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-screen w-full bg-[var(--first)] flex flex-col justify-center items-center text-center p-8 shadow-lg">
      <h1 className="text-5xl font-bold text-[var(--second)]">
        Bienvenue chez Yaphé !
      </h1>
      <p className="text-lg text-[var(--third)] mt-4 max-w-2xl">
        Rejoignez nous pour profiter de services de qualité adaptés à vos
        besoins et votre personne.
        <br />
        <span className="font-semibold text-sm">"depuis 2015"</span>
      </p>
      <Link
        href="/services"
        className="mt-6 px-6 py-3 bg-[var(--second)] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 transition"
      >
        Découvrir nos services
      </Link>
    </section>
  );
};

export default HeroSection;