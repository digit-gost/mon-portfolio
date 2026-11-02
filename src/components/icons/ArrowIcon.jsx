export default function ArrowIcon({ diagonal = false }) {
  // L'icône doit être dans un parent `group` pour l'effet au survol.
  const motion = diagonal
    ? "[transform:rotate(-45deg)] group-hover:[transform:rotate(-45deg)_translateX(.3rem)]"
    : "group-hover:translate-x-[.3rem]";
  return (
    <svg
      className={`w-[1.1rem] fill-none stroke-current stroke-[1.5] transition-transform duration-200 ${motion}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
