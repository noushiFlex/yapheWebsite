import React from "react";
import Link from "next/link";
import { popularServices } from "@/app/data";

const PopularServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-[var(--first)] text-[var(--third)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Services Populaires</h2>
          <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Découvrez nos services les plus demandés, conçus pour répondre à
            tous vos besoins beauté et décoration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--second)]">
                  {service.title}
                </h3>
                <p className="mb-4">
                  {service.description}
                </p>
                <p className="font-bold text-[var(--second)] text-xl mb-4">
                  {service.price}
                </p>
                <Link
                  href={service.link}
                  className="block w-full text-center py-2 bg-[var(--second)] text-white font-semibold rounded hover:bg-opacity-90 transition"
                >
                  Réserver
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServicesSection;