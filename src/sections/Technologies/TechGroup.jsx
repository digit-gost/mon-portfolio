import Heading from "@/components/ui/Heading";
import TechItem from "./TechItem";

export default function TechGroup({ group, index }) {
  return (
    <div className="tech-group">
      <div className="tech-group__title">
        <span>0{index + 1}</span>
        <Heading level={3}>{group.group}</Heading>
        <span>{group.count} outils</span>
      </div>
      <div className="tech-list">
        {group.items.map((item) => (
          <TechItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
