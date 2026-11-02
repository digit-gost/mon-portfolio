export default function Link({ href, children, className = "", label, download }) {
  return (
    <a href={href} className={className} aria-label={label} download={download}>
      {children}
    </a>
  );
}
