"use client"
import { useState } from "react";
import PresentationMinimal from "@/components/PresentationMinimal";
import PresentationDetails from "@/components/PresentationDetails";
import TechnicalSkillsMinimal from "@/components/TechnicalSkillsMinimal";
import TechnicalSkillsDetails from "@/components/TechnicalSkillsDetails";
import SoftSkillsMinimal from "@/components/SoftSkillsMinimal";
import SoftSkillsDetails from "@/components/SoftSkillsDetails";
import ProjectsMinimal from "@/components/ProjectsMinimal";
import ProjectsDetails from "@/components/ProjectsDetails";
import EducationMinimal from "@/components/EducationMinimal";
import EducationDetails from "@/components/EducationDetails";
import CVMinimal from "@/components/CVMinimal";
import Contact from "@/components/Contact";
import ExperienceMinimal from "@/components/ExperienceMinimal";
import ExperienceDetails from "@/components/ExperienceDetails";

type DetailView = 'presentation' | 'technicalSkills' | 'softSkills' | 'projects' | 'education' | 'experience' | null;

export default function Home() {
  const [detailView, setDetailView] = useState<DetailView>(null);

  const handleOpenDetails = (view: DetailView) => {
    setDetailView(view);
  };

  const handleCloseDetails = () => {
    setDetailView(null);
  };

  // Si on est sur la page projets ou expériences, afficher la page complète
  if (detailView === 'projects' || detailView === 'experience') {
    const fullPageComponents = {
      projects: <ProjectsDetails onClose={handleCloseDetails} />,
      experience: <ExperienceDetails onClose={handleCloseDetails} />
    };
    return fullPageComponents[detailView] || null;
  }

  // Pour les autres vues, afficher les modals
  if (detailView) {
    const detailComponents = {
      presentation: <PresentationDetails onClose={handleCloseDetails} />,
      technicalSkills: <TechnicalSkillsDetails onClose={handleCloseDetails} />,
      softSkills: <SoftSkillsDetails onClose={handleCloseDetails} />,
      education: <EducationDetails onClose={handleCloseDetails} />
    };

    return detailComponents[detailView] || null;
  }

  return (
    <div className="grid grid-cols-6 gap-4 auto-rows-min">
      {/* Présentation - carte principale (hauteur réduite de moitié) */}
      <div className="col-span-2 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <PresentationMinimal onOpenDetails={() => handleOpenDetails('presentation')} />
      </div>

      {/* Compétences Techniques - carte moyenne */}
      <div className="col-span-4 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <TechnicalSkillsMinimal onOpenDetails={() => handleOpenDetails('technicalSkills')} />
      </div>

      {/* Soft Skills - carte moyenne */}
      <div className="col-span-2 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <SoftSkillsMinimal onOpenDetails={() => handleOpenDetails('softSkills')} />
      </div>

      {/* Projets - carte large */}
      <div className="col-span-4 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <ProjectsMinimal onOpenDetails={() => handleOpenDetails('projects')} />
      </div>

      {/* Formation - carte haute */}
      <div className="col-span-2 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <EducationMinimal onOpenDetails={() => handleOpenDetails('education')} />
      </div>

      {/* Experience Professionnelle */}
      <div className="col-span-2 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <ExperienceMinimal onOpenDetails={() => handleOpenDetails('experience')} />
      </div>


      {/* CV - carte avec informations et bouton de téléchargement */}
      <div className="col-span-2 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <CVMinimal />
      </div>

      {/* Contact - carte large (composant original) */}
      <div className="col-span-6 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
        <Contact />
      </div>
    </div>
  );
}
