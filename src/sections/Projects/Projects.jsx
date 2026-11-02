import Section from "@/components/ui/Section";
import SectionIntro from "@/components/SectionIntro";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projets" className="bg-[#e6e4dd] text-[#111318]">
      <SectionIntro
        index="04"
        kicker="Projets"
        title="QUELQUES PRODUITS QUE J’AI IMAGINÉS ET CONSTRUITS."
        copy="Des expériences complètes, de la réflexion produit jusqu’au code en production."
        theme="light"
      />
      <div className="grid grid-cols-2 gap-px border border-[#bbb9b2] bg-[#bbb9b2] phone:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
