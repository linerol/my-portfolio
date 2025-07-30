"use client"
import { motion } from "framer-motion";
import { FolderOpen, ArrowRight } from "lucide-react";

export default function Projects() {
  const handleOpenProjects = () => {
    // Logique pour ouvrir une page détaillée des projets
    console.log("Ouvrir les projets");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={handleOpenProjects}
    >
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-accent-gradient rounded-lg">
          <FolderOpen className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Projets</h2>
      </div>

      {/* Aperçu des projets */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-3 bg-gradient-to-br from-success/10 to-info/10 rounded-lg border border-success/20"
        >
          <h3 className="font-semibold text-gray-800 text-sm mb-1">App Santé</h3>
          <p className="text-xs text-gray-600">Flutter + BLE + NestJS</p>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-3 bg-gradient-to-br from-info/10 to-primary/10 rounded-lg border border-info/20"
        >
          <h3 className="font-semibold text-gray-800 text-sm mb-1">Dashboard</h3>
          <p className="text-xs text-gray-600">React + NestJS + Azure</p>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-3 bg-gradient-to-br from-accent/10 to-warning/10 rounded-lg border border-accent/20"
        >
          <h3 className="font-semibold text-gray-800 text-sm mb-1">Dresscode</h3>
          <p className="text-xs text-gray-600">Flutter + IA + Azure</p>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
        >
          <h3 className="font-semibold text-gray-800 text-sm mb-1">Portfolio</h3>
          <p className="text-xs text-gray-600">Next.js + Tailwind</p>
        </motion.div>
      </div>

      {/* Bouton voir plus */}
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 text-primary font-medium mt-4"
      >
        <span className="text-sm">Voir tous les projets</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
} 