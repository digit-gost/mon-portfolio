import { DEVICON_BASE_URL } from "@/data/technologies";

// Logos sombres à inverser pour rester lisibles sur fond foncé
const INVERTED = new Set(["Vercel", "GitHub", "Express"]);
const IMG_FILTER = "[filter:saturate(.9)_drop-shadow(0_.25rem_.45rem_rgba(0,0,0,.2))]";
const IMG_FILTER_INVERTED = "[filter:invert(1)_saturate(0)_drop-shadow(0_.25rem_.45rem_rgba(0,0,0,.2))]";

export default function TechItem({ name, icon }) {
  return (
    <div className="group relative flex h-38 flex-col justify-between rounded-[.7rem] border border-[rgba(113,143,190,.24)] bg-[linear-gradient(145deg,rgba(29,48,78,.7),rgba(13,25,45,.7))] p-[1.1rem] transition duration-200 hover:-translate-y-[.3rem] hover:border-[rgba(118,221,255,.62)] hover:bg-[linear-gradient(145deg,rgba(41,67,108,.82),rgba(17,36,65,.82))] hover:shadow-[0_.8rem_2rem_rgba(0,7,20,.25),inset_0_0_1.5rem_rgba(101,148,255,.08)] tablet:nth-4:border-l-line phone:odd:border-l-line">
      <img
        className={`size-12 object-contain transition duration-250 group-hover:-translate-y-[.2rem] group-hover:-rotate-3 ${
          INVERTED.has(name) ? IMG_FILTER_INVERTED : IMG_FILTER
        }`}
        src={`${DEVICON_BASE_URL}/${icon}`}
        alt={`Logo ${name}`}
        loading="lazy"
      />
      <span className="font-mono text-[.72rem] leading-[normal] font-medium text-[#e2eaf6]">{name}</span>
      <i className="absolute top-4 right-4 size-[.35rem] rounded-full bg-[#657795] group-hover:bg-acid group-hover:shadow-[0_0_.6rem_var(--color-acid)]" />
    </div>
  );
}
