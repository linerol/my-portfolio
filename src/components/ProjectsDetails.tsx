"use client"
import { useState } from "react";
import { 
  FolderOpen, ArrowLeft, Calendar, Users, Code, Zap, 
  ExternalLink, Github, Globe, Smartphone, Database, Cloud,
  Search, Filter, SortAsc, SortDesc, HeartPulse, Cpu, Leaf
} from "lucide-react";

const projects = [
  {
    id: "greenhabit",
    name: "GreenHabit",
    status: "Terminé",
    period: "21-22 janvier 2025",
    team: "Équipe hackathon",
    description: "Application mobile pour aider les utilisateurs à adopter des habitudes plus respectueuses de l'environnement. Sensibilisation et encouragement à réduire l'impact écologique au quotidien.",
    public: "Utilisateurs souhaitant adopter un mode de vie plus écologique. Personnes qui veulent suivre des objectifs environnementaux personnalisés, obtenir des informations sur l'impact écologique des produits, apprendre de nouvelles pratiques écologiques et participer à une communauté engagée pour l'environnement.",
    objectif: "Aider les utilisateurs à adopter des habitudes plus respectueuses de l'environnement. Application mobile conçue pour sensibiliser et encourager les utilisateurs à réduire leur impact écologique au quotidien.",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "Open Food Facts API", "AsyncStorage", "Expo Camera", "Jest", "TypeDoc"],
    features: [
      "Suivi des objectifs personnalisés : Définition et suivi d'objectifs écologiques avec mini-tâches",
      "Notifications et rappels quotidiens : Système de motivation personnalisé",
      "Scanner de produits : Scan de codes-barres pour obtenir des informations sur l'impact écologique",
      "Articles et tutoriels : Contenu éducatif adapté aux objectifs de l'utilisateur",
      "Comparaison des progrès : Comparaison avec d'autres utilisateurs et défis communautaires",
      "Système d'authentification : Connexion utilisateur avec gestion des profils"
    ],
    challenges: [
      "Contrainte temporelle : Développement en 36 heures lors d'un hackathon",
      "Intégration d'APIs : Utilisation de l'API Open Food Facts pour les informations produits",
      "Fonctionnalité de scan : Implémentation du scan de codes-barres avec la caméra",
      "Gestion d'état : Système d'authentification et stockage local des données utilisateur"
    ],
    role: "Développeur frontend mobile, avec responsabilité sur l'architecture de l'application et l'intégration des APIs. Projet développé lors d'un hackathon de 36 heures.",
    skills: [
      "Développement mobile : Maîtrise de React Native et Expo",
      "Intégration d'APIs : Utilisation d'APIs externes (Open Food Facts)",
      "Gestion d'état : Implémentation d'un système d'authentification",
      "UX/UI : Interface utilisateur intuitive avec navigation fluide",
      "Travail en équipe : Collaboration efficace lors d'un hackathon",
      "Documentation : Documentation technique complète avec TypeDoc"
    ],
    state: "Projet terminé et fonctionnel, disponible en open source",
    github: "https://github.com/linerol/greenHabit-frontend-mobile-app",
    demo: null,
    color: "from-green-500 to-emerald-500",
    icon: Leaf,
    image: null,
    date: "2025-01"
  },
  {
    id: "raytracer-engine",
    name: "RayTracer Engine",
    status: "Terminé",
    period: "Mai 2023",
    team: "4 développeurs",
    description: "Moteur de rendu 3D photoréaliste basé sur le ray tracing pour simuler le transport de la lumière et générer des images 3D réalistes.",
    public: "Académique : Projet d'étude pour les étudiants en informatique. Éducatif : Démonstration des concepts de ray tracing et de rendu 3D. Développeurs : Référence pour l'implémentation d'algorithmes de rendu.",
    objectif: "Implémenter un système de rendu photoréaliste utilisant la technique du ray tracing pour simuler le transport de la lumière et générer des images 3D réalistes. Projet académique (EPITECH) visant à démontrer les concepts avancés de l'informatique graphique.",
    technologies: ["C++20", "CMake", "SFML", "Doxygen"],
    features: [
      "Rendu photoréaliste avec simulation de lumière avancée",
      "Primitives géométriques : sphères, plans, cylindres",
      "Système de matériaux : métallique, diélectrique, lambertien",
      "Anti-aliasing avec multi-sampling",
      "Système d'éclairage : ambiant, diffus, ponctuel, directionnel",
      "Format de scène configurable via fichiers .cfg",
      "Interface graphique avec SFML",
      "Gestion d'erreurs robuste"
    ],
    challenges: [
      "Implémentation du ray tracing : Algorithmes complexes de calcul d'intersection",
      "Performance : Optimisation des calculs de rendu",
      "Architecture logicielle : Conception modulaire et extensible",
      "Gestion de la mémoire : Utilisation de smart pointers en C++",
      "Interface utilisateur : Intégration SFML pour l'affichage"
    ],
    role: "Développement des primitives géométriques et mathématiques. Travail en équipe de 4 développeurs avec répartition des tâches : Aman Menda (moteur principal), Godlyn Kikissagbe (système de matériaux), Linerol Tchecounnou (primitives et mathématiques), Fardiath Abibou (caméra et éclairage).",
    skills: [
      "Programmation C++ avancée : Templates, smart pointers, exceptions",
      "Algorithmes de rendu 3D : Ray tracing, calculs géométriques",
      "Architecture logicielle : Design patterns, modularité",
      "Mathématiques appliquées : Géométrie 3D, algèbre vectorielle",
      "Travail en équipe : Collaboration sur un projet complexe",
      "Documentation : Utilisation de Doxygen"
    ],
    state: "Projet académique terminé",
    github: "https://github.com/linerol/raytracing",
    demo: null,
    color: "from-purple-500 to-pink-500",
    icon: Cpu,
    image: null,
    date: "2023-05"
  },
  {
    id: "app-sante",
    name: "App Santé IoT",
    status: "En cours",
    period: "Janvier 2025 - Juillet 2025",
    team: "2 développeurs",
    description: "Application mobile pour centraliser et visualiser les données médicales issues de capteurs connectés (BLE). Suivi santé, historique, graphiques clairs.",
    public: "Patients chroniques, utilisateurs santé, personnes équipées de dispositifs médicaux connectés.",
    objectif: "Centraliser toutes les données médicales personnelles (température, tension, glycémie, SPO2, ECG, etc.) et faciliter le suivi grâce à des graphiques et historiques.",
    technologies: ["Flutter", "NestJS", "BLE", "MySQL (Supabase)", "Cloudinary", "Coolify"],
    features: [
      "Connexion Bluetooth aux appareils médicaux (BLE)",
      "Récupération automatique et ajout manuel des mesures",
      "Visualisation graphique de l'évolution des indicateurs",
      "Historique complet des mesures",
      "Stockage cloud sécurisé"
    ],
    challenges: [
      "Documentation BLE imprécise pour certains appareils",
      "Montée en compétence rapide sur Flutter et BLE"
    ],
    role: "Développement API NestJS, intégration BLE, base de données et backend.",
    skills: [
      "Polyvalence technique (Flutter, NestJS, BLE, DB, déploiement)",
      "Apprentissage rapide",
      "Approche solution en contexte santé"
    ],
    state: "En développement (projet sous contrat)",
    icon: HeartPulse,
    image: null,
    date: "2025-01"
  },
  {
    id: "portfolio-web",
    name: "Portfolio Web",
    status: "Terminé",
    period: "Juillet 2025",
    team: "Solo",
    description: "Portfolio personnel moderne, responsive et animé pour présenter mes projets, compétences et parcours.",
    objectif: "Présenter mon parcours, mes projets et mes compétences de façon professionnelle et interactive.",
    public: "Recruteurs, collaborateurs, clients potentiels, communauté tech.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Design responsive et moderne",
      "Animations fluides (Framer Motion)",
      "Performance optimisée",
      "Navigation fluide entre les sections"
    ],
    challenges: [
      "Création d'un design unique et différenciant",
      "Optimisation des performances et du référencement",
      "Accessibilité complète sur tous supports"
    ],
    role: "Développement complet du site (frontend, intégration, design, déploiement)",
    skills: [
      "Maîtrise Next.js, TypeScript, Tailwind CSS",
      "Design UI/UX moderne",
      "Accessibilité et responsive"
    ],
    state: "En ligne et maintenu",
    github: "https://github.com/linerol/portfolio",
    demo: "https://linerol.dev",
    color: "from-indigo-500 to-cyan-500",
    icon: Globe,
    image: null,
    date: "2025-07"
  },
  {
    id: "quantix",
    name: "Quantix",
    status: "En test",
    period: "Juillet 2025",
    team: "Solo",
    description: "Application web de gestion sécurisée et moderne de produits avec authentification, upload d’images, API documentée et déploiement cloud.",
    objectif: "Permettre à chaque utilisateur de gérer ses produits de façon simple, moderne et sécurisée, avec une authentification robuste et une architecture scalable.",
    public: "Utilisateurs finaux (indépendants, PME, étudiants) ou organisations ayant besoin d’une gestion de produits sécurisée.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB", "Azure Blob Storage", "Azure App Service", "Docker", "JWT", "bcrypt", "Passport.js", "class-validator", "Swagger"],
    features: [
      "Authentification sécurisée (JWT, bcrypt, Passport.js)",
      "Gestion des utilisateurs et produits (CRUD, isolation)",
      "Upload d’images produits (Azure Blob Storage)",
      "Validation stricte des données (class-validator)",
      "Documentation Swagger auto-générée",
      "Sécurité avancée (routes protégées, isolation des données)",
      "Architecture modulaire et scalable"
    ],
    challenges: [
      "Sécurisation de l’authentification et des données",
      "Upload d’images sur Azure Blob Storage",
      "Validation stricte des données",
      "Déploiement cloud avec Docker et CI/CD",
      "Documentation dynamique Swagger",
      "Organisation modulaire du backend"
    ],
    role: "Développeur fullstack (conception, développement, déploiement, sécurité, documentation)",
    skills: [
      "Développement fullstack (Next.js, NestJS, MongoDB)",
      "Sécurité web (authentification, gestion des droits, hashage)",
      "Cloud & DevOps (Azure, Docker)",
      "Architecture scalable et modulaire",
      "Documentation et validation API",
      "Autonomie et rigueur"
    ],
    state: "En ligne (stade de test)",
    github: "https://github.com/linerol/quantix-app",
    demo: "https://quantix-app-docker-dgdee2e0bjf4dfc9.francecentral-01.azurewebsites.net/products",
    color: "from-cyan-500 to-blue-500",
    icon: Database,
    image: "/quantix.png",
    date: "2025-07",
    anecdote: "Fier d’avoir intégré l’upload d’images sur Azure Blob Storage et déployé l’ensemble sur Azure App Service avec Docker. L’architecture modulaire et la documentation Swagger rendent le projet facilement maintenable. Projet 100% personnel, mené de A à Z."
  }
];

interface ProjectsDetailsProps {
  onClose: () => void;
}

export default function ProjectsDetails({ onClose }: ProjectsDetailsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Filtrage et tri des projets
  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === "all" || project.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return b.date.localeCompare(a.date);
      } else {
        return a.date.localeCompare(b.date);
      }
    });

  return (
    <div className="w-full h-full bg-gray-50">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white mb-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold">Mes Projets</h1>
          </div>
          <p className="text-white/90 text-sm font-medium">Portfolio de réalisations techniques</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="space-y-6 px-4">
        {/* Introduction */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Développement fullstack et innovation</h2>
          <p className="text-gray-700 leading-relaxed">
            Mes projets reflètent ma passion pour le développement fullstack, l'IoT et l'innovation. 
            Chaque projet est une opportunité d'apprendre de nouvelles technologies et de créer des solutions 
            qui améliorent le quotidien des utilisateurs.
          </p>
        </div>

        {/* Système de filtres */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Recherche */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher un projet, technologie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>
            </div>

            {/* Filtre par statut */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-gray-900 bg-white"
              >
                <option value="all">Tous les statuts</option>
                <option value="En cours">En cours</option>
                <option value="Terminé">Terminé</option>
              </select>
            </div>

            {/* Tri par date */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-900 font-medium"
              >
                {sortOrder === "newest" ? <SortDesc className="w-4 h-4" /> : <SortAsc className="w-4 h-4" />}
                <span className="text-sm">
                  {sortOrder === "newest" ? "Plus récent" : "Plus ancien"}
                </span>
              </button>
            </div>
          </div>

          {/* Résultats */}
          <div className="mt-4 text-sm text-gray-700 font-semibold">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Projets filtrés */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* En-tête du projet */}
              <div className={`bg-gradient-to-r ${project.color || "from-pink-500 to-blue-500"} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{project.name}</h3>
                      <p className="text-white/90 text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "En cours" 
                        ? "bg-yellow-400/30 text-yellow-100 border border-yellow-300/50" 
                        : "bg-green-400/30 text-green-100 border border-green-300/50"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              {/* Image du projet : rien pour App Santé IoT */}
              {/* Contenu du projet enrichi */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Bloc 1 : Objectif & Public */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Objectif</h4>
                      <p className="text-sm text-gray-700">{project.objectif}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Public cible</h4>
                      <p className="text-sm text-gray-700">{project.public}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">État</h4>
                      <p className="text-sm text-gray-700">{project.state}</p>
                    </div>
                  </div>
                  {/* Bloc 2 : Fonctionnalités & Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités</h4>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-2">Stack technique</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Bloc 3 : Défis, rôle, compétences */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Défis</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {project.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mon rôle</h4>
                      <p className="text-sm text-gray-700">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Compétences mises en avant</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {project.skills.map((skill) => (
                          <li key={skill}>• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Liens */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 