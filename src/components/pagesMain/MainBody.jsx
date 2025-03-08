"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";
import PopularServicesSection from "./PopularServicesSection";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";

function MainBody() {
  // État pour gérer l'affichage de tous les services
  const [showAllServices, setShowAllServices] = useState(false);
  
  // Nombre de services à afficher initialement
  const initialServiceCount = 2;
  
  // Fonction pour basculer l'affichage de tous les services
  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <HeroSection />
      
      <ServicesSection 
        showAllServices={showAllServices}
        toggleShowAllServices={toggleShowAllServices}
        initialServiceCount={initialServiceCount}
      />
      
      <AboutSection />
      
      <StatsSection />
      
      <TestimonialsSection />
      
      <PopularServicesSection />
      
      <FaqSection />
      
      <CtaSection />
    </div>
  );
}

export default MainBody;