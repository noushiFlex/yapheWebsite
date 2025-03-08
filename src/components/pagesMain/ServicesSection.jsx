import React from "react";
import BoxService from "../module/boxservice";
import { services } from "@/app/data";

const ServicesSection = ({ showAllServices, toggleShowAllServices, initialServiceCount }) => {
  // Filtrer les services à afficher
  const displayedServices = showAllServices
    ? services
    : services.slice(0, initialServiceCount);

  return (
    <section className="py-20 px-6 text-center bg-[var(--second)] text-[var(--third)]">
      <h2 className="text-3xl font-bold mb-10">Nos Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedServices.map((service, index) => (
          <BoxService
            key={index}
            title={service.title}
            content={service.content}
            img={service.img}
          />
        ))}
      </div>

      <button
        onClick={toggleShowAllServices}
        className="mt-12 px-6 py-3 bg-[var(--first)] text-[var(--second)] font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition flex items-center mx-auto"
      >
        {showAllServices ? "Voir moins" : "Voir plus"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-2 transition-transform ${
            showAllServices ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </section>
  );
};

export default ServicesSection;