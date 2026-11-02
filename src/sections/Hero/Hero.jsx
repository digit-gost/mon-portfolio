import Link from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import { ArrowIcon, DownloadIcon } from "@/components/icons";
import { SITE } from "@/data/site";
import HeroAvatar from "./HeroAvatar";
import HeroSocials from "./HeroSocials";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-status">
        <span className="status-light" />
        Disponible pour de nouvelles opportunités
      </div>
      <div className="hero-copy">
        <p className="overline">Portfolio — 2025 / Dakar & Remote</p>
        <Heading level={1}>
          SERIGNE ABDOU
          <br />
          KHADRE MBACKÉ
          <br />
          <span>SANKHARE.</span>
        </Heading>
        <p className="hero-lead">
          Je conçois et développe des produits numériques
          <strong> performants, utiles et mémorables.</strong>
        </p>
        <div className="hero-actions">
          <Link href="#projets" className="primary-button">
            Explorer mes projets <ArrowIcon />
          </Link>
          <Link href="#a-propos" className="secondary-button">
            En savoir plus
          </Link>
          <Link href={`/${SITE.cvFile}`} className="cv-button" download={SITE.cvFile}>
            <DownloadIcon className="download-icon" />
            Télécharger mon CV
          </Link>
        </div>
        <HeroSocials />
      </div>
      <HeroAvatar />
      <div className="hero-rail">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
      <div className="hero-bottom">
        <span>DESIGN THINKING</span>
        <span>FULL-STACK ENGINEERING</span>
        <span>PRODUCT DEVELOPMENT</span>
      </div>
    </section>
  );
}
