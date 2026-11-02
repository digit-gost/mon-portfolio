import Link from "@/components/ui/Link";
import { BracketsIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 grid h-21 grid-cols-[1fr_auto_1fr] items-center border-b border-white/12 bg-[rgba(9,11,16,.82)] px-[4vw] backdrop-blur-[18px] tablet:grid-cols-2 phone:h-18 phone:px-[1.2rem]">
      <Link
        href="#top"
        className="flex w-fit items-center gap-[.8rem] text-[.82rem] font-bold tracking-[.08em]"
        label="Retour en haut"
      >
        <BracketsIcon className="w-8 fill-none stroke-acid stroke-[1.5]" />
        <span>
          {SITE.name}
          <small className="mt-[.2rem] block font-mono text-[.62rem] leading-[normal] font-normal text-muted uppercase">
            {SITE.role}
          </small>
        </span>
      </Link>
      <nav
        className="flex gap-[2.2rem] font-mono text-[.7rem] leading-[normal] text-[#dbe4f2] uppercase tablet:hidden"
        aria-label="Navigation principale"
      >
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="transition-colors duration-200 hover:text-acid">
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href="#contact"
        className="group relative justify-self-end overflow-hidden border border-[#526580] px-4 py-[.72rem] font-mono text-[.68rem] leading-[normal] font-medium uppercase transition duration-200 hover:-translate-y-0.5 hover:bg-acid hover:text-white hover:shadow-[0_.7rem_2rem_rgba(79,130,255,.24)] phone:px-[.8rem] phone:py-[.65rem]"
      >
        Me contacter <span className="ml-2 text-acid group-hover:text-night">↗</span>
      </Link>
    </header>
  );
}
