"use client"
import { motion } from "framer-motion";
import { 
  SiNestjs, SiFlutter, SiDocker, SiJenkins, SiBluetooth,
  SiReact, SiTypescript, SiJavascript, SiPython, SiMongodb, SiPostgresql,
  SiArduino, SiGit, SiGithub, SiVsco, SiNodedotjs, SiTailwindcss,
  SiKubernetes, SiCloudinary, SiTypeorm,
  SiJest, SiPytest, SiSwagger, SiCplusplus, SiSharp, SiHaskell
} from "react-icons/si";
import { Cloud, Database, Cpu, Zap, Code, Settings, TestTube, Palette, ArrowLeft } from "lucide-react";

const skills = [
  // Langages de programmation
  { icon: SiPython, name: "Python", color: "text-green-600", category: "Langages" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500", category: "Langages" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", category: "Langages" },
  { icon: SiCplusplus, name: "C++", color: "text-blue-500", category: "Langages" },
  { icon: SiSharp, name: "C#", color: "text-purple-600", category: "Langages" },
  { icon: Code, name: "C", color: "text-blue-700", category: "Langages" },
  { icon: SiHaskell, name: "Haskell", color: "text-purple-500", category: "Langages" },
  { icon: Code, name: "ASM", color: "text-gray-600", category: "Langages" },
  
  // Backend
  { icon: SiNestjs, name: "NestJS", color: "text-red-500", category: "Backend" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-600", category: "Backend" },
  { icon: Zap, name: "API REST", color: "text-blue-500", category: "Backend" },
  { icon: Settings, name: "JWT", color: "text-orange-500", category: "Backend" },
  
  // Frontend/Mobile
  { icon: SiReact, name: "React", color: "text-cyan-500", category: "Frontend" },
  { icon: SiReact, name: "React Native", color: "text-cyan-600", category: "Mobile" },
  { icon: SiFlutter, name: "Flutter", color: "text-blue-500", category: "Mobile" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400", category: "Frontend" },
  { icon: Palette, name: "Material UI", color: "text-blue-600", category: "Frontend" },
  
  // IoT & Embarqué
  { icon: SiArduino, name: "Arduino", color: "text-green-600", category: "IoT" },
  { icon: SiBluetooth, name: "BLE", color: "text-blue-400", category: "IoT" },
  { icon: Cpu, name: "UART/SPI/I2C", color: "text-gray-600", category: "IoT" },
  { icon: Zap, name: "Capteurs", color: "text-green-500", category: "IoT" },
  
  // Bases de données
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500", category: "Database" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500", category: "Database" },
  { icon: Database, name: "MySQL", color: "text-orange-500", category: "Database" },
  { icon: SiTypeorm, name: "TypeORM", color: "text-red-500", category: "Database" },
  
  // Cloud & DevOps
  { icon: SiDocker, name: "Docker", color: "text-blue-600", category: "DevOps" },
  { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500", category: "DevOps" },
  { icon: SiJenkins, name: "Jenkins", color: "text-orange-500", category: "CI/CD" },
  { icon: SiGithub, name: "GitHub Actions", color: "text-gray-800", category: "CI/CD" },
  { icon: Cloud, name: "Azure", color: "text-blue-700", category: "Cloud" },
  { icon: SiCloudinary, name: "Cloudinary", color: "text-orange-500", category: "Cloud" },
  
  // Tests & Documentation
  { icon: SiJest, name: "Jest", color: "text-red-500", category: "Tests" },
  { icon: SiPytest, name: "Pytest", color: "text-green-600", category: "Tests" },
  { icon: SiSwagger, name: "Swagger", color: "text-green-500", category: "Docs" },
  { icon: TestTube, name: "Tests Unitaires", color: "text-purple-500", category: "Tests" },
  
  // Outils
  { icon: SiGit, name: "Git", color: "text-orange-600", category: "Outils" },
  { icon: SiGithub, name: "GitHub", color: "text-gray-800", category: "Outils" },
  { icon: SiVsco, name: "VS Code", color: "text-blue-500", category: "Outils" },
];

const categories = [
  { name: "Langages", icon: Code, color: "text-blue-600", bgColor: "bg-blue-50" },
  { name: "Backend", icon: Settings, color: "text-green-600", bgColor: "bg-green-50" },
  { name: "Frontend", icon: Palette, color: "text-purple-600", bgColor: "bg-purple-50" },
  { name: "Mobile", icon: Cpu, color: "text-orange-600", bgColor: "bg-orange-50" },
  { name: "IoT", icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50" },
  { name: "Database", icon: Database, color: "text-red-600", bgColor: "bg-red-50" },
  { name: "DevOps", icon: Cloud, color: "text-indigo-600", bgColor: "bg-indigo-50" },
  { name: "CI/CD", icon: Settings, color: "text-blue-600", bgColor: "bg-blue-50" },
  { name: "Cloud", icon: Cloud, color: "text-cyan-600", bgColor: "bg-cyan-50" },
  { name: "Tests", icon: TestTube, color: "text-pink-600", bgColor: "bg-pink-50" },
  { name: "Docs", icon: TestTube, color: "text-green-600", bgColor: "bg-green-50" },
  { name: "Outils", icon: Settings, color: "text-gray-600", bgColor: "bg-gray-50" },
];

interface TechnicalSkillsDetailsProps {
  onClose: () => void;
}

export default function TechnicalSkillsDetails({ onClose }: TechnicalSkillsDetailsProps) {
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
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold">Compétences Techniques</h1>
            </div>
            <p className="text-white/80 text-sm">Expertise fullstack complète</p>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Catégories */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Catégories</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <motion.div
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl ${category.bgColor} border border-gray-200`}
                >
                  <category.icon className={`w-8 h-8 ${category.color} mb-2`} />
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-600">
                    {skills.filter(s => s.category === category.name).length} technologies
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Toutes les compétences */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Toutes les compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/30"
                >
                  <skill.icon className={`w-8 h-8 ${skill.color} mb-2`} />
                  <span className="font-medium text-gray-700 text-center leading-tight">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-3">Expertise Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Développement Fullstack</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Frontend : React, React Native, Flutter</li>
                  <li>• Backend : NestJS, Node.js</li>
                  <li>• Bases de données : MongoDB, PostgreSQL, MySQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">DevOps & Cloud</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Conteneurisation : Docker, Kubernetes</li>
                  <li>• CI/CD : Jenkins, GitHub Actions</li>
                  <li>• Cloud : Azure, Cloudinary</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 