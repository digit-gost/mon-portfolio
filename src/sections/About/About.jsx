import Link from "@/components/ui/Link";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/SectionIntro";
import { ArrowIcon } from "@/components/icons";

const STATS = [
  { value: "03+", label: "Années à créer" },
  { value: "12+", label: "Projets construits" },
  { value: "100%", label: "Curiosité technique" },
];

export default function About() {
  return (
    <Section id="a-propos" className="bg-surface">
      <SectionIntro index="01" kicker="À propos" title="ENTRE VISION PRODUIT ET PRÉCISION TECHNIQUE." />
      <div className="ml-[25%] grid grid-cols-2 gap-[4vw] tablet:ml-0 phone:grid-cols-1">
        <div>
          <p className="m-0 text-[clamp(1.8rem,3vw,3.4rem)] leading-[1.15] tracking-[-.04em]">
            Développeur full-stack passionné par les produits numériques qui
            résolvent de vrais problèmes.
          </p>
        </div>
        <div className="pt-[.4rem] [&>p]:mb-6 [&>p]:leading-[1.75] [&>p]:text-[#a8adb7]">
          <p>
            Mon approche combine une compréhension fine des besoins utilisateurs,
            une attention particulière portée à l’interface et une base technique
            pensée pour durer. J’aime transformer une idée complexe en expérience
            simple, fluide et cohérente.
          </p>
          <p>
            Curieux et rigoureux, je travaille sur toute la chaîne de création :
            conception, prototypage, développement front-end, logique back-end,
            données et déploiement.
          </p>
          <Link
            href="#contact"
            className="mt-4 flex w-fit items-center gap-4 border-b border-acid pb-2 font-mono text-[.67rem] leading-[normal] font-medium text-acid uppercase"
          >
            Travaillons ensemble <ArrowIcon />
          </Link>
        </div>
        <div className="col-span-full mt-16 grid grid-cols-3 border-y border-line phone:grid-cols-1">
          {STATS.map(({ value, label }) => (
            <div key={label} className="border-r border-line p-8 last:border-0 phone:border-r-0 phone:border-b">
              <strong className="block font-mono text-[clamp(2.5rem,4vw,4.5rem)] leading-[normal] font-normal tracking-[-.08em] text-acid">
                {value}
              </strong>
              <span className="font-mono text-[.6rem] leading-[normal] text-muted uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
