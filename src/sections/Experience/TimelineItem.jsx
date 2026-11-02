import Heading from "@/components/ui/Heading";
import TagList from "@/components/TagList";

export default function TimelineItem({ item, index }) {
  return (
    <article className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-10 transition-[padding-left,background] duration-250 hover:bg-[linear-gradient(90deg,rgba(52,120,255,.08),transparent_72%)] hover:pl-4">
      <span className="font-mono text-[.7rem] leading-[normal] font-normal text-[#4f5663]">0{index + 1}</span>
      <div>
        <span className="font-mono text-[.65rem] leading-[normal] font-medium text-[#8fb2ff] uppercase">
          {item.date}
        </span>
        <Heading level={3} className="mt-3 mb-[.35rem] text-[1.35rem] font-medium tracking-[-.02em]">
          {item.role}
        </Heading>
        <span className="font-mono text-[.65rem] leading-[normal] font-normal text-[#d1d4da] uppercase">
          {item.company}
        </span>
        <p className="my-[1.2rem] max-w-152 text-[.87rem] leading-[1.65] text-muted">{item.description}</p>
        <TagList tags={item.tags} />
      </div>
    </article>
  );
}
