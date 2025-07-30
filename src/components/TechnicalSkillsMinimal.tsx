"use client"
import { Code, Cloud, Database, Cpu, ArrowRight, Zap, Settings } from "lucide-react";

interface TechnicalSkillsMinimalProps {
  onOpenDetails: () => void;
}

const categories = [
  { icon: Code, name: "Langages", count: 8, color: "text-blue-600", bgColor: "from-blue-50 to-blue-100" },
  { icon: Cloud, name: "Cloud/DevOps", count: 6, color: "text-green-600", bgColor: "from-green-50 to-green-100" },
  { icon: Database, name: "Bases de données", count: 4, color: "text-purple-600", bgColor: "from-purple-50 to-purple-100" },
  { icon: Cpu, name: "IoT/Embarqué", count: 4, color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
];

export default function TechnicalSkillsMinimal({ onOpenDetails }: TechnicalSkillsMinimalProps) {
  return (
    <div
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Compétences Techniques</h2>
        <p className="text-gray-600 text-xs">Expertise fullstack complète</p>
      </div>

      {/* Catégories */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center justify-center p-2 bg-gradient-to-br ${category.bgColor} rounded-lg border border-gray-200`}
          >
            <category.icon className={`w-4 h-4 ${category.color} mb-1`} />
            <span className="text-xs font-medium text-gray-700 text-center leading-tight">
              {category.name}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              {category.count} tech
            </span>
          </div>
        ))}
      </div>

      {/* Statistiques rapides */}
      <div className="flex items-center justify-between mt-3 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-primary" />
          <span className="text-xs font-semibold text-gray-800">35+ technologies</span>
        </div>
        <div className="flex items-center gap-2">
          <Settings className="w-3 h-3 text-success" />
          <span className="text-xs text-gray-600">Fullstack</span>
        </div>
      </div>

      {/* Bouton voir plus */}
      <div className="flex items-center gap-2 text-primary font-medium mt-3 justify-center">
        <span className="text-xs">Voir toutes les compétences</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
} 