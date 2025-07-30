"use client"
import { motion } from "framer-motion";
import { 
  SiNestjs, SiFlutter, SiDocker, SiJenkins, SiBluetooth,
  SiReact, SiTypescript, SiJavascript, SiPython, SiMongodb, SiPostgresql,
  SiArduino, SiGit, SiGithub, SiVsco, SiNodedotjs, SiExpress, SiTailwindcss,
  SiKubernetes, SiCloudinary, SiPrisma, SiTypeorm,
  SiJest, SiPytest, SiSwagger, SiCplusplus, SiSharp, SiHaskell
} from "react-icons/si";
import { Cloud, Database, Cpu, Zap, Code, Settings, TestTube, Palette } from "lucide-react";

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
  { icon: SiExpress, name: "Express.js", color: "text-gray-600", category: "Backend" },
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
  { icon: SiPrisma, name: "Prisma", color: "text-gray-800", category: "Database" },
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

export default function TechnicalSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full h-full flex flex-col"
    >
      {/* En-tête */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Compétences Techniques</h2>
        <p className="text-gray-600 text-sm">Expertise complète - Du développement à la production</p>
      </div>

      {/* Grille des compétences */}
      <div className="grid grid-cols-4 gap-2 flex-1 overflow-y-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/30"
          >
            <skill.icon className={`w-6 h-6 ${skill.color} mb-1`} />
            <span className="text-xs font-medium text-gray-700 text-center leading-tight">
              {skill.name}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              {skill.category}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Légende */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-4"
      >
        <p className="text-xs text-gray-500">
          Expertise fullstack : embarqué, mobile, web et cloud
        </p>
      </motion.div>
    </motion.div>
  );
} 