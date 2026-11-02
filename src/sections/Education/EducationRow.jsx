import Heading from "@/components/ui/Heading";

export default function EducationRow({ item, index }) {
  return (
    <article className="education-row">
      <div className="education-row__index">
        <span>EDU</span>
        <strong>0{index + 1}</strong>
      </div>
      <span className="education-row__date">{item.year}</span>
      <div className="education-row__content">
        <Heading level={3}>{item.title}</Heading>
        <strong>{item.place}</strong>
        <p>{item.detail}</p>
      </div>
      <span className="education-row__marker">{`{0${index + 1}}`}</span>
    </article>
  );
}
