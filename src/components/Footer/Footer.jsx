import Link from "@/components/ui/Link";
import { SOCIALS } from "@/data/socials";
import { SITE } from "@/data/site";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span>S.A.K.M.</span>
        <strong>{SITE.name}</strong>
      </div>
      <div className="footer-links">
        {SOCIALS.map(({ id, name, href, Icon }) => (
          <Link key={id} href={href}>
            <Icon />
            {name}
          </Link>
        ))}
        <Link href="#top">Retour en haut ↑</Link>
      </div>
      <div className="footer-meta">
        <span>© {SITE.year} — Tous droits réservés</span>
        <span>Conçu avec intention, développé avec précision.</span>
      </div>
    </footer>
  );
}
