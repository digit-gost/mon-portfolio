import Heading from "@/components/ui/Heading";

export default function EducationRow({ item, index }) {
  return (
    <article className="group relative grid min-h-56 grid-cols-[5rem_11rem_1fr_auto] items-start gap-8 border-b border-[#35445d] py-8 transition-[padding-left,background] duration-[280ms] hover:bg-[linear-gradient(90deg,rgba(79,130,255,.1),transparent_78%)] hover:pl-4 tablet:grid-cols-[4rem_9rem_1fr_auto] tablet:gap-[1.2rem] phone:grid-cols-[3rem_1fr_auto] phone:gap-4">
      <div className="grid gap-[.45rem]">
        <span className="font-mono text-[.63rem] leading-[normal] font-medium text-[#8fb2ff]">EDU</span>
        <strong className="font-mono text-[1.6rem] leading-[normal] font-light text-[#53627a]">0{index + 1}</strong>
      </div>
      <span className="font-mono text-[.65rem] leading-[1.6] font-medium text-[#c5d1e2] uppercase phone:col-[2]">
        {item.year}
      </span>
      <div className="phone:col-[2/-1]">
        <Heading level={3} className="mb-2 text-[clamp(1.35rem,2vw,2rem)] font-medium tracking-[-.03em]">
          {item.title}
        </Heading>
        <strong className="font-mono text-[.65rem] leading-[normal] font-medium text-aqua uppercase">
          {item.place}
        </strong>
        <p className="mt-[1.1rem] max-w-152 text-[.86rem] leading-[1.65] text-muted">{item.detail}</p>
      </div>
      <span className="pr-4 font-mono text-[2.2rem] leading-[normal] font-light text-transparent transition duration-250 [-webkit-text-stroke:1px_#3f506d] group-hover:-translate-x-2 group-hover:text-acid phone:col-[3] phone:row-[1] phone:text-[1.3rem]">
        {`{0${index + 1}}`}
      </span>
    </article>
  );
}
