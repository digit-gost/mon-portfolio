import Link from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import TagList from "@/components/TagList";
import { GithubIcon, PreviewIcon } from "@/components/icons";
import ProjectVisual from "./ProjectVisual";

const ACTION =
  "group/action relative isolate flex min-h-[3.2rem] items-center gap-[.7rem] overflow-hidden border border-[#b8b7b1] px-[.9rem] font-mono text-[.65rem] leading-[normal] font-medium uppercase transition duration-240 before:absolute before:inset-0 before:-z-2 before:origin-right before:scale-x-0 before:bg-[linear-gradient(110deg,#111722,#315fc8_58%,#5c9dff)] before:transition-transform before:duration-[380ms] before:ease-[cubic-bezier(.2,.75,.2,1)] after:absolute after:-top-[40%] after:-left-16 after:-z-1 after:h-[180%] after:w-10 after:rotate-18 after:bg-white/34 after:blur-[.35rem] after:transition-[left] after:duration-500 hover:-translate-y-[3px] hover:border-[#315fc8] hover:text-white hover:shadow-[0_.9rem_2rem_rgba(49,95,200,.22)] hover:before:origin-left hover:before:scale-x-100 hover:after:left-[calc(100%+2rem)]";

const ICON = "size-[1.1rem] shrink-0 origin-center";
const LABEL = "transition-transform duration-240 group-hover/action:translate-x-[.15rem]";

export default function ProjectCard({ project }) {
  return (
    <article className="group/card bg-[#e6e4dd] p-6 phone:p-[.8rem]">
      <ProjectVisual project={project} />
      <div className="px-2 pt-8 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[.65rem] leading-[normal] font-medium text-[#555b65] uppercase">
              {project.category}
            </span>
            <Heading
              level={3}
              className="mt-[.35rem] mb-0 text-[clamp(2rem,3vw,3.3rem)] leading-none font-semibold tracking-[-.055em]"
            >
              {project.title}
            </Heading>
          </div>
          <span className="font-mono text-[.7rem] leading-[normal] font-normal text-[#6e7178]">/{project.number}</span>
        </div>
        <p className="my-6 min-h-18 max-w-152 text-[.88rem] leading-[1.6] text-[#5b5e65]">{project.description}</p>
        <TagList tags={project.stack} tagClassName="border-[#b8b7b1] text-[#4a4d53]" />
        <div className="mt-8 grid grid-cols-2 gap-[.6rem] border-t border-[#bbb9b2] pt-4">
          <Link href="https://github.com" className={ACTION} label={`Voir le code de ${project.title} sur GitHub`}>
            <GithubIcon
              className={`${ICON} group-hover/action:animate-[project-action-icon_600ms_cubic-bezier(.2,.8,.2,1)]`}
            />
            <span className={LABEL}>Code source</span>
          </Link>
          <Link href="#contact" className={ACTION} label={`Voir un aperçu de ${project.title}`}>
            <PreviewIcon
              className={`${ICON} group-hover/action:animate-[project-preview-icon_600ms_cubic-bezier(.2,.8,.2,1)]`}
            />
            <span className={LABEL}>Aperçu live</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
