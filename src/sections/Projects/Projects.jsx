import SectionIntro from "@/components/SectionIntro";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="work page-section" id="projets">
      <SectionIntro
        index="04"
        kicker="Projets"
        title="QUELQUES PRODUITS QUE J’AI IMAGINÉS ET CONSTRUITS."
        copy="Des expériences complètes, de la réflexion produit jusqu’au code en production."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
