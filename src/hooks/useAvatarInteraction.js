import { useRef, useState } from "react";

/**
 * Interactions de l'avatar : les yeux/la tête suivent le pointeur (variables CSS)
 * et un clic ou Entrée/Espace active l'animation.
 */
export default function useAvatarInteraction() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const toggle = () => setActive((value) => !value);

  const onPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const style = event.currentTarget.style;
    style.setProperty("--look-x", `${x * 3}px`);
    style.setProperty("--look-y", `${y * 2}px`);
    style.setProperty("--tilt-x", `${y * -2.5}deg`);
    style.setProperty("--tilt-y", `${x * 3}deg`);
  };

  const onPointerLeave = () => {
    const style = ref.current?.style;
    if (!style) return;
    style.setProperty("--look-x", "0px");
    style.setProperty("--look-y", "0px");
    style.setProperty("--tilt-x", "0deg");
    style.setProperty("--tilt-y", "0deg");
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return { ref, active, handlers: { onPointerMove, onPointerLeave, onClick: toggle, onKeyDown } };
}
