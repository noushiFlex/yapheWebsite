import React from "react";
import { stats } from "@/app/data";

const StatsSection = () => {
  return (
    <section className="py-16 px-6 bg-[var(--second)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;