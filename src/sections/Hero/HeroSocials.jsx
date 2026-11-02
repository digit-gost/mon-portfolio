import Link from "@/components/ui/Link";
import { SOCIALS } from "@/data/socials";

export default function HeroSocials() {
  return (
    <div className="hero-socials">
      <span>Retrouvez-moi</span>
      {SOCIALS.map(({ id, href, label, Icon }) => (
        <Link key={id} href={href} label={label}>
          <Icon />
        </Link>
      ))}
    </div>
  );
}
