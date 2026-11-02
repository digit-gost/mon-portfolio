export const FIELD = "mb-8 grid gap-[.7rem]";
export const FIELD_LABEL = "font-mono text-[.65rem] leading-[normal] font-medium text-[#c4cede] uppercase";
export const FIELD_INPUT =
  "w-full resize-y rounded-none border-b border-[#454c58] bg-transparent py-[.6rem] font-sans text-base leading-[normal] font-normal text-white outline-none focus:border-acid";

export default function Field({ label, name, type = "text" }) {
  return (
    <label className={FIELD}>
      <span className={FIELD_LABEL}>{label}</span>
      <input className={FIELD_INPUT} type={type} name={name} required />
    </label>
  );
}
