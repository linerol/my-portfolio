"use client"
import { motion } from "framer-motion"
import { User, ArrowRight, Target, Sparkles } from 'lucide-react';

interface PresentationProps {
  onOpenDetails: () => void;
}

export default function Presentation({ onOpenDetails }: PresentationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-gradient rounded-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Présentation</h2>
      </div>

      {/* Bio principale */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-700 text-lg leading-relaxed mb-6"
      >
        Développeur <strong className="text-primary">logiciel orienté DevOps & IoT</strong> avec une approche structurée et autonome. 
        Je combine expertise technique et vision DevOps pour créer des solutions durables.
      </motion.p>

      {/* Objectif actuel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 mb-4"
      >
        <Target className="w-5 h-5 text-primary" />
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Objectif actuel</h3>
          <p className="text-gray-600 text-sm">
            Recherche d'une <strong>alternance de 1 an</strong> à partir de septembre 2025
          </p>
        </div>
      </motion.div>

      {/* Philosophie */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-3 p-4 bg-gradient-to-r from-success/10 to-info/10 rounded-xl border border-success/20 mb-4"
      >
        <Sparkles className="w-5 h-5 text-success" />
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Philosophie</h3>
          <p className="text-gray-600 text-sm italic">
            "Coder utile, coder durable. Toujours partir du besoin utilisateur."
          </p>
        </div>
      </motion.div>

      {/* Bouton voir plus */}
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 text-primary font-medium mt-auto"
      >
        <span className="text-sm">Voir les détails</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
} 