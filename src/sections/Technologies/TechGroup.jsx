import Heading from "@/components/ui/Heading";
import TechItem from "./TechItem";

const TITLE_SPAN = "font-mono text-[.67rem] leading-[normal] font-medium tracking-[.05em] uppercase";

export default function TechGroup({ group, index }) {
  return (
    <div className="rounded-2xl border border-[rgba(129,167,227,.3)] bg-[rgba(14,27,49,.66)] p-[1.2rem] shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_1.5rem_4rem_rgba(0,4,14,.14)] backdrop-blur-[12px]">
      <div className="grid grid-cols-[3rem_1fr_auto] items-end border-b border-[rgba(129,167,227,.28)] px-[.3rem] pt-[.3rem] pb-[1.2rem] phone:grid-cols-[2rem_1fr]">
        <span className={`${TITLE_SPAN} text-[#8eb2ff]`}>0{index + 1}</span>
        <Heading level={3} className="m-0 text-[1.45rem] font-medium text-[#f6f9ff]">
          {group.group}
        </Heading>
        <span className={`${TITLE_SPAN} text-[#aebed5] phone:hidden`}>{group.count} outils</span>
      </div>
      <div className="grid grid-cols-6 gap-[.65rem] pt-[.8rem] tablet:grid-cols-3 phone:grid-cols-2">
        {group.items.map((item) => (
          <TechItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
