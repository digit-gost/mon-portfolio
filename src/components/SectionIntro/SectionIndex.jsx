import "./SectionIntro.css";

export default function SectionIndex({ index, kicker }) {
  return (
    <div className="section-index">
      <span>[{index}]</span>
      <span>{kicker}</span>
    </div>
  );
}
