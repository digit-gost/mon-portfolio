import Avatar from "@/components/Avatar";
import useAvatarInteraction from "@/hooks/useAvatarInteraction";

const LABEL = "absolute z-2 font-mono text-[.62rem] leading-[normal] font-medium tracking-[.1em] text-[#c0cde0]";

// Positions et délais des 4 particules affichées quand l'avatar est actif.
// (Classes écrites en entier : Tailwind ne détecte pas les noms construits dynamiquement.)
const PARTICLES = [
  "left-[9%] top-[25%] group-[.is-active]/avatar:[animation:avatar-particle_1.8s_ease-in-out_infinite]",
  "right-[7%] top-[43%] group-[.is-active]/avatar:[animation:avatar-particle_1.8s_ease-in-out_.3s_infinite]",
  "left-[18%] bottom-[18%] group-[.is-active]/avatar:[animation:avatar-particle_1.8s_ease-in-out_.6s_infinite]",
  "right-[17%] bottom-[28%] group-[.is-active]/avatar:[animation:avatar-particle_1.8s_ease-in-out_.9s_infinite]",
];

export default function HeroAvatar() {
  const { ref, active, handlers } = useAvatarInteraction();

  return (
    <div
      className={`group/avatar relative z-2 w-[min(42vw,34rem)] origin-bottom animate-avatar-float cursor-crosshair self-end justify-self-center [--look-x:0px] [--look-y:0px] [--tilt-x:0deg] [--tilt-y:0deg] focus-visible:rounded-[45%] focus-visible:outline-1 focus-visible:outline-offset-[.7rem] focus-visible:outline-aqua phone:w-[min(100%,28rem)] ${active ? "is-active" : ""}`}
      ref={ref}
      {...handlers}
      role="button"
      tabIndex={0}
      aria-label="Activer l’animation de l’avatar"
    >
      <span className={`${LABEL} top-[13%] right-0`}>PROFILE_01</span>
      <Avatar />
      <span
        className={`pointer-events-none absolute top-[29%] -right-[10%] z-5 flex -translate-x-[.6rem] scale-90 items-center gap-[.55rem] border border-[rgba(78,217,255,.6)] bg-[rgba(7,10,18,.82)] px-[.8rem] py-[.65rem] font-mono text-[.62rem] leading-[normal] font-medium tracking-[.1em] text-aqua opacity-0 backdrop-blur-[8px] transition duration-250 group-[.is-active]/avatar:translate-x-0 group-[.is-active]/avatar:scale-100 group-[.is-active]/avatar:opacity-100`}
      >
        <i className="size-[.35rem] rounded-full bg-aqua shadow-[0_0_.7rem_var(--color-aqua)]" />
        HELLO, WORLD.
      </span>
      <div className="pointer-events-none absolute inset-x-[2%] top-[8%] bottom-[10%] z-4" aria-hidden="true">
        {PARTICLES.map((classes) => (
          <i
            key={classes}
            className={`absolute size-[.3rem] border border-aqua opacity-0 [transform:rotate(45deg)] ${classes}`}
          />
        ))}
      </div>
      <span className={`${LABEL} bottom-[6%] -left-[5%]`}>CREATIVE / CODE / BUILD</span>
    </div>
  );
}
