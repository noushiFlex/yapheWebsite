"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import BoxService from '../module/boxservice';

function MainBody() {
    // État pour gérer l'affichage de tous les services
    const [showAllServices, setShowAllServices] = useState(false);
    // État pour gérer les onglets de témoignages
    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
    
    // Nombre de services à afficher initialement
    const initialServiceCount = 2;
    
    // Services data moved to a well-structured array
    const services = [
        { 
            title: "Décoration d'extérieure", 
            content: "Décorations festives pour tous vos événements : mariages, anniversaires et célébrations spéciales", 
            img: 'https://i.pinimg.com/474x/77/67/67/776767bf7efd595b83867376618795ae.jpg' 
        },
        { 
            title: "Soins Manucure & Pédicure", 
            content: "Soins complets pour vos mains et pieds : vernis, manucure, pédicure et nettoyage professionnel", 
            img: 'https://i.pinimg.com/736x/65/aa/46/65aa46db8bb587af42583f1607dbb4d2.jpg'
        },
        { 
            title: "Décoration d'intérieure",
            content: "Sublimez vos événements avec nos décorations personnalisées, créant une ambiance mémorable pour toutes vos célébrations spéciales.", 
            img: 'https://i.pinimg.com/474x/c0/67/5f/c0675fea958587034c126a08e7c2fc5f.jpg'
        },
        { 
            title: "Maquillage professionnel", 
            content: "Des prestations de maquillage adaptées à toutes les occasions : mariage, soirée, shooting photo ou quotidien.", 
            img: 'https://i.pinimg.com/474x/df/16/eb/df16ebe38477c882cf9729cd76d244c2.jpg' 
        },
        { 
            title: "Coiffure & Soins capillaires", 
            content: "Coupes, colorations et soins pour sublimer vos cheveux avec des produits de qualité supérieure.", 
            img: 'https://i.pinimg.com/736x/a1/06/38/a10638e6039317d3c5937584b539532a.jpg' 
        },
    ];

    // Données pour la section témoignages
    const testimonials = [
        {
            role: "Mariée",
            text: "L'équipe de Yaphé a magnifiquement décoré mon mariage. Leur attention aux détails et leur professionnalisme ont rendu notre journée spéciale encore plus mémorable.",
            image: "https://i.pinimg.com/474x/43/2a/f1/432af16756eecf8e2c17718733a498a2.jpg"
        },
        {
            role: "Cliente régulière",
            text: "Je fréquente Yaphé depuis 3 ans pour mes soins de manucure et pédicure. L'équipe est toujours accueillante et le travail est impeccable. Je recommande vivement !",
            image: "https://i.pinimg.com/474x/f9/41/ae/f941ae9d19b8d88a5727d1fce0ffb40b.jpg"
        },
        {
            role: "Organisateur d'événements",
            text: "En tant qu'organisateur professionnel, je fais confiance à Yaphé pour la décoration de mes événements les plus prestigieux. Leur créativité et leur fiabilité sont exceptionnelles.",
            image: "https://i.pinimg.com/474x/72/53/e0/7253e03b7c29dc5aa0d24e799d4883b5.jpg"
        }
    ];
    
    // Données pour les statistiques
    const stats = [
        { number: "5000+", label: "Clients satisfaits" },
        { number: "40+", label: "Événements décorés" },
        { number: "10", label: "Années d'expérience" },
        // { number: "6", label: "Professionnels qualifiés" }
    ];

    // Données pour les questions fréquentes
    const faqs = [
        {
            question: "Quels types d'événements pouvez-vous décorer ?",
            answer: "Nous décorons tous types d'événements : mariages, anniversaires, baptêmes, fêtes d'entreprise, lancements de produits, et bien plus encore. Contactez-nous pour discuter de votre projet spécifique."
        },
        {
            question: "Comment puis-je prendre rendez-vous pour un soin beauté ?",
            answer: "Vous pouvez prendre rendez-vous par téléphone, via notre formulaire en ligne sur la page Contact, ou directement dans notre salon. Nous recommandons de réserver au moins une semaine à l'avance pour les services populaires."
        },
        {
            question: "Proposez-vous des forfaits pour les mariages ?",
            answer: "Oui, nous proposons plusieurs forfaits pour les mariées, comprenant maquillage, coiffure, manucure et conseils décoratifs. Nous pouvons également créer un forfait personnalisé selon vos besoins spécifiques."
        },
        {
            question: "Utilisez-vous des produits bio et cruelty-free ?",
            answer: "Absolument ! Nous utilisons principalement des produits bio, naturels et non testés sur les animaux. Si vous avez des préférences ou des allergies particulières, n'hésitez pas à nous en informer."
        }
    ];

    // Fonction pour basculer l'affichage de tous les services
    const toggleShowAllServices = () => {
        setShowAllServices(!showAllServices);
    };

    // Filtrer les services à afficher
    const displayedServices = showAllServices 
        ? services 
        : services.slice(0, initialServiceCount);

    return (
        <div className="min-h-screen bg-[#f8f5f0]">
            {/* Hero Section */}
            <section className="h-screen w-full bg-[var(--first)] flex flex-col justify-center items-center text-center p-8 shadow-lg">
                <h1 className="text-5xl font-bold text-[var(--second)]">
                    Bienvenue chez Yaphé !
                </h1>
                <p className="text-lg text-[var(--third)] mt-4 max-w-2xl">
                    Rejoignez nous pour profiter de services de qualité adaptés à vos besoins et votre personne.
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

            {/* Services Section */}
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
                    {showAllServices ? 'Voir moins' : 'Voir plus'}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ml-2 transition-transform ${showAllServices ? 'rotate-180' : ''}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </section>
            
            {/* Nouvelle section: À propos */}
            <section className="py-20 px-6 bg-[var(--first)] text-[var(--third)]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[var(--second)] rounded-lg"></div>
                            <img 
                                src="https://i.pinimg.com/474x/d6/fc/ac/d6fcacb1ad2c2731c5eb96d3d4984fd4.jpg" 
                                alt="L'équipe Yaphé" 
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
                        <div className="w-20 h-1 bg-[var(--second)] mb-8 rounded-full"></div>
                        <p className="text-lg mb-6">
                            Fondé en 2015, Yaphé est né d'une passion pour la beauté et l'art de la décoration. Notre mission est d'offrir des services exceptionnels qui subliment chaque moment important de votre vie.
                        </p>
                        <p className="text-lg mb-8">
                            Avec une équipe de professionnels qualifiés et passionnés, nous nous engageons à créer des expériences uniques et personnalisées pour chacun de nos clients, qu'il s'agisse de soins beauté ou de décoration d'événements.
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

            {/* Nouvelle section: Statistiques */}
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

            {/* Nouvelle section: Témoignages */}
            <section className="py-20 px-6 bg-[#f8f5f0] text-[var(--second)]">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
                    <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-12 rounded-full"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-lg p-8 mb-12">
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                            <img 
                                src={testimonials[activeTestimonialIndex].image} 
                                alt={testimonials[activeTestimonialIndex].name}
                                className="w-20 h-20 rounded-full border-4 border-[var(--first)] object-cover"
                            />
                        </div>
                        <div className="pt-12">
                            <p className="text-lg italic mb-6">"{testimonials[activeTestimonialIndex].text}"</p>
                            <h4 className="font-bold text-xl mb-1">{testimonials[activeTestimonialIndex].name}</h4>
                            <p className="text-[var(--third)]">{testimonials[activeTestimonialIndex].role}</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-center space-x-2">
                        {testimonials.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTestimonialIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === activeTestimonialIndex ? 'bg-[var(--second)]' : 'bg-gray-300'}`}
                                aria-label={`Témoignage ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Nouvelle section: Services populaires */}
            <section className="py-20 px-6 bg-[var(--first)] text-[var(--third)]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nos Services Populaires</h2>
                        <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg max-w-3xl mx-auto">
                            Découvrez nos services les plus demandés, conçus pour répondre à tous vos besoins beauté et décoration
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img 
                                src="https://i.pinimg.com/474x/2b/73/ed/2b73ed640401a5d5a9a77ef62a7c1d9f.jpg" 
                                alt="Forfait mariage complet" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[var(--second)]">Forfait Mariage Complet</h3>
                                <p className="mb-4">Décoration, maquillage, coiffure et manucure pour votre jour spécial.</p>
                                <p className="font-bold text-[var(--second)] text-xl mb-4">Sur devis</p>
                                <Link
                                    href="/services/mariage"
                                    className="block w-full text-center py-2 bg-[var(--second)] text-white font-semibold rounded hover:bg-opacity-90 transition"
                                >
                                    Réserver
                                </Link>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img 
                                src="https://i.pinimg.com/474x/4e/8c/75/4e8c757e6c4655b3c3d5a26ae1b96ef4.jpg" 
                                alt="Soins spa complet" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[var(--second)]">Journée Spa Complète</h3>
                                <p className="mb-4">Manucure, pédicure, soin du visage et massage relaxant.</p>
                                <p className="font-bold text-[var(--second)] text-xl mb-4">À partir de 120€</p>
                                <Link
                                    href="/services/spa"
                                    className="block w-full text-center py-2 bg-[var(--second)] text-white font-semibold rounded hover:bg-opacity-90 transition"
                                >
                                    Réserver
                                </Link>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img 
                                src="https://i.pinimg.com/474x/70/33/d5/7033d5d59bb30439d0fc4c67c5f03f2e.jpg" 
                                alt="Décoration événement" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[var(--second)]">Décoration d'Événement</h3>
                                <p className="mb-4">Conception et installation de décors personnalisés pour tous événements.</p>
                                <p className="font-bold text-[var(--second)] text-xl mb-4">Sur devis</p>
                                <Link
                                    href="/services/decoration"
                                    className="block w-full text-center py-2 bg-[var(--second)] text-white font-semibold rounded hover:bg-opacity-90 transition"
                                >
                                    Demander un devis
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nouvelle section: FAQ */}
            <section className="py-20 px-6 bg-[#f8f5f0] text-[var(--third)]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-[var(--second)]">Questions Fréquentes</h2>
                        <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-6 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-2 text-[var(--second)]">{faq.question}</h3>
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

            {/* Nouvelle section: CTA (Call to Action) */}
            <section className="py-16 px-6 bg-[var(--second)] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Prêt à sublimer votre beauté ou votre événement ?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-white text-[var(--second)] font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 transition"
                        >
                            Nous contacter
                        </Link>
                        <Link
                            href="/booking"
                            className="px-8 py-3 bg-[var(--first)] text-[var(--second)] font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 transition"
                        >
                            Prendre rendez-vous
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section: Newsletter */}
            <section className="py-20 px-6 bg-[var(--first)] text-[var(--third)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Restez Connecté</h2>
                    <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg mb-8">
                        Abonnez-vous à notre newsletter pour recevoir nos offres spéciales et toutes nos actualités
                    </p>
                    
                    <form className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                        <input 
                            type="email" 
                            placeholder="Votre adresse email" 
                            className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--second)] text-[var(--second)] w-full md:w-auto flex-grow"
                            required
                        />
                        <button 
                            type="submit"
                            className="px-6 py-3 bg-[var(--second)] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition"
                        >
                            S'abonner
                        </button>
                    </form>
                    
                    <div className="flex justify-center space-x-6 mb-8">
                        {['facebook', 'instagram', 'twitter'].map((social) => (
                            <a 
                                key={social}
                                href={`#${social}`}
                                className="w-12 h-12 rounded-full bg-[var(--second)] flex items-center justify-center text-white hover:bg-opacity-80 transition"
                            >
                                <span className="sr-only">{social}</span>
                                {social === 'facebook' && (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                    </svg>
                                )}
                                {social === 'instagram' && (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.786 1.14.555.555.89 1.118 1.14 1.786.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427-.25.668-.585 1.231-1.14 1.786-.555.555-1.118.89-1.786 1.14-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.231-.585-1.786-1.14-.555-.555-.89-1.118-1.14-1.786-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.585-1.231 1.14-1.786.555-.555 1.118-.89 1.786-1.14.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06z" clipRule="evenodd"></path>
                                        <path fillRule="evenodd" d="M12.315 15.338a3.023 3.023 0 110-6.046 3.023 3.023 0 010 6.046zm0-7.675a4.652 4.652 0 100 9.303 4.652 4.652 0 000-9.303zm5.899-.984a1.086 1.086 0 11-2.172 0 1.086 1.086 0 012.172 0z" clipRule="evenodd"></path>
                                    </svg>
                                )}
                                {social === 'twitter' && (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                    
                    <p>Yaphé © {new Date().getFullYear()} Tous droits réservés</p>
                </div>
            </section>
        </div>
    );
}

export default MainBody;