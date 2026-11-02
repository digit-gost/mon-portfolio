import Section from "@/components/ui/Section";
import SectionIntro from "@/components/SectionIntro";
import { experiences } from "@/data/experiences";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  return (
    <Section id="experience" className="bg-night">
      <SectionIntro
        index="02"
        kicker="Expériences"
        title="CONSTRUIRE, COLLABORER, LIVRER."
        copy="Des expériences forgées par la pratique, la résolution de problèmes et la création de produits concrets."
      />
      <div className="grid grid-cols-[.55fr_1.45fr] gap-[8vw] tablet:grid-cols-[.5fr_1.5fr] tablet:gap-[4vw] phone:grid-cols-1 phone:gap-12">
        <div className="sticky top-32 h-fit border-t border-acid py-6 phone:static">
          <span className="font-mono text-[.63rem] leading-[normal] font-normal tracking-[.08em] text-acid">
            EXP_01—03
          </span>
          <p className="mt-8 max-w-76 text-base leading-[1.65] text-muted">
            Une progression continue entre réalisation technique, réflexion
            produit et collaboration.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 border-b border-[#3a404c] pb-4 font-mono text-[.7rem] leading-[normal] font-medium uppercase">
            <span className="grid h-[1.6rem] w-[2.4rem] place-items-center bg-acid text-[.62rem] text-night">EXP</span>
            Expériences professionnelles
          </div>
          <div>
            {experiences.map((item, index) => (
              <TimelineItem key={item.role} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
