import SectionIntro from "@/components/SectionIntro";
import { experiences } from "@/data/experiences";
import TimelineItem from "./TimelineItem";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="career experience page-section" id="experience">
      <SectionIntro
        index="02"
        kicker="Expériences"
        title="CONSTRUIRE, COLLABORER, LIVRER."
        copy="Des expériences forgées par la pratique, la résolution de problèmes et la création de produits concrets."
      />
      <div className="experience-layout">
        <div className="experience-aside">
          <span>EXP_01—03</span>
          <p>
            Une progression continue entre réalisation technique, réflexion
            produit et collaboration.
          </p>
        </div>
        <div>
          <div className="column-title">
            <span>EXP</span>Expériences professionnelles
          </div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <TimelineItem key={item.role} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
