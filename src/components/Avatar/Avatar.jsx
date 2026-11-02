import "./Avatar.css";

export default function Avatar() {
  return (
    <svg
      className="avatar"
      viewBox="0 0 540 620"
      role="img"
      aria-label="Avatar illustré de Serigne Abdou Khadre Mbacké SANKHARE"
    >
      <path className="avatar-orbit" d="M78 312c0-152 90-244 218-244 121 0 197 82 197 207 0 161-109 284-261 284C126 559 78 462 78 312Z" />
      <g className="avatar-left-arm">
        <path className="avatar-sleeve" d="M176 430c-45 8-75 45-88 99l45 18c15-39 39-59 75-67l-32-50Z" />
        <path className="avatar-hand" d="M88 521c-12 9-18 28-9 42 8 13 28 16 42 8 12-7 18-20 13-33-6-17-29-27-46-17Z" />
        <path className="avatar-hand-line" d="M88 541c12-8 25-6 36 3" />
      </g>
      <g className="avatar-wave-arm">
        <path className="avatar-sleeve" d="M374 464c32-10 48-42 54-85l41 7c-1 58-21 100-62 122l-33-44Z" />
        <path className="avatar-hand" d="M424 390c-5-24-7-62 2-64 9-2 11 27 12 39l2-53c1-10 14-9 15 1l1 49 8-44c2-10 15-7 13 3l-5 45 11-30c4-9 16-4 12 6l-15 49c-6 22-19 34-38 32-15-2-22-17-18-33Z" />
        <path className="avatar-hand-line" d="M438 364l1 28M456 362l-2 31M473 366l-5 29" />
      </g>
      <path className="avatar-hood" d="M98 593c13-138 75-212 177-212 111 0 174 78 184 212H98Z" />
      <path className="avatar-neck" d="M228 344h93v97h-93z" />
      <g className="avatar-head">
        <path className="avatar-ear" d="M169 224c-38-6-47 56-9 75l28-3-4-66-15-6ZM374 224c38-6 47 56 9 75l-28-3 4-66 15-6Z" />
        <path className="avatar-face" d="M182 174c21-57 168-60 188 10l-8 101c-5 63-42 104-88 104-48 0-84-43-89-104l-3-111Z" />
        <path className="avatar-hair" d="M174 232c-15-93 31-151 105-151 76 0 116 57 99 151l-18 11-5-78c-49 20-98 14-149-1l-8 79-24-11Z" />
        <path className="avatar-hair-detail" d="M188 165c36-7 52-27 63-61M220 169c35-11 57-35 65-70M257 165c29-10 48-31 58-61M296 163c21-7 37-22 47-43" />
        <path className="avatar-brow" d="M211 228c16-10 32-10 47-2M294 226c15-8 30-8 44 2" />
        <g className="avatar-eyes">
          <ellipse cx="230" cy="255" rx="17" ry="9" />
          <ellipse cx="319" cy="255" rx="17" ry="9" />
          <g className="avatar-pupils">
            <circle cx="230" cy="255" r="5" />
            <circle cx="319" cy="255" r="5" />
          </g>
        </g>
        <path className="avatar-glasses" d="M196 239c20-6 43-6 67 1l-2 34c-20 10-42 10-60-2l-5-33ZM285 240c23-7 46-7 67-1l-5 33c-18 12-40 12-60 2l-2-34ZM263 247h22" />
        <path className="avatar-glasses-glint" d="M204 246c13-7 28-8 43-3M294 246c13-7 28-8 43-3" />
        <path className="avatar-nose" d="M274 250l-8 51 20 3" />
        <path className="avatar-mouth" d="M245 331c19 12 41 12 61 0" />
      </g>
      <path className="avatar-hood-line" d="M228 409l47 60 46-60M275 469v124" />
      <path className="avatar-accent" d="m146 495 58 21M403 495l-58 21" />
      <circle className="avatar-pin" cx="406" cy="128" r="8" />
      <path className="avatar-scan" d="M57 188h85M402 333h91M420 354h48" />
    </svg>
  );
}
