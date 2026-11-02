import Link from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import TagList from "@/components/TagList";
import { GithubIcon, PreviewIcon } from "@/components/icons";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-heading">
          <div>
            <span>{project.category}</span>
            <Heading level={3}>{project.title}</Heading>
          </div>
          <span className="project-number">/{project.number}</span>
        </div>
        <p>{project.description}</p>
        <TagList tags={project.stack} className="project-stack" />
        <div className="project-actions">
          <Link
            href="https://github.com"
            className="project-action"
            label={`Voir le code de ${project.title} sur GitHub`}
          >
            <GithubIcon className="project-action__icon" />
            <span>Code source</span>
          </Link>
          <Link href="#contact" className="project-action" label={`Voir un aperçu de ${project.title}`}>
            <PreviewIcon className="project-action__icon" />
            <span>Aperçu live</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
