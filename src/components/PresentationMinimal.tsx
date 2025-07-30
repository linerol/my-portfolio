"use client"
import { User, ArrowRight, Target, Sparkles, MapPin, Code, Zap } from 'lucide-react';

interface PresentationMinimalProps {
  onOpenDetails: () => void;
}

export default function PresentationMinimal({ onOpenDetails }: PresentationMinimalProps) {
  return (
    <div
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary-gradient rounded-lg">
          <User className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Présentation</h2>
      </div>

      {/* Bio principale */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        Développeur <strong className="text-primary">logiciel orienté DevOps & IoT</strong> avec une approche structurée et autonome.
      </p>

      {/* Informations clés en grille */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <Target className="w-4 h-4 text-primary" />
          <div>
            <p className="text-xs font-semibold text-gray-800">Alternance</p>
            <p className="text-xs text-gray-600">Sept. 2025</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20">
          <MapPin className="w-4 h-4 text-success" />
          <div>
            <p className="text-xs font-semibold text-gray-800">Paris</p>
            <p className="text-xs text-gray-600">France</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20">
          <Code className="w-4 h-4 text-warning" />
          <div>
            <p className="text-xs font-semibold text-gray-800">Logiciel</p>
            <p className="text-xs text-gray-600">Mobile & IoT</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
          <Zap className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs font-semibold text-gray-800">3+ ans</p>
            <p className="text-xs text-gray-600">Expérience</p>
          </div>
        </div>
      </div>

      {/* Philosophie */}
      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20 mb-4">
        <Sparkles className="w-4 h-4 text-success" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Philosophie</p>
          <p className="text-xs text-gray-600 italic">
            &ldquo;Coder utile, coder durable&rdquo;
          </p>
        </div>
      </div>

      {/* Bouton voir plus */}
      <div className="flex items-center gap-2 text-primary font-medium mt-auto">
        <span className="text-xs">Voir les détails</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
} 