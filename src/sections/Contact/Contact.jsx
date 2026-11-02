import Link from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { SectionIndex } from "@/components/SectionIntro";
import { SITE } from "@/data/site";
import ContactForm from "./ContactForm";

const CONTACT_LINK =
  "inline-block border-b border-white/75 pb-[.3rem] font-mono text-[.72rem] leading-[normal] font-medium transition duration-200 hover:-translate-y-0.5 hover:border-aqua hover:text-[#d9edff]";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-[linear-gradient(135deg,#5b55cf_0%,#3b5bd8_52%,#246fdd_100%)] text-white"
    >
      <div className="grid grid-cols-[1fr_.75fr] gap-[10vw] tablet:gap-[5vw] phone:grid-cols-1 phone:gap-16">
        <div>
          <SectionIndex index="06" kicker="Contact" />
          <Heading
            level={2}
            className="mt-16 mb-8 text-[clamp(3.2rem,5.8vw,7rem)] leading-[.9] font-semibold tracking-[-.065em] phone:mt-12"
          >
            CONSTRUISONS
            <br />
            QUELQUE CHOSE
            <br />
            <span className="text-acid">D’UTILE.</span>
          </Heading>
          <p className="max-w-120 leading-[1.6] text-white/70">
            Une idée, une mission ou simplement envie d’échanger ?
            Écrivez-moi, je réponds rapidement.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-[.8rem]">
            <Link href={`mailto:${SITE.email}`} className={CONTACT_LINK}>
              {SITE.email}
            </Link>
            <Link href={SITE.phoneHref} className={CONTACT_LINK}>
              {SITE.phone}
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
