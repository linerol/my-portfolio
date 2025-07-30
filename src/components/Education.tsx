"use client"
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Zap, Users, MapPin } from "lucide-react";

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

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full h-full flex flex-col"
    >
      {/* En-tête */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 bg-success-gradient rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Formation</h2>
        </div>
        <p className="text-gray-600 text-sm">Parcours académique et spécialisations</p>
      </div>

      {/* Formation actuelle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 mb-3 border border-primary/20"
      >
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-primary mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-lg mb-1">
              {education.currentDegree}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>{education.currentSchool}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {education.currentLocation}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <Calendar className="w-4 h-4" />
              <span>{education.currentPeriod}</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">{education.currentDescription}</p>
            
            {/* Modules actuels */}
            <div className="flex flex-wrap gap-1">
              {education.currentModules.map((module, index) => (
                <motion.span
                  key={module}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                >
                  {module}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Formation terminée */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-gradient-to-r from-success/10 to-info/10 rounded-xl p-4 mb-3 border border-success/20"
      >
        <div className="flex items-start gap-3">
          <Award className="w-6 h-6 text-success mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-lg mb-1">
              {education.completedDegree}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>{education.completedSchool}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {education.completedLocation}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <Calendar className="w-4 h-4" />
              <span>{education.completedPeriod}</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">{education.completedDescription}</p>
            
            {/* Modules terminés */}
            <div className="flex flex-wrap gap-1">
              {education.completedModules.map((module, index) => (
                <motion.span
                  key={module}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                  className="px-2 py-1 bg-success/10 text-success text-xs rounded-full font-medium"
                >
                  {module}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Méthodologies */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="flex-1"
      >
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-warning" />
          <h4 className="font-semibold text-gray-800">Méthodologies</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {education.methodologies.map((method, index) => (
            <motion.span
              key={method}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
              className="px-3 py-1 bg-warning/10 text-warning text-xs rounded-full font-medium"
            >
              {method}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 