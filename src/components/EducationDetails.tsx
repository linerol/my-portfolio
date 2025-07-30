"use client"
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award, Cpu, Zap, Users, TestTube, FileText, MapPin, ArrowLeft } from "lucide-react";

const education = {
  currentDegree: "Mastère 1 en Développement Logiciel, Mobile & IoT",
  currentSchool: "YNOV",
  currentLocation: "Paris, France",
  currentPeriod: "2024 – 2026 (En cours)",
  currentDescription: "Formation spécialisée en développement logiciel, mobile et Internet des Objets avec focus sur l'architecture logicielle et l'intégration continue.",
  currentModules: [
    "Architecture Logicielle",
    "Gestion de projet",
    "Stratégie SI",
    "Intégration et déploiement continu",
    "Internet des objets",
    "IA (initiation)"
  ],
  completedDegree: "Bachelor en informatique",
  completedSchool: "EPITECH",
  completedLocation: "Cotonou, Bénin",
  completedPeriod: "2021 – 2024",
  completedDescription: "Formation complète en informatique avec focus sur la programmation système et les technologies modernes.",
  completedModules: [
    "Programmation C/C++",
    "DevOps",
    "IA",
    "Réseaux (TCP/IP)",
    "Assembleur",
    "POO",
    "Programmation fonctionnelle"
  ],
  methodologies: [
    "Méthode Agile (Scrum)",
    "Tests unitaires (Jest, Pytest)",
    "Documentation API (Swagger)",
    "Git & GitHub/GitLab"
  ]
};

interface EducationDetailsProps {
  onClose: () => void;
}

export default function EducationDetails({ onClose }: EducationDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="bg-gradient-to-r from-success to-info p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold">Formation</h1>
            </div>
            <p className="text-white/80 text-sm">Parcours académique et spécialisations</p>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Formation actuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-6 border border-primary/20"
          >
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-xl mb-2">
                  {education.currentDegree}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <span className="font-semibold">{education.currentSchool}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.currentLocation}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{education.currentPeriod}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{education.currentDescription}</p>
                
                {/* Modules actuels */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Modules principaux</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.currentModules.map((module, index) => (
                      <motion.span
                        key={module}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {module}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formation terminée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-success/10 to-info/10 rounded-xl p-6 mb-6 border border-success/20"
          >
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-success mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-xl mb-2">
                  {education.completedDegree}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <span className="font-semibold">{education.completedSchool}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.completedLocation}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{education.completedPeriod}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{education.completedDescription}</p>
                
                {/* Modules terminés */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Modules principaux</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.completedModules.map((module, index) => (
                      <motion.span
                        key={module}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        className="px-3 py-1 bg-success/10 text-success text-sm rounded-full font-medium"
                      >
                        {module}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Méthodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-warning/10 to-accent/10 rounded-xl p-6 border border-warning/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-warning" />
              <h3 className="text-lg font-bold text-gray-800">Méthodologies et outils</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.methodologies.map((method, index) => (
                <motion.div
                  key={method}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{method}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Objectifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-3">Objectifs professionnels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Court terme</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Alternance en développement logiciel</li>
                  <li>• Spécialisation DevOps & Cloud</li>
                  <li>• Projets IoT et mobile</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Long terme</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Lead Developer / Tech Lead</li>
                  <li>• Architecture logicielle</li>
                  <li>• Innovation technologique</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 