import Link from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import { SectionIndex } from "@/components/SectionIntro";
import { SITE } from "@/data/site";
import ContactForm from "./ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact page-section" id="contact">
      <div className="contact-grid">
        <div className="contact-copy">
          <SectionIndex index="06" kicker="Contact" />
          <Heading level={2}>
            CONSTRUISONS
            <br />
            QUELQUE CHOSE
            <br />
            <span>D’UTILE.</span>
          </Heading>
          <p>
            Une idée, une mission ou simplement envie d’échanger ?
            Écrivez-moi, je réponds rapidement.
          </p>
          <div className="contact-methods">
            <Link href={`mailto:${SITE.email}`} className="email-link">
              {SITE.email}
            </Link>
            <Link href={SITE.phoneHref} className="phone-link">
              {SITE.phone}
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
