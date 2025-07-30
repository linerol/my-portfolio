"use client"
import { motion } from "framer-motion";
import { Calendar, Users, Award, ArrowLeft, Code, Target } from "lucide-react";

interface QuickStatsDetailsProps {
  onClose: () => void;
}

export default function QuickStatsDetails({ onClose }: QuickStatsDetailsProps) {
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
        <div className="bg-gradient-to-r from-warning to-accent p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold">Statistiques</h1>
            </div>
            <p className="text-white/80 text-sm">Aperçu détaillé</p>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">Mon parcours en chiffres</h2>
            <p className="text-gray-700 leading-relaxed">
              Voici un aperçu de mon expérience et de mes réalisations en développement logiciel, 
              mobile et IoT. Ces statistiques reflètent mon engagement dans des projets variés 
              et mon évolution technique continue.
            </p>
          </motion.div>

          {/* Statistiques détaillées */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Expérience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-bold text-gray-800">Expérience</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Années de développement</span>
                  <span className="font-bold text-primary text-lg">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Formation continue</span>
                  <span className="font-bold text-success text-lg">2021-2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Spécialisations</span>
                  <span className="font-bold text-warning text-lg">4</span>
                </div>
              </div>
            </motion.div>

            {/* Projets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-success" />
                <h3 className="text-lg font-bold text-gray-800">Projets</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projets réalisés</span>
                  <span className="font-bold text-success text-lg">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technologies utilisées</span>
                  <span className="font-bold text-primary text-lg">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lignes de code</span>
                  <span className="font-bold text-warning text-lg">50k+</span>
                </div>
              </div>
            </motion.div>

            {/* Compétences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-warning" />
                <h3 className="text-lg font-bold text-gray-800">Compétences</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Langages maîtrisés</span>
                  <span className="font-bold text-warning text-lg">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Frameworks</span>
                  <span className="font-bold text-primary text-lg">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Outils DevOps</span>
                  <span className="font-bold text-success text-lg">5</span>
                </div>
              </div>
            </motion.div>

            {/* Réalisations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-lg font-bold text-gray-800">Réalisations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications mobiles</span>
                  <span className="font-bold text-accent text-lg">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">APIs développées</span>
                  <span className="font-bold text-primary text-lg">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projets IoT</span>
                  <span className="font-bold text-success text-lg">1</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Objectifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="p-6 bg-gradient-to-r from-success/10 to-info/10 rounded-xl border border-success/20"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-success" />
              Objectifs 2025
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Alternance en développement logiciel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Spécialisation DevOps & Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span>Projets IoT et mobile avancés</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 