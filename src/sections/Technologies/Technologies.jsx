import SectionIntro from "@/components/SectionIntro";
import { technologies } from "@/data/technologies";
import TechGroup from "./TechGroup";
import "./Technologies.css";

export default function Technologies() {
  return (
    <section className="stack page-section" id="technologies">
      <SectionIntro
        index="05"
        kicker="Technologies"
        title="MA BOÎTE À OUTILS."
        copy="Je choisis les technologies selon le problème à résoudre, jamais pour suivre une tendance."
      />
      <div className="tech-groups">
        {technologies.map((group, index) => (
          <TechGroup key={group.group} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
