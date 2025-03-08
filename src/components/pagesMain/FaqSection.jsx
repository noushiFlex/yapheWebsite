import React from "react";
import Link from "next/link";
import { faqs } from "@/app/data";

const FaqSection = () => {
  return (
    <section className="py-20 px-6 bg-[#f8f5f0] text-[var(--third)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[var(--second)]">
            Questions Fréquentes
          </h2>
          <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 text-[var(--second)]">
                {faq.question}
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="px-6 py-3 bg-[var(--second)] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition"
          >
            Voir toutes les questions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;