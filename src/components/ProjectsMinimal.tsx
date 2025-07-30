"use client"
import { FolderOpen, ArrowRight, Code, Zap, HeartPulse, Globe } from "lucide-react";
import Image from "next/image";

interface ProjectsMinimalProps {
  onOpenDetails: () => void;
}

const mainProjects = [
  {
    name: "App Santé IoT",
    tech: "Centralisation des données santé (Flutter, BLE, NestJS)",
    status: "En cours",
    color: "from-success/10 to-info/10",
    borderColor: "border-success/20",
    image: null, // Icône utilisée à la place de l'image
    description: "Application mobile pour centraliser et visualiser les données médicales issues de capteurs connectés. Suivi santé, historique, graphiques, BLE."
  },
  {
    name: "Quantix",
    tech: "Next.js, NestJS, MongoDB, Azure",
    status: "En test",
    color: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
    image: "/quantix.png",
    description: "Gestion sécurisée et moderne de produits avec authentification, upload d&apos;images, API documentée et déploiement cloud."
  },
];

export default function ProjectsMinimal({ onOpenDetails }: ProjectsMinimalProps) {
  return (
    <div
      className="w-full h-full flex flex-col cursor-pointer"
      onClick={onOpenDetails}
    >
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-accent-gradient rounded-lg">
          <FolderOpen className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Projets</h2>
      </div>

      {/* Projets principaux avec images */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {mainProjects.map((project) => (
          <div
            key={project.name}
            className={`p-3 bg-gradient-to-br ${project.color} rounded-lg border ${project.borderColor} hover:shadow-md transition-all duration-300`}
          >
            {/* Image du projet */}
            <div className="w-full h-20 mb-3 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              {project.name === "App Santé IoT" ? (
                <HeartPulse className="w-8 h-8 text-pink-500" />
              ) : project.name === "Portfolio Web" ? (
                <Globe className="w-8 h-8 text-indigo-500" />
              ) : project.name === "Quantix" ? (
                <Image
                  src={project.image || ""}
                  alt="Quantix logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              ) : (
                <FolderOpen className="w-8 h-8 text-gray-500" />
              )}
            </div>
            {/* Informations du projet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 text-sm">{project.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  project.status === "En cours" ? "bg-warning/20 text-warning" : project.status === "En test" ? "bg-info/20 text-info" : "bg-success/20 text-success"
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-gray-600">{project.tech}</p>
              {project.description && (
                <p className="text-xs text-gray-500 mt-1">{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Technologies utilisées */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 mb-3">
        <Code className="w-4 h-4 text-primary" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Stack variée</p>
          <p className="text-xs text-gray-600">React, Flutter, NestJS, IoT</p>
        </div>
      </div>

      {/* Méthodologie */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20 mb-3">
        <Zap className="w-4 h-4 text-success" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Approche</p>
          <p className="text-xs text-gray-600">Agile, Tests, CI/CD</p>
        </div>
      </div>

      {/* Bouton voir plus */}
      <div className="flex items-center gap-2 text-primary font-medium mt-auto">
        <span className="text-xs">Voir tous les projets</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
} 