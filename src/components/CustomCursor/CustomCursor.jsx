import { useRef } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";

// Les états is-visible / is-hovering / is-pressed sont posés par useCustomCursor.
const DOT =
  "pointer-events-none fixed top-0 left-0 z-100 hidden h-4 w-[.82rem] origin-top-left opacity-0 will-change-transform cursor-ok:block [&.is-visible]:opacity-100 [filter:drop-shadow(0_0_.12rem_rgba(139,159,188,.35))] [transition:opacity_120ms_ease,filter_180ms_ease]";

const RING =
  "pointer-events-none fixed top-0 left-0 z-100 mt-[-.225rem] ml-[-.225rem] hidden size-[.45rem] rounded-full border border-[rgba(145,164,192,.34)] opacity-0 shadow-[0_0_.25rem_rgba(101,117,141,.1)] will-change-transform cursor-ok:block [&.is-visible]:opacity-100 [&.is-hovering]:mt-[-.675rem] [&.is-hovering]:ml-[-.675rem] [&.is-hovering]:size-[1.35rem] [&.is-hovering]:border-[rgba(154,171,194,.52)] [&.is-pressed]:mt-[-.35rem]! [&.is-pressed]:ml-[-.35rem]! [&.is-pressed]:size-[.7rem]! [transition:width_160ms_ease,height_160ms_ease,margin_160ms_ease,opacity_120ms_ease,border-color_160ms_ease]";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useCustomCursor(dotRef, ringRef);

  return (
    <>
      <div className={DOT} ref={dotRef} aria-hidden="true">
        <svg className="block size-full overflow-visible" viewBox="0 0 28 34">
          <defs>
            <linearGradient id="cursorGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d5dce7" />
              <stop offset=".42" stopColor="#9aabc2" />
              <stop offset="1" stopColor="#65758d" />
            </linearGradient>
          </defs>
          <path
            className="stroke-[#e5eaf1] stroke-[.9] [fill:url(#cursorGradient)] [stroke-linejoin:round]"
            d="M2 1.5 25 21l-10.2.8 5.7 9.2-5.2 2.4-5.4-9.3-7.2 7.2L2 1.5Z"
          />
        </svg>
      </div>
      <div className={RING} ref={ringRef} aria-hidden="true" />
    </>
  );
}
