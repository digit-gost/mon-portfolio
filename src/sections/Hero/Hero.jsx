import Link from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import { ArrowIcon, DownloadIcon } from "@/components/icons";
import { SITE } from "@/data/site";
import HeroAvatar from "./HeroAvatar";
import HeroSocials from "./HeroSocials";

const BUTTON =
  "flex min-h-14 items-center justify-center font-mono text-[.66rem] leading-[normal] font-medium uppercase transition duration-220 hover:-translate-y-[3px]";

const SHINE =
  "before:absolute before:-top-[40%] before:-left-16 before:h-[180%] before:w-10 before:rotate-22 before:bg-white/35 before:blur-[.4rem] before:transition-[left] before:duration-500 hover:before:left-[calc(100%+2rem)]";

export default function Hero() {
  return (
    <section className="relative grid min-h-[calc(100svh-5.25rem)] grid-cols-[1.15fr_.85fr] overflow-hidden border-b border-line px-[4vw] pt-16 before:absolute before:top-[10%] before:right-[4%] before:size-152 before:rounded-full before:bg-[linear-gradient(135deg,var(--color-acid),var(--color-iris))] before:opacity-15 before:blur-[8rem] tablet:grid-cols-[1fr_.72fr] phone:min-h-auto phone:grid-cols-1 phone:px-[1.2rem] phone:pt-20">
      <div
        className="absolute inset-0 animate-grid-drift [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:linear-gradient(to_right,black,transparent_85%)] opacity-[.18]"
        aria-hidden="true"
      />
      <div className="absolute top-8 right-[4vw] flex items-center gap-[.7rem] font-mono text-[.64rem] leading-[normal] tracking-[.05em] text-[#d4dfef] uppercase phone:top-[1.8rem] phone:right-auto phone:left-[1.2rem]">
        <span className="size-2 animate-status-pulse rounded-full bg-acid shadow-[0_0_1rem_var(--color-acid)]" />
        Disponible pour de nouvelles opportunités
      </div>
      <div className="relative z-2 animate-hero-enter self-center pt-8 pb-28 phone:pb-12">
        <p className="mb-8 overline font-mono text-[.72rem] leading-[normal] font-medium tracking-[.08em] text-[#8fb2ff] uppercase">
          Portfolio — 2025 / Dakar & Remote
        </p>
        <Heading
          level={1}
          className="m-0 text-[clamp(3.3rem,6.25vw,7.5rem)] leading-[.88] font-semibold tracking-[-.065em] tablet:text-[clamp(3rem,7vw,5.5rem)] phone:text-[clamp(2.65rem,12vw,4.8rem)]"
        >
          SERIGNE ABDOU
          <br />
          KHADRE MBACKÉ
          <br />
          <span className="text-transparent [-webkit-text-stroke:1px_var(--color-ink)]">SANKHARE.</span>
        </Heading>
        <p className="my-10 max-w-148 text-[clamp(1rem,1.45vw,1.35rem)] leading-[1.55] text-[#a6abb5] phone:text-[1rem]">
          Je conçois et développe des produits numériques
          <strong className="font-medium text-ink"> performants, utiles et mémorables.</strong>
        </p>
        <div className="flex items-center gap-[.8rem] phone:flex-col phone:items-stretch">
          <Link
            href="#projets"
            className={`group relative gap-[1.2rem] overflow-hidden bg-[linear-gradient(135deg,#497cff,#65a7ff)] px-[1.4rem] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.22)] hover:shadow-[0_1rem_2.5rem_rgba(79,130,255,.3)] ${BUTTON} ${SHINE}`}
          >
            Explorer mes projets <ArrowIcon />
          </Link>
          <Link
            href="#a-propos"
            className={`relative overflow-hidden border border-[#46546b] bg-[rgba(255,255,255,.015)] px-[1.4rem] hover:border-aqua hover:text-aqua hover:shadow-[0_.8rem_2rem_rgba(78,217,255,.1)] ${BUTTON}`}
          >
            En savoir plus
          </Link>
          <Link
            href={`/${SITE.cvFile}`}
            className={`group gap-[.7rem] border border-[rgba(118,221,255,.45)] bg-[rgba(79,130,255,.08)] px-[1.2rem] text-[#ddecff] hover:border-aqua hover:bg-[rgba(79,130,255,.18)] hover:text-white hover:shadow-[0_.8rem_2rem_rgba(79,130,255,.14)] ${BUTTON}`}
            download={SITE.cvFile}
          >
            <DownloadIcon className="size-4 transition-transform duration-220 group-hover:translate-y-[.18rem]" />
            Télécharger mon CV
          </Link>
        </div>
        <HeroSocials />
      </div>
      <HeroAvatar />
      <div className="absolute top-[45%] left-4 flex items-center gap-4 font-mono text-[.5rem] leading-[normal] font-normal text-muted [writing-mode:vertical-rl] phone:hidden">
        <span>SCROLL TO EXPLORE</span>
        <i className="h-16 w-px bg-acid" />
      </div>
      <div className="absolute inset-x-[4vw] bottom-0 flex h-[3.2rem] items-center justify-between border-t border-line font-mono text-[.62rem] leading-[normal] font-medium tracking-[.08em] text-[#b8c5d8] phone:hidden">
        <span>DESIGN THINKING</span>
        <span>FULL-STACK ENGINEERING</span>
        <span>PRODUCT DEVELOPMENT</span>
      </div>
    </section>
  );
}
