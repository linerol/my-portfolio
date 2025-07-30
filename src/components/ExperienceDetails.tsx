"use client"
import { motion } from "framer-motion";
import { 
  Briefcase, ArrowLeft, Calendar, MapPin, Code, TrendingUp, Users, 
  Award, CheckCircle, Target, Zap, Building
} from "lucide-react";

interface ExperienceDetailsProps {
  onClose: () => void;
}

const experiences = [
  {
    id: "cardiomedical",
    company: "Cardiomédical",
    location: "Créteil, France",
    period: "Janv 2025 – Juil 2025",
    position: "Alternance – Développeur Mobile & IoT",
    stack: ["Flutter", "Dart", "BLE", "GitHub", "Trello", "Méthodologie Agile"],
    missions: [
      "Intégration d'appareils médicaux via BLE dans une application Flutter",
      "Traitement et affichage temps réel des données de mesure",
      "Livraison d'une solution fiable, sécurisée et performante"
    ],
    color: "from-primary/10 to-secondary/10",
    borderColor: "border-primary/20",
    icon: TrendingUp,
    status: "Terminé"
  },
  {
    id: "lka-services",
    company: "LKA Services",
    location: "France",
    period: "Mars 2024 – Août 2024",
    position: "CDD – Ingénieur Logiciel",
    stack: ["NestJS", "API REST", "HTML", "CSS", "MongoDB", "JavaScript", "ClickUp", "Agile"],
    missions: [
      "Conception d'APIs pour digitaliser la gestion de stock de Colgate",
      "Réduction des erreurs de saisie de 30 % ; amélioration de l'efficacité de 20 %",
      "Création d'un dashboard avec gestion des rôles et analytics en temps réel"
    ],
    color: "from-success/10 to-info/10",
    borderColor: "border-success/20",
    icon: Code,
    status: "Terminé"
  },
  {
    id: "epitech",
    company: "Epitech",
    location: "France",
    period: "Sept 2022 – Jan 2024",
    position: "CDD – Assistant pédagogique",
    stack: ["C/C++", "Pédagogie", "Support", "Debug"],
    missions: [
      "Encadrement d'étudiants sur les bases et concepts avancés en C/C++",
      "Rédaction de supports pédagogiques et animation de séances pratiques",
      "Aide à la résolution de bugs et à l'amélioration de la qualité du code"
    ],
    color: "from-warning/10 to-accent/10",
    borderColor: "border-warning/20",
    icon: Users,
    status: "Terminé"
  }
];

export default function ExperienceDetails({ onClose }: ExperienceDetailsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white mb-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold">Expérience Professionnelle</h1>
          </div>
          <p className="text-white/90 text-sm font-medium">Parcours professionnel</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Parcours professionnel</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Mon parcours professionnel reflète une progression constante dans le développement logiciel, 
            de l'enseignement à l'ingénierie, en passant par le développement mobile et IoT. 
            Chaque expérience a contribué à enrichir mes compétences techniques et ma vision du développement.
          </p>
        </motion.div>

        {/* Expériences chronologiques */}
        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const ExperienceIcon = experience.icon;
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${experience.color} rounded-xl p-8 border ${experience.borderColor} shadow-lg`}
              >
                {/* En-tête de l'expérience */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/20 rounded-lg">
                      <ExperienceIcon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.company}</h3>
                      <p className="text-xl text-gray-700 mb-3">{experience.position}</p>
                      <div className="flex items-center gap-6 text-base text-gray-600">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          {experience.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          {experience.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-base font-semibold ${
                    experience.status === "Actuel" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {experience.status}
                  </span>
                </div>

                {/* Missions */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-3 text-lg">
                    <Target className="w-6 h-6 text-primary" />
                    Missions principales
                  </h4>
                  <ul className="space-y-3">
                    {experience.missions.map((mission, missionIndex) => (
                      <li key={missionIndex} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-base">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack technique */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-3 text-lg">
                    <Code className="w-6 h-6 text-primary" />
                    Stack technique
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/20 text-gray-800 text-base rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 