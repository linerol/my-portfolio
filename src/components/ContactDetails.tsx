"use client"
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, MessageSquare, Send, ArrowLeft, Calendar, Users, Globe } from "lucide-react";

const contactInfo = {
  email: "sessiessenamlinerol.tchecounnou@ynov.com",
  phone: "+33 6 XX XX XX XX",
  location: "France, Ile de France",
  availability: "Disponible pour alternance (2 semaines entreprise / 1 semaine école)",
  startDate: "Septembre 2025",
  workMode: "Remote, présentiel ou hybride"
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/linerol",
    icon: Github,
    color: "text-gray-800",
    bgColor: "bg-gray-100"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/linerol",
    icon: Linkedin,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    name: "Portfolio",
    url: "https://my-portfolio-152t.onrender.com",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

interface ContactDetailsProps {
  onClose: () => void;
}

export default function ContactDetails({ onClose }: ContactDetailsProps) {
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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
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
              <h1 className="text-2xl font-bold">Contact</h1>
            </div>
            <p className="text-white/80 text-sm">Disponible pour opportunités professionnelles</p>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-gray-800">{contactInfo.email}</p>
                  <p className="text-sm text-gray-600">Email professionnel</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20">
                <MapPin className="w-6 h-6 text-success" />
                <div>
                  <p className="font-semibold text-gray-800">{contactInfo.location}</p>
                  <p className="text-sm text-gray-600">Localisation</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20">
                <Calendar className="w-6 h-6 text-warning" />
                <div>
                  <p className="font-semibold text-gray-800">{contactInfo.availability}</p>
                  <p className="text-sm text-gray-600">Disponibilité : {contactInfo.startDate}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-info/10 to-primary/10 rounded-lg border border-info/20">
                <Users className="w-6 h-6 text-info" />
                <div>
                  <p className="font-semibold text-gray-800">Mode de travail</p>
                  <p className="text-sm text-gray-600">{contactInfo.workMode}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent/10 to-success/10 rounded-lg border border-accent/20">
                <Globe className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-gray-800">Langues</p>
                  <p className="text-sm text-gray-600">Français (natif), Anglais (courant)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/10 to-warning/10 rounded-lg border border-secondary/20">
                <MessageSquare className="w-6 h-6 text-secondary" />
                <div>
                  <p className="font-semibold text-gray-800">Réponse</p>
                  <p className="text-sm text-gray-600">Sous 24-48h en semaine</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Réseaux professionnels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl ${social.bgColor} border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <social.icon className={`w-8 h-8 ${social.color}`} />
                  <span className="font-semibold text-gray-700">{social.name}</span>
                  <span className="text-sm text-gray-500">Voir le profil</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Message direct</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Votre message..."
                rows={5}
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary-gradient text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Informations supplémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="p-6 bg-gradient-to-r from-success/10 to-info/10 rounded-xl border border-success/20"
          >
            <h3 className="font-semibold text-gray-800 mb-3">Informations supplémentaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Disponibilité</h4>
                <ul className="space-y-1">
                  <li>• Alternance : 2 semaines entreprise / 1 semaine école</li>
                  <li>• Début : Septembre 2025</li>
                  <li>• Durée : 1 an</li>
                  <li>• Localisation : France (remote possible)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Préférences</h4>
                <ul className="space-y-1">
                  <li>• Développement logiciel</li>
                  <li>• Technologies modernes</li>
                  <li>• Projets innovants</li>
                  <li>• Équipe collaborative</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 