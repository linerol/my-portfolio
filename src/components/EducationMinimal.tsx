"use client"
import { GraduationCap, Calendar, MapPin, ArrowRight, Award, Users, Code, Zap } from "lucide-react";

interface EducationMinimalProps {
  onOpenDetails: () => void;
}

const educationData = {
  current: {
    degree: "Mastère 1 en Développement Logiciel, Mobile & IoT",
    school: "YNOV",
    location: "Paris",
    period: "2024-2026",
    status: "En cours",
    modules: ["Architecture", "DevOps", "IoT", "IA"]
  },
  completed: {
    degree: "Bachelor en informatique",
    school: "EPITECH",
    location: "Cotonou",
    period: "2021-2024",
    status: "Terminé",
    modules: ["C/C++", "DevOps", "IA", "Réseaux"]
  }
};

const educationStats = [
  { icon: Calendar, label: "Formation", value: "5 ans", color: "text-primary" },
  { icon: Award, label: "Diplômes", value: "2", color: "text-success" },
  { icon: Code, label: "Modules", value: "20+", color: "text-warning" },
];

export default function EducationMinimal({ onOpenDetails }: EducationMinimalProps) {
  return (
    <div
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 bg-success-gradient rounded-lg">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Formation</h2>
        </div>
        <p className="text-gray-600 text-xs">Parcours académique</p>
      </div>

      {/* Formation actuelle */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 mb-3 border border-primary/20">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-gray-800 text-sm">{educationData.current.degree}</h3>
              <span className="text-xs px-1 py-0.5 bg-warning/20 text-warning rounded">En cours</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <span>{educationData.current.school}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {educationData.current.location}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{educationData.current.period}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Formation terminée */}
      <div className="bg-gradient-to-r from-success/10 to-info/10 rounded-lg p-3 mb-3 border border-success/20">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-gray-800 text-sm">{educationData.completed.degree}</h3>
              <span className="text-xs px-1 py-0.5 bg-success/20 text-success rounded">Terminé</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <span>{educationData.completed.school}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {educationData.completed.location}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{educationData.completed.period}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {educationStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <stat.icon className={`w-4 h-4 ${stat.color} mb-1`} />
            <p className="text-xs font-semibold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-500 text-center">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Méthodologies */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20 mb-3">
        <Users className="w-4 h-4 text-warning" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Méthodologies</p>
          <p className="text-xs text-gray-600">Agile, Tests, Git, CI/CD</p>
        </div>
      </div>

      {/* Objectifs */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20 mb-3">
        <Zap className="w-4 h-4 text-accent" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Objectif</p>
          <p className="text-xs text-gray-600">Alternance Sept. 2025</p>
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