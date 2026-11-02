import { ArrowIcon } from "@/components/icons";
import { SITE } from "@/data/site";
import Field from "./Field";
import MessageField from "./MessageField";

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
    <form
      className="self-center bg-[#10131a] p-10 text-ink shadow-[1.5rem_1.5rem_0_rgba(26,16,77,.3)] phone:p-6 phone:shadow-[.7rem_.7rem_0_rgba(26,16,77,.3)]"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-6 phone:grid-cols-1 phone:gap-0">
        <Field label="Votre nom" name="name" />
        <Field label="Votre email" name="email" type="email" />
      </div>
      <MessageField />
      <button
        type="submit"
        className="group relative flex h-[3.8rem] w-full cursor-pointer items-center justify-between overflow-hidden bg-acid px-[1.2rem] font-mono text-[.66rem] leading-[normal] font-medium text-white uppercase transition duration-220 before:absolute before:-top-[40%] before:-left-16 before:h-[180%] before:w-10 before:rotate-22 before:bg-white/35 before:blur-[.4rem] before:transition-[left] before:duration-500 hover:-translate-y-[3px] hover:shadow-[0_1rem_2rem_rgba(79,130,255,.3)] hover:before:left-[calc(100%+2rem)]"
      >
        <span>Envoyer le message</span>
        <ArrowIcon diagonal />
      </button>
    </form>
  );
}
