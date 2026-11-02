export default function MessageField() {
  return (
    <label className="field field--message">
      <span>Parlez-moi du projet</span>
      <textarea name="message" rows={3} required />
    </label>
  );
}
