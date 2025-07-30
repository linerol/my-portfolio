"use client"
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// --- Données citations ---
const funFacts = [
  "Fan de mangas et de jeux vidéo.",
  "Je reparais des objets électroniques au primaire.",
  "J'adore les jeux rétro pixel art.",
];

export default function ProfileSidebar() {
  // Citation dynamique côté client uniquement
  const [randomFact, setRandomFact] = useState(funFacts[0]);
  useEffect(() => {
    setRandomFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }, []);

  return (
    <aside
      className="flex flex-col items-center gap-8 w-full h-full p-7 relative bg-gradient-to-b from-gray-50 to-white border-r border-gray-200"
      aria-label="Profil développeur"
    >
      <div className="flex flex-col items-center w-full">
        {/* Avatar circulaire */}
        <div className="relative group mb-4">
          <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src="/avatar.png"
            alt="Avatar Linerol"
            width={112}
            height={112}
            className="object-cover w-28 h-28 rounded-full border-4 border-blue-500 shadow-xl group-hover:scale-105 transition-transform duration-300 bg-white"
          />
        </div>
        
        {/* Nom */}
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center mb-2">Linerol Tchecounnou</h1>
        
        {/* Titre de profil */}
        <div className="text-lg font-semibold text-blue-600 text-center mb-2">Développeur logiciel et IoT</div>
        
        {/* Sous-titre */}
        <div className="text-base font-medium text-gray-600 text-center mb-3">En recherche d&apos;alternance</div>
        
        {/* Localisation */}
        <div className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full shadow-sm border border-blue-200 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-gray-700">Paris, France</span>
        </div>
        
        {/* Liens sociaux */}
        <nav aria-label="Liens sociaux" className="flex gap-4 mb-6">
          <a 
            href="https://github.com/linerol" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          >
            <div
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors p-3 rounded-full shadow-sm border border-gray-200"
            >
              <Github className="w-5 h-5" />
            </div>
          </a>
          <a 
            href="https://linkedin.com/in/linerol" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          >
            <div
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors p-3 rounded-full shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </div>
          </a>
          <a 
            href="mailto:sessiessenamlinerol.tchecounnou@ynov.com" 
            aria-label="Email" 
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          >
            <div
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors p-3 rounded-full shadow-sm border border-gray-200"
            >
              <Mail className="w-5 h-5" />
            </div>
          </a>
        </nav>
        
        {/* Tagline / citation dynamique */}
        <blockquote className="mt-4 italic text-center text-gray-700 font-medium text-sm px-4 py-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg shadow-sm">
          {randomFact}
        </blockquote>
      </div>
    </aside>
  );
} 