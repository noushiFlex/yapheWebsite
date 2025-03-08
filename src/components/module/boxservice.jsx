import React from 'react';

function BoxService({ title, content, img }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Conteneur d'image avec ratio 3:4 (optimal pour images verticales) */}
      <div className="relative w-full h-0 overflow-hidden" style={{paddingBottom: '133.33%'}}> {/* Ratio 3:4 */}
        <img 
          src={img} 
          className="absolute inset-0 w-full h-full object-cover object-center" 
          alt={title || "Service"} 
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-[var(--second)] font-bold text-xl mb-2">
          {title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}

export default BoxService;