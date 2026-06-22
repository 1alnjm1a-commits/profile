import { useParams, useNavigate } from "react-router-dom";
import { projects, projectTechs } from "../../const/sections";
import { useEffect } from "react";

// Components
import ProjectHero from "./components/ProjectHero";
import ProjectSections from "./components/ProjectSections";
import ProjectGallery from "./components/ProjectGallery";
import ProjectCTA from "./components/ProjectCTA";

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[+id];

  useEffect(() => {
    if (!project) {
      navigate("/");
    }
  }, [project, navigate]);

  if (!project) return null;

  const projectData = projectTechs[project.id] || projectTechs[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg)] via-[var(--surface)] to-[var(--bg)]">
      <ProjectHero project={project} projectData={projectData} />
      <ProjectSections
        features={projectData.features}
        tools={projectData.tools}
      />
      <ProjectGallery />
      <ProjectCTA />
    </div>
  );
}
