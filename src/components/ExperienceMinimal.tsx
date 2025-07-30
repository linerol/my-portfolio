"use client"
import { Briefcase, Calendar, MapPin, Code, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

interface ExperienceMinimalProps {
  onOpenDetails: () => void;
}

const experiences = [
  {
    id: "cardiomedical",
    company: "Cardiomédical",
    location: "Créteil, France",
    period: "Janv 2025 – Juil 2025",
    position: "Alternance – Développeur Mobile & IoT",
    stack: ["Flutter", "Dart", "BLE", "GitHub", "Trello", "Agile"],
    achievements: ["Intégration BLE", "Temps réel", "Solution sécurisée"],
    color: "from-primary/10 to-secondary/10",
    borderColor: "border-primary/20",
    icon: TrendingUp
  },
  {
    id: "lka-services",
    company: "LKA Services",
    location: "France",
    period: "Mars 2024 – Août 2024",
    position: "CDD – Ingénieur Logiciel",
    stack: ["NestJS", "API REST", "MongoDB", "JavaScript", "ClickUp", "Agile"],
    achievements: ["APIs Colgate", "-30% erreurs", "Dashboard analytics"],
    color: "from-success/10 to-info/10",
    borderColor: "border-success/20",
    icon: Code
  },
  {
    id: "epitech",
    company: "Epitech",
    location: "France",
    period: "Sept 2022 – Jan 2024",
    position: "CDD – Assistant pédagogique",
    stack: ["C/C++", "Pédagogie", "Support", "Debug"],
    achievements: ["Encadrement", "Supports", "Résolution bugs"],
    color: "from-warning/10 to-accent/10",
    borderColor: "border-warning/20",
    icon: Users
  }
];

export default function ExperienceMinimal({ onOpenDetails }: ExperienceMinimalProps) {
  const currentExperience = experiences[0];
  const CurrentIcon = currentExperience.icon;

  return (
    <div
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-warning-gradient rounded-lg">
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Expérience</h2>
      </div>

      {/* Expérience principale */}
      <div className="mb-4">
        <div className={`p-3 bg-gradient-to-br ${currentExperience.color} rounded-lg border ${currentExperience.borderColor} mb-3`}>
          <div className="flex items-start gap-3">
            <CurrentIcon className="w-5 h-5 text-primary mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-800 text-sm">{currentExperience.company}</h3>
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Actuel</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">{currentExperience.position}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <MapPin className="w-3 h-3" />
                <span>{currentExperience.location}</span>
                <span>•</span>
                <Calendar className="w-3 h-3" />
                <span>{currentExperience.period}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {currentExperience.achievements.slice(0, 2).map((achievement, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <p className="text-sm font-bold text-gray-800">3</p>
          <p className="text-xs text-gray-600">Entreprises</p>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <p className="text-sm font-bold text-gray-800">2.5</p>
          <p className="text-xs text-gray-600">Années</p>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded-lg">
          <p className="text-sm font-bold text-gray-800">6+</p>
          <p className="text-xs text-gray-600">Technologies</p>
        </div>
      </div>

      {/* Compétences clés */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4 text-primary" />
          <p className="text-xs font-semibold text-gray-800">Stack variée</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Flutter</span>
          <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">NestJS</span>
          <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">C/C++</span>
        </div>
      </div>

      {/* Bouton voir plus */}
      <div className="flex items-center gap-2 text-primary font-medium mt-auto justify-center">
        <span className="text-xs">Voir le parcours complet</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
} 