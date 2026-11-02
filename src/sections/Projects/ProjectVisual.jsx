// Classes complètes (pas de concaténation) pour que Tailwind les détecte.
const GLOW = {
  violet: "before:bg-iris",
  cyan: "before:bg-aqua",
  orange: "before:bg-coral",
  green: "before:bg-acid",
};

const LINES = ["", "w-[70%]", "w-[42%]"];

export default function ProjectVisual({ project }) {
  return (
    <div
      className={`relative h-120 overflow-hidden bg-[#11141a] p-6 text-white before:absolute before:top-1/2 before:left-1/2 before:size-72 before:animate-[project-glow_7s_ease-in-out_infinite] before:rounded-full before:opacity-65 before:blur-[3.5rem] before:[transform:translate(-50%,-50%)] phone:h-88 ${GLOW[project.color]}`}
    >
      <span className="absolute top-[1.2rem] left-[1.2rem] z-2 font-mono text-[.63rem] leading-[normal] font-medium tracking-[.08em]">
        PROJECT / {project.number}
      </span>
      <div className="absolute top-[19%] left-[14%] z-2 h-[62%] w-[72%] border border-white/30 bg-[rgba(11,13,18,.82)] shadow-[0_2rem_6rem_rgba(0,0,0,.55)] transition-transform duration-450 [transform:perspective(800px)_rotateX(5deg)_rotateY(-7deg)] group-hover/card:[transform:perspective(800px)_rotateX(0)_rotateY(0)_translateY(-.5rem)]">
        <div className="flex h-[2.2rem] items-center gap-[.35rem] border-b border-white/15 px-[.7rem]">
          <i className="size-[.35rem] rounded-full bg-[#757b86]" />
          <i className="size-[.35rem] rounded-full bg-[#757b86]" />
          <i className="size-[.35rem] rounded-full bg-[#757b86]" />
          <span className="ml-auto font-mono text-[.62rem] leading-[normal] font-normal text-[#c1cbda]">
            sankhare.dev/{project.title.toLowerCase().replace(" ", "-")}
          </span>
        </div>
        <div className="relative grid h-[calc(100%-2.2rem)] place-items-center overflow-hidden">
          <span className="absolute top-4 left-4 font-mono text-[.62rem] leading-[normal] font-medium text-[#d0d8e4] uppercase">
            {project.category}
          </span>
          <strong className="font-mono text-[clamp(4rem,8vw,8rem)] leading-[normal] font-medium text-transparent [-webkit-text-stroke:1px_white]">
            {project.title.slice(0, 2).toUpperCase()}
          </strong>
          <div className="absolute inset-x-4 bottom-4 grid gap-[.35rem]">
            {LINES.map((width) => (
              <i key={width} className={`h-px bg-white/18 ${width}`} />
            ))}
          </div>
        </div>
      </div>
      <span className="absolute right-[1.2rem] bottom-[1.2rem] z-2 font-mono text-[.63rem] leading-[normal] font-medium tracking-[.08em]">
        {project.metric}
      </span>
    </div>
  );
}
