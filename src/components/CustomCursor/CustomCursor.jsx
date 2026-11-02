import { useRef } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useCustomCursor(dotRef, ringRef);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true">
        <svg viewBox="0 0 28 34">
          <defs>
            <linearGradient id="cursorGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d5dce7" />
              <stop offset=".42" stopColor="#9aabc2" />
              <stop offset="1" stopColor="#65758d" />
            </linearGradient>
          </defs>
          <path className="cursor-pointer-shape" d="M2 1.5 25 21l-10.2.8 5.7 9.2-5.2 2.4-5.4-9.3-7.2 7.2L2 1.5Z" />
          <path className="cursor-pointer-detail" d="m6 7 13 11-7.3.5-1.4 1.3L6 7Z" />
        </svg>
      </div>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <i />
      </div>
    </>
  );
}
