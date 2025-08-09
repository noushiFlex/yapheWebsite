"use client"

import React from "react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import supabaseClient from "@/supa";
import { useState } from "react";

function MainFooter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  async function subscribeToNewsletter(email) {
    setLoading(true);
    setError(false);
  
    try {
      // Vérifier si l'email existe déjà
      const { data: existingEmails, error: fetchError } = await supabaseClient
        .from('emailNewsLetter')
        .select('email')
        .eq('email', email);
  
      if (fetchError) throw fetchError;
  
      if (existingEmails.length > 0) {
        setError("Vous êtes déjà dans la newsletter");
        setLoading(false);
        return;
      }
  
      // Insérer l'email
      const { error } = await supabaseClient.from('emailNewsLetter').insert([{ email }]);
  
      if (error) {
        setError(error.message);
      } else {
        setEmail('');
      }
    } catch (err) {
      setError("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }
  

  const links = [
    {
      name: "Whatsapp",
      url: "https://wa.me/2250757404996?text=Bonjour%20j'aimerais%20en%20savoir%20plus",
      icon: <FaWhatsapp />,
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@yaphe_spa_home",
      icon: <FaTiktok />,
    },
  ];
  
  return (
    <section className="py-20 px-6 bg-[var(--first)] text-[var(--third)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Restez Connecté</h2>
        <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-8 rounded-full"></div>
        <p className="text-lg mb-8">
          Abonnez-vous à notre newsletter pour recevoir nos offres spéciales et
          toutes nos actualités
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--second)] text-[var(--second)] w-full md:w-auto flex-grow"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={loading}
            required
          />
          <button
            type="submit"
            onClick={(e) =>{
              e.preventDefault()
              subscribeToNewsletter(email)
            }}
            disabled={loading}
            className="px-6 py-3 bg-[var(--second)] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 hover:scale-90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Chargement...
              </>
            ) : (
              "S'abonner"
            )}
          </button>
        </form>
        
        {error && <p className="text-red-500 mb-6">{error}</p>}

        <div className="flex justify-center space-x-6 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl bg-[var(--second)] text-white rounded-full hover:bg-opacity-90 transition p-4"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p>Yaphé © {new Date().getFullYear()} Tous droits réservés</p>
      </div>
    </section>
  );
}

export default MainFooter;