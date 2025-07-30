"use client"
import { motion } from "framer-motion";
import { TrendingUp, Calendar, Users, Award, ArrowRight } from "lucide-react";

interface QuickStatsProps {
  onOpenDetails: () => void;
}

export default function QuickStats({ onOpenDetails }: QuickStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 bg-warning-gradient rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Statistiques</h2>
        </div>
        <p className="text-gray-600 text-xs">Aperçu rapide</p>
      </div>

      {/* Statistiques principales */}
      <div className="space-y-3 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
        >
          <Calendar className="w-4 h-4 text-primary" />
          <div>
            <p className="text-sm font-semibold text-gray-800">3+ années</p>
            <p className="text-xs text-gray-600">Expérience dev</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-center gap-3 p-3 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20"
        >
          <Users className="w-4 h-4 text-success" />
          <div>
            <p className="text-sm font-semibold text-gray-800">4 projets</p>
            <p className="text-xs text-gray-600">Réalisés</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center gap-3 p-3 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20"
        >
          <Award className="w-4 h-4 text-warning" />
          <div>
            <p className="text-sm font-semibold text-gray-800">8 langages</p>
            <p className="text-xs text-gray-600">Maîtrisés</p>
          </div>
        </motion.div>
      </div>

      {/* Bouton voir plus */}
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 text-primary font-medium mt-auto justify-center"
      >
        <span className="text-xs">Voir les détails</span>
        <ArrowRight className="w-3 h-3" />
      </motion.div>
    </motion.div>
  );
} 