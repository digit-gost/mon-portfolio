import "./icons.css";

export default function ArrowIcon({ diagonal = false }) {
  return (
    <svg className={diagonal ? "icon icon--diagonal" : "icon"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
