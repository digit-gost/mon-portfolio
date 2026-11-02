export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`border-b border-line px-[4vw] py-32 phone:px-[1.2rem] phone:py-22 ${className}`.trim()}
    >
      {children}
    </section>
  );
}
