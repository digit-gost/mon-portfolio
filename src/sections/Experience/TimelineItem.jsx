import Heading from "@/components/ui/Heading";
import TagList from "@/components/TagList";

export default function TimelineItem({ item, index }) {
  return (
    <article className="timeline-item">
      <span className="timeline-count">0{index + 1}</span>
      <div>
        <span className="timeline-date">{item.date}</span>
        <Heading level={3}>{item.role}</Heading>
        <span className="timeline-place">{item.company}</span>
        <p>{item.description}</p>
        <TagList tags={item.tags} />
      </div>
    </article>
  );
}
