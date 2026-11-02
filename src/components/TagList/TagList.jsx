const DARK_TAG = "border-[#3c4d67] text-[#d0d9e7]";

export default function TagList({ tags, tagClassName = DARK_TAG }) {
  return (
    <div className="flex flex-wrap gap-[.4rem]">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`border px-[.66rem] py-[.45rem] font-mono text-[.62rem] leading-[normal] font-medium ${tagClassName}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
