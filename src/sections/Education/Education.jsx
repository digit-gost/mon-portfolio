import SectionIntro from "@/components/SectionIntro";
import { education } from "@/data/education";
import EducationRow from "./EducationRow";
import "./Education.css";

export default function Education() {
  return (
    <section className="education page-section" id="education">
      <SectionIntro
        index="03"
        kicker="Éducation"
        title="APPRENDRE, EXPÉRIMENTER, ÉVOLUER."
        copy="Une formation technique enrichie chaque jour par la veille, l’open source et l’expérimentation."
      />
      <div className="education-timeline">
        {education.map((item, index) => (
          <EducationRow key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
