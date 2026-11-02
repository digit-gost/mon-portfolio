import { useEffect } from "react";

const HOVERABLE_SELECTOR = "a, button, input, textarea, .tech-item, .avatar-wrap";

/**
 * Anime le curseur personnalisé (point + anneau suiveur).
 * Désactivé sur les écrans tactiles et si l'utilisateur préfère réduire les animations.
 */
export default function useCustomCursor(dotRef, ringRef) {
  useEffect(() => {
    const supportsCursor = window.matchMedia("(pointer: fine)").matches;
    const reducesMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsCursor || reducesMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame = 0;

    document.body.classList.add("custom-cursor-enabled");

    const render = () => {
      ringX += (pointerX - ringX) * 0.38;
      ringY += (pointerY - ringY) * 0.38;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    };

    const handleOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      ring.classList.toggle("is-hovering", Boolean(target.closest(HOVERABLE_SELECTOR)));
    };

    const handleDown = () => ring.classList.add("is-pressed");
    const handleUp = () => ring.classList.remove("is-pressed");
    const handleLeave = () => {
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    frame = window.requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [dotRef, ringRef]);
}
