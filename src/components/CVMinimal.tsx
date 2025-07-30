"use client"
import { Download, FileText, Calendar, MapPin, Code } from "lucide-react";

export default function CVMinimal() {
  const handleDownload = () => {
    // Logique de téléchargement du CV
    console.log("Téléchargement du CV");
    // Ici vous pouvez ajouter la logique pour télécharger le fichier CV
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* En-tête */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 bg-success-gradient rounded-lg">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">CV</h2>
        </div>
        <p className="text-gray-600 text-xs">Curriculum Vitae</p>
      </div>

      {/* Informations du CV */}
      <div className="space-y-3 mb-4 flex-1">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <Calendar className="w-4 h-4 text-primary" />
          <div>
            <p className="text-sm font-semibold text-gray-800">3+ années d'expérience</p>
            <p className="text-xs text-gray-600">Développement Logiciel</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20">
          <MapPin className="w-4 h-4 text-success" />
          <div>
            <p className="text-sm font-semibold text-gray-800">France, Ile-de-France</p>
            <p className="text-xs text-gray-600">Disponible pour alternance</p>
          </div>
        </div>
      </div>

      {/* Bouton de téléchargement */}
      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-success-gradient text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
      >
        <Download className="w-4 h-4" />
        Télécharger le CV
      </button>
    </div>
  );
} 