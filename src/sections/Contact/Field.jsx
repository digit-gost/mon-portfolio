export default function Field({ label, name, type = "text" }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} name={name} required />
    </label>
  );
}
