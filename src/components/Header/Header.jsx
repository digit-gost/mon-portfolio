import Link from "@/components/ui/Link";
import { BracketsIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE } from "@/data/site";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="#top" className="brand" label="Retour en haut">
        <BracketsIcon />
        <span>
          {SITE.name}
          <small>{SITE.role}</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Navigation principale">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="#contact" className="header-cta">
        Me contacter <span>↗</span>
      </Link>
    </header>
  );
}
