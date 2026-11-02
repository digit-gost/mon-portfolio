import Link from "@/components/ui/Link";
import { SOCIALS } from "@/data/socials";

export default function HeroSocials() {
  return (
    <div className="mt-8 flex items-center gap-[.65rem]">
      <span className="mr-[.35rem] font-mono text-[.62rem] leading-[normal] text-[#c1cee0] uppercase">
        Retrouvez-moi
      </span>
      {SOCIALS.map(({ id, href, label, Icon }) => (
        <Link
          key={id}
          href={href}
          label={label}
          className="grid size-[2.4rem] place-items-center rounded-full border border-line transition duration-220 hover:-translate-y-[3px] hover:rotate-4 hover:border-acid hover:bg-acid hover:text-white"
        >
          <Icon className="size-4" />
        </Link>
      ))}
    </div>
  );
}
