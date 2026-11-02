export default function SectionIndex({ index, kicker, kickerClassName = "" }) {
  return (
    <div className="flex gap-[1.3rem] font-mono text-[.7rem] leading-[normal] font-medium text-[#d1dbea] uppercase">
      <span className="text-acid">[{index}]</span>
      <span className={kickerClassName}>{kicker}</span>
    </div>
  );
}
