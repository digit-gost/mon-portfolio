import { ArrowIcon } from "@/components/icons";
import { SITE } from "@/data/site";
import Field from "./Field";
import MessageField from "./MessageField";
import "./ContactForm.css";

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Projet — ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nDe : ${data.get("name")}\nEmail : ${data.get("email")}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <Field label="Votre nom" name="name" />
        <Field label="Votre email" name="email" type="email" />
      </div>
      <MessageField />
      <button type="submit" className="submit-button">
        <span>Envoyer le message</span>
        <ArrowIcon diagonal />
      </button>
    </form>
  );
}
