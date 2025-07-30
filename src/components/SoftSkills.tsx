"use client"
import { motion } from "framer-motion";
import { 
  Users, Target, MessageSquare, 
  Heart, Zap, Cpu, Settings,
  Brain, Gauge, Layers, Eye, Search
} from "lucide-react";

const softSkills = [
  { 
    icon: Brain, 
    name: "Analyse & Résolution", 
    description: "Problèmes complexes et optimisation",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  { 
    icon: Gauge, 
    name: "Performance", 
    description: "Optimisation logicielle et efficacité",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  { 
    icon: MessageSquare, 
    name: "Communication", 
    description: "Technique écrite et orale",
    color: "text-info",
    bgColor: "bg-info/10"
  },
  { 
    icon: Layers, 
    name: "Fullstack", 
    description: "Toutes les couches d'architecture",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  { 
    icon: Cpu, 
    name: "Adaptabilité", 
    description: "Embarqué, mobile et cloud",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  { 
    icon: Settings, 
    name: "Structuré", 
    description: "Approche méthodique et organisée",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  { 
    icon: Zap, 
    name: "Autonomie", 
    description: "Initiative et travail indépendant",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  { 
    icon: Users, 
    name: "Esprit d'équipe", 
    description: "Collaboration et partage",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  { 
    icon: Search, 
    name: "Curiosité", 
    description: "Technique et apprentissage continu",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  { 
    icon: Eye, 
    name: "Rigueur", 
    description: "Souci du détail et qualité",
    color: "text-info",
    bgColor: "bg-info/10"
  },
  { 
    icon: Target, 
    name: "Focus utilisateur", 
    description: "Centré sur les besoins réels",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  { 
    icon: Heart, 
    name: "Impact", 
    description: "Solutions utiles au quotidien",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
];

export default function SoftSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full h-full flex flex-col"
    >
      {/* En-tête */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Soft Skills</h2>
        <p className="text-gray-600 text-sm">Compétences transversales & approche</p>
      </div>

      {/* Grille des soft skills */}
      <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`flex items-center gap-2 p-2 rounded-lg ${skill.bgColor} border border-gray-100 hover:shadow-md transition-all duration-300`}
          >
            <div className={`p-1.5 rounded-lg bg-white shadow-sm`}>
              <skill.icon className={`w-4 h-4 ${skill.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 text-xs leading-tight">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-4"
      >
        <p className="text-xs text-gray-500">
          Approche structurée et autonome pour des solutions durables
        </p>
      </motion.div>
    </motion.div>
  );
} 