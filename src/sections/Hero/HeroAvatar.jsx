import Avatar from "@/components/Avatar";
import useAvatarInteraction from "@/hooks/useAvatarInteraction";
import "./HeroAvatar.css";

export default function HeroAvatar() {
  const { ref, active, handlers } = useAvatarInteraction();

  return (
    <div
      className={`avatar-wrap${active ? " is-active" : ""}`}
      ref={ref}
      {...handlers}
      role="button"
      tabIndex={0}
      aria-label="Activer l’animation de l’avatar"
    >
      <span className="avatar-label avatar-label--top">PROFILE_01</span>
      <Avatar />
      <span className="avatar-message">
        <i />
        HELLO, WORLD.
      </span>
      <div className="avatar-particles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="avatar-label avatar-label--bottom">CREATIVE / CODE / BUILD</span>
    </div>
  );
}
