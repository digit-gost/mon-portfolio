import Heading from "@/components/ui/Heading";
import SectionIndex from "./SectionIndex";
import "./SectionIntro.css";

export default function SectionIntro({ index, kicker, title, copy }) {
  return (
    <div className="section-intro">
      <SectionIndex index={index} kicker={kicker} />
      <Heading level={2}>{title}</Heading>
      {copy && <p>{copy}</p>}
    </div>
  );
}
