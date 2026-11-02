import Section from "@/components/ui/Section";
import SectionIntro from "@/components/SectionIntro";
import { technologies } from "@/data/technologies";
import TechGroup from "./TechGroup";

export default function Technologies() {
  return (
    <Section
      id="technologies"
      className="relative overflow-hidden [background:radial-gradient(circle_at_92%_5%,rgba(101,148,255,.2),transparent_32%),radial-gradient(circle_at_8%_94%,rgba(118,221,255,.1),transparent_28%),linear-gradient(145deg,#0a1221_0%,#0d1b32_52%,#102542_100%)] before:pointer-events-none before:absolute before:inset-0 before:opacity-[.13] before:[background-image:linear-gradient(rgba(118,221,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(118,221,255,.25)_1px,transparent_1px)] before:[background-size:5rem_5rem] before:[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
    >
      <SectionIntro
        index="05"
        kicker="Technologies"
        title="MA BOÎTE À OUTILS."
        copy="Je choisis les technologies selon le problème à résoudre, jamais pour suivre une tendance."
        theme="stack"
        className="relative z-1"
      />
      <div className="relative z-1 grid gap-8">
        {technologies.map((group, index) => (
          <TechGroup key={group.group} group={group} index={index} />
        ))}
      </div>
    </Section>
  );
}
