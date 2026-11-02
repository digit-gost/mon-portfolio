import { DEVICON_BASE_URL } from "@/data/technologies";

export default function TechItem({ name, icon }) {
  return (
    <div className="tech-item">
      <img src={`${DEVICON_BASE_URL}/${icon}`} alt={`Logo ${name}`} loading="lazy" />
      <span>{name}</span>
      <i />
    </div>
  );
}
