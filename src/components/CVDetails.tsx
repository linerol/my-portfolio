"use client"
import { motion } from "framer-motion";
import { Download, FileText, ArrowLeft, Users, Code, Award } from "lucide-react";

interface CVDetailsProps {
  onClose: () => void;
}

export default function CVDetails({ onClose }: CVDetailsProps) {
  const handleDownload = () => {
    // Logique de téléchargement du CV
    console.log("Téléchargement du CV");
    // Ici vous pouvez ajouter la logique pour télécharger le fichier CV
  };

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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
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
              <h1 className="text-2xl font-bold">CV</h1>
            </div>
            <p className="text-white/80 text-sm">Curriculum Vitae</p>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Aperçu du CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Aperçu du CV</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Informations générales
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Développeur logiciel orienté DevOps & IoT</li>
                  <li>• Mastère 1 en cours à YNOV Paris</li>
                  <li>• Bachelor en informatique (EPITECH)</li>
                  <li>• Spécialisation fullstack et mobile</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-success" />
                  Compétences clés
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 8 langages de programmation</li>
                  <li>• 5 technologies Cloud/DevOps</li>
                  <li>• 5 bases de données</li>
                  <li>• 4 technologies IoT/Embarqué</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Sections du CV */}
          <div className="space-y-6">
            {/* Formation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Formation
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Mastère 1 en Développement Logiciel, Mobile & IoT</h4>
                    <p className="text-sm text-gray-600">YNOV Paris • 2024 - 2026 (En cours)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bachelor en informatique</h4>
                    <p className="text-sm text-gray-600">EPITECH Cotonou • 2021 - 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Expérience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-success" />
                Expérience
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Développeur logiciel</h4>
                    <p className="text-sm text-gray-600">Projets personnels et académiques • 2021 - Présent</p>
                    <p className="text-xs text-gray-500 mt-1">React, NestJS, Flutter, IoT, DevOps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Projets IoT et Mobile</h4>
                    <p className="text-sm text-gray-600">Applications santé et monitoring • 2023 - Présent</p>
                    <p className="text-xs text-gray-500 mt-1">BLE, Capteurs, Flutter, Azure</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compétences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-warning" />
                Compétences techniques
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Langages</h4>
                  <p className="text-sm text-gray-600">Python, JavaScript, TypeScript, C++, C#, C, Haskell, ASM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Frameworks</h4>
                  <p className="text-sm text-gray-600">React, Flutter, NestJS, Express.js</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-gray-600">Docker, Kubernetes, Azure, Jenkins, GitHub Actions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">IoT & Mobile</h4>
                  <p className="text-sm text-gray-600">Arduino, BLE, Capteurs, React Native</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bouton de téléchargement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8"
          >
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-success-gradient text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Télécharger le CV complet (PDF)
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Le CV contient toutes les informations détaillées sur mon parcours
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 