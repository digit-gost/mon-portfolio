import "./TagList.css";

export default function TagList({ tags, className = "" }) {
  return (
    <div className={`tag-list ${className}`.trim()}>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
