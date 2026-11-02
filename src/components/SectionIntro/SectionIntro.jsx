import Heading from "@/components/ui/Heading";
import SectionIndex from "./SectionIndex";

/**
 * En-tête de section. `theme` adapte les couleurs au fond de la section.
 */
const THEMES = {
  default: { kicker: "", title: "", copy: "text-[#b9c6d8]" },
  light: { kicker: "text-[#62666e]", title: "", copy: "text-[#62666e]" },
  stack: { kicker: "", title: "text-[#f8fbff]", copy: "text-[#c6d5e9]" },
};

export default function SectionIntro({ index, kicker, title, copy, theme = "default", className = "" }) {
  const t = THEMES[theme];
  return (
    <div
      className={`mb-24 grid grid-cols-[1fr_2.25fr_1fr] items-start gap-[4vw] tablet:grid-cols-[.7fr_2fr] phone:mb-16 phone:block ${className}`.trim()}
    >
      <SectionIndex index={index} kicker={kicker} kickerClassName={t.kicker} />
      <Heading
        level={2}
        className={`m-0 max-w-[55rem] text-[clamp(2.6rem,4.7vw,5.7rem)] leading-[.96] font-medium tracking-[-.055em] phone:mt-8 phone:text-[clamp(2.4rem,11vw,4rem)] ${t.title}`.trim()}
      >
        {title}
      </Heading>
      {copy && <p className={`m-0 leading-[1.65] tablet:col-[2] phone:mt-6 ${t.copy}`}>{copy}</p>}
    </div>
  );
}
