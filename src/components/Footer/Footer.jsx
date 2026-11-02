import Link from "@/components/ui/Link";
import { SOCIALS } from "@/data/socials";
import { SITE } from "@/data/site";

const FOOTER_LINK =
  "flex min-h-[2.6rem] items-center gap-[.55rem] border border-line px-[.9rem] transition duration-200 hover:-translate-y-0.5 hover:border-acid hover:text-acid";

export default function Footer() {
  return (
    <footer className="bg-[#050609] px-[4vw] pt-20 pb-8 phone:px-[1.2rem] phone:pt-16">
      <div className="flex items-end justify-between border-b border-line pb-8 phone:block">
        <span className="font-mono text-[.65rem] leading-[normal] font-normal text-acid">S.A.K.M.</span>
        <strong className="text-[clamp(3.5rem,9vw,10rem)] leading-[.75] tracking-[-.08em] phone:mt-8 phone:block phone:text-[16vw]">
          {SITE.name}
        </strong>
      </div>
      <div className="flex gap-[.7rem] pt-8 pb-20 font-mono text-[.64rem] leading-[normal] font-normal uppercase phone:flex-wrap phone:pb-16">
        {SOCIALS.map(({ id, name, href, Icon }) => (
          <Link key={id} href={href} className={FOOTER_LINK}>
            <Icon className="size-[.9rem]" />
            {name}
          </Link>
        ))}
        <Link href="#top" className={FOOTER_LINK}>
          Retour en haut ↑
        </Link>
      </div>
      <div className="flex justify-between font-mono text-[.62rem] leading-[normal] font-medium text-[#9da9bb] uppercase phone:grid phone:gap-[.7rem]">
        <span>© {SITE.year} — Tous droits réservés</span>
        <span>Conçu avec intention, développé avec précision.</span>
      </div>
    </footer>
  );
}
