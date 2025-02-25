"use client"

import React, { useState } from 'react';
import { NumberTicker } from '../magicui/number-ticker';
import Link from 'next/link';
import BoxService from '../module/boxservice';

function MainBody() {

    const services = [
        { title: "Decoration d'exterieure", content: "Décorations festives pour tous vos événements : mariages, anniversaires et célébrations spéciales", img: '/mariageDeco.jpg' },
        { title: "Soins Manucure & Pédicure", content: "Soins complets pour vos mains et pieds : vernis, manucure, pédicure et nettoyage professionnel", img: 'https://i.pinimg.com/474x/43/3a/2a/433a2a0fcdd0b98610a5ec9a24e72e0e.jpg' },
        { title: "Decoration d'exterieure", content: "Sublimez vos événements avec nos décorations personnalisées, créant une ambiance mémorable pour toutes vos célébrations spéciales.t", img: '/mariageDeco.jpg' },
    ]

    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            {/* Hero Section */}
            <div className="h-[800px] w-full bg-[var(--first)] flex flex-col justify-center items-center text-center p-8 shadow-lg">
                <h1 className="text-5xl font-bold text-[var(--second)]">
                    Bienvenue chez Yaphé !
                </h1>
                <p className="text-lg text-[var(--third)] mt-4 max-w-2xl">
                    Rejoignez nous pour profiter de services de qualité adaptés à vos besoins  et votre personne. <br />
                    <span className="font-semibold text-sm">"depuis 2015"</span>
                </p>
                <Link
                    href="/services"
                    className="mt-6 px-6 py-3 bg-[var(--second)] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 transition"
                >
                    Découvrir nos services
                </Link>
            </div>

            <div className="h-screen mx-auto py-20 px-6 text-center bg-[var(--second)] text-[var(--third)]">
                <h2 className="text-3xl font-bold">Nos Services</h2>
                <div className="w-full grid grid-cols-2 gap-2 mt-10">
                    {
                        services.map((service, index) => (
                            <BoxService key={index} title={service.title} content={service.content} img={service.img} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MainBody;