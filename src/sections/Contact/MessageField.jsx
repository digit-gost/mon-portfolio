import { FIELD, FIELD_INPUT, FIELD_LABEL } from "./Field";

export default function MessageField() {
  return (
    <label className={FIELD}>
      <span className={FIELD_LABEL}>Parlez-moi du projet</span>
      <textarea className={FIELD_INPUT} name="message" rows={3} required />
    </label>
  );
}
