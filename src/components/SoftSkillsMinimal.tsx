"use client"
import { Brain, MessageSquare, Users, Zap, ArrowRight, Target, Heart, Eye } from "lucide-react";

interface SoftSkillsMinimalProps {
  onOpenDetails: () => void;
}

const mainSkills = [
  { icon: Brain, name: "Analyse", color: "text-primary", bgColor: "from-primary/10 to-primary/20" },
  { icon: MessageSquare, name: "Communication", color: "text-info", bgColor: "from-info/10 to-info/20" },
  { icon: Users, name: "Équipe", color: "text-success", bgColor: "from-success/10 to-success/20" },
  { icon: Zap, name: "Autonomie", color: "text-warning", bgColor: "from-warning/10 to-warning/20" },
];

const additionalSkills = [
  { icon: Target, name: "Focus utilisateur", color: "text-accent" },
  { icon: Heart, name: "Impact", color: "text-accent" },
  { icon: Eye, name: "Rigueur", color: "text-info" },
];

export default function SoftSkillsMinimal({ onOpenDetails }: SoftSkillsMinimalProps) {
  return (
    <div
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Soft Skills</h2>
        <p className="text-gray-600 text-xs">Compétences transversales</p>
      </div>

      {/* Compétences principales */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {mainSkills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 p-2 rounded-lg ${skill.bgColor} border border-gray-100`}
          >
            <skill.icon className={`w-4 h-4 ${skill.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Compétences supplémentaires */}
      <div className="flex flex-wrap gap-1 mb-4">
        {additionalSkills.map((skill) => (
          <span
            key={skill.name}
            className={`px-2 py-1 bg-white rounded-full text-xs font-medium ${skill.color} border border-gray-200`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Méthodologie */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20 mb-3">
        <Users className="w-4 h-4 text-success" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Méthode Agile</p>
          <p className="text-xs text-gray-600">Scrum & Collaboration</p>
        </div>
      </div>

      {/* Philosophie */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20 mb-3">
        <Heart className="w-4 h-4 text-warning" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Approche</p>
          <p className="text-xs text-gray-600 italic">&ldquo;Coder utile, coder durable&rdquo;</p>
        </div>
      </div>

      {/* Bouton voir plus */}
      <div className="flex items-center gap-2 text-primary font-medium mt-auto justify-center">
        <span className="text-xs">Voir tous les soft skills</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
} 