"use client"
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, Download } from "lucide-react";

const contactInfo = {
  email: "sessiessenamlinerol.tchecounnou@ynov.com",
  phone: "+33 6 XX XX XX XX",
  location: "France, Ile-de-France",
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
    url: "https://linerol.dev",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* En-tête */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact</h2>
        <p className="text-gray-600 text-sm">Disponible pour opportunités professionnelles</p>
      </div>

      {/* Informations de contact */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <Mail className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-gray-800">{contactInfo.email}</p>
            <p className="text-xs text-gray-600">Email professionnel</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-success/10 to-info/10 rounded-lg border border-success/20">
          <MapPin className="w-5 h-5 text-success" />
          <div>
            <p className="text-sm font-medium text-gray-800">{contactInfo.location}</p>
            <p className="text-xs text-gray-600">Localisation</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20">
          <MessageSquare className="w-5 h-5 text-warning" />
          <div>
            <p className="text-sm font-medium text-gray-800">{contactInfo.availability}</p>
            <p className="text-xs text-gray-600">Disponibilité : {contactInfo.startDate}</p>
          </div>
        </div>
      </div>

      {/* Bouton d'envoi d'email */}
      <div className="mb-6">
        <button
          onClick={handleEmailClick}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary-gradient text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          M'envoyer un email
        </button>
      </div>

      {/* Réseaux sociaux */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3 text-sm">Réseaux professionnels</h3>
        <div className="grid grid-cols-3 gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-3 rounded-lg ${social.bgColor} border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105`}
            >
              <social.icon className={`w-6 h-6 ${social.color}`} />
              <span className="text-xs font-medium text-gray-700">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="text-center mt-auto">
        <p className="text-xs text-gray-500">
          Mode de travail : {contactInfo.workMode}
        </p>
      </div>
    </div>
  );
} 