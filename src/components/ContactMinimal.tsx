"use client"
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";

interface ContactMinimalProps {
  onOpenDetails: () => void;
}

export default function ContactMinimal({ onOpenDetails }: ContactMinimalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Contact</h2>
        <p className="text-gray-600 text-xs">Disponible pour opportunités</p>
      </div>

      {/* Informations de contact principales */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <Mail className="w-4 h-4 text-primary" />
          <div>
            <p className="text-xs font-medium text-gray-800">contact@linerol.dev</p>
            <p className="text-xs text-gray-600">Email professionnel</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20">
          <MapPin className="w-4 h-4 text-success" />
          <div>
            <p className="text-xs font-medium text-gray-800">France</p>
            <p className="text-xs text-gray-600">Localisation</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20">
          <MessageSquare className="w-4 h-4 text-warning" />
          <div>
            <p className="text-xs font-medium text-gray-800">Alternance disponible</p>
            <p className="text-xs text-gray-600">Septembre 2025</p>
          </div>
        </div>
      </div>

      {/* Bouton voir plus */}
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 text-primary font-medium mt-auto justify-center"
      >
        <span className="text-xs">Voir les détails de contact</span>
        <ArrowRight className="w-3 h-3" />
      </motion.div>
    </motion.div>
  );
} 