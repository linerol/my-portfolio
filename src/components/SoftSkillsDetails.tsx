"use client"
import { motion } from "framer-motion";
import { 
  Users, Lightbulb, Target, MessageSquare, 
  Clock, TrendingUp, Heart, Zap, Cpu, Settings,
  Brain, Gauge, Layers, GitBranch, Eye, Search, ArrowLeft
} from "lucide-react";

const coreSkills = [
  { 
    icon: Brain, 
    name: "Analyse & Résolution", 
    description: "Problèmes complexes et optimisation",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  { 
    icon: MessageSquare, 
    name: "Communication", 
    description: "Technique écrite et orale",
    color: "text-info",
    bgColor: "bg-info/10"
  },
  { 
    icon: Users, 
    name: "Esprit d'équipe", 
    description: "Collaboration et partage",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  { 
    icon: Zap, 
    name: "Autonomie", 
    description: "Initiative et travail indépendant",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
];

const technicalApproach = [
  { 
    icon: Gauge, 
    name: "Performance", 
    description: "Optimisation logicielle et efficacité",
    color: "text-success",
    bgColor: "bg-success/10"
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
];

const personalQualities = [
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

interface SoftSkillsDetailsProps {
  onClose: () => void;
}

export default function SoftSkillsDetails({ onClose }: SoftSkillsDetailsProps) {
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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
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
              <h1 className="text-2xl font-bold">Compétences Transversales</h1>
            </div>
            <p className="text-white/80 text-sm">Soft Skills & Approche Professionnelle</p>
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
            <h2 className="text-xl font-bold text-gray-800 mb-3">Approche structurée et orientée utilisateur</h2>
            <p className="text-gray-700 leading-relaxed">
              Mes compétences transversales sont centrées sur une approche méthodique et collaborative. 
              Je combine rigueur technique avec une communication efficace pour créer des solutions durables 
              qui répondent aux vrais besoins des utilisateurs. Mon objectif : coder utile et coder durable.
            </p>
          </motion.div>

          {/* Compétences principales */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Compétences Interpersonnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-start gap-4 p-4 rounded-xl ${skill.bgColor} border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Approche technique */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-success" />
              Approche Technique
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalApproach.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-start gap-4 p-4 rounded-xl ${skill.bgColor} border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Qualités personnelles */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-warning" />
              Qualités Personnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalQualities.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-start gap-4 p-4 rounded-xl ${skill.bgColor} border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Méthodologie de travail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 p-6 bg-gradient-to-r from-success/10 to-info/10 rounded-xl border border-success/20"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Méthodologie de travail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Approche centrée utilisateur
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Analyse des besoins réels avant développement</li>
                  <li>• Tests utilisateurs et feedback continu</li>
                  <li>• Itérations basées sur les retours</li>
                  <li>• Documentation claire pour l'équipe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-success" />
                  Méthodes agiles
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Scrum avec sprints de 2 semaines</li>
                  <li>• Daily standups et rétrospectives</li>
                  <li>• Gestion de projet avec Jira/Trello</li>
                  <li>• Communication transparente avec l'équipe</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Philosophie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="p-6 bg-gradient-to-r from-warning/10 to-accent/10 rounded-xl border border-warning/20"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-warning" />
              Philosophie de développement
            </h3>
            <blockquote className="text-gray-700 italic text-lg leading-relaxed">
              "Coder utile, coder durable. Toujours partir du besoin utilisateur pour créer des solutions 
              qui améliorent réellement le quotidien. La qualité du code et la maintenabilité sont aussi 
              importantes que la fonctionnalité."
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 