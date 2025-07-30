"use client"
import { Code, Target, Zap, Cpu, Cloud, Heart, TrendingUp, Palette, ArrowLeft, Briefcase, Lightbulb, Award } from 'lucide-react';

interface PresentationDetailsProps {
  onClose: () => void;
}

export default function PresentationDetails({ onClose }: PresentationDetailsProps) {
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
            <h1 className="text-2xl font-bold">Présentation</h1>
          </div>
          <p className="text-white/90 text-sm font-medium">Qui suis-je ?</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="space-y-6 px-4">
        {/* Bio principale */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Qui suis-je ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Développeur <strong className="text-blue-600">logiciel orienté DevOps & IoT</strong> avec une approche structurée et autonome. 
            Je combine expertise technique et vision DevOps pour créer des solutions durables qui répondent aux besoins réels.
          </p>
        </div>

        {/* Objectif professionnel */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Objectif actuel</h2>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-2">Recherche d&apos;alternance</h3>
            <p className="text-gray-700 mb-3">
              Je recherche une <strong>alternance de 1 an</strong> à partir de septembre 2025
              dans le domaine du développement logiciel, mobile ou IoT.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                2 semaines entreprise / 1 semaine école
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                Remote, présentiel ou hybride
              </span>
            </div>
          </div>
        </div>

        {/* Philosophie */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-900">Philosophie</h2>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <blockquote className="text-gray-700 text-lg italic leading-relaxed">
              &ldquo;Coder utile, coder durable. Toujours partir du besoin utilisateur, 
              puis itérer, tester, automatiser et optimiser.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Spécialités techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Spécialités techniques</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">API REST</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Développement d&apos;APIs robustes avec NestJS, authentification JWT, 
                gestion d&apos;erreurs et documentation Swagger.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Mobile & IoT</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Applications mobiles Flutter, intégration Bluetooth Low Energy, 
                protocoles UART/SPI/I2C et lecture de capteurs.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Cloud className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">DevOps</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Conteneurisation Docker, CI/CD Jenkins, déploiement Azure, 
                gestion de microservices et monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Projets significatifs */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">Projets significatifs</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <Heart className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">App Santé Connectée</h3>
                <p className="text-gray-700 text-sm">
                  Application mobile pour collecte et suivi de mesures médicales via appareils connectés BLE.
                  Technologies : Flutter, BLE, NestJS, MongoDB.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dashboard Entreprise</h3>
                <p className="text-gray-700 text-sm">
                  Plateforme de suivi des agents de terrain avec reporting et métriques en temps réel.
                  Technologies : React, NestJS, PostgreSQL, Azure.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <Palette className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dresscode</h3>
                <p className="text-gray-700 text-sm">
                  Application de mode intelligente générant des outfits via IA pour une mode durable.
                  Technologies : Flutter, Python, IA/ML, Azure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approche de travail */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Approche de travail</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Structuré & Autonome</h3>
              <p className="text-gray-700 text-sm">
                Capacité à travailler seul sur des projets complexes avec une approche méthodique et organisée.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Fullstack</h3>
              <p className="text-gray-700 text-sm">
                Expertise sur toutes les couches d&apos;une architecture logicielle, de l&apos;embarqué au cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 