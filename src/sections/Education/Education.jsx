import Section from "@/components/ui/Section";
import SectionIntro from "@/components/SectionIntro";
import { education } from "@/data/education";
import EducationRow from "./EducationRow";

export default function Education() {
  return (
    <Section
      id="education"
      className="relative overflow-hidden bg-[#0b1220] before:absolute before:-top-48 before:-right-48 before:size-136 before:rounded-full before:bg-acid before:opacity-10 before:blur-[7rem]"
    >
      <SectionIntro
        index="03"
        kicker="Éducation"
        title="APPRENDRE, EXPÉRIMENTER, ÉVOLUER."
        copy="Une formation technique enrichie chaque jour par la veille, l’open source et l’expérimentation."
      />
      <div className="relative ml-[25%] border-t border-[#35445d] tablet:ml-0">
        {education.map((item, index) => (
          <EducationRow key={item.title} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
