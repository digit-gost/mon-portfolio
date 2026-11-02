import Link from "@/components/ui/Link";
import SectionIntro from "@/components/SectionIntro";
import { ArrowIcon } from "@/components/icons";
import "./About.css";

const STATS = [
  { value: "03+", label: "Années à créer" },
  { value: "12+", label: "Projets construits" },
  { value: "100%", label: "Curiosité technique" },
];

export default function About() {
  return (
    <section className="about page-section" id="a-propos">
      <SectionIntro index="01" kicker="À propos" title="ENTRE VISION PRODUIT ET PRÉCISION TECHNIQUE." />
      <div className="about-grid">
        <div className="about-manifesto">
          <p>
            Développeur full-stack passionné par les produits numériques qui
            résolvent de vrais problèmes.
          </p>
        </div>
        <div className="about-body">
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
          <Link href="#contact" className="inline-link">
            Travaillons ensemble <ArrowIcon />
          </Link>
        </div>
        <div className="about-stats">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
